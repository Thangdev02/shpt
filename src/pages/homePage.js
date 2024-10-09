import React from "react";
import Header from "../layouts/header";
import ImageGallery from "../components/imageGallery";
import FeatureCard from "../components/featureCard";
import { Box, Typography } from "@mui/material";
import CardComponent from "../components/cardComponents";
import MessageComponent from "../components/message";
import DoctorLogo from "../assets/images/doctorSGlogo.png";
import DoctorSocialComponent from "../components/social";
import PregnancyTrackingComponent from "../components/tracking";
import DoctorSaigonComponent from "../components/findDoctor";
import DoctorSaigonConsultationComponent from "../components/consultant";
import DoctorSaigonSystemComponent from "../components/doctorSystem";
import HomeCareComponent from "../components/homeCare";
import ChronicCareComponent from "../components/chronic";
import MentalHealthComponent from "../components/mentalHeath";
import PricingComponent from "../components/pricing";
import MyFooter from "../layouts/footer";
import CustomerSlider from "../components/customerSlider";

const HomePage = () => {
  return (
    <div>
      <Header />
      <FeatureCard />
      <ImageGallery />
      <Typography
        sx={{
          color: "#FFA500",
          fontWeight: "bold",
          textAlign: "start",
          fontSize: "34px",
          padding: "1.5%",
          fontFamily: "Quicksand",
        }}
      >
        Lĩnh Vực Hoạt Động
      </Typography>
      <CardComponent />
      <MessageComponent />
      <Box sx={{ display: "flex", justifyContent: "center", paddingBottom:'2%' }}>
        <img style={{ marginLeft: "20%", width: "14%" }} src={DoctorLogo} />
      </Box>
      <DoctorSocialComponent/>
      <PregnancyTrackingComponent/>
      <DoctorSaigonComponent/>
      <DoctorSaigonConsultationComponent/>
      <DoctorSaigonSystemComponent/>
      <HomeCareComponent/>
      <ChronicCareComponent/>
      <MentalHealthComponent/>
      <CustomerSlider/>
      <PricingComponent/>
      <MyFooter/>
    </div>
  );
};

export default HomePage;
