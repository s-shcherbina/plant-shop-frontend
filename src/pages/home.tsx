import { FC } from 'react';

import { items } from '../common/moks';
import SliderFade from '../components/sliders/slider-fade';
// import { checkAuth } from '../App';

const HomePage: FC = (): JSX.Element => {
  // useEffect(() => {
  //   if (localStorage.getItem('token')) checkAuth();
  // }, []);

  return <SliderFade items={items} />;
};

export default HomePage;
