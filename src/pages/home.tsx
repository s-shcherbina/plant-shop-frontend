import { FC, useState } from 'react';

import { items } from '../common/moks';
import SliderFade from '../components/sliders/slider-fade';
import { Box, Grow } from '@mui/material';
// import { checkAuth } from '../App';

const HomePage: FC = (): JSX.Element => {
  // const [grow, setGrow] = useState(true);
  // useEffect(() => {
  //   if (localStorage.getItem('token')) checkAuth();
  // }, []);

  return (
    <Grow in={true}>
      <Box>
        <SliderFade items={items} />
      </Box>
    </Grow>
  );
};

export default HomePage;
