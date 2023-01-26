import React from 'react'
import { Box, Stack, Typography, InputBase, Button, IconButton, styled } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function TitleBox() {
    const StyledBtn = styled(Button)({
        background: '#f3f3fb',
        paddingTop: '1px',
        paddingBottom: '1px',
    })
    return (
        <>
            <Stack height='100%' width='100%' direction='row' justifyContent='space-between' alignItems='center'>
                <Box height='100%' width='30%' display='flex' justifyContent='flex-start' alignItems='center'>
                    <Typography component='h1' variant='h4' fontWeight='light' color='grey'>Dashboard</Typography>
                </Box>
                <Box height='100%' width='35%' display='flex' justifyContent='flex-end' alignItems='center' borderRadius={2} bgcolor='#ffffff'>
                    <Box height='95%' width='99%' display='flex' justifyContent='center' alignItems='center'>
                        <StyledBtn variant='contained'>
                            <Typography component='subtitle2' variant='subtitle2' textTransform='lowercase' display='flex' justifyContent='center' alignItems='center' color='#737987'><small>filip.justic91@gmail.com</small><CloseIcon fontSize='small' /></Typography>
                        </StyledBtn>
                        <InputBase placeholder='matej.jus |' />
                        <IconButton><SendOutlinedIcon color='success' /></IconButton>
                    </Box>
                </Box>
            </Stack>
        </>
    )
}
