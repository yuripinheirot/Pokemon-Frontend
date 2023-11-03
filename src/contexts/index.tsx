import { ReactNode } from 'react'
import { HttpClientProvider } from './HttpClientProvider'
import { ThemeProviderStyle } from './ThemeProvider'
import { ReactQueryProvider } from './QueryProvider'
import { PokedexProvider } from './PokedexProvider'

type Props = {
  children: ReactNode
}

export const AppProviders = ({ children }: Props) => {
  return (
    <HttpClientProvider>
      <ReactQueryProvider>
        <PokedexProvider>
          <ThemeProviderStyle>{children}</ThemeProviderStyle>
        </PokedexProvider>
      </ReactQueryProvider>
    </HttpClientProvider>
  )
}
