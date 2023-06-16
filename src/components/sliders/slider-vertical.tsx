import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { useState } from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import uuid from 'react-uuid';
import { items } from '../../common/moks';
import { Info } from '@mui/icons-material';
import { BetweenCenter } from '../../helpers';

const SliderVertical = () => {
  // const [num, setNum] = useState(-1);
  // console.log(num);

  return (
    <Swiper
      modules={[Scrollbar, A11y, Autoplay, EffectCoverflow]}
      nested={true}
      spaceBetween={10}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      observer={true}
      speed={10000}
      direction={'vertical'}
      slidesPerView={5}
      slidesPerGroup={5}
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
              height: 125,
              width: '100%',
              color: '#FFF',
              borderRadius: 1,
              mt: 1,
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

export default SliderVertical;
