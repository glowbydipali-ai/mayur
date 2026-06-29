import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  Session,
  User,
} from "@supabase/supabase-js";

import { supabase } from "../lib/supabase";

interface AuthContextType {

  user: User | null;

  session: Session | null;

  loading: boolean;

  signOut: () => Promise<void>;

}

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({
  children,
}:{
  children:ReactNode
}){

  const [session,setSession]=useState<Session|null>(null);

  const [user,setUser]=useState<User|null>(null);

  const [loading,setLoading]=useState(true);

  useEffect(()=>{

    supabase.auth.getSession().then(({data})=>{

      setSession(data.session);

      setUser(data.session?.user ?? null);

      setLoading(false);

    });

    const {

      data:{subscription},

    }=supabase.auth.onAuthStateChange(
      (_event,session)=>{

        setSession(session);

        setUser(session?.user ?? null);

      }
    );

    return ()=>subscription.unsubscribe();

  },[]);

  async function signOut(){

    await supabase.auth.signOut();

  }

  return(

    <AuthContext.Provider
      value={{
        session,
        user,
        loading,
        signOut,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export function useAuth(){

  return useContext(AuthContext);

}