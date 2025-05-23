'use client'

import React, { useRef, useState, useCallback, useLayoutEffect } from 'react'

interface SplitterProps {
  direction?: 'horizontal' | 'vertical'
  minSizes?: number[] // 0~1 비율 최소값
  maxSizes?: number[] // 0~1 비율 최대값
  initialSizes?: number[] // 0~1 비율 초기값 (합계 1)
  children: React.ReactNode[]
  className?: string
}

export const Splitter = ({
  direction = 'horizontal',
  minSizes = [],
  maxSizes = [],
  initialSizes = [],
  children,
  className = '',
}: SplitterProps) => {
  const isHorizontal = direction === 'horizontal'
  const count = React.Children.count(children)
  const containerRef = useRef<HTMLDivElement>(null)
  // 비율 단위로 크기 관리 (합계 1)
  const [ratios, setRatios] = useState<number[]>(
    initialSizes.length === count ? initialSizes : Array(count).fill(1 / count)
  )
  const dragging = useRef(false)
  const dragIndex = useRef<number | null>(null)
  const dragStartPos = useRef<number>(0)
  const dragStartRatios = useRef<number[]>([])
  const containerSize = useRef<number>(0)

  // Splitter 크기 고정 (부모가 크기 변동 안함을 가정)
  useLayoutEffect(() => {
    if (containerRef.current) {
      containerSize.current = isHorizontal
        ? containerRef.current.offsetWidth
        : containerRef.current.offsetHeight
    }
  }, [isHorizontal])

  const getMin = useCallback((idx: number) => minSizes[idx] ?? 0.05, [minSizes])
  const getMax = useCallback((idx: number) => maxSizes[idx] ?? 1, [maxSizes])

  const onDragStart = (idx: number, e: React.MouseEvent) => {
    dragging.current = true
    dragIndex.current = idx
    dragStartPos.current = isHorizontal ? e.clientX : e.clientY
    dragStartRatios.current = [...ratios]
    if (containerRef.current) {
      containerSize.current = isHorizontal
        ? containerRef.current.offsetWidth
        : containerRef.current.offsetHeight
    }
    window.addEventListener('mousemove', onDrag)
    window.addEventListener('mouseup', onDragEnd)
    e.preventDefault()
  }

  const onDrag = useCallback(
    (e: MouseEvent) => {
      if (!dragging.current || dragIndex.current === null) return
      const deltaPx = (isHorizontal ? e.clientX : e.clientY) - dragStartPos.current
      const size = containerSize.current
      if (!size) return
      const deltaRatio = deltaPx / size
      const idx = dragIndex.current
      let newRatios = [...dragStartRatios.current]
      const total = newRatios[idx] + newRatios[idx + 1]
      // a, b 계산 (최소/최대, 마지막 영역 최소 보장)
      let a = Math.max(
        getMin(idx),
        Math.min(getMax(idx), dragStartRatios.current[idx] + deltaRatio)
      )
      let b = total - a
      // 마지막 영역이 최소 미만이면 제한
      if (idx + 1 === count - 1 && b < getMin(idx + 1)) {
        b = getMin(idx + 1)
        a = total - b
      }
      // a, b가 음수이거나 1을 넘지 않도록 보정
      if (a < getMin(idx)) a = getMin(idx)
      if (b < getMin(idx + 1)) b = getMin(idx + 1)
      if (a > getMax(idx)) a = getMax(idx)
      if (b > getMax(idx + 1)) b = getMax(idx + 1)
      // 전체 합이 1을 넘지 않도록 보정
      const sumExcept = newRatios.reduce(
        (acc, v, i) => (i === idx || i === idx + 1 ? acc : acc + v),
        0
      )
      if (a + b + sumExcept > 1) {
        const over = a + b + sumExcept - 1
        if (deltaRatio > 0) {
          a -= over
        } else {
          b -= over
        }
      }
      newRatios[idx] = a
      newRatios[idx + 1] = b
      setRatios(newRatios)
    },
    [getMin, getMax, isHorizontal, count]
  )

  const onDragEnd = useCallback(() => {
    dragging.current = false
    dragIndex.current = null
    window.removeEventListener('mousemove', onDrag)
    window.removeEventListener('mouseup', onDragEnd)
  }, [onDrag])

  return (
    <div
      ref={containerRef}
      className={`${className} flex ${isHorizontal ? 'flex-row' : 'flex-col'} w-full h-full select-none`}
      style={{ position: 'relative' }}
    >
      {React.Children.map(children, (child, idx) => (
        <React.Fragment key={idx}>
          <div
            style={
              isHorizontal
                ? {
                    width: `${ratios[idx] * 100}%`,
                    minWidth: `${getMin(idx) * 100}%`,
                    maxWidth: `${getMax(idx) * 100}%`,
                    height: '100%',
                    flexBasis: `${ratios[idx] * 100}%`,
                    flexGrow: 0,
                    flexShrink: 0,
                    position: 'relative',
                    transition: dragging.current ? 'none' : 'width 0.15s',
                  }
                : {
                    height: `${ratios[idx] * 100}%`,
                    minHeight: `${getMin(idx) * 100}%`,
                    maxHeight: `${getMax(idx) * 100}%`,
                    width: '100%',
                    flexBasis: `${ratios[idx] * 100}%`,
                    flexGrow: 0,
                    flexShrink: 0,
                    position: 'relative',
                    transition: dragging.current ? 'none' : 'height 0.15s',
                  }
            }
            className="overflow-auto"
          >
            {child}
            {/* 분할선은 각 영역의 오른쪽(수평) 또는 아래(수직)에만 렌더링 */}
            {idx < count - 1 && (
              <div
                className={`bg-gray-200 ${isHorizontal ? 'w-2 cursor-col-resize' : 'h-2 cursor-row-resize'} z-20 hover:bg-gray-400 transition-colors duration-150`}
                style={{
                  userSelect: 'none',
                  position: 'absolute',
                  top: isHorizontal ? 0 : undefined,
                  left: isHorizontal ? undefined : 0,
                  right: isHorizontal ? 0 : 0,
                  bottom: isHorizontal ? 0 : 0,
                  height: isHorizontal ? '100%' : '8px',
                  width: isHorizontal ? '8px' : '100%',
                  zIndex: 20,
                }}
                onMouseDown={e => onDragStart(idx, e)}
              />
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
