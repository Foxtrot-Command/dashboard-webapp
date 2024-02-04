'use server'

import { auth } from "app/auth";

export default async function getSession() {
  return await auth();
}
