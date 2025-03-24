import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In | Remove Shadow",
  description: "Sign in to your Remove Shadow account",
  robots: {
    index: false,
    follow: false,
  }
}
export default function SignInPage() {
  return <SignIn />;
}
