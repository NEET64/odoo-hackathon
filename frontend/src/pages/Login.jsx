import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "../../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    setIsLoading(true);
    let promise = axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/users/login`,
      values
    );
    toast.promise(promise, {
      loading: "Loading...",
      success: (response) => {
        const { token } = response.data;
        localStorage.setItem("token", token);
        // setIsLoggedIn(true);
        navigate("/books");
        return response.data.message;
      },
      error: (error) => error.response.data.message,
      finally: () => setIsLoading(false),
    });
  };

  const handleGoogleLogin = () => {
    // window.location.href = "/auth/google";
    window.open(`${import.meta.env.VITE_BACKEND_URL}/auth/google`, "_self");
  };

  return (
    <>
      <div className="grid items-center p-4 min-h-svh dark:bg-zinc-950">
        <Card className="mx-auto max-w-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                  Enter your email below to login to your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="grid">
                        <FormLabel className="text-left">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="m@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="grid">
                        <div className="flex">
                          <FormLabel className="text-left">Password</FormLabel>
                        </div>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="password"
                            {...field}
                          />
                        </FormControl>
                        <Link
                          href="#"
                          className="ml-auto inline-block text-sm underline"
                        >
                          Forgot your password?
                        </Link>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {isLoading ? (
                    <Button disabled>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </Button>
                  ) : (
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                  )}
                </div>
              </CardContent>
            </form>

            <div className="text-center text-sm mb-4 mx-6 -mt-4">
              <Button className="w-full" onClick={handleGoogleLogin}>
                Log in with Google &nbsp;
                <FaGoogle />
              </Button>
            </div>

            <div className="m-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="underline">
                Sign up
              </Link>
            </div>

            <div className="w-full text-center">
            <h3 className="text-zinc-400">user: s@gmail.com</h3>
            <h3 className="text-zinc-400">password: 123456</h3>
          </div>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default LoginForm;
