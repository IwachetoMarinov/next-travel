"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { PROFILE_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import { auth } from "@/lib/firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    email: z.string().email({ message: "Enter a valid email address" }),
    firstName: z
      .string()
      .min(2, { message: "First Name must be at least 3 characters" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 3 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm Password must be at least 3 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type UserFormValue = z.infer<typeof formSchema>;

export default function Register() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl");
  const [loading, setLoading] = useState(false);
  const defaultValues = {
    email: "",
    password: "",
  };
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: UserFormValue) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      if (response?.user?.uid) router.push(PROFILE_ROUTE);

      console.log("Response ", response);
    } catch (error) {
      console.log("Error", error);
    }
    console.log("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: callbackUrl ?? "/dashboard",
    });
  };

  return (
    <>
      <main className="w-full p-5 flex items-center justify-center">
        <section className="w-1/3 pt-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 w-full"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your name"
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email..."
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password..."
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password..."
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={loading}
                className="ml-auto w-full"
                type="submit"
              >
                Register
              </Button>
            </form>
          </Form>
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="h-20 mx-auto">
            <span className="text-sm text-gray-600">
              do not have an account?
              <Link href={LOGIN_ROUTE}>
                <span className="text-blue-500 font-semibold text-md">
                  {" "}
                  Login Here
                </span>
              </Link>
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
