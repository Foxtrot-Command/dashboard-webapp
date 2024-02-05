import { LoginForm } from 'features/Login/forms/LoginForm'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Foxtrot Command Dashboard",
};

export default function LoginPage () {
  return (
    <LoginForm/>
  )
}
