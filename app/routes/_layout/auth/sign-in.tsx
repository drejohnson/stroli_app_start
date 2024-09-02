import { createFileRoute, Link } from '@tanstack/react-router'
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface KeywordProps {
  word: string;
  index: number;
}

const keywords: string[] = [
  "Trending",
  "Viral",
  "Create",
  "Share",
  "Discover",
  "Vertical",
  "Short-form",
  "Original",
  "Content",
  "Creators",
  "Influencers",
  "Shows",
  "Hashtags",
  "Video",
  "Monetize",
  "WTF",
  "Reactions",
  "Funny",
  "OMG",
  "Engagement",
  "Monetization",
  "Followers",
  "Likes",
  "For You",
  "Trends",
  "Reels",
  "Curated",
  "Collaborations",
  "Storytelling",
  "Authenticity",
  "Creativity",
];

export const Route = createFileRoute('/_layout/auth/sign-in')({
  component: SignIn
})

const Keyword: React.FC<KeywordProps> = ({ word, index }) => (
  <span
    key={index}
    className="text-white opacity-1 mix-blend-overlay font-bold px-2 py-1 m-1 select-none"
    style={{
      fontSize: `${Math.random() * (2.5 - 0.25) + 0.5}rem`,
      transform: `rotate(${Math.random() * 60 - 30}deg)`,
    }}
  >
    {word}
  </span>
);

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [showOTP, setShowOTP] = useState<boolean>(false);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setShowOTP(true);
    }
  };

  return (
    <div className="relative w-full min-h-screen h-full grid place-items-center p-28 snap-start snap-always">
      <div className="w-full max-w-[80vh] rounded-3xl overflow-hidden bg-white">
        <div className="grid grid-cols-1 z-20">
          <div className="relative p-8 md:p-32 grid gap-6">
            <div className="flex justify-center">
              <img
                src="/stroli_logo_icon.svg"
                width={64}
                height={64}
                alt="Logo Icon"
              />
              <img
                src="/stroli_logo.svg"
                width={128}
                height={64}
                alt="Logo"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl text-gray-700 font-extrabold uppercase text-center">
                {showOTP ? "Enter OTP" : "Sign in or Sign up"}
              </h2>
              <p className="text-gray-700 font-bold text-center">
                {showOTP
                  ? "We've sent a code to your email."
                  : "Enter your email to get started."}
              </p>
            </div>
            <form className="grid gap-6" onSubmit={handleEmailSubmit}>
              <div className="grid gap-4">
                {showOTP ? (
                  <div className="flex justify-center">
                    <InputOTP
                      maxLength={6}
                      pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                    >
                      <InputOTPGroup className="gap-4">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                ) : (
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="rounded-full py-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                )}
              </div>

              {!showOTP ? (
                <>
                  <Button
                    type="submit"
                    className="w-full rounded-full py-6 bg-primary text-white"
                  >
                    Continue
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">OR</span>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <Button
                      variant="outline"
                      className="w-full rounded-full py-6"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Continue with Google
                    </Button>
                    <Button className="w-full rounded-full bg-black text-white py-6">
                      <svg
                        className="w-5 h-5 mr-2"
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.5 3.51 7.61 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                      </svg>
                      Continue with Apple
                    </Button>
                  </div>
                </>
              ) : (
                <Button
                  type="submit"
                  className="w-full rounded-full py-6 bg-primary text-white mt-6"
                >
                  Verify OTP
                </Button>
              )}
            </form>
            {!showOTP && (
              <p className=" text-gray-950">
                Interested in becoming a creator?{" "}
                <Link
                  to="/onboarding/creator"
                  className="inline-flex items-center text-cyan-500"
                >
                  Apply <ChevronRight />
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-gradient-to-r from-cyan-500 via-cyan-300 to-sky-300 p-4 overflow-hidden -z-[1]">
        {[...keywords, ...keywords].map((word, index) => (
          <Keyword key={index} word={word} index={index} />
        ))}
      </div>
    </div>
  );
};