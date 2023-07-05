import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Autoplay, EffectCoverflow, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { FC, useState } from 'react';
import { Grid, IconButton, Stack, Typography } from '@mui/material';
import uuid from 'react-uuid';
import { items, itemsXL } from '../../common/moks';
import { Info } from '@mui/icons-material';
import { BetweenCenter } from '../../helpers';

const SliderHorizontal: FC<{ num: number }> = ({ num }) => {
  // const [num, setNum] = useState(-1);
  // console.log(num);
  // const num = 2;

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      // modules={[Pagination]}
      modules={[Scrollbar, A11y, Autoplay, EffectCoverflow, Pagination]}
      nested={true}
      spaceBetween={10}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      observer={true}
      speed={10000}
      // direction={'vertical'}
      slidesPerView={num}
      // slidesPerGroup={4}
      scrollbar={{ draggable: true }}
      loop={true}
    >
      {itemsXL.concat(itemsXL.reverse()).map((item: any, index: number) => (
        <SwiperSlide
          key={uuid()}
          // onClick={() => setNum(index)}
          style={{ cursor: 'pointer' }}
        >
          {/* <Grid container columnSpacing={1.5}>
            <Grid
              item
              lg={12}
              xl={6}
              // sx={{ width: '100%' }}
              // sx={{ border: 'solid', width: '99%', display: 'flex' }}
            > */}
          <Stack
            direction='column-reverse'
            sx={{
              background: `url(${item[0].image}) center/cover`,
              height: 125,
              // width: 200,
              minWidth: 140,
              color: '#FFF',
              borderRadius: 1,
            }}
          >
            <BetweenCenter>
              <Typography variant='body1'>{item[0].name}</Typography>
              <IconButton>
                <Info sx={{ color: '#FFF' }} />
              </IconButton>
            </BetweenCenter>
          </Stack>
          {/* </Grid>
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderHorizontal;
