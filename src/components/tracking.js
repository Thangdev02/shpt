import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { LocalHospital, Lock } from "@mui/icons-material"; // Icons
import ScrollReveal from "scrollreveal"; // Import ScrollReveal

// Replace with actual image path
const pregnancyTrackingImage =
  "https://img.freepik.com/free-vector/hand-drawn-ai-healthcare-illustration_52683-156475.jpg?t=st=1728410454~exp=1728414054~hmac=7fd5bdaaec0172d4bf8e62f6b8ed6a4aeb1e5badbf983df94560c244d8d1d57a&w=740";

const PregnancyTrackingComponent = () => {
  useEffect(() => {
    // Initialize ScrollReveal and apply it to different sections
    ScrollReveal().reveal('.reveal-title', {
      delay: 200,
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'top',
    });

    ScrollReveal().reveal('.reveal-icons', {
      delay: 400,
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'left',
    });

    ScrollReveal().reveal('.reveal-image', {
      delay: 600,
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'right',
    });
  }, []);

  return (
    <Box sx={{ padding: "50px" }}>
      {/* Title Section */}
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
        className="reveal-title"
      >
        THEO DÕI THAI KỲ VỚI HỆ THỐNG BotDoctor + DoctorGPT
      </Typography>
      <Typography
        variant="h5"
        component="div"
        sx={{
          textAlign: "left",
          marginBottom: "40px",
          paddingRight: "4%",
          fontFamily: "Quicksand",
        }}
        className="reveal-title"
      >
        Với các Bác sĩ sản khoa nhiều năm làm việc tại Bv Từ Dũ, kết hợp với hệ
        thống Bot Doctor sẽ giúp thai kỳ của bạn được theo dõi chuyên sâu và an
        toàn nhất
      </Typography>

      {/* Main Content: Icons and Image */}
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", alignItems: "center" }}
      >
        {/* Left Side: Icons with text */}
        <Grid item xs={12} sm={6} md={4} className="reveal-icons">
          <Grid container spacing={2} justifyContent="center">
            {/* First Icon (Doctor Saigon) */}
            <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
              <LocalHospital sx={{ fontSize: 70, color: "#1976D2" }} />
              <Typography
                variant="h5"
                sx={{
                  color: "#1976D2",
                  marginTop: "10px",
                  fontFamily: "Quicksand",
                }}
              >
                Hệ thống phòng khám sản DoctorSaigon
              </Typography>
            </Grid>

            {/* Second Icon (Personal Info) */}
            <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
              <Lock sx={{ fontSize: 70, color: "#1976D2" }} />
              <Typography
                variant="h5"
                sx={{
                  color: "#1976D2",
                  marginTop: "10px",
                  fontFamily: "Quicksand",
                }}
              >
                Thông tin cá nhân được giữ an toàn và bí mật
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Side: Image */}
        <Grid
          item
          xs={12}
          sm={6}
          md={8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="reveal-image"
        >
          <img
            src={pregnancyTrackingImage}
            alt="Pregnancy Tracking System"
            style={{ width: "70%", height: "400px", borderRadius: "15px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PregnancyTrackingComponent;
