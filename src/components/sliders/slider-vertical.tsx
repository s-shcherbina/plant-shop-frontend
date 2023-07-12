import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { useState } from 'react';
import { Grid, IconButton, Stack, Typography } from '@mui/material';
import uuid from 'react-uuid';
import { items, itemsXL } from '../../common/moks';
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
      {/* {itemsXL.concat(itemsXL.reverse()).map((item: any, index: number) => (
        <SwiperSlide
          key={uuid()}
          // onClick={() => setNum(index)}
          style={{ cursor: 'pointer' }}
        >
          <Grid container columnSpacing={1.5}>
            <Grid item lg={12} xl={6}>
              <Stack
                direction='column-reverse'
                sx={{
                  background: `url(${item[0].image}) center/cover`,
                  height: 125,
                  minWidth: 200,
                  color: '#FFF',
                  borderRadius: 1,
                }}
                // onClick={() => setNum(index)}
              >
                <BetweenCenter>
                  <Typography variant='body1'>{item[0].name}</Typography>
                  <IconButton>
                    <Info sx={{ color: '#FFF' }} />
                  </IconButton>
                </BetweenCenter>
              </Stack>
            </Grid>
            <Grid item xl={6} sx={{ display: { xl: 'flex', lg: 'none' } }}>
              <Stack
                direction='column-reverse'
                sx={{
                  background: `url(${item[1].image}) center/cover`,
                  height: 125,
                  color: '#FFF',
                  borderRadius: 1,
                  minWidth: 200,
                }}
                // onClick={() =>
                //   setNum(itemsXL.concat(itemsXL.reverse()).length - 1 - index)
                // }
              >
                <BetweenCenter>
                  <Typography variant='body1'>{item[1].name}</Typography>
                  <IconButton>
                    <Info sx={{ color: '#FFF' }} />
                  </IconButton>
                </BetweenCenter>
              </Stack>
            </Grid>
          </Grid> */}
      {items.concat(items.reverse()).map((item) => (
        <SwiperSlide
          key={uuid()}
          // onClick={() => setNum(index)}
          style={{ cursor: 'pointer' }}
        >
          {/* <Stack> */}
          <Stack
            direction='column-reverse'
            sx={{
              background: `url(${item.image}) center/cover`,
              height: 125,
              minWidth: 200,
              color: '#FFF',
              borderRadius: 1,
            }}
            // onClick={() => setNum(index)}
          >
            <BetweenCenter>
              <Typography variant='body1'>{item.name}</Typography>
              <IconButton>
                <Info sx={{ color: '#FFF' }} />
              </IconButton>
            </BetweenCenter>
          </Stack>
          {/* </Stack> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderVertical;
