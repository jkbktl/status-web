import { createIcon } from '../lib/create-icon'

const SvgDappsIcon = createIcon(props => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 20 20"
      focusable={false}
      aria-hidden={true}
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M7.499 2.9A2.6 2.6 0 0 0 4.9 5.5v1h1.2v-1a1.4 1.4 0 0 1 1.399-1.4H10.5c1.37 0 2.716.457 3.713 1.399C15.202 6.433 15.9 7.89 15.9 10c0 2.376-.708 3.819-1.674 4.677-.979.87-2.316 1.223-3.726 1.223H7.499A1.4 1.4 0 0 1 6.1 14.5v-1H4.9v1a2.6 2.6 0 0 0 2.599 2.6H10.5c1.59 0 3.253-.397 4.524-1.527C16.308 14.431 17.1 12.623 17.1 10c0-2.391-.802-4.182-2.063-5.374C13.784 3.443 12.129 2.9 10.5 2.9H7.499ZM3.5 10.6h7V9.4h-7v1.2Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgDappsIcon