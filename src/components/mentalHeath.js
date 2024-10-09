import React, { useEffect } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ScrollReveal from "scrollreveal"; // Importing ScrollReveal for animations

// Replace this with the actual path to the illustration image
const illustrationImage = 'https://img.freepik.com/free-vector/neuroscientists-with-giant-chart-human-brain_53876-43080.jpg?t=st=1728453209~exp=1728456809~hmac=bf0d3bcdb9c3c1c0700281e50dd902871a2798784d1b56042cb68830c6d20197&w=900';

const MentalHealthComponent = () => {
  useEffect(() => {
    // Apply ScrollReveal to the elements
    ScrollReveal().reveal('.reveal', {
      delay: 200,
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: "#fff", padding: "50px" }}>
      <Grid container spacing={3} alignItems="center">
        {/* Left Side: Text */}
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
            SỨC KHỎE TÂM THẦN
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{
              textAlign: "left",
              marginBottom: "20px",
              fontFamily: "Quicksand",
            }}
          >
            Nói chuyện với các cố vấn và nhà tâm lý học được chứng nhận một cách bí mật.
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              textAlign: "left",
              marginBottom: "40px",
              fontFamily: "Quicksand",
              lineHeight: "1.6",
            }}
          >
            Nói chuyện với một chuyên gia có trình độ để huấn luyện tư duy và sức khỏe tinh thần một cách bí mật thông qua tư vấn video trực tuyến. Duyệt qua và chọn một bác sĩ theo lựa chọn của bạn, và đặt một cuộc hẹn vào thời điểm thuận tiện cho bạn.
          </Typography>
          <Button variant="contained" color="primary" sx={{ fontFamily: "Quicksand" }}>
            Tìm hiểu thêm
          </Button>
        </Grid>

        {/* Right Side: Illustration */}
        <Grid item xs={12} sm={6} className="reveal">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={illustrationImage}
              alt="Mental Health Illustration"
              style={{ maxWidth: "80%", height: "auto", borderRadius: "10px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MentalHealthComponent;
