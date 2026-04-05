import React from 'react'
import Navbar from '../components/Navbar'
import NewsSourceName from '../components/NewsSourceName'
import { Box, Container } from '@mui/material'

function Home() {
  return (
    <Box>
      <Navbar />
      
      <Container maxWidth={false} sx={{ maxWidth: "900px" }}>
        <NewsSourceName />
      </Container>
    </Box>

  )
}

export default Home