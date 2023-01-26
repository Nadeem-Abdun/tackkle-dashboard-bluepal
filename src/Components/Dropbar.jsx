import React from 'react'
import { Avatar, Box, Stack, Typography, IconButton } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function Dropbar() {
  return (
    <>
      <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
        <Stack height='80%' width='95%' spacing={0} direction='row' justifyContent='center' alignItems='center'>
          <Box height='100%' display='flex' flex={3} justifyContent='center' alignItems='center' >
            <Avatar alt="Chris" src="https://material-ui.com/static/images/avatar/6.jpg" variant='circular' />
          </Box>
          <Box height='100%' display='flex' flex={6} justifyContent='center' alignItems='center' >
            <Typography component='h1' variant='body2' fontWeight='medium' color='#e7e8ed'>Hello, Chris</Typography>
          </Box>
          <Box height='100%' display='flex' flex={3} justifyContent='center' alignItems='center' >
            <IconButton variant='contained'><KeyboardArrowDownOutlinedIcon sx={{ color: "#edf3ff" }} /></IconButton>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
