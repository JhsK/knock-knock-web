"use client";

import { spriteCode } from "@/ui/atom/Icon/sheet";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function GlobalSvgProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(spriteCode, document.body);
}
