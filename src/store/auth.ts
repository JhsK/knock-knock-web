import { create } from "zustand";

interface IAuthState {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
}

const useAuthStore = create<IAuthState>((set) => ({
  accessToken: "",
  setAccessToken: (accessToken) => set({ accessToken }),
}));

export default useAuthStore;
