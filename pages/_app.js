import "../styles/globals.css";
import NavBar from "../components/Navigation/NavBar";
import { AuthContext } from "../context/auth-context";
import { useState, useCallback } from "react";

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  return (
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
  );
}

export default MyApp;
