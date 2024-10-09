import React, { useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { LocalHospital, HealthAndSafety, Store, People, Lock } from '@mui/icons-material'; // Icons
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal

// Replace this with the actual path to the phone image
const phoneImage = 'https://img.freepik.com/free-vector/videocalling-with-therapist-concept_23-2148521901.jpg?t=st=1728450945~exp=1728454545~hmac=fa19adcf8ee1247bf4e5ee12896ee2bf3116b29b23e11989aee7ceb42c1ec293&w=740';

const DoctorSaigonComponent = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.reveal-title', {
      delay: 200,
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'top',
    });

    ScrollReveal().reveal('.reveal-image', {
      delay: 400,
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'left',
    });

    ScrollReveal().reveal('.reveal-icons', {
      delay: 600,
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      interval: 200, // Stagger the reveal of each icon
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: '#fff', padding: '50px' }}>
      {/* Title Section */}
      <Typography
        variant="h4"
        component="div"
        sx={{
          fontWeight: 'bold',
          color: '#FF9800',
          textAlign: 'left',
          marginBottom: '20px',
          fontFamily: 'Quicksand',
        }}
        className="reveal-title"
      >
        TÌM BÁC SĨ TRỰC TUYẾN TẠI SÀI GÒN VỚI DoctorSaigon
      </Typography>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: '#333',
          textAlign: 'left',
          marginBottom: '40px',
          fontFamily: 'Quicksand',
        }}
        className="reveal-title"
      >
        Truy cập một bộ đầy đủ các dịch vụ chăm sóc sức khỏe và thể chất để chăm sóc mọi khía cạnh nhu cầu chăm sóc sức khỏe của bạn.
      </Typography>

      {/* Main Content: Image and Icons */}
      <Grid container spacing={3} alignItems="center">
        {/* Left Side: Phone Image */}
        <Grid item xs={12} sm={6} className="reveal-image">
          <img
            src={phoneImage}
            alt="Doctor Saigon App on Phone"
            style={{ maxWidth: '60%', height: 'auto', borderRadius: '15px' }}
          />
        </Grid>

        {/* Right Side: Icons with descriptions */}
        <Grid item xs={12} sm={6}>
          <Grid container spacing={3} className="reveal-icons">
            {/* First Icon */}
            <Grid item xs={6} sm={4} sx={{ textAlign: 'center' }}>
              <LocalHospital sx={{ fontSize: 50, color: '#0078FF' }} />
              <Typography variant="body1" sx={{ color: '#333', marginTop: '10px', fontFamily: 'Quicksand' }}>
                Phòng khám ảo DoctorSaigon
              </Typography>
            </Grid>

            {/* Second Icon */}
            <Grid item xs={6} sm={4} sx={{ textAlign: 'center' }}>
              <HealthAndSafety sx={{ fontSize: 50, color: '#0078FF' }} />
              <Typography variant="body1" sx={{ color: '#333', marginTop: '10px', fontFamily: 'Quicksand' }}>
                Phòng khám vệ tinh DoctorSaigon
              </Typography>
            </Grid>

            {/* Third Icon */}
            <Grid item xs={6} sm={4} sx={{ textAlign: 'center' }}>
              <People sx={{ fontSize: 50, color: '#0078FF' }} />
              <Typography variant="body1" sx={{ color: '#333', marginTop: '10px', fontFamily: 'Quicksand' }}>
                Dịch vụ chăm sóc tại nhà DoctorSaigon
              </Typography>
            </Grid>

            {/* Fourth Icon */}
            <Grid item xs={6} sm={4} sx={{ textAlign: 'center' }}>
              <Store sx={{ fontSize: 50, color: '#0078FF' }} />
              <Typography variant="body1" sx={{ color: '#333', marginTop: '10px', fontFamily: 'Quicksand' }}>
                Chợ DoctorSaigon
              </Typography>
            </Grid>

            {/* Fifth Icon */}
            <Grid item xs={6} sm={4} sx={{ textAlign: 'center' }}>
              <Lock sx={{ fontSize: 50, color: '#0078FF' }} />
              <Typography variant="body1" sx={{ color: '#333', marginTop: '10px', fontFamily: 'Quicksand' }}>
                Sức khỏe tâm thần
              </Typography>
            </Grid>

            {/* Sixth Icon */}
            <Grid item xs={6} sm={4} sx={{ textAlign: 'center' }}>
              <HealthAndSafety sx={{ fontSize: 50, color: '#0078FF' }} />
              <Typography variant="body1" sx={{ color: '#333', marginTop: '10px', fontFamily: 'Quicksand' }}>
                Chương trình quản lý bệnh nhân mãn tính
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorSaigonComponent;
