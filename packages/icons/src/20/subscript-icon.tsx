import type { SVGProps } from 'react'

const SvgSubscriptIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.876 4.5h-1.442L7.488 8.918 4.542 4.5H3.1L6.767 10 3.1 15.5h1.442l2.946-4.418 2.945 4.418h1.443L8.209 10l3.667-5.5Zm1.023 11v-.794a14.942 14.942 0 0 0 1.992-1.614c.647-.626.877-1.099.877-1.741 0-.643-.32-.998-.894-.998-.582 0-.926.372-.926.956 0 .143.016.32.057.515l-1.016-.101a1.902 1.902 0 0 1-.058-.465c0-1.073.763-1.758 1.992-1.758 1.205 0 1.918.65 1.918 1.8 0 .811-.369 1.504-1.164 2.248-.41.38-.844.718-1.41 1.082H16.9v.87h-4Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgSubscriptIcon
