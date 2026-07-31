import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

function SocialButton({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/50 text-white/95 transition-colors hover:bg-white hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      {children}
    </a>
  );
}

export default function LoginForm() {
  return (
    <main
      className="min-h-screen px-4 py-10"
      style={{
        background:
          "radial-gradient(circle at center, rgba(147, 181, 144, 1) 0%, rgba(104, 146, 109, 1) 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <Card className="relative overflow-hidden rounded-2xl border-0 shadow-2xl">
          <div className="pointer-events-none absolute -right-24 -top-16 h-56 w-56 rounded-full bg-emerald-200/60 blur-2xl" />
          <div className="pointer-events-none absolute -left-24 bottom-10 h-56 w-56 rounded-full bg-emerald-200/40 blur-2xl" />
          <div className="pointer-events-none absolute -right-10 bottom-24 h-24 w-24 rounded-full bg-emerald-200/30 blur-xl" />

          <div className="grid min-h-[680px] grid-cols-1 md:grid-cols-2">
            <section className="relative z-10 bg-white">
              <CardHeader className="px-8 pt-10 md:px-14">
                <div className="flex items-center justify-between">
                  <div className="select-none text-lg font-extrabold tracking-[0.18em] text-gray-800">
                    BLAXE<span className="text-primary">.</span>
                  </div>
                  <Badge variant="secondary" className="hidden sm:inline-flex">
                    Create account
                  </Badge>
                </div>
                <CardTitle className="mt-10 text-2xl font-bold text-gray-900">
                  Sign Up
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Start building, shipping, and showcasing your work.
                </p>
              </CardHeader>

              <CardContent className="px-8 pb-10 md:px-14">
                <form
                  className="mt-4 space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="full-name"
                      className="text-[10px] font-semibold uppercase tracking-widest text-gray-500"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="full-name"
                      name="full-name"
                      type="text"
                      placeholder="John Doe"
                      className="h-11 rounded-lg bg-gray-50/70"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="text-[10px] font-semibold uppercase tracking-widest text-gray-500"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 555 000 0000"
                      className="h-11 rounded-lg bg-gray-50/70"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-[10px] font-semibold uppercase tracking-widest text-gray-500"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="h-11 rounded-lg bg-gray-50/70"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="password"
                      className="text-[10px] font-semibold uppercase tracking-widest text-gray-500"
                    >
                      Password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      className="h-11 rounded-lg bg-gray-50/70"
                      required
                    />
                  </div>

                  <div className="pt-3">
                    <Button
                      type="submit"
                      className="h-11 w-full rounded-lg bg-[#67ac74] text-[11px] font-extrabold tracking-[0.22em] uppercase text-white hover:bg-emerald-700"
                    >
                      Register now
                    </Button>
                    <p className="mt-4 text-center text-xs text-gray-500">
                      You already have an account?{" "}
                      <a
                        href="#"
                        className="font-semibold text-emerald-700 hover:underline"
                      >
                        Log in
                      </a>
                      .
                    </p>
                  </div>
                </form>
              </CardContent>
            </section>

            <section
              className="relative hidden overflow-hidden md:block"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(16, 95, 62, 0.25), rgba(16, 95, 62, 0.25)), url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop)",
                backgroundSize: "cover",
                backgroundPosition: "right center",
              }}
            >
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px]" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-12 text-center text-white">
                <div className="select-none text-5xl font-extrabold tracking-[0.25em]">
                  BLAXE<span className="text-white">.</span>
                </div>
                <Separator className="my-10 w-28 bg-white/30" />
                <h3 className="text-3xl font-bold">Hello, Guest!</h3>
                <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/90">
                  Join the community and keep everything in one place: projects,
                  progress, and proof of work.
                </p>

                <div className="mt-10 flex items-center justify-center gap-4">
                  <SocialButton label="Facebook">
                    <FaFacebookF className="h-4 w-4" />
                  </SocialButton>
                  <SocialButton label="X">
                    <FaXTwitter className="h-4 w-4" />
                  </SocialButton>
                  <SocialButton label="Google">
                    <FaGoogle className="h-4 w-4" />
                  </SocialButton>
                  <SocialButton label="LinkedIn">
                    <FaLinkedinIn className="h-4 w-4" />
                  </SocialButton>
                </div>
              </div>
            </section>
          </div>
        </Card>
      </div>
    </main>
  );
}
