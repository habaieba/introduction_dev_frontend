import { UserContext, UserDispatchContext } from "@/context/userContext";
import userReducer from "@/reducer/userReducer";
import Router from "next/router";
import { useEffect, useReducer } from "react";

export default function App({ Component, pageProps }) {
  const [user, dispatch] = useReducer(userReducer, {
    isConnected: false,
    username: null,
    avatarUrl: null,
  });

  useEffect(() => {
    if (!user.isConnected) Router.push("/login");
  }, [user.isConnected]);

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        <Component {...pageProps} />
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}
