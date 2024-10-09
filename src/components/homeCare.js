import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Grid, Box, Typography, Button } from "@mui/material";

const HomeCareComponent = () => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 300,
      distance: '50px',
      duration: 500,
      easing: 'ease-in-out',
      origin: 'bottom',
    });
  }, []);

  return (
    <Box sx={{ padding: "50px" }}>
      <Grid container spacing={3} alignItems="center">
        {/* Left Side: Title, Subtitle, and Text */}
        <Grid item xs={12} sm={6} className="reveal">
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "#FF9800",
              textAlign: "left",
              marginBottom: "20px",
              fontFamily: "Quicksand",
            }}
          >
            HỆ THỐNG BÁC SĨ GIA ĐÌNH VÀ CHĂM SÓC TẠI NHÀ
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{
              textAlign: "left",
              marginBottom: "40px",
              fontFamily: "Quicksand",
            }}
          >
            Chăm sóc sức khỏe chuyên nghiệp trong sự thoải mái tại nhà của bạn.
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              textAlign: "left",
              marginBottom: "20px",
              fontFamily: "Quicksand",
            }}
          >
            Nếu bạn muốn gặp bác sĩ trực tiếp hơn là qua mạng, bạn có thể thuận tiện đến phòng khám vệ tinh DoctorSaigon gần nhất để nhận được đầy đủ các dịch vụ chăm sóc sức khỏe ban đầu.
          </Typography>
          <Button variant="contained" color="primary" sx={{ fontFamily: "Quicksand" }}>
            Tìm hiểu thêm
          </Button>
        </Grid>

        {/* Right Side: Image */}
        <Grid item xs={12} sm={6} className="reveal">
          <img
            src="https://img.freepik.com/free-vector/doctor-examining-patient-clinic-illustrated_23-2148856559.jpg?t=st=1728452396~exp=1728455996~hmac=abd5ee11687ecae26919dc3d0bd1adae3d27c0d1bf1fc0c9894c49042068db9f&w=1060"
            alt="Home Care System"
            style={{ maxWidth: "80%", height: "auto", borderRadius: "10px", borderRadius:'15px' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeCareComponent;
