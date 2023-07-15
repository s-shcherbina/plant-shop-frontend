import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import {
  Box,
  ClickAwayListener,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';
import { blue, yellow } from '@mui/material/colors';
import { FC, Fragment, useState } from 'react';
import uuid from 'react-uuid';
import { groups, subgroups } from '../common/moks';
import { Flex } from '.';
import { IDrawerCatalog } from '../types';

const DrawerCatalog: FC<IDrawerCatalog> = ({
  catalogOpen,
  catalogToggle,
  navigate,
}): JSX.Element => {
  const [subgroupVisible, setSubgroupVisible] = useState(false);

  const drawerCatalog = (
    <ClickAwayListener onClickAway={catalogToggle}>
      <List sx={{ bgcolor: blue[500] }}>
        {groups.map((group) => (
          <Box key={uuid()}>
            <Stack>
              <Flex>
                <ListItemButton
                  onClick={() => {
                    navigate(group.path);
                    catalogToggle();
                  }}
                >
                  <ListItemText
                    sx={{ color: yellow[500] }}
                    primary={group.name}
                  />
                </ListItemButton>
                <Divider orientation='vertical' flexItem />
                <IconButton
                  sx={{ color: yellow[500], m: 1 }}
                  onClick={() => {
                    setSubgroupVisible(!subgroupVisible);
                  }}
                >
                  {subgroupVisible && group.name === 'Троянди' ? (
                    <KeyboardArrowUp />
                  ) : (
                    <KeyboardArrowDown />
                  )}
                </IconButton>
              </Flex>
              <Divider />
              {subgroupVisible && group.name === 'Троянди' && (
                <List sx={{ bgcolor: blue[400] }}>
                  {subgroups.map((subgroup) => (
                    <Fragment key={uuid()}>
                      <ListItemButton
                        sx={{ ml: 3 }}
                        onClick={() => {
                          catalogToggle();
                        }}
                      >
                        <ListItemText
                          sx={{ color: yellow[500] }}
                          primary={subgroup.name}
                        />
                      </ListItemButton>
                      <Divider />
                    </Fragment>
                  ))}
                </List>
              )}
            </Stack>
          </Box>
        ))}
      </List>
    </ClickAwayListener>
  );

  return (
    <Box component='nav'>
      <Drawer
        anchor={'top'}
        variant='temporary'
        open={catalogOpen}
        onClose={catalogToggle}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: '60%', lg: '40%' },
            height: '100%',
          },
        }}
      >
        {drawerCatalog}
      </Drawer>
    </Box>
  );
};

export default DrawerCatalog;
