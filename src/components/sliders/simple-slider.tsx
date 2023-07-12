import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Autoplay, EffectCoverflow, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { FC } from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import uuid from 'react-uuid';
import { items } from '../../common/moks';
import { Info } from '@mui/icons-material';
import { BetweenCenter } from '../../helpers';

const SimpleSlider: FC<{
  direction: 'horizontal' | 'vertical' | undefined;
  num: number;
}> = ({ direction, num }) => {
  // const [num, setNum] = useState(-1);
  // console.log(num);
  // const num = 2;

  return (
    <Swiper
      modules={[Scrollbar, A11y, Autoplay]}
      nested={true}
      spaceBetween={10}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      observer={true}
      speed={10000}
      direction={direction}
      slidesPerView={num}
      slidesPerGroup={num}
      scrollbar={{ draggable: true }}
      loop={true}
    >
      {items.concat(items.reverse()).map((item: any, index: number) => (
        <SwiperSlide
          key={uuid()}
          // onClick={() => setNum(index)}
          style={{ cursor: 'pointer' }}
        >
          <Stack
            direction='column-reverse'
            sx={{
              background: `url(${item.image}) center/cover`,
              // height: 125,
              height: { xs: 125, lg: '15vh' },
              // minWidth: 140,
              width: { xl: 240 },
              color: '#FFF',
              borderRadius: 1,
            }}
          >
            <BetweenCenter>
              <Typography variant='body1'>{item.name}</Typography>
              <IconButton>
                <Info sx={{ color: '#FFF' }} />
              </IconButton>
            </BetweenCenter>
          </Stack>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SimpleSlider;
