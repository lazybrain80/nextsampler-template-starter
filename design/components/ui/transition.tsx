import { motion } from 'motion/react'

interface TransitionProps {
  children: React.ReactNode
  layout?: boolean
  className?: string
  direction?: 'left' | 'right' | 'up' | 'down' | 'none'
  distance?: number
  durationIn?: number
  durationOut?: number
}

export const Transition = (props: TransitionProps) => {
  const {
    children,
    layout = false,
    className,
    direction = 'none',
    distance = 50,
    durationIn = 0.5,
    durationOut,
  } = props
  const directions = {
    left: { x: -distance },
    right: { x: distance },
    up: { y: -distance },
    down: { y: distance },
    none: { x: 0, y: 0 },
  }
  const animationConfig = {
    in: {
      opacity: 0,
      ...directions[direction],
    },
    animate: {
      opacity: 1,
      ...directions.none,
      transition: {
        type: 'spring',
        duration: durationIn,
      },
    },
    out: {
      opacity: 0,
      ...directions[direction],
      transition: {
        type: 'just',
        duration: durationOut,
      },
    },
  }

  return (
    <motion.div
      layout={layout}
      className={className}
      variants={animationConfig}
      initial="in"
      animate="animate"
      exit="out"
    >
      {children}
    </motion.div >
  )
}
