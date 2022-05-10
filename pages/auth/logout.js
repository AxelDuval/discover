import { useContext } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "../../context/auth-context";
import { useEffect } from "react";

export default function logoutUser() {
  const router = useRouter();
  const auth = useContext(AuthContext);
  
  auth.logout();

  useEffect(() => {
    router.push("/");
  });
  

}
