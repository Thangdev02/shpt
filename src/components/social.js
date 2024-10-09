import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Facebook, Twitter, Lock } from "@mui/icons-material"; // Importing MUI icons
import ScrollReveal from "scrollreveal"; // Import ScrollReveal

// Path to the doctor image
const doctorImage =
  "https://img.freepik.com/free-vector/online-doctor-appointment-mobile-phone_23-2148518022.jpg?t=st=1728408106~exp=1728411706~hmac=5290d0fe9d34045a16971f0030d1eeab521eb3ea23d1cd9c135b27e0f1d185d8&w=740"; // Replace with the actual image path

const DoctorSocialComponent = () => {
  useEffect(() => {
    // Apply ScrollReveal to the title, image, and icons
    ScrollReveal().reveal(".reveal-title", {
      delay: 200,
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      origin: "top",
    });

    ScrollReveal().reveal(".reveal-image", {
      delay: 400,
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      origin: "left",
    });

    ScrollReveal().reveal(".reveal-icons", {
      delay: 600,
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      origin: "bottom",
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
          color: "#ffab40",
          textAlign: "center",
          marginBottom: "20px",
          fontFamily: "Quicksand",
        }}
        className="reveal-title"
      >
        MẠNG XÃ HỘI VỀ Y TẾ - Doctor Social
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: "#ffab40",
          textAlign: "center",
          marginBottom: "40px",
          fontFamily: "Quicksand",
        }}
        className="reveal-title"
      >
        Các vấn đề về sức khỏe của bạn sẽ được giải đáp qua Doctor Social
      </Typography>

      {/* Main Section with Doctor Image */}
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }} className="reveal-image">
          <img
            src={doctorImage}
            alt="Doctor holding tablet"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "15px" }}
          />
        </Grid>
      </Grid>

      {/* Icons Section */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ marginTop: "30px" }}
        className="reveal-icons"
      >
        {/* First Icon (Social Media) */}
        <Grid item xs={12} sm={4} md={2} sx={{ textAlign: "center" }}>
          <Facebook sx={{ fontSize: 60, color: "#0078FF" }} />
          <Typography
            variant="h6"
            sx={{
              color: "#0078FF",
              marginTop: "10px",
              fontFamily: "Quicksand",
            }}
          >
            Doctor Social
          </Typography>
        </Grid>

        {/* Second Icon (Lock for Personal Information) */}
        <Grid item xs={12} sm={4} md={2} sx={{ textAlign: "center" }}>
          <Lock sx={{ fontSize: 60, color: "#0078FF" }} />
          <Typography
            variant="h6"
            sx={{
              color: "#0078FF",
              marginTop: "10px",
              fontFamily: "Quicksand",
            }}
          >
            Thông tin cá nhân được giữ an toàn và bí mật
          </Typography>
        </Grid>

        {/* Third Icon (Twitter for More Social Networks) */}
        <Grid item xs={12} sm={4} md={2} sx={{ textAlign: "center" }}>
          <Twitter sx={{ fontSize: 60, color: "#0078FF" }} />
          <Typography
            variant="h6"
            sx={{
              color: "#0078FF",
              marginTop: "10px",
              fontFamily: "Quicksand",
            }}
          >
            Kết nối thêm qua Twitter
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorSocialComponent;
