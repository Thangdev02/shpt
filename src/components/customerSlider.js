import React from 'react';
import Slider from 'react-slick';
import { Box, Card, CardMedia, Typography, CardContent } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Images for the carousel (replace these paths with actual images)
const customers = [
  {
    image: 'https://img.freepik.com/free-photo/3d-cartoon-hospital-healthcare-scene_23-2151644051.jpg?t=st=1728454774~exp=1728458374~hmac=9b0cf4267fd8959005d2773c26ee52fed493db6b0890594431c597f821ebc765&w=900', // Replace with actual image
    name: 'Phòng Khám Phước Nguyên',
    description: 'Phòng Khám Đa Khoa Phước Nguyên',
  },
  {
    image: 'https://img.freepik.com/free-photo/3d-cartoon-hospital-healthcare-scene_23-2151644079.jpg?t=st=1728454800~exp=1728458400~hmac=97b1e8421d6d1a1a0f462af26d39edef506148ef9a33b02f5e3bbd943458820a&w=900', // Replace with actual image
    name: 'PKĐK Tâm Bình An',
    description: 'Phòng Khám Đa Khoa Tâm Bình An',
  },
  {
    image: 'https://img.freepik.com/free-photo/3d-cartoon-hospital-healthcare-scene_23-2151644054.jpg?t=st=1728454817~exp=1728458417~hmac=72fd92bd8ea8585e37d787067d707925b09812b753d129525e7af7192aea386a&w=1060', // Replace with actual image
    name: 'PKĐK Quốc Tế Long Bình',
    description: 'Phòng Khám Đa Khoa Quốc Tế Long Bình',
  },
  {
    image: 'https://img.freepik.com/free-photo/3d-cartoon-hospital-healthcare-scene_23-2151644050.jpg?t=st=1728455344~exp=1728458944~hmac=676e05c9b6fb58c625c1cdd980b657c74fbc7bfb67e4f1f74687292495728724&w=900', // Replace with actual image
    name: 'PKĐK Sài Gòn Tam Phước',
    description: 'Phòng Khám Đa Sài Gòn Tam Phước',
  },
  {
    image: 'https://img.freepik.com/free-photo/3d-cartoon-hospital-healthcare-scene_23-2151644055.jpg?t=st=1728455434~exp=1728459034~hmac=63b8e9e7f0e58e6602871d25056fe40d13e2598d9f8eda307e62626dcdd87892&w=900', // Replace with actual image
    name: 'PKĐK Y Dược Sài Gòn Nam Bình Dương',
    description: 'Phòng Khám Đa Khoa Dược Sài Gòn Nam Bình Dương',
  },
];

const CustomerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: '50px 0', textAlign: 'center', width: '100%' }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#FF9800',
          marginBottom: '20px',
          fontFamily: 'Quicksand',
        }}
      >
        KHÁCH HÀNG TIÊU BIỂU
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginBottom: '40px',
          fontFamily: 'Quicksand',
        }}
      >
        Thật vinh dự khi được đồng hành cùng quý khách hàng
      </Typography>

      <Box sx={{ width: '100%' }}>
        <Slider {...settings}>
          {customers.map((customer, index) => (
            <Box key={index} sx={{ padding: '0 0', width: '90%' }}>
              <Card
                sx={{
                  borderRadius: '15px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  margin: 'auto',
                  width: '92%',
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={customer.image}
                  alt={customer.name}
                  sx={{ borderRadius: '15px 15px 0 0' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Quicksand' }}>
                    {customer.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', fontFamily: 'Quicksand' }}>
                    {customer.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default CustomerSlider;
