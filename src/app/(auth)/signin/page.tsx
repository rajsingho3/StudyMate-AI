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

type SigninErrorResponse =
  | { error: ZodIssue[] }
  | { message: string };

export default function SigninPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data: SigninErrorResponse = await res.json();

      if (!res.ok) {
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

        if ("message" in data) {
          setErrors({ form: data.message });
        } else {
          setErrors({ form: "Login failed" });
        }
        return;
      }

      router.push("/dashboard");
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[radial-gradient(ellipse_at_top,#2b145f_0%,#0b061a_60%)]">
      <Card
        className="
          w-full max-w-md
          bg-[#120A2A]/80
          backdrop-blur-xl
          border border-violet-500/20
          shadow-[0_0_60px_-15px_rgba(124,58,237,0.5)]
        "
      >
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-bold text-center text-white">
            Welcome back to{" "}
            <span>
              Study <span className="text-purple-500">Mate</span> AI
            </span>
          </CardTitle>
          <CardDescription className="text-center text-violet-200/80">
            Ask questions from your notes using AI
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                  focus-visible:border-violet-500
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
                  focus-visible:border-violet-500
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

            {/* Submit Button */}
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
              {loading ? "Signing in..." : "Sign In"}
            </Button>

            {/* Links */}
            <div className="flex justify-between text-sm">
              <Link
                href="/forgot-password"
                className="text-violet-400 hover:text-violet-300 hover:underline"
              >
                Forgot password?
              </Link>
              <Link
                href="/signup"
                className="text-violet-400 hover:text-violet-300 hover:underline"
              >
                Create account
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
