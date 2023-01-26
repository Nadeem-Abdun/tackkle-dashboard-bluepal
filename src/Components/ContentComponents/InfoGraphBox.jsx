import React from 'react'
import { Box, Stack, Avatar, Typography, Button, Divider } from '@mui/material'
import { List, ListItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TackkleChart from './Tackkle_chart.jpg'

export default function InfoGraphBox() {
    return (
        <>
            <Stack height='100%' width='100%' direction='row' spacing={1} bgcolor='#ebeffb'>
                <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                    <Stack height='100%' width='97%' direction='column' spacing={0} >
                        {/* Tasks Heading */}
                        <Box height='10%' width='100%' mt={0.5} ml={0.5}>
                            <Stack height='100%' width='100%' direction='row' justifyContent='space-between' alignItems='center'>
                                <Typography component='body2' variant='body2' fontWeight='light' color='grey'>Top Tasks:</Typography>
                                <Typography component='body2' variant='body2' display='flex' justifyContent='center' alignItems='center' ><Button size='small' variant='text' color='success'>
                                    <Typography component='body2' variant='body2' textTransform='capitalize'>15 Days</Typography>
                                    <KeyboardArrowDownIcon fontSize='small' />
                                </Button>
                                </Typography>
                            </Stack>
                        </Box>
                        {/* Tasks Chart */}
                        <Box height='65%' width='100%'>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <Box component="img" height='169px' alt="PieChart" src={TackkleChart} />
                            </Box>
                        </Box>
                        <Box height='25%' width='100%'>
                            <Box height='95%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                                <Stack height='100%' width='100%' direction='column' alignItems='center'>
                                    <Stack height='33%' width='100%' direction='row' spacing={1} justifyContent='flex-start' alignItems='center' marginLeft={3}>
                                        <Box height='90%' width='5%' bgcolor='#b591f5'></Box>
                                        <Typography component='body2' variant='body2' fontWeight='light'>Redesigning Tackkle  -</Typography>
                                        <Typography component='body2' variant='body2' fontWeight='medium'>$4,750.00</Typography>
                                    </Stack>
                                    <Stack height='33%' width='100%' direction='row' spacing={1} justifyContent='flex-start' alignItems='center' marginLeft={3}>
                                        <Box height='90%' width='5%' bgcolor='#30bfe1'></Box>
                                        <Typography component='body2' variant='body2' fontWeight='light'>Copywriting Nike Email  -</Typography>
                                        <Typography component='body2' variant='body2' fontWeight='medium'>$3,750.00</Typography>
                                    </Stack>
                                    <Stack height='33%' width='100%' direction='row' spacing={1} justifyContent='flex-start' alignItems='center' marginLeft={3}>
                                        <Box height='90%' width='5%' bgcolor='#f55a94'></Box>
                                        <Typography component='body2' variant='body2' fontWeight='light'>Developing Red Bull  -</Typography>
                                        <Typography component='body2' variant='body2' fontWeight='medium'>$2,000.00</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
                {/* Client Stats List Box */}
                <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                    <Stack height='100%' width='97%' direction='column' spacing={0}>
                        {/* Client Stats Heading */}
                        <Box height='10%' width='100%' mt={0.5} ml={0.5}>
                            <Stack height='100%' width='100%' direction='row' justifyContent='space-between' alignItems='center'>
                                <Typography component='body2' variant='body2' fontWeight='light' color='grey'>Client Stats:</Typography>
                                <Typography component='body2' variant='body2' display='flex' justifyContent='center' alignItems='center' ><Button size='small' variant='text' color='success'>
                                    <Typography component='body2' variant='body2' textTransform='capitalize'>All Time</Typography>
                                    <KeyboardArrowDownIcon fontSize='small' />
                                </Button>
                                </Typography>
                            </Stack>
                        </Box>
                        {/* Client Stats List */}
                        <Box height='88%' width='100%'>
                            <List sx={{ width: '100%', maxHeight: '95%', maxWidth: '100%', bgcolor: 'background.paper', position: 'relative', overflow: 'hidden', }}>
                                <ListItem>
                                    <Stack height='100%' width='100%' direction='row' display='flex' justifyContent='space-between' alignItems='center'>
                                        <Stack direction='row' alignItems='center'>
                                            <Avatar sx={{ bgcolor: '#f65b94', marginRight: '5px' }}>L</Avatar>
                                            <Typography component='body2' variant='body2' fontWeight='bold'>Lyn Emps</Typography>
                                        </Stack>
                                        <Stack spacing={1} direction='row' justifyContent='flex-start' alignItems='center'>
                                            <CheckCircleOutlineIcon color='success' fontSize='small' />
                                            <Typography component='body2' variant='body2'>$4,750.00</Typography>
                                        </Stack>
                                    </Stack>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Stack height='100%' width='100%' direction='row' display='flex' justifyContent='space-between' alignItems='center'>
                                        <Stack direction='row' alignItems='center'>
                                            <Avatar sx={{ bgcolor: '#b591f5', marginRight: '5px' }}>S</Avatar>
                                            <Typography component='body2' variant='body2' fontWeight='bold'>Some Company</Typography>
                                        </Stack>
                                        <Stack spacing={1} direction='row' justifyContent='flex-start' alignItems='center'>
                                            <ErrorOutlineIcon color='error' fontSize='small' />
                                            <Typography component='body2' variant='body2'>$2,155.00</Typography>
                                        </Stack>
                                    </Stack>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Stack height='100%' width='100%' direction='row' display='flex' justifyContent='space-between' alignItems='center'>
                                        <Stack direction='row' alignItems='center'>
                                            <Avatar sx={{ bgcolor: '#2cc1df', marginRight: '5px' }}>N</Avatar>
                                            <Typography component='body2' variant='body2' fontWeight='bold'>Nike</Typography>
                                        </Stack>
                                        <Stack spacing={1} direction='row' justifyContent='flex-start' alignItems='center'>
                                            <ErrorOutlineIcon color='error' fontSize='small' />
                                            <Typography component='body2' variant='body2'>$9,000.00</Typography>
                                        </Stack>
                                    </Stack>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Stack height='100%' width='100%' direction='row' display='flex' justifyContent='space-between' alignItems='center'>
                                        <Stack direction='row' alignItems='center'>
                                            <Avatar sx={{ bgcolor: '#b38ff5', marginRight: '5px' }}>Z</Avatar>
                                            <Typography component='body2' variant='body2' fontWeight='bold'>Zonda P.LTD</Typography>
                                        </Stack>
                                        <Stack spacing={1} direction='row' justifyContent='flex-start' alignItems='center'>
                                            <CheckCircleOutlineIcon color='success' fontSize='small' />
                                            <Typography component='body2' variant='body2'>$662.00</Typography>
                                        </Stack>
                                    </Stack>
                                </ListItem>
                                <Divider />

                            </List>
                        </Box>
                    </Stack>
                </Box>
                {/* Logged Hours List Box */}
                <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                    <Stack height='97%' width='97%' direction='column' spacing={0.5}>
                        {/* Logged Hours Heading */}
                        <Box height='10%' width='100%' ml={0.5}>
                            <Stack height='100%' width='100%' direction='row' justifyContent='space-between' alignItems='center'>
                                <Typography component='body2' variant='body2' fontWeight='light' color='grey'>Logged Hours:</Typography>
                                <Typography component='body2' variant='body2' display='flex' justifyContent='center' alignItems='center' >         <Button size='small' variant='text' color='success'>
                                    <Typography component='body2' variant='body2' textTransform='capitalize'>This week</Typography>
                                    <KeyboardArrowDownIcon fontSize='small' />
                                </Button>
                                </Typography>
                            </Stack>
                        </Box>
                        {/* Logged Hours List */}
                        <Box height='76%' width='100%'>
                            <List sx={{ width: '100%', maxHeight: '95%', maxWidth: '100%', bgcolor: 'background.paper', position: 'relative', overflow: 'auto', }}>
                                <ListItem>
                                    <Stack height='100%' width='100%' direction='row' display='flex' justifyContent='space-between' alignItems='center'>
                                        <Stack direction='row' alignItems='center'>
                                            <Avatar sx={{ bgcolor: '#f25a92', marginRight: '5px' }}>L</Avatar>
                                            <Typography component='body2' variant='body2' fontWeight='bold'>
                                                Design:
                                            </Typography>
                                            <Typography component='body2' variant='body2' fontWeight='light' color='grey'>Project Mana...</Typography>
                                        </Stack>
                                        <Stack direction='row' alignItems='center'>
                                            <Typography component='body2' variant='body2'>01h:45m</Typography>
                                        </Stack>
                                    </Stack>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Stack height='100%' width='100%' direction='row' display='flex' justifyContent='space-between' alignItems='center'>
                                        <Stack direction='row' alignItems='center'>
                                            <Avatar sx={{ bgcolor: '#32bfe2', marginRight: '5px' }}>N</Avatar>
                                            <Typography component='body2' variant='body2' fontWeight='bold'>
                                                Copy writing:
                                            </Typography>
                                            <Typography component='body2' variant='body2' fontWeight='light' color='grey'>Nike....</Typography>
                                        </Stack>
                                        <Stack direction='row' alignItems='center'>
                                            <Typography component='body2' variant='body2'>06h:23m</Typography>
                                        </Stack>
                                    </Stack>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Stack height='100%' width='100%' direction='row' display='flex' justifyContent='space-between' alignItems='center'>
                                        <Stack direction='row' alignItems='center'>
                                            <Avatar sx={{ bgcolor: '#f25a92', marginRight: '5px' }}>L</Avatar>
                                            <Typography component='body2' variant='body2' fontWeight='bold'>
                                                Design:
                                            </Typography>
                                            <Typography component='body2' variant='body2' fontWeight='light' color='grey'>Project Mana...</Typography>
                                        </Stack>
                                        <Stack direction='row' alignItems='center'>
                                            <Typography component='body2' variant='body2'>01h:30m</Typography>
                                        </Stack>
                                    </Stack>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Stack height='100%' width='100%' direction='row' display='flex' justifyContent='space-between' alignItems='center'>
                                        <Stack direction='row' alignItems='center'>
                                            <Avatar sx={{ bgcolor: '#f25a92', marginRight: '5px' }}>L</Avatar>
                                            <Typography component='body2' variant='body2' fontWeight='bold'>
                                                Design:
                                            </Typography>
                                            <Typography component='body2' variant='body2' fontWeight='light' color='grey'>Project Mana...</Typography>
                                        </Stack>
                                        <Stack direction='row' alignItems='center'>
                                            <Typography component='body2' variant='body2'>00h:23m</Typography>
                                        </Stack>
                                    </Stack>
                                </ListItem>
                            </List>
                        </Box>
                        {/* Logged Hours Footer */}
                        <Box height='14%' width='100%' bgcolor='grey' display='flex' justifyContent='center' alignItems='center' borderRadius={1}>
                            <Stack height='97%' width='95%' direction='row' justifyContent='space-between' alignItems='center' mt={0.5}>
                                <Typography component='body2' variant='body2' fontWeight='medium' color='white' >Total:</Typography>
                                <Typography component='body2' variant='body2' fontWeight='bold' color='white'>21:55:14</Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}
