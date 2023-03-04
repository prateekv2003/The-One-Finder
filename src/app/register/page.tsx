import Register from "components/Register";
import { getProviders } from "next-auth/react";
import React from "react";
type Props = {};
interface Inputs {
  email: string;
  password: string;
}
const page = async (props: Props) => {
  const providers = await getProviders();
  return <Register providers={providers} />;
};

export default page;
