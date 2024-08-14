"use client";

import { setAccessToken } from "@/api";
import { useRouter, useSearchParams } from "next/navigation";

function LoginRedirectPage() {
  const { replace } = useRouter();
  const search = useSearchParams();
  const accessToken = search.get("accessToken");

  if (accessToken) {
    setAccessToken(accessToken);
    replace("/");
  }

  return <></>;
}

export default LoginRedirectPage;
