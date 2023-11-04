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
      sx={boxContainerStyle}
    >
      {children}
    </Box>
  )
}

const boxContainerStyle: SxProps = {
  maxWidth: designConstants.widthPage,
  display: 'flex',
  padding: '24px',
  flexGrow: 1,
}
export default BoxContainer
