import type { SVGProps } from 'react'

const SvgPinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    viewBox="0 0 12 12"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <g clipPath="url(#prefix__clip0_3143_855)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.24 3.872c.437-.755.785-1.31 1.094-1.708.312-.4.549-.592.746-.679.176-.077.376-.094.679-.01.322.09.723.285 1.273.602 1.14.659 1.486 1.032 1.547 1.446.033.223-.005.53-.184 1-.178.467-.477 1.047-.91 1.8L8.44 6.4l-.018.087-.481 2.35L2.334 5.6 4.13 4.01l.067-.06.045-.077Zm4.342-2.747C8.022.8 7.52.545 7.054.416 6.571.281 6.102.275 5.638.478c-.441.194-.814.552-1.172 1.01-.347.446-.713 1.032-1.133 1.757l-2.3 2.039-.57.506.66.381 3.013 1.74L2.5 10.5h1.25l1.261-2.084 3.04 1.755.662.382.153-.748.616-3.01c.418-.73.738-1.347.941-1.881.21-.552.316-1.064.244-1.551-.148-1.006-1.004-1.615-2.085-2.238Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_3143_855">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgPinIcon