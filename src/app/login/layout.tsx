import { auth } from "app/auth"
import { redirect } from "next/navigation"
import React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await auth();
  if (session) {
    redirect("/");
  }

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}
