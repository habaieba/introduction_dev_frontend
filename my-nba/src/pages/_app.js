import { UserContext, UserDispatchContext } from "@/context/userContext";
import userReducer from "@/reducer/userReducer";
import { useReducer } from "react";

export default function App({ Component, pageProps }) {
  const [user, dispatch] = useReducer(userReducer, {
    isConnected: false,
    username: null,
    avatarUrl: null,
  });

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        <Component {...pageProps} />
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}
