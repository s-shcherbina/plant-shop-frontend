import { AppBar, Box, Button, Divider, Typography } from '@mui/material';
import { FC, Fragment, useState } from 'react';
import { groups } from '../../common/moks';
import uuid from 'react-uuid';
import { Between } from '../../helpers';
import GroupButton from '../../helpers/group-button';
import LoginButton from '../../helpers/login-button';

const Catalog: FC = (): JSX.Element => {
  const [color, setColor] = useState('');
  // useEffect(() => {
  //   getGroups().then((data) => store.setGroups(data));
  // }, [store]);

  return (
    <AppBar
      position='static'
      color='default'
      sx={{
        p: 0.5,
        display: {
          xs: 'none',
          lg: 'flex',
          overflowX: 'auto',
        },
      }}
    >
      <Between>
        {groups.map((group) => (
          <GroupButton
            // key={uuid()}
            key={group.name}
            color={color}
            setColor={setColor}
            group={group.name}
          />
          // </>
          // <LoginButton />

          // <Button
          //   color={color === group ? 'warning' : 'primary'}
          //   key={uuid()}
          //   sx={{
          //     borderRadius: 5,
          //     px: 2.5,
          //     '&:hover': { color: 'darkorange !important' },
          //   }}
          //   onClick={() => setColor(group)}
          // >
          //   {group.name}
          // </Button>
        ))}
      </Between>
    </AppBar>
  );
};

export default Catalog;
