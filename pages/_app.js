import "../styles/globals.css";
import NavBar from "../components/Navigation/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
