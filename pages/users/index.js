import UsersList from "../../components/Users/UserList";
import { useState, useEffect } from "react";

export default function index() {
  const [loadedUsers, setLoadedUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/users");
        const responseData = await response.json();

        if (!responseData) {
          throw new Error(responseData.message);
        }

        setLoadedUsers(responseData.users);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };
    sendRequest();
  }, []);
  return <>{!isLoading && loadedUsers && <UsersList items={loadedUsers} />}</>;
}
