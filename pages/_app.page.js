import "../styles/globals.css";
import "../styles/home.module.css";
import "../styles/Main.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/controller";
import "swiper/css/effect-fade";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return(
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp;
