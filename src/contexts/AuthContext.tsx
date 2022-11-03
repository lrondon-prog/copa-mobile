import { createContext, ReactNode } from "react";

interface UserProps {
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user: UserProps;
    signIn:() => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);


export function AuthContextProvider({ children }){

    async function signIn(){ }

    return (
        <AuthContext.Provider value={{
            signIn,
            user: {
                name: 'Luis Rondon',
                avatarUrl: 'https://github.com/lrondon-prog.png'
            }
        }}>
         {children}
        </AuthContext.Provider>
    );
}