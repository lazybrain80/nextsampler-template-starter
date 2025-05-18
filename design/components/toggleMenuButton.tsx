import { type ForwardedRef, forwardRef } from 'react'

import { Button } from '@/design/components'
import { Menu } from '@/design/icons'

/**
 * A toggle button to show/hide component in small screen.
 * @component
 * @params props - Component props.
 * @params props.onClick - Function to run when the button is clicked.
 */
const ToggleMenuButtonInternal = (
  props: {
    onClick?: () => void
  },
  ref?: ForwardedRef<HTMLButtonElement>,
) => (
  <Button
    className='p-2 focus-visible:ring-offset-0'
    variant='ghost'
    ref={ref}
    {...props}
  >
    <Menu />
  </Button>
)

const ToggleMenuButton = forwardRef(ToggleMenuButtonInternal)

export { ToggleMenuButton }
