import { Typography, Container } from "@mui/material";
import { Carousel } from "./Carousel";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(./banner2.jpg)",
          height: 400,
          display: "flex",
          paddingTop: 25,
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          style={{ fontWeight: "bold", marginBottom: 15 }}
        >
          Crypto Tracker
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            color: "darkgray",
            textTransform: "capitalize",
            display: "flex",
            height: 40,
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Get All The Info Regarding Your Favourite Crypto Currency
        </Typography>
        <Carousel />
      </div>
    </div>
  );
};

export default Banner;
