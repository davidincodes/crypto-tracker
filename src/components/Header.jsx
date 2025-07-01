import {
  AppBar,
  Container,
  createTheme,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const Header = () => {
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();

  const darktheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  return (
    <ThemeProvider theme={darktheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              sx={{
                flex: 1,
                color: "gold",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
              variant="h6"
            >
              Crypto Tracker
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 50,
                marginRight: 15,
                color: "white",
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
