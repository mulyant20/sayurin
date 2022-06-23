import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useUserAuth } from "../context/UserAuthContextProvider";
import { auth } from "../services/firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const { logIn, googleSignIn } = useUserAuth();
  const router = useRouter();

  const [dataLogin, setDataLogin] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(dataLogin.mail, dataLogin.password);
      setDataLogin({
        mail: "",
        password: "",
      });
      router.push("/");
    } catch (err) {}
  };

  const signInGoogle = async () => {
    try {
      await googleSignIn()
        .then((res) => {
          createCustomer(res.user, res.user.displayName, "customer");
        })
        .catch((err) => {});
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-betwee">
      <div className="w-1/2 h-full bg-gray-100 hidden md:block"></div>
      <div className="h-full bg-white w-screen md:w-1/2 flex justify-center items-center">
        <div className="w-80 h-fit text-center">
          <h1 className="mb-6 text-2xl text-gray-800">Masuk</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Email"
                value={dataLogin.mail}
                onChange={handleChange}
                name="mail"
                className="border border-gray-200 rounded px-4 py-3 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                value={dataLogin.password}
                onChange={handleChange}
                name="password"
                className="border border-gray-200 rounded px-4 py-3 outline-none"
              />
              <button
                type="submit"
                className="mt-4 py-2 text-white bg-green-500 rounded shadow font-semibold"
              >
                Login
              </button>
            </div>
          </form>
          <button
            className="w-full mt-4 py-2 text-white bg-blue-500 rounded shadow font-semibold"
            onClick={signInGoogle}
          >
            Google
          </button>
          <p className="mt-2 text-gray-400">
            Belum punya akun?{" "}
            <span className="text-gray-700 font-semibold">
              <Link href="/register">Daftar</Link>
            </span>{" "}
            disini
          </p>
        </div>
      </div>
    </div>
  );
}
