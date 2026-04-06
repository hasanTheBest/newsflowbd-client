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

      <Container maxWidth={false} sx={{ maxWidth: "990px" }}>
        <NewsSourceName />
      </Container>
      <Container maxWidth={false} sx={{ maxWidth: "1200px" }}>
        <Box
          mt={7}
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={3}
        >
          {dummyNews.map((news, index) => (
            <Box sx={{
              gridColumn: {
                xs: "span 12", // full width
                sm: "span 6",  // 2 per row
                md: "span 4",  // 3 per row
                lg: "span 3",  // 4 per row
              },
              display: "flex",
            }}>
              <NewsCard  {...news} />
            </Box>
          ))}

        </Box>
      </Container>


    </Box>

  )
}

export default Home