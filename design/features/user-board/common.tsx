type CustomLabelProps = {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
  fill: string
}

const calculateLuminance = (color: string) => {
  const rgb = parseInt(color.substring(1), 16)
  const r = (rgb >> 16) & 0xff
  const g = (rgb >> 8) & 0xff
  const b = (rgb >> 0) & 0xff

  return 0.299 * r + 0.587 * g + 0.114 * b
}

export const renderLabel = (props: CustomLabelProps) => {
  let { cx, cy, midAngle, innerRadius, outerRadius, percent, fill } = props

  // Avoid rendering label on thin slices (< 5%);
  if (percent * 100 < 5) return null

  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) / 2
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  const textColor = calculateLuminance(fill) > 128 ? '#000' : '#FFF'

  return (
    <text
      x={x}
      y={y}
      fill={textColor}
      className="pointer-events-none select-none text-sm font-medium"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}
