"use client";

import useAuthStore from "@/store/auth";
import { useSearchParams } from "next/navigation";

function LoginRedirectPage() {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const search = useSearchParams();
  const accessToken = search.get("accessToken");

  if (accessToken) {
    setAccessToken(accessToken);
  }

  return <></>;
}

export default LoginRedirectPage;
