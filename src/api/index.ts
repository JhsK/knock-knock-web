import ky from "@toss/ky";

let accessToken: string | null = null;

export const api = ky.create({
  prefixUrl: "http://localhost:3001",
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set("Authorization", `token ${accessToken}`);
      },
    ],
  },
});

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};
