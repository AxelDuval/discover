import "../styles/globals.css";
import NavBar from "../components/Navigation/NavBar";
import { AuthContext } from "../context/auth-context";
import { useAuth } from "../hooks/auth-hook";

function MyApp({ Component, pageProps }) {
  const { token, login, logout, userId } = useAuth();
  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
        }}
      >
        <NavBar />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default MyApp;
