import { ReactNode } from 'react'
import { HttpClientProvider } from './HttpClientProvider'
import { ThemeProviderStyle } from './ThemeProvider'

type Props = {
  children: ReactNode
}
export const AppProviders = ({ children }: Props) => {
  return (
    <HttpClientProvider>
      <ThemeProviderStyle>{children}</ThemeProviderStyle>
    </HttpClientProvider>
  )
}
