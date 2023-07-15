import { AppBar } from '@mui/material';
import { FC, useState } from 'react';
import { groups } from '../../common/moks';
import { Between } from '../../helpers';
import GroupButton from '../../helpers/group-button';

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
            key={group.name}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            color={color}
            setColor={setColor}
            group={group.name}
          />
        ))}
      </Between>
    </AppBar>
  );
};

export default Catalog;
