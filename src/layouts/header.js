import React, { useEffect } from "react";
import MyAppBar from "../components/appBar";
import { Box, Button, Typography } from "@mui/material";
import Logo from "../assets/images/logo.png";
import "../CSS/header.css"; // Import the CSS file with keyframes
import ScrollReveal from "scrollreveal"; // Import ScrollReveal

const Header = () => {
  useEffect(() => {
    // Apply ScrollReveal to different sections
    ScrollReveal().reveal(".text-reveal", {
      delay: 200,
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "left",
    });

    ScrollReveal().reveal(".button-reveal", {
      delay: 400,
      distance: "30px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "bottom",
    });

    ScrollReveal().reveal(".logo-reveal", {
      delay: 600,
      distance: "100px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "bottom",
    });
  }, []);

  return (
    <div className="Quicksand">
      <MyAppBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, side by side on larger screens
          justifyContent: "space-around",
          alignItems: "center",
          height: { xs: "auto", md: "650px" }, // Auto height on mobile
          padding: { xs: "20px", md: "0" }, // Add padding for smaller screens
        }}
      >
        {/* Left Section: Text */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" }, // Full width on mobile, half width on larger screens
            textAlign: { xs: "center", md: "left" }, // Center text on mobile, left on desktop
            marginBottom: { xs: "20px", md: "0" }, // Add margin for mobile
          }}
          className="text-reveal"
        >
          <Typography
            style={{ fontWeight: "bold", color: "#1976d2", fontFamily: "Quicksand" }}
            sx={{ fontSize: { xs: "24px", md: "34px" } }} // Adjust font size for mobile
          >
            Xin Chào! Chúng tôi là
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "34px", md: "44px" }, fontFamily: "Quicksand" }} // Adjust font size for mobile
          >
            Công ty CP Phần Mềm{" "}
            <span style={{ fontWeight: "bold", color: "#1976d2" }}> SHPT</span>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "24px" }, // Adjust font size for mobile
              fontFamily: "Quicksand",
              textAlign: { xs: "center", md: "left" }, // Center text on mobile, left on desktop
            }}
          >
            SHPT - Nền tảng hàng đầu chuyên cung cấp các giải pháp công nghệ
            thông tin, nhằm tối ưu hóa quy trình khám chữa bệnh, giúp nâng cao
            hiệu quả và trải nghiệm dịch vụ y tế.
          </Typography>
          <Box
            sx={{
              paddingTop: "2%",
              textAlign: { xs: "center", md: "left" }, // Center button on mobile
            }}
            className="button-reveal"
          >
            <Button
              variant="contained"
              color="error"
              sx={{
                borderRadius: "15px",
                padding: "1.5% 2%",
              }}
            >
              Đăng Ký Ngay
            </Button>
          </Box>
        </Box>

        {/* Right Section: Logo */}
        <Box
          sx={{
            width: { xs: "100%", md: "36%" }, // Full width on mobile, half width on larger screens
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" }, // Center image on mobile, right on desktop
          }}
          className="logo-reveal"
        >
          <img
            src={Logo}
            alt="SHPT Logo"
            style={{ width: { xs: "60%", md: "60%" } }} // Adjust image width for mobile
            className="logoImage"
          />
        </Box>
      </Box>
    </div>
  );
};

export default Header;
