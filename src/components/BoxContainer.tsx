import { Box, SxProps } from '@mui/material'
import { designConstants } from 'constants/design.constants'
import React from 'react'

type Props = {
  children: React.ReactNode
  id: string
}

const BoxContainer = ({ children, id }: Props) => {
  return (
    <Box
      id={id}
      sx={pokedexContainerStyle}
    >
      {children}
    </Box>
  )
}

const pokedexContainerStyle: SxProps = {
  maxWidth: designConstants.maxWidthPage,
  marginY: 4,
}
export default BoxContainer
