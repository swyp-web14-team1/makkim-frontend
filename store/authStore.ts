import { create } from "zustand";


interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthStore{
    isLoggedIn: boolean;
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    isLoggedIn: false,
    user: null,
    login: (user: User) => set({ isLoggedIn: true, user }),
    logout: () => set({ isLoggedIn: false, user: null }),
}))