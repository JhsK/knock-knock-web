import ky from "@toss/ky";

const DEFAULT_API_RETRY_LIMIT = 3;
let accessToken: string | null = null;

export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_HOST,
  retry: {
    limit: DEFAULT_API_RETRY_LIMIT,
  },
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set("Authorization", `Bearer ${accessToken}`);
      },
    ],
    beforeRetry: [
      async ({ request, options, error, retryCount }) => {
        const test = error as any;
        console.log("error", error);

        if (test !== 401) {
          return ky.stop;
        }

        if (retryCount === DEFAULT_API_RETRY_LIMIT - 1) {
          return ky.stop;
        }

        const token = await ky("http://localhost:3001/user/refresh");
        console.log("token", token);
      },
    ],
  },
});

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};
