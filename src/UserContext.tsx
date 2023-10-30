import { createContext } from "react";
import { UserContextType } from "./interfaces";



export const UserContext = createContext<UserContextType | null>(null)