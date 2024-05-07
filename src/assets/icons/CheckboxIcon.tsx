import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgCheckboxIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 15 15'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      clipRule={'nonzero'}
      d={
        'M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 0 1-.944.12l-2.75-2.5a.625.625 0 0 1 .841-.925l2.208 2.007 3.849-5.886a.625.625 0 0 1 .865-.181'
      }
      fill={'currentColor'}
      fillRule={'nonzero'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCheckboxIcon)
const Memo = memo(ForwardRef)

export default Memo
