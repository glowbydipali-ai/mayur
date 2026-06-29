import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function signup(){

    const {error}=await supabase.auth.signUp({

      email,
      password

    });

    if(error){

      alert(error.message);

    }else{

      alert("Signup Successful");
    }

  }

  async function signin(){

    const {error}=await supabase.auth.signInWithPassword({

      email,
      password

    });

    if(error){

      alert(error.message);

    }else{

      alert("Login Successful");
    }

  }

  return(

<div className="min-h-screen flex justify-center items-center">

<div className="bg-white shadow-xl rounded-xl p-8 w-96">

<h1 className="text-3xl font-bold mb-6 text-center">

Login

</h1>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="border w-full p-3 rounded mb-4"

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="border w-full p-3 rounded mb-6"

/>

<button

onClick={signin}

className="bg-pink-600 text-white w-full py-3 rounded"

>

Login

</button>

<button

onClick={signup}

className="mt-3 border border-pink-600 text-pink-600 w-full py-3 rounded"

>

Create Account

</button>

</div>

</div>

  )

}