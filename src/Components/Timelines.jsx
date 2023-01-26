import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent } from '@mui/lab'
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import EmailIcon from '@mui/icons-material/Email';
import ErrorIcon from '@mui/icons-material/Error';

export default function Timelines() {
  return (
    <>
      <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
        <Stack height='95%' width='88%' direction='column' justifyContent='center' alignItems='flex-start' >
          {/* Title Box */}
          <Box height='7%' width='100%' display='flex' justifyContent='flex-start' alignItems='center'>
            <Typography component='h5' variant='body1' fontWeight='medium' color='#e7e8ed' marginLeft={1}>Recent Activity</Typography>
          </Box>
          {/* Stepper Box */}
          <Box height='93%' width='100%'>
            <Timeline>
              {/* Item-1 */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <FiberManualRecordIcon sx={{ color: '#6a7591' }} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ paddingX:'0px' }}>
                  <Box height='57px' width='95px' display='flex' justifyContent='center' alignItems='center' >
                    <Box height='30%' width='100%' borderRadius={2} display='flex' justifyContent='center' alignItems='center' bgcolor='#6a7591'><Typography component='body1' variant='body1' fontSize='small' color='white' >12, APR</Typography></Box>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              {/* Item-2 */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <PauseCircleIcon sx={{ color: '#bea1f1' }} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ paddingX:'0px' }}>
                  <Box height='80px' width='95px' display='flex' justifyContent='center' alignItems='center'>
                    <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                    <Typography component='body2' variant='body2' fontSize='small' fontWeight='bold' color='white' ><small>Stopped Timer for Ux & Ui Redesign</small></Typography>
                    <Typography component='body2' variant='body2' fontSize='small' fontWeight='light' color='white' ><small>12 min ago</small></Typography>
                    </Stack>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              {/* Item-3 */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <PlayCircleIcon sx={{ color: '#19d2ba' }} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ paddingX:'0px' }}>
                  <Box height='80px' width='95px' display='flex' justifyContent='center' alignItems='center'>
                    <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                    <Typography component='body2' variant='body2' fontSize='small' fontWeight='bold' color='white' ><small>Started Timer for Ux & Ui Redesign</small></Typography>
                    <Typography component='body2' variant='body2' fontSize='small' fontWeight='light' color='white' ><small>12 min ago</small></Typography>
                    </Stack>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              {/* Item-4 */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <EmailIcon sx={{ color: '#b8c2da' }} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ paddingX:'0px' }}>
                  <Box height='80px' width='95px' display='flex' justifyContent='center' alignItems='center'>
                    <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                    <Typography component='body2' variant='body2' fontSize='small' fontWeight='bold' color='white' ><small>Sent Invoice to Filip Justic</small></Typography>
                    <Typography component='body2' variant='body2' fontSize='small' fontWeight='light' color='white' ><small>12 min ago</small></Typography>
                    </Stack>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              {/* Item-5 */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <FiberManualRecordIcon sx={{ color: '#6a7591' }} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ paddingX:'0px' }}>
                  <Box height='57px' width='95px' display='flex' justifyContent='center' alignItems='center' >
                    <Box height='30%' width='100%' borderRadius={2} display='flex' justifyContent='center' alignItems='center' bgcolor='#6a7591'><Typography component='body1' variant='body1' fontSize='small' color='white' >11, APR</Typography></Box>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              {/* Item-6 */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <ErrorIcon sx={{ color: '#f45b93' }} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ paddingX:'0px' }}>
                  <Box height='80px' width='95px' display='flex' justifyContent='center' alignItems='center'>
                    <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                    <Typography component='body2' variant='body2' fontSize='small' fontWeight='bold' color='white' ><small>Invoice for NIKE Ltd. is overdue 51 days!</small></Typography>
                    <Typography component='body2' variant='body2' fontSize='small' fontWeight='light' color='white' ><small>12 min ago</small></Typography>
                    </Stack>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
