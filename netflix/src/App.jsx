import React from "react";
import Body from "./component/Body";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Body />
      <Toaster />
    </div>
  );
};

export default App;
