import { Box, Stack } from '@mui/material'
import Appbars from './Components/Appbars';
import Content from './Components/Content';
import Dropbar from './Components/Dropbar';
import Timelines from './Components/Timelines';

function App() {
  return (
    <>
      <Box height='100vh' width='100vw' sx={{ display: { xs: 'none', lg: 'block' } }}>
        <Stack direction='row' height='100%' width='100%'>
          {/* Left layout */}
          <Box height='100%' width='85%'>
            {/* Left layout appbar */}
            <Box height='8%' width='100%' bgcolor='#626b88'>
              <Appbars />
            </Box>
            {/* Left layout content */}
            <Box height='92%' width='100%' bgcolor='#ebeffb'>
              <Content />
            </Box>
          </Box>
          {/* Right layout */}
          <Box height='100%' width='15%'>
            {/* Right layout appbar */}
            <Box height='8%' width='100%' bgcolor='#56607b'>
              <Dropbar />
            </Box>
            {/* Right layout content */}
            <Box height='92%' width='100%' bgcolor='#8896b3'>
              <Timelines />
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box height='768px' width='1366px' sx={{ display: { xs: 'block', lg: 'none' } }}>
        <Stack direction='row' height='100%' width='100%'>
          {/* Left layout */}
          <Box height='100%' width='85%'>
            {/* Left layout appbar */}
            <Box height='8%' width='100%' bgcolor='#626b88'>
              <Appbars />
            </Box>
            {/* Left layout content */}
            <Box height='92%' width='100%' bgcolor='#ebeffb'>
              <Content />
            </Box>
          </Box>
          {/* Right layout */}
          <Box height='100%' width='15%'>
            {/* Right layout appbar */}
            <Box height='8%' width='100%' bgcolor='#56607b'>
              <Dropbar />
            </Box>
            {/* Right layout content */}
            <Box height='92%' width='100%' bgcolor='#8896b3'>
              <Timelines />
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default App;
