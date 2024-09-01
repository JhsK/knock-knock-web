import ky from "@toss/ky";

const DEFAULT_API_RETRY_LIMIT = 3;
let accessToken: string | null = null;

export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_HOST,
  credentials: "include",
  retry: {
    limit: DEFAULT_API_RETRY_LIMIT,
  },
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set("Authorization", `Bearer ${accessToken}`);
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (response.status === 401) {
          const { accessToken } = await api<{ accessToken: string }>(
            "user/refresh"
          ).json();
          request.headers.set("Authorization", `Bearer ${accessToken}`);
          return ky(request);
        }
      },
    ],
  },
});

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};
