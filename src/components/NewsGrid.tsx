import { Box, Grid, Typography } from '@mui/material'
import styled from 'styled-components'
import { pxToRem } from '@/utils'

const NewsCard = styled(Box)`
  background-color:${(props) => props.theme.appSkeletonFrom};
  height: ${pxToRem(200)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.appSkeletonTo};
  }
`

const NewsGrid = () => {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{
        padding: '20px',
        borderRadius: '8px'
      }}
    >
      {[...Array(2)].map((_, rowIndex) => (
        <Grid
          container
          item spacing={3}
          justifyContent="center"
          key={rowIndex}>
          {[...Array(2)].map((_, colIndex) => (
            <Grid item xs={12} sm={5} md={3} key={colIndex}>
              <NewsCard>
                <Typography variant="body1">Principais notícias</Typography>
              </NewsCard>
            </Grid>
          ))}
          {[...Array(2)].map((_, colIndex) => (
            <Grid item xs={12} sm={5} md={3} key={colIndex}>
              <NewsCard>
                <Typography variant="body1">Principais Playlists</Typography>
              </NewsCard>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  )
}

export default NewsGrid
