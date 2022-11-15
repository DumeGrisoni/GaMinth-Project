import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import NavBar from "../components/NavBar";
import Header from "../components/Header";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="app-container">
      <NavBar />
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
