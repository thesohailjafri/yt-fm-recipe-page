import theme from '@/app/theme'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  )
}
