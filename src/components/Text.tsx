import React from 'react'
import { Text as GlobalText } from 'react-native'
import { useLibraryContext } from '../hooks/useLibraryContext'

type Props = React.ComponentProps<typeof GlobalText> & {
  bold?: boolean
}

const Text: React.FC<Props> = (props) => {
  const { bold, style, ...restOfProps } = props
  const { fonts } = useLibraryContext()

  return (
    <GlobalText
      style={[
        {
          fontFamily: bold ? fonts.bold : fonts.regular,
        },
        style,
      ]}
      {...restOfProps}
    />
  )
}

export default Text
