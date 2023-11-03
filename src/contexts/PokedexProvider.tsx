import { useKeycloak } from '@react-keycloak/web'
import { getPokedex } from 'pages/private/pokedex/stores/pokedex.store'
import { PokedexType } from 'pages/private/pokedex/types/pokedex.type'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'
import { useQuery } from 'react-query'

type PokedexContextType = {
  pokedex: PokedexType['pokedex']
  setPokedex: Dispatch<SetStateAction<string[]>>
}
export const PokedexContext = createContext<PokedexContextType>({
  pokedex: [],
  setPokedex: () => [],
})

export const PokedexProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [pokedex, setPokedex] = useState<PokedexType['pokedex']>([])
  const { keycloak } = useKeycloak()

  const { data } = useQuery({
    queryKey: ['pokedex', keycloak.authenticated],
    queryFn: getPokedex,
    enabled: !!keycloak.authenticated,
  })

  useEffect(() => {
    data && setPokedex(data.pokedex)
  }, [data])

  return (
    <PokedexContext.Provider value={{ pokedex, setPokedex }}>
      {children}
    </PokedexContext.Provider>
  )
}
