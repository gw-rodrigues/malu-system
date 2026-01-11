"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "../../public/logo.svg";
import logoDark from "../../public/logo-dark.svg";
import { useEffect, useState } from "react";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const fallbackLogo = logo;
  const currentLogo = resolvedTheme ? (resolvedTheme === "dark" ? logoDark : logo) : fallbackLogo;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted || !resolvedTheme) {
    return <div className="h-[58px] w-[200px]" />;
  }

  return (
    <Image width={200} height={58} src={currentLogo} alt="Malu System Logo" />
  );
}