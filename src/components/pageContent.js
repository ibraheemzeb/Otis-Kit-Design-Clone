import { Box } from "@mui/material";
import React from "react";
import CounterCardSection from "./cards/CounterCardSection";
import FlipCardSec from "./FlipCardSec";
import CollectionsSec from "./CollectionsSec";
import NavigationSec from "./NavigationSec";
import InputSec from "./InputSec";
import AttentionSec from "./AttentionSec";
import ElementsSec from "./ElementsSec";
import AccountPages from "./AccountPages";
import PresentationSec from "./PresentationSec"
import ComplexDocSec from "./ComplexDocSec";
import CardGridSection from "./cards/CardGridSection";
import ReviewSec from "./ReviewSec";
import PricingSec from "./PricingSec";
import ThankSec from "./ThankSec";
import Footer from "./Footer";

const PageContent = () => {
  return (
    <Box
      sx={{
        border: "1px black",
        borderRadius: "17px",
        position: "absolute",
        top: "66.11%",
        width: "96.9%",
        height: "auto",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "5%",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "saturate(200%) blur(30px)",
        boxShadow:"rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem"
      }}
    >
      <CounterCardSection />
      <FlipCardSec />
      <CollectionsSec />
      <NavigationSec />
      <InputSec />
      <AttentionSec />
      <ElementsSec />
      <AccountPages/>
      <PresentationSec />
      <ComplexDocSec/>
      <CardGridSection />
      <ReviewSec/>
      <PricingSec/>
      <ThankSec/>
      <Footer/>
    </Box>
    // </Box>
  );
};

export default PageContent;
