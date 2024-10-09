import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { HeadsetMic, Verified, TrendingUp } from "@mui/icons-material";
import ScrollReveal from "scrollreveal"; // Import ScrollReveal

// Data array for mapping
const features = [
  {
    icon: <HeadsetMic style={{ fontSize: 60, color: "#FFA500" }} />,
    title: "HỖ TRỢ 24/7",
    description: "Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ",
  },
  {
    icon: <Verified style={{ fontSize: 60, color: "#FFA500" }} />,
    title: "KINH NGHIỆM",
    description: "Cung cấp giải pháp cho hơn 200 Cơ sở Khám chữa bệnh",
  },
  {
    icon: <TrendingUp style={{ fontSize: 60, color: "#FFA500" }} />,
    title: "DỄ DÀNG PHÁT TRIỂN",
    description: "Triển khai, cài đặt nhanh chóng, nâng cấp dễ dàng",
  },
];

const FeatureCard = () => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 200,
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
    });
  }, []);

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={4} key={index} className="reveal">
            <Box
              sx={{
                textAlign: "center",
                border: "2px solid #FFA500",
                borderRadius: "10px",
                padding: "20px",
                fontFamily: "Quicksand",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)", // Hover effect to scale the card
                },
              }}
            >
              <Box>{feature.icon}</Box>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  marginTop: "10px",
                  color: "black",
                  fontFamily: "Quicksand",
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{
                  marginTop: "10px",
                  color: "#FFA500",
                  fontFamily: "Quicksand",
                  fontWeight: "bold",
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureCard;
