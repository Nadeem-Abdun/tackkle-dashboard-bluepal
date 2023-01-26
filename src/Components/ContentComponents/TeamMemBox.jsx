import React from 'react'
import { Box, Stack, Typography, Avatar, IconButton, AvatarGroup, Divider } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SellIcon from '@mui/icons-material/Sell';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import MenuIcon from '@mui/icons-material/Menu';

export default function TeamMemBox() {
    return (
        <>
            <Stack height='100%' width='100%' direction='column' spacing={0.2} >
                {/* Member-1 */}
                <Box height='33%' width='100%' >
                    <Stack height='100%' width='100%' direction='row'>
                        {/* Empty Box */}
                        <Box height='100%' flex={0.5} display='flex' justifyContent='center' alignItems='center'></Box>
                        {/* Box-1 */}
                        <Box height='100%' flex={2.2}>
                            <Stack height='100%' width='100%' spacing={1.5} direction='row' justifyContent='flex-start' alignItems='center'>
                                <Avatar alt="Mark Spencer" src="https://material-ui.com/static/images/avatar/1.jpg" variant='circular' />
                                <Typography component='body1' variant='body1' textTransform='capitalize' fontWeight='medium'>Mark Spencer</Typography>
                            </Stack>
                        </Box>
                        {/* Box-2 */}
                        <Box height='100%' flex={2.2}>
                            <Stack height='100%' width='100%' spacing={1} direction='row' justifyContent='flex-start' alignItems='center'>
                                <SellIcon color='secondary' fontSize='small' />
                                <Typography component='body2' variant='body2' textTransform='capitalize' fontWeight='medium'>Design, Development</Typography>
                            </Stack>
                        </Box>
                        {/* Box-3 */}
                        <Box height='100%' flex={2.2}>
                            <Stack height='100%' width='100%' spacing={1} direction='row' justifyContent='flex-start' alignItems='center'>
                                <TimerOutlinedIcon color='default' fontSize='small' />
                                <Typography component='body2' variant='body2' textTransform='capitalize' fontWeight='medium' display='flex' justifyContent='center' alignItems='center'>This Week: 1h:12m<KeyboardArrowDownIcon fontSize='small' /></Typography>
                            </Stack>
                        </Box>
                        {/* Box-4 */}
                        <Box height='100%' flex={2.2} display='flex' justifyContent='flex-start' alignItems='center'>
                            <AvatarGroup spacing='small'>
                                <Avatar sx={{ bgcolor: '#19d3bd' }}>G</Avatar>
                                <Avatar sx={{ bgcolor: '#30bfe1' }}>B</Avatar>
                                <Avatar sx={{ bgcolor: '#f55b93' }}>E</Avatar>
                            </AvatarGroup>
                        </Box>
                        {/* Box-5 */}
                        <Box height='100%' flex={0.5} display='flex' justifyContent='center' alignItems='center'>
                            <Box bgcolor='#ebeffb'>
                                <IconButton><MenuIcon sx={{ color: 'grey' }} fontSize='medium' /></IconButton>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
                <Divider/>
                {/* Member-2 */}
                <Box height='33%' width='100%'>
                    <Stack height='100%' width='100%' direction='row'>
                        {/* Empty Box */}
                        <Box height='100%' flex={0.5} display='flex' justifyContent='center' alignItems='center'></Box>
                        {/* Box-1 */}
                        <Box height='100%' flex={2.2}>
                            <Stack height='100%' width='100%' spacing={1.5} direction='row' justifyContent='flex-start' alignItems='center'>
                                <Avatar alt="Mark Spencer" src="https://material-ui.com/static/images/avatar/3.jpg" variant='circular' />
                                <Typography component='body1' variant='body1' textTransform='capitalize' fontWeight='medium'>Rebbeca K.Quinn</Typography>
                            </Stack>
                        </Box>
                        {/* Box-2 */}
                        <Box height='100%' flex={2.2}>
                            <Stack height='100%' width='100%' spacing={1} direction='row' justifyContent='flex-start' alignItems='center'>
                                <SellIcon color='secondary' fontSize='small' />
                                <Typography component='body2' variant='body2' textTransform='capitalize' fontWeight='medium'>Copywriting, Photography</Typography>
                            </Stack>
                        </Box>
                        {/* Box-3 */}
                        <Box height='100%' flex={2.2}>
                            <Stack height='100%' width='100%' spacing={1} direction='row' justifyContent='flex-start' alignItems='center'>
                                <TimerOutlinedIcon color='default' fontSize='small' />
                                <Typography component='body2' variant='body2' textTransform='capitalize' fontWeight='medium' display='flex' justifyContent='center' alignItems='center'>This Week: 9h:25m<KeyboardArrowDownIcon fontSize='small' /></Typography>
                            </Stack>
                        </Box>
                        {/* Box-4 */}
                        <Box height='100%' flex={2.2} display='flex' justifyContent='flex-start' alignItems='center'>
                            <AvatarGroup spacing='small'>
                                <Avatar sx={{ bgcolor: '#b591f3' }}>2</Avatar>
                                <Avatar sx={{ bgcolor: '#31bddf' }}>B</Avatar>
                            </AvatarGroup>
                        </Box>
                        {/* Box-5 */}
                        <Box height='100%' flex={0.5} display='flex' justifyContent='center' alignItems='center'>
                            <Box bgcolor='#ebeffb'>
                                <IconButton><MenuIcon sx={{ color: 'grey' }} fontSize='medium' /></IconButton>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
                <Divider/>
                {/* Member-3 */}
                <Box height='33%' width='100%' >
                    <Stack height='100%' width='100%' direction='row'>
                        {/* Empty Box */}
                        <Box height='100%' flex={0.5} display='flex' justifyContent='center' alignItems='center'></Box>
                        {/* Box-1 */}
                        <Box height='100%' flex={2.2}>
                            <Stack height='100%' width='100%' spacing={1.5} direction='row' justifyContent='flex-start' alignItems='center'>
                                <Avatar alt="Mark Spencer" src="https://material-ui.com/static/images/avatar/2.jpg" variant='circular' />
                                <Typography component='body1' variant='body1' textTransform='capitalize' fontWeight='medium'>Damon Martin</Typography>
                            </Stack>
                        </Box>
                        {/* Box-2 */}
                        <Box height='100%' flex={2.2}>
                            <Stack height='100%' width='100%' spacing={1} direction='row' justifyContent='flex-start' alignItems='center'>
                                <SellIcon color='secondary' fontSize='small' />
                                <Typography component='body2' variant='body2' textTransform='capitalize' fontWeight='medium'>Design, Development</Typography>
                            </Stack>
                        </Box>
                        {/* Box-3 */}
                        <Box height='100%' flex={2.2}>
                            <Stack height='100%' width='100%' spacing={1} direction='row' justifyContent='flex-start' alignItems='center'>
                                <TimerOutlinedIcon color='default' fontSize='small' />
                                <Typography component='body2' variant='body2' textTransform='capitalize' fontWeight='medium' display='flex' justifyContent='center' alignItems='center'>This Week: 10h:33m<KeyboardArrowDownIcon fontSize='small' /></Typography>
                            </Stack>
                        </Box>
                        {/* Box-4 */}
                        <Box height='100%' flex={2.2} display='flex' justifyContent='flex-start' alignItems='center'>
                            <AvatarGroup spacing='small'>
                                <Avatar sx={{ bgcolor: '#f1c723' }}>S</Avatar>
                            </AvatarGroup>
                        </Box>
                        {/* Box-5 */}
                        <Box height='100%' flex={0.5} display='flex' justifyContent='center' alignItems='center'>
                            <Box bgcolor='#ebeffb'>
                                <IconButton><MenuIcon sx={{ color: 'grey' }} fontSize='medium' /></IconButton>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}
