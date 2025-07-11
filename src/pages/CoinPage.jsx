import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import axios from "axios";
import { SingleCoin } from "../components/config/config";
import { Box, styled, Typography } from "@mui/material";
import { CoinInfo } from "../components/CoinInfo";

export const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  console.log(coin);
  useEffect(() => {
    fetchCoin();
  }, []);

  const SideBar = styled("SideBar")({});
  return (
    <Box
      sx={{
        display: "flex",
        [(theme) => theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <img
        src={coin?.image?.large}
        alt={coin?.name}
        height="200"
        style={{ marginBottom: 20 }}
      />
      <Typography variant="h3">{coin?.name}</Typography>
      <Box
        sx={{
          width: { xs: "100%", md: "30%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 3, // 25px ≈ 3 * 8px (theme spacing)
          borderRight: { md: "2px solid grey", xs: "none" },
        }}
      ></Box>
      <CoinInfo coin={coin} />
    </Box>
  );
};
