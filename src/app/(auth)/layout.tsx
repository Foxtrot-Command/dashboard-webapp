import { auth } from "app/auth"
import { Navbar } from "common/components";
import { redirect } from "next/navigation"
import React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <React.Fragment>
      <Navbar session={session}/>
      {children}
    </React.Fragment>
  )
}
