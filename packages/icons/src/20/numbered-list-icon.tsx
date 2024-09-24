import type { SVGProps } from 'react'

const SvgNumberedListIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 4.4h9v1.2h-9V4.4Zm0 5h9v1.2h-9V9.4Zm9 5h-9v1.2h9v-1.2Z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.799 4.115V6.5h.805V3.025h-.655c-.14.38-.38.54-.8.555h-.095v.725h.14c.24 0 .475-.065.605-.19ZM3.678 10.91v.59h2.62v-.64h-1.52c.35-.195.635-.39.865-.59.42-.375.625-.77.625-1.235 0-.69-.47-1.085-1.27-1.085-.815 0-1.325.42-1.325 1.07 0 .085.01.18.03.27l.82.08c-.02-.105-.035-.2-.035-.285 0-.31.175-.5.47-.5.29 0 .45.18.45.51 0 .34-.135.6-.475.915-.305.285-.735.585-1.255.9Zm2.663 4.62c0 .64-.53 1.045-1.355 1.045-.835 0-1.36-.435-1.37-1.13l.815-.075c.005.365.22.585.56.585.33 0 .505-.175.505-.48s-.195-.465-.6-.465h-.19v-.55h.18c.355 0 .535-.165.535-.46 0-.28-.17-.44-.465-.44-.325 0-.51.225-.51.61l-.795-.105c0-.68.525-1.115 1.345-1.115.8 0 1.255.35 1.255.955 0 .39-.28.7-.695.795.51.075.785.36.785.83Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgNumberedListIcon