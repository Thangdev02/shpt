import React, { useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ScrollReveal from "scrollreveal"; // Import ScrollReveal

// Array with card data (image, title, description)
const cards = [
  {
    image: "https://www.doctosmart.com/img/home5/ppp.png",
    title: "SHPT.HIS",
    description:
      "HIS là viết tắt của Hệ thống thông tin bệnh viện. Đây là một hệ thống quản lý dữ liệu và hồ sơ bệnh án của bệnh nhân trong các cơ sở y tế. Nó giúp giảm thiểu thời gian xử lý hồ sơ và nâng cao độ chính xác trong việc lưu trữ và quản lý thông tin bệnh nhân.",
  },
  {
    image: "https://www.doctosmart.com/img/home5/ppp.png",
    title: "SHPT.LIS",
    description:
      "LIS là hệ thống quản lý thông tin phòng thí nghiệm. Nó giúp các phòng thí nghiệm quản lý các mẫu, kiểm tra và xử lý kết quả của chúng một cách hiệu quả hơn.",
  },
  {
    image: "https://www.doctosmart.com/img/home5/ppp.png",
    title: "SHPT.RIS",
    description:
      "RIS là hệ thống thông tin chẩn đoán hình ảnh, cho phép lưu trữ và quản lý các hình ảnh y khoa một cách an toàn và nhanh chóng. Điều này đặc biệt hữu ích trong việc theo dõi tiến trình điều trị của bệnh nhân.",
  },
  {
    image: "https://www.doctosmart.com/img/home5/ppp.png",
    title: "SHPT.PACS",
    description:
      "PACS là hệ thống lưu trữ và truyền tải hình ảnh y khoa kỹ thuật số. Nó tích hợp với các hệ thống y tế khác để quản lý dữ liệu một cách hiệu quả và đồng bộ hóa giữa các chuyên ngành khác nhau.",
  },
  {
    image: "https://www.doctosmart.com/img/home5/ppp.png",
    title: "SHPT.EMR",
    description:
      "EMR là hồ sơ bệnh án điện tử, một giải pháp giúp các cơ sở y tế dễ dàng lưu trữ, quản lý và truy xuất thông tin bệnh nhân một cách tiện lợi và nhanh chóng.",
  },
  {
    image: "https://www.doctosmart.com/img/home5/ppp.png",
    title: "SHPT.PMS",
    description:
      "PMS là hệ thống quản lý phòng khám, giúp các phòng khám tư nhân theo dõi và quản lý các hoạt động hằng ngày như tiếp nhận bệnh nhân, lịch hẹn và các dịch vụ y tế.",
  },
];

const CardComponent = () => {
  useEffect(() => {
    // Initialize ScrollReveal and apply it to all cards
    ScrollReveal().reveal(".reveal", {
      delay: 200,
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      origin: "bottom",
    });
  }, []);

  return (
    <Box sx={{ padding: "40px" }}>
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={4} key={index} className="reveal">
            <Card
              sx={{
                boxShadow: "0px 3px 8px 2px rgba(0, 0, 0, 0.15)", // Add shadow effect on hover
                borderRadius: "15px",
                color: "#fff",
                margin: "8px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // Add smooth transition
                "&:hover": {
                  transform: "scale(1.05)", // Scale the card when hovered
                  boxShadow: "4px 4px 4px 2px rgba(0, 0, 0, 0.15)", // Add shadow effect on hover
                },
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={card.image}
                alt={card.title}
                style={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#FF4081", fontFamily: "Quicksand" }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3, // Display up to 3 lines only
                    textOverflow: "ellipsis",
                    color: "black",
                    fontFamily: "Quicksand",
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
              <Box sx={{ padding: "20px", textAlign: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF4081",
                    borderRadius: "25px",
                    padding: "10px 30px",
                    color: "#fff",
                    fontFamily: "Quicksand",
                  }}
                >
                  Xem Thêm
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardComponent;
