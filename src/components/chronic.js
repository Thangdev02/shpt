import React, { useEffect } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ScrollReveal from "scrollreveal"; // Importing ScrollReveal for animations

// Replace this with the actual path to the doctor and patient image
const chronicCareImage = 'https://img.freepik.com/free-vector/flat-national-doctor-s-day-illustration-with-medic-consulting-patient_23-2149430655.jpg?t=st=1728452886~exp=1728456486~hmac=4d5dbbe70a8c095c90d564b9918f2fda8a75a135e909820f47b531c93f61aa96&w=740';

const ChronicCareComponent = () => {
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
        {/* Left Side: Image */}
        <Grid item xs={12} sm={6} className="reveal">
          <img
            src={chronicCareImage}
            alt="Chronic Care Management"
            style={{ maxWidth: "60%", height: "auto", borderRadius: "10px" }}
          />
        </Grid>

        {/* Right Side: Text */}
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
            QUẢN LÝ BỆNH NHÂN MÃN TÍNH
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: "#333",
              textAlign: "left",
              marginBottom: "40px",
              fontFamily: "Quicksand",
            }}
          >
            Quản lý lâu dài các bệnh về lối sống.
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#333",
              textAlign: "left",
              marginBottom: "20px",
              fontFamily: "Quicksand",
            }}
          >
            Nếu bạn muốn gặp bác sĩ trực tiếp hơn là qua mạng, bạn có thể thuận tiện đến phòng khám vệ tinh DoctorSaigon gần nhất để nhận được đầy đủ các dịch vụ chăm sóc sức khỏe ban đầu, bao gồm điều trị các tình trạng cấp tính và mãn tính ở cả người lớn và trẻ em, khám sức khỏe và làm việc - sàng lọc và tiêm chủng liên quan. Với nhiều địa điểm của chúng tôi ở Việt Nam, sự thuận tiện sẽ không thành vấn đề.
          </Typography>
          <Button variant="contained" color="primary" sx={{ fontFamily: "Quicksand" }}>
            Tìm hiểu thêm
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChronicCareComponent;
