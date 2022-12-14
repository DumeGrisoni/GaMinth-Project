import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import "../styles/globals.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import NavBar from "../components/NavBar";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="app-container">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
