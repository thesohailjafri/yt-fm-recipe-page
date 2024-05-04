import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  // custom color for scrollbar
  styles: {
    global: {},
  },
  colors: {
    primary: {
      nutmeg: 'hsl(14, 45%, 36%)',
      darkRaspberry: 'hsl(332, 51%, 32%)',
    },
    neutral: {
      roseWhite: 'hsl(330, 100%, 98%)',
      eggshell: 'hsl(30, 54%, 90%)',
      lightGrey: 'hsl(30, 18%, 87%)',
      wengeBrown: 'hsl(30, 10%, 34%)',
      darkCharcoal: 'hsl(24, 5%, 18%)',
    },
  },
  fonts: {
    heading: `'Young Serif', sans-serif`,
    body: `'Outfit', sans-serif`,
  },
})

export default theme
