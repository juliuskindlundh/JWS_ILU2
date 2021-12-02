import { useState } from "react";

function useToken() {
  const getToken = () => {
    const t = sessionStorage.getItem("token");
    if(t === null){
        return "";
    }
    return t;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
};

export default useToken;
