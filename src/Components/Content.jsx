import React from 'react'
import { Box, Stack } from '@mui/material'
import TeamMemBox from './ContentComponents/TeamMemBox';
import CountersBox from './ContentComponents/CountersBox';
import TitleBox from './ContentComponents/TitleBox';
import TeamTitleBox from './ContentComponents/TeamTitleBox';
import InfoGraphBox from './ContentComponents/InfoGraphBox';

export default function Content() {
    return (
        <>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ebeffb'>
                <Box height='97%' width='90%' marginX='auto' marginTop='1.5%' marginBottom='1.5%' bgcolor='#ebeffb'>
                    <Stack height='100%' width='100%' direction='column' spacing={1}>
                        {/* TitleBox */}
                        <Box height='6%' width='100%'>
                            <TitleBox />
                        </Box>
                        {/* CounterBox */}
                        <Box height='14.5%' width='100%' bgcolor='#ffffff'>
                            <CountersBox />
                        </Box>
                        {/* Team Members Title Box */}
                        <Box height='4%' width='100%'>
                            <TeamTitleBox/>
                        </Box>
                        {/* Team Members Box */}
                        <Box height='30.5%' width='100%' bgcolor='#ffffff'>
                            <TeamMemBox />
                        </Box>
                        {/* Infographics */}
                        <Box height='45%' width='100%' bgcolor='#ffffff'>
                            <InfoGraphBox/>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}
