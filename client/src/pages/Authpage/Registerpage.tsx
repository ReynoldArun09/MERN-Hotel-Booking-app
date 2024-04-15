import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import RegisterForm from "./_components/RegisterForm";

export default function Registerpage() {
  return (
    <section className="h-screen flex">
    <Card className="m-auto w-[450px] rounded-xl">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Choose your preferred sign in method</CardDescription>
      </CardHeader>
      <CardContent>
        {/* auth sign in buttons */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <RegisterForm />
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="space-x-2">
          <span className="text-muted-foreground text-sm">Already have an account?</span>
          <Link to={'/login'} className="hover:underline hover:underline-offset-4" aria-label="sign in">Sign In</Link>
        </div>
      </CardFooter>
    </Card>
  </section>
  )
}
