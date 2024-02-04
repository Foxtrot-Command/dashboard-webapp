'use server'

import { signIn } from "app/auth";

export const login = async (values: any) => {
  const { email, password } = values;

  try {

    const signDetails = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return 'Success';
  } catch (error) {
    return 'UnknownError';
  }
};
