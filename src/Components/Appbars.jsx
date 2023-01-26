import React from 'react'
import { Box, IconButton, Stack, Typography, Badge, Button } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import PausePresentationOutlinedIcon from '@mui/icons-material/PausePresentationOutlined';

export default function Appbars() {
  return (
    <>
      <Box height='100%' width='100%'>
        <Stack height='100%' width='100%' direction='row'>
          {/* Left Text Box */}
          <Box height='100%' display='flex' flex={5} justifyContent='space-evenly' alignItems='center'>
            <Typography component='h1' variant='h4' fontWeight='medium' color='#cbccd7' marginX={2}>tackkle</Typography>
            <Button variant='text' size='small'><Typography component='h1' variant='body2' fontWeight='medium' color='#e7e8ed' textTransform='capitalize'>Dashboard</Typography></Button>
            <Button variant='text' size='small'><Typography component='h1' variant='body2' fontWeight='light' color='#c8cde1' textTransform='capitalize'>Project</Typography></Button>
            <Button variant='text' size='small'><Typography component='h1' variant='body2' fontWeight='light' color='#c8cde1' textTransform='capitalize'>Clients</Typography></Button>
            <Button variant='text' size='small'><Typography component='h1' variant='body2' fontWeight='light' color='#c8cde1' textTransform='capitalize'>Invoices</Typography></Button>
          </Box>
          {/* Empty Box */}
          <Box height='100%' display='flex' flex={4}>
          </Box>
          {/* Right Buttons Box */}
          <Box height='100%' display='flex' flex={3} justifyContent='center' alignItems='center' marginRight={1.5}>
            <Stack height='80%' width='95%' spacing={0.5} direction='row'>
              <Box height='100' display='flex' flex={2} justifyContent='center' alignItems='center' bgcolor='#8694b1'>
                <IconButton variant='contained'>
                  <AttachMoneyIcon sx={{ color: "#edf3ff" }} />
                </IconButton>
              </Box>
              <Box height='100' display='flex' flex={8} justifyContent='center' alignItems='center' bgcolor='#f45b93'>
                <Stack height='100%' width='100%' direction='row' justifyContent='space-evenly' alignItems='center'>
                  <IconButton variant='contained'><TimerOutlinedIcon sx={{ color: "#edf3ff" }} /></IconButton>
                  <Typography component='h1' variant='body2' fontWeight='light' color='#c8cde1'>Timer:</Typography>
                  <Typography component='h1' variant='body1' fontWeight='bold' color='#c8cde1'>2:10</Typography>
                  <IconButton variant='contained'><PausePresentationOutlinedIcon sx={{ color: "#edf3ff" }} /></IconButton>
                </Stack>
              </Box>
              <Box height='100' display='flex' flex={2} justifyContent='center' alignItems='center' bgcolor='#8694b1'>
                <IconButton variant='contained'>
                  <Badge badgeContent={4} color="primary">
                    <NotificationsNoneOutlinedIcon sx={{ color: "#edf3ff" }} />
                  </Badge>
                </IconButton>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box >
    </>
  )
}
