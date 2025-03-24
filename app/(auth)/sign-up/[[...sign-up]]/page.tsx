import { SignUp } from "@clerk/nextjs";
import React from "react";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up | Remove Shadow",
  description: "Create your account to start using Remove Shadow's AI image transformation services",
  robots: {
    index: false,
    follow: false,
  }
}
export default function SignUpPage() {
  return <SignUp />;
}
