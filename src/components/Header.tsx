import styled from 'styled-components'
import { Box, Grid } from '@mui/material'
import { pxToRem } from '@/utils'
import { StyledH1 } from './Typographies'
import { StyledLink } from './StyledLink'

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.appHeaderBackground};
  border-bottom: ${pxToRem(3)} solid ${(props) => props.theme.appDefaultStroke};
  margin-bottom: ${pxToRem(20)};
  color: ${(props) => props.theme.appColor};
  width: 100%;
`
function Header() {
  return (
    <StyledHeader>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: pxToRem(80),
        }}>
        <>
          <Grid
            container spacing={0}
            justifyContent="flex-start"
            marginLeft={pxToRem(64)}
            alignItems="center"
            sx={{ gap: pxToRem(20) }}>
              <StyledH1 >OBSCURE MOUSIKE</StyledH1>
          </Grid>

          <Grid
            container spacing={0}
            justifyContent="flex-end"
            marginRight={pxToRem(64)}

            alignItems="center"
            sx={{ gap: pxToRem(20) }}
          >
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/noticias">Noticias</StyledLink>
            <StyledLink to="/Bandas">Bandas</StyledLink>
            <StyledLink to="/Playlists">Playlists</StyledLink>
          </Grid>
        </>

      </Box>

    </StyledHeader >
  )
}

export default Header
