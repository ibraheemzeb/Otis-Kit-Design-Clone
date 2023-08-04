// import logo from './logo.svg';
import "./App.css";
// import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import HeroSection from "./components/heroSection";
import PageContent from "./components/pageContent";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <div sx={{background: "rgb(240, 242, 245)"}}> */}
      <div>
        <CssBaseline />
        <Header />
        <HeroSection />
        <PageContent />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
