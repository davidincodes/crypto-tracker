import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { HomePage } from "./pages/Homepage";
import { CoinPage } from "./pages/CoinPage";
import { Box, makeStyles } from "@mui/material";

function App() {
  return (
    <Box
      sx={{ backgroundColor: "#14161a", color: "white", minHeight: "100vh" }}
    >
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/coins/:id" Component={CoinPage} />
          </Routes>
        </BrowserRouter>
      </div>
    </Box>
  );
}

export default App;
