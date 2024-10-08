import type { SVGProps } from 'react'

const SvgVolumeMinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.6 2.5V1.334l-.949.678L5.307 4.4c-.675.005-1.249.038-1.728.126-.525.097-.987.267-1.349.584-.37.324-.576.747-.689 1.228-.11.469-.14 1.026-.14 1.661s.03 1.192.14 1.661c.113.481.318.904.689 1.228.362.317.824.488 1.35.584.478.088 1.052.121 1.727.126l3.344 2.39.95.677V2.5ZM5.85 5.488 8.4 3.666v8.668L5.85 10.512l-.157-.112H5.5c-.74 0-1.29-.031-1.704-.107-.412-.076-.638-.186-.776-.307-.13-.113-.236-.284-.31-.6C2.631 9.058 2.6 8.615 2.6 8c0-.615.032-1.058.11-1.386.074-.316.18-.487.31-.6.138-.12.364-.231.776-.307.414-.075.963-.107 1.704-.107h.192l.157-.112Zm4.727.815a2.4 2.4 0 0 1 0 3.394l.848.849a3.6 3.6 0 0 0 0-5.092l-.848.849Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgVolumeMinIcon
