import { useState } from "react";
import { X, Eye, EyeOff, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";
import { Chrome } from "lucide-react";
interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LoginModal({
  open,
  onClose,
}: Props) {
  const [isLogin, setIsLogin] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const loginWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin,
    },
  });
};

  if (!open) return null;

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      if (isLogin) {

        const { error } =
          await supabase.auth.signInWithPassword({

            email,

            password,

          });

        if (error) throw error;

      } else {

        const { error } =
          await supabase.auth.signUp({

            email,

            password,

          });

        if (error) throw error;

        alert(
          "Account created successfully."
        );

      }

      onClose();

    } catch (err: any) {

      setError(err.message);

    }

    setLoading(false);

  }

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-5">

      <div className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden">

        {/* Header */}

        <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 p-8">

          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-white"
          >
            <X />
          </button>

          <h2 className="text-3xl font-bold text-white">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>

          <p className="text-white/80 mt-2">
            GlowByDipali Beauty
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-5"
        >

          <input
            type="email"
            required
            placeholder="Email Address"
            className="w-full border rounded-xl px-4 py-3 outline-none"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <div className="relative">

            <input
              required
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              className="w-full border rounded-xl px-4 py-3 outline-none pr-12"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={()=>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-4 top-4"
            >
              {showPassword ? (
                <EyeOff size={18}/>
              ) : (
                <Eye size={18}/>
              )}
            </button>

          </div>

          {error &&

          <div className="text-red-500 text-sm">

            {error}

          </div>

          }

          <button
            disabled={loading}
            className="w-full rounded-xl py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold flex justify-center items-center gap-2"
          >

            {loading ? (
              <>
                <Loader2 className="animate-spin"/>
                Please wait...
              </>
            ) : (
              isLogin
                ? "Login"
                : "Create Account"
            )}

          </button>

          <button
            type="button"
            onClick={()=>
              setIsLogin(!isLogin)
            }
            className="w-full text-rose-500 font-medium"
          >
            {isLogin
              ? "Create new account"
              : "Already have an account?"}
          </button>

          <div className="relative my-5">
  <div className="absolute inset-0 flex items-center">
    <div className="w-full border-t border-gray-200"></div>
  </div>

  <div className="relative flex justify-center text-xs uppercase">
    <span className="bg-white px-3 text-gray-400">
      Or Continue With
    </span>
  </div>
</div>

<button
  type="button"
  onClick={loginWithGoogle}
  className="w-full rounded-xl border border-gray-200 py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
>
  <Chrome size={18} />

  Continue with Google
</button>

        </form>

      </div>

    </div>
  );
}