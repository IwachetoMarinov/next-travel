"use client";

// import * as z from "zod";
import React, { Suspense, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { PROFILE_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
// import { auth } from "@/lib/firebase/firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useForm } from "react-hook-form";

// const formSchema = z.object({
//   email: z.string().email({ message: "Enter a valid email address" }),
//   password: z
//     .string()
//     .min(3, { message: "Password must be at least 3 characters" }),
// });

// type UserFormValue = z.infer<typeof formSchema>;

export default function Login() {
  const [loading, setLoading] = useState(false);
  // const defaultValues = {
  //   email: "",
  //   password: "",
  // };
  useEffect(() => {
    setLoading(true);
  }, []);
  // const form = useForm<UserFormValue>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues,
  // });

  // const onSubmit = async (data: UserFormValue) => {
  //   try {
  //     const response = await signInWithEmailAndPassword(
  //       auth,
  //       data.email,
  //       data.password
  //     );

  //     console.log("Response ", response);
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  //   console.log("credentials", {
  //     email: data.email,
  //     password: data.password,
  //     callbackUrl: "/dashboard",
  //   });
  // };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <main className="w-full p-5 flex items-center justify-center">
          <section className="w-1/3">
            <Button disabled={loading} className="ml-auto w-full" type="submit">
              Continue With Email
            </Button>
          </section>
        </main>
      </Suspense>
    </>
  );
}
