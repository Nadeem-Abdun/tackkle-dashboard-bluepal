import React from 'react'
import { Box, Stack, Divider, Typography } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

export default function CountersBox() {
    return (
        <>
            <Stack height='100%' width='100%' direction='row' justifyContent='center' alignItems='center'>
                <Box height='85%' width='20%' display='flex' justifyContent='center' alignItems='center'>
                    <Stack height='100%' width='60%' direction='column' spacing={0.5}>
                        <Typography component='h4' variant='h5' fontWeight='medium' color='grey' display='flex' justifyContent='flex-start' alignItems='center' ><BookmarkBorderIcon fontSize='medium' color='secondary' />5</Typography>
                        <Typography component='body2' variant='body2' textTransform='uppercase' fontWeight='medium'>Open Invoices</Typography>
                    </Stack>
                </Box>
                <Divider orientation='vertical' flexItem={true} />
                <Box height='85%' width='20%' display='flex' justifyContent='center' alignItems='center'>
                    <Stack height='100%' width='65%' direction='column' spacing={0.5}>
                        <Typography component='h4' variant='h5' fontWeight='medium' color='grey' display='flex' justifyContent='flex-start' alignItems='center' ><AttachMoneyIcon fontSize='medium' color='success' />14,215</Typography>
                        <Typography component='body2' variant='body2' textTransform='uppercase' fontWeight='medium'>Invoices Amount</Typography>
                    </Stack>
                </Box>
                <Divider orientation='vertical' flexItem={true} />
                <Box height='85%' width='20%' display='flex' justifyContent='center' alignItems='center'>
                    <Stack height='100%' width='65%' direction='column' spacing={0.5}>
                        <Typography component='h4' variant='h5' fontWeight='medium' color='grey' display='flex' justifyContent='flex-start' alignItems='center' ><AttachMoneyIcon fontSize='medium' color='error' />10,215</Typography>
                        <Typography component='body2' variant='body2' textTransform='uppercase' fontWeight='medium'>Amount Overdue</Typography>
                    </Stack>
                </Box>
                <Divider orientation='vertical' flexItem={true} />
                <Box height='85%' width='20%' display='flex' justifyContent='center' alignItems='center'>
                    <Stack height='100%' width='55%' direction='column' spacing={0.5}>
                        <Typography component='h4' variant='h5' fontWeight='medium' color='grey' display='flex' justifyContent='flex-start' alignItems='center' ><AccessTimeIcon fontSize='medium' color='success' />19</Typography>
                        <Typography component='body2' variant='body2' textTransform='uppercase' fontWeight='medium'>Hours Tracked</Typography>
                    </Stack>
                </Box>
                <Divider orientation='vertical' flexItem={true} />
                <Box height='85%' width='20%' display='flex' justifyContent='center' alignItems='center'>
                    <Stack height='100%' width='55%' direction='column' spacing={0.5}>
                        <Typography component='h4' variant='h5' fontWeight='medium' color='grey' display='flex' justifyContent='flex-start' alignItems='center' >
                            <AddToPhotosIcon fontSize='medium' color='warning' />8</Typography>
                        <Typography component='body2' variant='body2' textTransform='uppercase' fontWeight='medium'>Open Projects</Typography>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}
