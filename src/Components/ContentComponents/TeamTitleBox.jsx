import React from 'react'
import { Stack, Typography, Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function TeamTitleBox() {
    return (
        <>
            <Stack height='100%' width='100%' direction='row' justifyContent='space-between' alignItems='center'>
                <Typography component='h4' variant='h6' fontWeight='light' color='grey'>Team Members</Typography>
                <Typography component='body2' variant='body2' display='flex' justifyContent='center' alignItems='center' >Sort by:
                    <Button size='small' variant='text' color='success'>
                        <Typography component='body2' variant='body2' textTransform='capitalize'>Recent</Typography>
                        <KeyboardArrowDownIcon fontSize='small' />
                    </Button>
                </Typography>
            </Stack>
        </>
    )
}
