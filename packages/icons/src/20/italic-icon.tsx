import type { SVGProps } from 'react'

const SvgItalicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.852 4.1H7.5V2.9h6v1.2h-2.444l-.908 11.8H12.5v1.2h-6v-1.2h2.444l.908-11.8Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgItalicIcon
