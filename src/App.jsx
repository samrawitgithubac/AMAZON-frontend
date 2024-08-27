import React, { useContext, useEffect } from "react";
import Routing from "./Router.jsx";
import { Type } from "./Utils/action.type.js";
import { auth } from "./Utils/firebase.js";
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //  console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
