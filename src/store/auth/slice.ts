import { User } from "../../models/user";

interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
  }