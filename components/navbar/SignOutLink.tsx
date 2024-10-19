"use client";
import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "خروج با موفقیت انجام شد" });
  };
  return (
    <SignOutButton>
      <Link href="/" className="w-full text-right" onClick={handleLogout}>
        خروج
      </Link>
    </SignOutButton>
  );
}
export default SignOutLink;
