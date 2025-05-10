"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingPage from "@/components/LoadingPage";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/Forside");
    }, 100);

    return () => clearTimeout(timer);
  }, [router]);

  return <LoadingPage />;
}
