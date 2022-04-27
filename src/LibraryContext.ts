import { createContext } from 'react'
import { ImageSourcePropType } from 'react-native'
import { Fonts, LibraryProps, Overrides, TranslationsNonNull } from './types'

export type ContextProps = LibraryProps & {
  fonts: Fonts
  translations: TranslationsNonNull
  overrides: Overrides
  backgroundImageUri?: ImageSourcePropType
}

const LibraryContext = createContext<ContextProps>({
  LottieView: undefined,
  // iOS only
  horizontalStart: true,
  fonts: {},
  overrides: {},
  requiresName: true,
  requiresExpDate: true,
  inputColors: {},
  // @ts-ignore
  translations: {},
})

export default LibraryContext
