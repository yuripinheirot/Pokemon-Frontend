import { ReactNode } from 'react'
import { HttpClientProvider } from './HttpClientProvider'
import { ThemeProviderStyle } from './ThemeProvider'
import { ReactQueryProvider } from './QueryProvider'

type Props = {
  children: ReactNode
}

export const AppProviders = ({ children }: Props) => {
  return (
    <HttpClientProvider>
      <ReactQueryProvider>
        <ThemeProviderStyle>{children}</ThemeProviderStyle>
      </ReactQueryProvider>
    </HttpClientProvider>
  )
}
