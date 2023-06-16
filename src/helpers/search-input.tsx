import { Search } from '@mui/icons-material';
import {
  Autocomplete,
  Box,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { blue, yellow } from '@mui/material/colors';
import { Flex } from '.';
import { top100Films } from '../common/moks';

const SearchInput = () => {
  const theme = createTheme({});
  return (
    <Autocomplete
      options={top100Films}
      sx={{ width: { xs: 270, xl: 350 } }}
      renderInput={(params) => (
        <ThemeProvider theme={theme}>
          <TextField
            {...params}
            label={
              <Flex>
                <Search sx={{ color: blue[700] }} />{' '}
                <Box sx={{ color: blue[700], ml: 1 }}>пошук</Box>
              </Flex>
            }
            placeholder='Введіть або виберіть назву товару'
            size='small'
            sx={{
              bgcolor: yellow[200],
              borderRadius: 5,
              '& fieldset': {
                border: 'none',
              },
            }}
          />
        </ThemeProvider>
      )}
    />
  );
};

export default SearchInput;
