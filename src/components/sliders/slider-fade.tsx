import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Stack, Typography } from '@mui/material';
import uuid from 'react-uuid';

const SliderFade = ({ items }: any) => {
  // const [num, setNum] = useState(-1);
  // console.log(num);

  return (
    <Swiper
      modules={[EffectFade, A11y, Autoplay]}
      // modules={[ Pagination, A11y, EffectCube, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={3000}
      slidesPerView={1}
      // pagination={{ clickable: true }}
      loop={true}
      effect={'fade'}
      fadeEffect={{
        crossFade: true,
      }}
      // effect={'cube'}
      // cubeEffect={{
      //   shadow: true,
      //   slideShadows: true,
      //   shadowOffset: 20,
      //   shadowScale: 0.94,
      // }}
    >
      {items.map((item: any, index: number) => (
        <SwiperSlide
          key={uuid()}
          // onClick={() => setNum(index)}
          // style={{ cursor: 'pointer' }}
        >
          <Stack
            direction='column-reverse'
            sx={{
              background: `url(${item.image}) center/cover`,
              height: { xs: 300, sm: 450, md: '68vh', lg: '81vh' },
              color: '#FFF',
              textAlign: 'center',
              borderRadius: 2,
            }}
          >
            <Typography sx={{ mb: 5 }} variant='h6'>
              {item.description}
            </Typography>
            <Typography variant='h3'>{item.name}</Typography>
          </Stack>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderFade;
