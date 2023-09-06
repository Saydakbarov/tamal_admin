import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/header/Header'
import SubCategoryTable2 from '../components/SubCategory2/SubCategoryTable2'

export default function SubCategory2() {
  return (
    <Box>
      <Header/>
      <Typography sx={{ fontSize: "30px", ml: 3, mt: 3 }}>
        SubCategory2
      </Typography>
      <SubCategoryTable2/>
    </Box>
  )
}
