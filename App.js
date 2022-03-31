import React from "react";
import Home from "./Component/Home";
import Navigations from "./routes/Navigations";
import AddListing from "./Component/AddListing";
import RegistrationUser from "./Component/RegistrationAdmin";
import Realtor from "./Component/Realtor";

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
  return <Navigations />;
  //return <AddListing />;
}
