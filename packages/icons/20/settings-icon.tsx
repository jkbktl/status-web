import { Path, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgSettingsIcon = (props: SvgProps) => {
  const { color: colorToken = 'currentColor', ...rest } = props
  const color = useCurrentColor(colorToken)
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <Path
        d="m6.877 4.876-.483.435.361.4.46-.28-.338-.555Zm1.708-.708.153.632.524-.127-.028-.539-.649.034Zm-2.02.426.33-.56-.33.56Zm-.95-.034-.288-.583.288.583Zm-.565.49.46.46-.46-.46Zm-.49.565.582.288-.582-.288Zm.034.95.56-.33-.56.33Zm.282.312.555.339.28-.46-.4-.362-.435.483Zm-.708 1.708-.034.65.539.027.127-.524-.632-.153Zm-.42.021-.163-.629.163.63Zm-.695.648.615.208-.615-.208Zm0 1.492-.616.208.616-.208Zm.695.648.164-.63-.164.63Zm.42.02.632-.152-.127-.524-.539.028.034.649Zm.708 1.71.435.482.4-.361-.28-.46-.555.338Zm-.282.311-.56-.33.56.33Zm-.034.95-.583.289.583-.289Zm.49.565.46-.46-.46.46Zm.565.49-.288.583.288-.583Zm.95-.034-.33-.56.33.56Zm.312-.282.339-.555-.46-.28-.362.4.483.435Zm1.708.708.65.034.027-.539-.524-.127-.153.632Zm.021.42-.629.163.63-.163Zm.648.695.208-.615-.208.615Zm1.492 0-.208-.615.208.615Zm.648-.695-.63-.164.63.164Zm.02-.42-.152-.632-.524.127.028.539.649-.034Zm1.71-.708.482-.436-.361-.4-.46.281.338.555Zm.311.282.33-.56-.33.56Zm.95.034.289.583-.289-.583Zm1.055-1.055-.582-.288.582.288Zm-.034-.95-.56.33.56-.33Zm-.282-.312-.555-.338-.28.46.4.36.435-.482Zm.708-1.708.034-.65-.539-.027-.127.524.632.153Zm.42-.021-.164-.63.164.63Zm.695-.648-.615-.208.615.208Zm0-1.492-.615.208.615-.208Zm-.695-.648.163-.629-.163.63Zm-.42-.02-.632.152.127.524.539-.028-.034-.649Zm-.708-1.71-.435-.482-.4.361.28.46.555-.338Zm.282-.311-.56-.33.56.33Zm.034-.95.583-.288-.583.288Zm-.49-.565.46-.46-.46.46Zm-.565-.49.289-.583-.289.583Zm-.95.034.33.56-.33-.56Zm-.312.282-.338.555.46.28.36-.4-.482-.435Zm-1.708-.708-.65-.034-.027.539.524.127.153-.632Zm-.021-.42-.63.164.63-.164Zm-.648-.695-.208.615.208-.615Zm-1.492 0-.208-.616.208.616Zm-.648.695-.629-.163.63.163Zm-1.39 1.683c.465-.285.977-.5 1.522-.631l-.305-1.264a6.614 6.614 0 0 0-1.895.785l.678 1.11Zm-.98-.277c-.002 0 .008.004.034.028.028.026.066.065.124.13l.965-.871a2.01 2.01 0 0 0-.465-.408l-.658 1.121Zm-.333-.012a.35.35 0 0 1 .333.012l.658-1.12a1.65 1.65 0 0 0-1.567-.057l.576 1.165Zm-.393.368a8.65 8.65 0 0 1 .305-.297c.068-.062.09-.071.088-.07l-.576-1.166c-.268.133-.496.373-.736.614l.919.919Zm-.368.393c0 .002.01-.02.07-.088.064-.071.154-.16.298-.305l-.92-.92c-.24.24-.48.47-.613.737l1.165.576Zm.012.333a.35.35 0 0 1-.012-.333l-1.165-.576a1.65 1.65 0 0 0 .056 1.567l1.121-.658Zm.157.158a1.988 1.988 0 0 1-.129-.124c-.024-.026-.029-.036-.028-.034l-1.12.658c.11.188.262.335.407.465l.87-.965ZM4.8 8.738a5.315 5.315 0 0 1 .63-1.522l-1.109-.678a6.615 6.615 0 0 0-.785 1.895l1.264.305Zm-.888.497a1.978 1.978 0 0 1 .223 0L4.2 7.935a2.009 2.009 0 0 0-.616.041l.327 1.258Zm-.244.227a.35.35 0 0 1 .244-.227l-.327-1.258a1.65 1.65 0 0 0-1.148 1.069l1.231.416ZM3.65 10c0-.204 0-.33.006-.426.005-.092.013-.114.012-.112l-1.231-.416c-.096.283-.087.614-.087.954h1.3Zm.018.538c.001.002-.007-.02-.012-.112A8.657 8.657 0 0 1 3.65 10h-1.3c0 .34-.009.671.087.954l1.231-.416Zm.244.227a.35.35 0 0 1-.244-.227l-1.231.416c.178.527.61.929 1.148 1.069l.327-1.258Zm.222 0a2.016 2.016 0 0 1-.178.004c-.036-.002-.046-.005-.044-.004l-.327 1.258c.21.055.421.05.616.04l-.067-1.297Zm1.297 2.02a5.315 5.315 0 0 1-.631-1.523l-1.264.305c.164.679.432 1.316.785 1.895l1.11-.678Zm-.277.98s.004-.009.028-.035c.026-.028.065-.066.13-.124l-.871-.965c-.145.13-.297.277-.408.465l1.121.658Zm-.012.332a.35.35 0 0 1 .012-.333l-1.12-.658a1.65 1.65 0 0 0-.057 1.568l1.165-.577Zm.368.393a8.7 8.7 0 0 1-.297-.305c-.062-.069-.071-.09-.07-.088l-1.166.577c.133.267.373.495.614.735l.919-.919Zm.393.367c.002.001-.02-.008-.088-.07a8.65 8.65 0 0 1-.305-.297l-.92.92c.24.24.47.48.737.613l.576-1.165Zm.333-.011a.35.35 0 0 1-.333.011l-.576 1.166a1.65 1.65 0 0 0 1.567-.056l-.658-1.121Zm.158-.157a1.995 1.995 0 0 1-.124.129c-.026.024-.036.029-.034.028l.658 1.12a2.01 2.01 0 0 0 .465-.407l-.965-.87Zm2.344.511a5.312 5.312 0 0 1-1.522-.63l-.678 1.109a6.617 6.617 0 0 0 1.895.785l.305-1.264Zm.497.888a1.979 1.979 0 0 1 0-.223L7.935 15.8c-.01.195-.014.405.041.616l1.258-.327Zm.227.244a.35.35 0 0 1-.227-.244l-1.258.327c.14.539.542.97 1.069 1.148l.416-1.231Zm.538.018c-.204 0-.33 0-.426-.006-.092-.005-.114-.013-.112-.012l-.416 1.231c.283.096.614.087.954.087v-1.3Zm.538-.018c.002-.001-.02.007-.112.012a8.542 8.542 0 0 1-.426.006v1.3c.34 0 .671.009.954-.087l-.416-1.231Zm.227-.244a.35.35 0 0 1-.227.244l.416 1.231a1.65 1.65 0 0 0 1.069-1.148l-1.258-.327Zm0-.223c.005.087.006.142.004.18-.002.035-.005.045-.004.043l1.258.327c.055-.21.05-.421.04-.616l-1.297.067Zm2.02-1.296c-.466.285-.978.5-1.523.631l.305 1.264a6.616 6.616 0 0 0 1.895-.785l-.678-1.11Zm.98.277s-.009-.005-.035-.028a1.973 1.973 0 0 1-.124-.13l-.965.871c.13.145.277.297.465.408l.658-1.121Zm.332.011a.35.35 0 0 1-.333-.011l-.658 1.12a1.65 1.65 0 0 0 1.568.057l-.577-1.165Zm.393-.367a8.69 8.69 0 0 1-.305.297c-.069.062-.09.071-.088.07l.577 1.166c.267-.133.495-.373.735-.614l-.919-.919Zm.367-.393c.001-.002-.008.02-.07.088a8.69 8.69 0 0 1-.297.305l.92.92c.24-.24.48-.47.613-.736l-1.165-.577Zm-.011-.333a.35.35 0 0 1 .011.333l1.166.577a1.65 1.65 0 0 0-.056-1.568l-1.121.658Zm-.157-.158c.064.058.103.096.129.124.024.026.029.036.028.034l1.12-.658a2.013 2.013 0 0 0-.407-.465l-.87.965Zm.511-2.344a5.313 5.313 0 0 1-.63 1.522l1.109.678a6.616 6.616 0 0 0 .785-1.895l-1.264-.305Zm.888-.497a2.017 2.017 0 0 1-.223 0l-.066 1.299c.195.01.405.014.616-.041l-.327-1.258Zm.244-.227a.35.35 0 0 1-.244.227l.327 1.258a1.65 1.65 0 0 0 1.148-1.069l-1.231-.416ZM16.35 10c0 .204 0 .33-.006.426-.005.092-.013.114-.012.112l1.231.416c.096-.283.087-.614.087-.954h-1.3Zm-.018-.538c-.001-.002.007.02.012.112.006.096.006.222.006.426h1.3c0-.34.009-.671-.087-.954l-1.231.416Zm-.244-.227a.35.35 0 0 1 .244.227l1.231-.416a1.65 1.65 0 0 0-1.148-1.069l-.327 1.258Zm-.223 0c.087-.005.142-.006.18-.004.035.002.045.005.043.004l.327-1.258a2.009 2.009 0 0 0-.616-.04l.067 1.297Zm-1.296-2.02c.285.466.5.978.631 1.523l1.264-.305a6.617 6.617 0 0 0-.785-1.895l-1.11.678Zm.277-.98s-.005.009-.028.035a1.995 1.995 0 0 1-.13.124l.871.965a2.01 2.01 0 0 0 .408-.465l-1.121-.658Zm.011-.332a.35.35 0 0 1-.011.333l1.12.658a1.65 1.65 0 0 0 .057-1.567l-1.165.576Zm-.367-.393c.144.144.234.234.297.305.062.068.071.09.07.088l1.166-.576c-.133-.268-.373-.496-.614-.736l-.919.919Zm-.393-.368c-.002 0 .02.01.088.07a8.7 8.7 0 0 1 .305.298l.92-.92c-.24-.24-.47-.48-.736-.613l-.577 1.165Zm-.333.012a.35.35 0 0 1 .333-.012l.577-1.165a1.65 1.65 0 0 0-1.568.056l.658 1.121Zm-.158.157c.058-.064.096-.103.124-.129.026-.024.036-.029.034-.028l-.658-1.12c-.188.11-.335.262-.465.407l.965.87ZM11.262 4.8a5.315 5.315 0 0 1 1.522.63l.678-1.109a6.614 6.614 0 0 0-1.895-.785L11.262 4.8Zm-.497-.888a2.016 2.016 0 0 1 0 .223l1.299.066c.01-.195.014-.405-.041-.616l-1.258.327Zm-.227-.244a.35.35 0 0 1 .227.244l1.258-.327a1.65 1.65 0 0 0-1.069-1.148l-.416 1.231ZM10 3.65c.204 0 .33 0 .426.006.092.005.114.013.112.012l.416-1.231c-.283-.096-.614-.087-.954-.087v1.3Zm-.538.018c-.002.001.02-.007.112-.012.096-.006.222-.006.426-.006v-1.3c-.34 0-.671-.009-.954.087l.416 1.231Zm-.227.244a.35.35 0 0 1 .227-.244l-.416-1.231a1.65 1.65 0 0 0-1.069 1.148l1.258.327Zm0 .222a1.978 1.978 0 0 1-.004-.178c.002-.036.005-.046.004-.044l-1.258-.327c-.055.21-.05.421-.04.616l1.297-.067ZM11.85 10A1.85 1.85 0 0 1 10 11.85v1.3A3.15 3.15 0 0 0 13.15 10h-1.3ZM10 8.15A1.85 1.85 0 0 1 11.85 10h1.3A3.15 3.15 0 0 0 10 6.85v1.3ZM8.15 10A1.85 1.85 0 0 1 10 8.15v-1.3A3.15 3.15 0 0 0 6.85 10h1.3ZM10 11.85A1.85 1.85 0 0 1 8.15 10h-1.3A3.15 3.15 0 0 0 10 13.15v-1.3Z"
        fill={color}
      />
    </Svg>
  )
}
export default SvgSettingsIcon