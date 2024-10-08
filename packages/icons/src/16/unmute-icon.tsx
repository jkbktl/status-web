import type { SVGProps } from 'react'

const SvgUnmuteIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.751 12.6 2.325 2.324.848-.848-13-13-.848.848 2.632 2.632a7.813 7.813 0 0 0-.278 1.606c-.047.628-.068.905-.081 1.002a9.158 9.158 0 0 1-.093.495l-.844 4.223-.144.718H4.96a3.1 3.1 0 0 0 6.082 0h.71Zm-1.2-1.2L4.71 5.558a7.7 7.7 0 0 0-.082.694l-.005.064c-.042.556-.065.871-.084 1.011-.02.14-.05.293-.1.544l-.005.023-.701 3.506h6.819Zm1.016-3.506.262 1.308 1.53 1.53-.615-3.073a9.096 9.096 0 0 1-.093-.495 30.07 30.07 0 0 1-.081-1.002c-.133-1.777-.704-2.997-1.587-3.764C10.108 1.636 9.016 1.4 8 1.4c-1.015 0-2.104.235-2.98.994l.852.852C6.446 2.782 7.188 2.6 8 2.6c.845 0 1.614.197 2.196.703.576.5 1.06 1.384 1.177 2.949l.005.064c.042.556.065.871.084 1.011.02.14.05.293.1.544l.005.023Zm-4.91 5.45a1.9 1.9 0 0 1-.46-.744h3.606a1.9 1.9 0 0 1-3.147.744Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgUnmuteIcon
