import { createIcon } from '../lib/create-icon'

const SvgToggleIcon = createIcon(props => {
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
        d="M4.1 6c0-.625.035-1.032.138-1.324.087-.248.229-.426.53-.577.337-.168.873-.3 1.743-.385C7.37 3.631 8.504 3.6 10 3.6c1.496 0 2.629.031 3.49.114.87.084 1.405.217 1.742.385.301.151.443.329.53.577.103.292.138.7.138 1.324 0 .625-.035 1.032-.138 1.324-.087.248-.229.426-.53.577-.337.168-.873.3-1.743.385-.86.083-1.993.114-3.49.114-1.495 0-2.628-.031-3.488-.114-.87-.084-1.406-.217-1.743-.385-.301-.151-.443-.329-.53-.577C4.135 7.032 4.1 6.624 4.1 6ZM10 2.4c-1.504 0-2.684.031-3.605.12-.911.088-1.625.237-2.163.506-.574.287-.932.702-1.126 1.25C2.928 4.783 2.9 5.376 2.9 6s.028 1.218.206 1.723c.194.549.552.965 1.126 1.251.538.27 1.252.418 2.163.506.921.089 2.101.12 3.605.12s2.684-.031 3.604-.12c.912-.088 1.626-.237 2.164-.506.574-.286.932-.702 1.126-1.25.178-.506.206-1.099.206-1.724s-.028-1.218-.206-1.723c-.194-.549-.552-.964-1.126-1.251-.538-.27-1.252-.418-2.164-.506-.92-.089-2.1-.12-3.604-.12ZM6.5 4.25c-.297 0-.564.016-.79.067-.233.054-.46.153-.636.348a1.224 1.224 0 0 0-.283.635c-.035.21-.041.45-.041.7 0 .25.006.491.041.7.036.214.11.444.283.635.176.195.403.294.636.348.226.052.493.067.79.067.297 0 .564-.015.79-.067.233-.054.46-.153.636-.348.173-.191.247-.42.283-.635.035-.209.041-.45.041-.7 0-.25-.006-.49-.041-.7a1.224 1.224 0 0 0-.283-.635 1.183 1.183 0 0 0-.636-.348 3.636 3.636 0 0 0-.79-.067Zm6.21 8.067a3.62 3.62 0 0 1 .79-.067c.297 0 .564.015.79.067.233.054.46.153.636.348.173.192.247.42.283.635.035.21.041.45.041.7 0 .25-.006.491-.041.7-.036.214-.11.444-.283.635a1.183 1.183 0 0 1-.636.348 3.64 3.64 0 0 1-.79.067 3.62 3.62 0 0 1-.79-.067 1.183 1.183 0 0 1-.636-.348 1.225 1.225 0 0 1-.283-.635 4.357 4.357 0 0 1-.041-.7c0-.25.006-.49.041-.7.036-.214.11-.443.283-.635.176-.195.403-.294.636-.348ZM4.1 14c0-.625.035-1.032.138-1.324.087-.248.229-.426.53-.577.337-.168.873-.3 1.743-.385.86-.083 1.993-.114 3.489-.114 1.496 0 2.629.031 3.49.114.87.084 1.405.217 1.742.385.301.151.443.329.53.577.103.292.138.7.138 1.324 0 .625-.035 1.032-.138 1.324-.087.248-.229.426-.53.577-.337.168-.873.3-1.743.385-.86.083-1.993.114-3.49.114-1.495 0-2.628-.031-3.488-.114-.87-.084-1.406-.217-1.743-.385-.301-.151-.443-.329-.53-.577-.103-.292-.138-.7-.138-1.324Zm5.9-3.6c-1.504 0-2.684.031-3.605.12-.911.088-1.625.237-2.163.506-.574.287-.932.702-1.126 1.25-.178.506-.206 1.099-.206 1.724s.028 1.218.206 1.723c.194.549.552.964 1.126 1.251.538.27 1.252.418 2.163.506.921.089 2.101.12 3.605.12s2.684-.031 3.604-.12c.912-.088 1.626-.237 2.164-.506.573-.287.932-.702 1.126-1.25.178-.506.206-1.099.206-1.724s-.028-1.218-.206-1.723c-.194-.549-.552-.964-1.126-1.251-.538-.27-1.252-.418-2.164-.506-.92-.089-2.1-.12-3.604-.12Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgToggleIcon
