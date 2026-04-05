import React from 'react'
import Navbar from '../components/Navbar'
import NewsSourceName from '../components/NewsSourceName'
import { Box, Container } from '@mui/material'
import NewsCard from '../components/NewsCard'
import dummyNews from "../assets/dummyNews.json"

function Home() {
  return (
    <Box>
      <Navbar />

      <Container maxWidth={false} sx={{ maxWidth: "900px" }}>
        <NewsSourceName />

        <Box
          mt={5}
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          gap={2}
        >
          {dummyNews.map((news, index) => (
            // <NewsGridItem
            //   key={index}
            //   newsIndex={index}
            // >
            <NewsCard  {...news} />
            // </NewsGridItem>
          ))}

        </Box>
      </Container>


    </Box>

  )
}

export default Home