import "../styles/globals.css";
import NavBar from "../components/Navigation/NavBar";
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NavBar />
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
