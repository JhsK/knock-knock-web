"use client";

import { api } from "@/api";
import { useSearchParams } from "next/navigation";

function LoginRedirectPage() {
  const search = useSearchParams();
  const accessToken = search.get("accessToken");

  api.defaults.headers.common["Authorization"] = accessToken;

  return <></>;
}

export default LoginRedirectPage;
