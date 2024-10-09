import React, { useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ScrollReveal from 'scrollreveal'; // Importing ScrollReveal

const MessageComponent = () => {
  useEffect(() => {
    // Apply ScrollReveal to different sections
    ScrollReveal().reveal('.reveal-number', {
      delay: 200,
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'left',
    });

    ScrollReveal().reveal('.reveal-text', {
      delay: 400,
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'right',
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: '#fff', padding: '50px' }}>
      <Grid container spacing={3} alignItems="center">
        {/* Left Side: Large number */}
        <Grid item xs={12} sm={3} className="reveal-number">
          <Typography
            variant="h1"
            component="div"
            sx={{
              fontSize: '80px',
              fontWeight: 'bold',
              color: '#FF4081', // Adjust color to your preference
              fontFamily: 'Quicksand',
            }}
          >
            20+
          </Typography>
        </Grid>

        {/* Right Side: Title and description */}
        <Grid item xs={12} sm={9} className="reveal-text">
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: 'bold',
              color: '#FF9800', // Title color, similar to the image
              marginBottom: '20px',
              fontFamily: 'Quicksand',
            }}
          >
            THÔNG ĐIỆP TỪ NHÀ SÁNG LẬP
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#333', // Text color
              fontFamily: 'Quicksand',
            }}
          >
            20 năm phát triển phần mềm quản lý khám chữa bệnh cho các bệnh viện lớn tại Sài Gòn và
            các phòng khám đa khoa, cùng với hơn 17 năm kinh nghiệm làm bác sĩ tại các bệnh viện đầu
            ngành công lập, cũng như trải qua nhiều vị trí quan trọng tại các bệnh viện tư nhân, phòng
            khám đa khoa, chúng tôi thấu hiểu được cảm xúc sâu sắc nhất của người bệnh khi trải nghiệm
            các dịch vụ tại các cơ sở y tế. Sức khỏe người bệnh gần như do người bệnh tự quản lý, bệnh
            nhân phải tự xem mình đang bị vấn đề gì về sức khỏe, cần đi bệnh viện nào khám, cần gặp bác
            sĩ nào, tất cả đều do bệnh nhân tự quản lý và quyết định...
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MessageComponent;
