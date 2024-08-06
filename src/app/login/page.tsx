"use client";

import Link from "next/link";

function LoginPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="cursor-pointer">
        <h1 className="mb-5">로그인</h1>
        <div className="flex flex-col">
          <Link href={"http://localhost:3001/user/naver-login"}>
            네이버 로그인
          </Link>
          <Link href={"http://localhost:3001/user/kakao-login"}>
            카카오 로그인
          </Link>
          <Link href={"http://localhost:3001/user/google-login"}>
            구글 로그인
          </Link>
          <Link href={"http://localhost:3001/user/kakao-login"}>
            애플 로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
