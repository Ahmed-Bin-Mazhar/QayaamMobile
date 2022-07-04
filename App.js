import React from "react";

import Navigations from "./routes/Navigations";
import { AuthProvider } from "./context/AuthContext";
import SignIn from "./Component/SignIn";
// const contentful = require("contentful-management");

// async function Connect() {
//   let client = await contentful.createClient({
//     accessToken: "CFPAT--uLUjZNmJkwfLoL2gxElP35OJRkCUCzQhfXQ-zbFjcg",
//   });
//   let space = await client.getSpace("azev7zmpvgwm");
//   return (await space).getEnvironment("master");
// }

// async () => {
//   let env = await Connect();
//   //console.log(env);
// };

export default function App() {
  return (
    <AuthProvider>
      <Navigations />
    </AuthProvider>

    // <AuthProvider>
    //   <SignIn />
    // </AuthProvider>
  );
  //return <AddListing />;
}
