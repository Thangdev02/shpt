import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { LocalHospital, Lock } from "@mui/icons-material"; // Icons
import ScrollReveal from "scrollreveal"; // Import ScrollReveal

// Replace this with the actual path to the video call image
const videoCallImage =
  "https://img.freepik.com/free-vector/online-doctor-with-stethoscope_23-2148519113.jpg?t=st=1728451708~exp=1728455308~hmac=e25a83c7f43e59adba518488a6f40946fb2410af39847283e5b27bef3cf52ac4&w=740";

const DoctorSaigonSystemComponent = () => {
  useEffect(() => {
    // Apply ScrollReveal animations
    ScrollReveal().reveal(".reveal-image", {
      delay: 200,
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "left",
    });

    ScrollReveal().reveal(".reveal-text", {
      delay: 400,
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "right",
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: "#fff", padding: "50px" }}>
      {/* Title Section */}
      <Grid container spacing={3} alignItems="center">
        {/* Left Side: Image */}
        <Grid item xs={12} sm={6} className="reveal-image">
          <img
            src={videoCallImage}
            alt="Video Call Consultation"
            style={{ maxWidth: "80%", height: "auto", borderRadius: "10px" }}
          />
        </Grid>

        {/* Right Side: Text */}
        <Grid item xs={12} sm={6} className="reveal-text">
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
            200+ HỆ THỐNG PHÒNG KHÁM VỆ TINH DoctorSaigon
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
            Tận dụng công nghệ và kết nối với bác sĩ chuyên môn mà không cần đến
            bệnh viện.
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#333",
              textAlign: "left",
              marginBottom: "40px",
              fontFamily: "Quicksand",
            }}
          >
            Nếu bạn muốn gặp bác sĩ trực tiếp hơn là qua mạng, bạn có thể thuận
            tiện đến phòng khám vệ tinh DoctorSaigon gần nhất để nhận được đầy
            đủ các dịch vụ chăm sóc sức khỏe ban đầu, bao gồm điều trị các tình
            trạng cấp tính và mãn tính ở cả người lớn và trẻ em, khám sức khỏe
            và làm việc- sàng lọc và tiêm chủng liên quan. Với nhiều địa điểm
            của chúng tôi ở Việt Nam, sự thuận tiện sẽ không thành vấn đề.
          </Typography>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorSaigonSystemComponent;
