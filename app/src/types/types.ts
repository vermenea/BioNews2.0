import { ReactNode } from "react";

export interface RegisterInputs {
    username: string;
    email: string;
    password: string;
  }
export interface LoginInputs {
    username: string;
    password: string;
  }
export interface AuthContextProviderProps {
    children: ReactNode;
  }

export interface AuthContextType {
    currentUser: User | null;
    login: (inputs: { username: string; password: string }) => Promise<void>;
    logout: () => Promise<void>;
  }
export interface User {
    id: number;
    username: string;
    email: string;
  }