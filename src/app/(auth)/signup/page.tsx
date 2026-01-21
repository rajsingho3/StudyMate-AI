"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/* ---------- Types ---------- */
type ZodIssue = {
  path: (string | number)[];
  message: string;
};

type SignupErrorResponse =
  | { error: ZodIssue[] }
  | { message: string };

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data: SignupErrorResponse = await res.json();

      if (!res.ok) {
        // Zod validation errors
        if ("error" in data) {
          const fieldErrors: Record<string, string> = {};

          data.error.forEach((issue) => {
            const field = issue.path[0];
            if (typeof field === "string") {
              fieldErrors[field] = issue.message;
            }
          });

          setErrors(fieldErrors);
          return;
        }

        // Normal API error
        if ("message" in data) {
          setErrors({ form: data.message });
        } else {
          setErrors({ form: "Signup failed" });
        }
        return;
      }

      // Signup success
      router.push("/dashboard");
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[radial-gradient(ellipse_at_top,#2b145f_0%,#0b061a_60%)]">
      <Card className="
        w-full max-w-md
        bg-[#120A2A]/80
        backdrop-blur-xl
        border border-violet-500/20
        shadow-[0_0_60px_-15px_rgba(124,58,237,0.5)]
      ">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-bold text-center text-white">
            Welcome to{" "}
            <span>
              Study <span className="text-purple-500">Mate</span> AI
            </span>
          </CardTitle>
          <CardDescription className="text-center text-violet-200/80">
            Ask questions from your notes using AI
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <Label className="text-violet-200">Name</Label>
              <Input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors((p) => ({ ...p, name: "" }));
                }}
                placeholder="Your name"
                className="
                  bg-[#0b061a]
                  border-violet-500/30
                  text-white
                  placeholder:text-violet-300/40
                  focus-visible:ring-violet-500
                "
              />
              {errors.name && (
                <p className="text-xs text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label className="text-violet-200">Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((p) => ({ ...p, email: "" }));
                }}
                placeholder="you@example.com"
                className="
                  bg-[#0b061a]
                  border-violet-500/30
                  text-white
                  placeholder:text-violet-300/40
                  focus-visible:ring-violet-500
                "
              />
              {errors.email && (
                <p className="text-xs text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label className="text-violet-200">Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((p) => ({ ...p, password: "" }));
                }}
                placeholder="••••••••"
                className="
                  bg-[#0b061a]
                  border-violet-500/30
                  text-white
                  placeholder:text-violet-300/40
                  focus-visible:ring-violet-500
                "
              />
              {errors.password && (
                <p className="text-xs text-red-400">{errors.password}</p>
              )}
            </div>

            {/* Form Error */}
            {errors.form && (
              <p className="text-sm text-red-400 text-center">
                {errors.form}
              </p>
            )}

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-linear-to-r from-violet-600 to-purple-600
                hover:from-violet-500 hover:to-purple-500
                text-white
                shadow-lg shadow-violet-600/30
              "
            >
              {loading ? "Signing up..." : "Sign Up"}
            </Button>
          </form>

          <p className="text-center text-xs text-violet-300/60">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-white">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-white">
              Privacy Policy
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
