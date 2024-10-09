import React from 'react';
import { Grid, Box, Typography, Card, CardContent, Button } from '@mui/material';

const PricingComponent = () => {
  return (
    <Box sx={{ backgroundColor: '#0078FF', padding: '50px 0', textAlign: 'center' }}>
      {/* Title */}
      <Typography
        variant="h4"
        component="div"
        sx={{ fontWeight: 'bold', color: '#FFAB40', fontFamily: 'Quicksand', marginBottom: '40px' }}
      >
        BẢNG GIÁ THAM KHẢO
      </Typography>

      {/* Pricing Cards */}
      <Grid container spacing={3} justifyContent="center">
        {/* Starter Plan */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: '#2196F3',
              color: '#fff',
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
              textAlign: 'left',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Quicksand' }}>
                Starter
              </Typography>
              <Typography variant="h6" sx={{ marginBottom: '20px' }}>
                $0/mo
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '16px' }}>
                ✔ 5 Devices <br />
                ✔ 1 month cloud retention <br />
                ✔ Unlimited notifications <br />
                ✔ Basic integrations <br />
                ✔ Always free
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Pro Plan */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: '#FF9800',
              color: '#fff',
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
              textAlign: 'left',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Quicksand' }}>
                Pro
              </Typography>
              <Typography variant="h6" sx={{ marginBottom: '20px' }}>
                $12/mo
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '16px' }}>
                ✔ Unlimited Devices <br />
                ✔ 1 year cloud retention <br />
                ✔ Unlimited notifications <br />
                ✔ Advanced integrations <br />
                ✔ Priority Customer Support
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* CTA Section */}
      <Box sx={{ marginTop: '50px' }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#fff',
            fontFamily: 'Quicksand',
            marginBottom: '20px',
          }}
        >
          Đăng ký sử dụng thử phần mềm
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FF9800',
            color: '#fff',
            padding: '15px 30px',
            borderRadius: '25px',
            fontWeight: 'bold',
            fontSize: '16px',
            fontFamily: 'Quicksand',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#FFAB40',
            },
          }}
        >
          LIÊN HỆ NGAY!
        </Button>
      </Box>
    </Box>
  );
};

export default PricingComponent;
