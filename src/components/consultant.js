import React, { useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { LocalHospital, Lock } from '@mui/icons-material'; // Icons
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal

// Replace this with the actual path to the video call image
const videoCallImage = 'https://img.freepik.com/free-vector/call-doctor-concept-doctors-answer-patient-questions-phone_1150-50289.jpg?t=st=1728451403~exp=1728455003~hmac=c4cd5f37575112d70f98b97f4ee873fb62601903452ac911ff41dcaf74631b6d&w=1060';

const DoctorSaigonConsultationComponent = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.reveal-title', {
      delay: 200,
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'top',
    });

    ScrollReveal().reveal('.reveal-icons', {
      delay: 400,
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'left',
    });

    ScrollReveal().reveal('.reveal-image', {
      delay: 600,
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'right',
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: '#fff', padding: '50px' }}>
      {/* Title Section */}
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={6}>
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
            TƯ VẤN TRỰC TUYẾN TẠI SÀI GÒN VỚI DoctorSaigon
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

          {/* Icons and Descriptions */}
          <Grid container spacing={2} className="reveal-icons">
            {/* First Icon */}
            <Grid item xs={6} sx={{ textAlign: 'center' }}>
              <LocalHospital sx={{ fontSize: 50, color: '#0078FF' }} />
              <Typography variant="body1" sx={{ color: '#333', marginTop: '10px', fontFamily: 'Quicksand' }}>
                Phòng khám ảo DoctorSaigon
              </Typography>
            </Grid>

            {/* Second Icon */}
            <Grid item xs={6} sx={{ textAlign: 'center' }}>
              <Lock sx={{ fontSize: 50, color: '#0078FF' }} />
              <Typography variant="body1" sx={{ color: '#333', marginTop: '10px', fontFamily: 'Quicksand' }}>
                Thông tin cá nhân được giữ an toàn và bí mật
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Side: Video Call Image */}
        <Grid item xs={12} sm={6} className="reveal-image">
          <img
            src={videoCallImage}
            alt="Video Call Consultation"
            style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorSaigonConsultationComponent;
