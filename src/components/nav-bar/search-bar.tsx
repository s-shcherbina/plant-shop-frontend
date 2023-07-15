import { FC, useState } from 'react';
import {
  AppBar,
  Box,
  Typography,
  Badge,
  IconButton,
  ClickAwayListener,
  Button,
} from '@mui/material';
import {
  Grass,
  Phone,
  ShoppingBasket,
  Search,
  Telegram,
  WhatsApp,
} from '@mui/icons-material';
import { blue, yellow } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { Between, Flex } from '../../helpers';
import SearchInput from '../../helpers/search-input';

const SearchBar: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchVisible, setSearchVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  return (
    <AppBar
      position='static'
      sx={{ p: 0.5, bgcolor: yellow[500], color: blue[700] }}
    >
      <Between sx={{ px: { sm: 1, lg: 2 }, height: '2.4rem' }}>
        <Flex sx={{ overflow: 'hidden' }}>
          <IconButton onClick={() => navigate('/')}>
            <Grass fontSize='large' sx={{ color: blue[700] }} />
          </IconButton>
          <Typography
            noWrap
            variant='h6'
            sx={{
              mt: 0.7,
              ml: 1,
              fontFamily: "'Lobster', cursive",
            }}
          >
            РАЙСЬКИЙ САД
          </Typography>
        </Flex>
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'flex',
            },
          }}
        >
          <IconButton
            sx={{ color: blue[700] }}
            onClick={() => navigate('/contacts')}
          >
            <Telegram />
          </IconButton>
          <IconButton
            sx={{ color: blue[700] }}
            onClick={() => navigate('/contacts')}
          >
            <WhatsApp />
          </IconButton>
          <Button
            startIcon={<Phone />}
            sx={{ borderRadius: 5, color: blue[700] }}
          >
            <Typography variant='h6' noWrap>
              (066) 611 74 29
            </Typography>
          </Button>
        </Box>
        <Typography
          noWrap
          variant='h6'
          sx={{ mt: 0.5, display: { xs: 'none', lg: 'flex' } }}
        >
          Працюємо 8:00 - 21:00
        </Typography>
        <Flex sx={{ gap: 1 }}>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            {buttonVisible && (
              <IconButton
                color='primary'
                onClick={() => {
                  setButtonVisible(false);
                  setSearchVisible(true);
                }}
              >
                <Search sx={{ color: blue[700] }} />
              </IconButton>
            )}
            {searchVisible && (
              <ClickAwayListener
                onClickAway={() => {
                  setSearchVisible(false);
                  setButtonVisible(true);
                }}
              >
                <Box>
                  <SearchInput />
                </Box>
              </ClickAwayListener>
            )}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <SearchInput />
          </Box>
          <Button
            startIcon={
              <Badge badgeContent={2} color='warning'>
                <ShoppingBasket />
              </Badge>
            }
            sx={{
              textTransform: 'none',
              borderRadius: 5,
              color: blue[700],
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Typography>{`${1000}${'\u00A0'}грн`}</Typography>
          </Button>
          <IconButton
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: blue[700],
            }}
          >
            <Badge badgeContent={2} color='warning'>
              <ShoppingBasket />
            </Badge>
          </IconButton>
        </Flex>
      </Between>
    </AppBar>
  );
};

export default SearchBar;
