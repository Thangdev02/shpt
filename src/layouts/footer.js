import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const MyFooter = () => {
  return (
    <Box sx={{ backgroundColor: '#0060CE', padding: '40px 20px', color: '#fff' }}>
      <Grid container spacing={3} justifyContent="space-between">
        {/* Contact Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
            Liên hệ:
          </Typography>
          <Typography variant="body2">
            Số 29, Đường 218 Cao Lỗ, P4, Quận 8, TP.Hồ Chí Minh
          </Typography>
          <Typography variant="body2" sx={{ margin: '5px 0' }}>
            0914 135 469 <br />
            0947 800 404 <br />
            0917 471 080
          </Typography>
          <Typography variant="body2">
            cskh@shpt.com.vn <br />
            info@shpt.com.vn
          </Typography>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
            Theo dõi chúng tôi:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Facebook sx={{ fontSize: 40, color: '#FF4081' }} />
            <Instagram sx={{ fontSize: 40, color: '#FF4081' }} />
            <LinkedIn sx={{ fontSize: 40, color: '#FF4081' }} />
            <Twitter sx={{ fontSize: 40, color: '#FF4081' }} />
          </Box>
        </Grid>

        {/* Policies Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
            Chính sách:
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px' }}>
            Quy trình triển khai
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px' }}>
            Hình thức thanh toán
          </Typography>
          <Typography variant="body2">
            Bảo trì/Bảo hành
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyFooter;
