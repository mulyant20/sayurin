import { useUserAuth } from "../context/UserAuthContextProvider";
import { auth, createUser } from "../services/firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

export default function RegisterMitra() {
  const router = useRouter();
  const { signUp } = useUserAuth();

  const [dataLogin, setDataLogin] = useState({
    username: "",
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
      const { user } = await signUp(dataLogin.mail, dataLogin.password);
      await createUser(user, dataLogin.username, "mitra");
      await updateProfile(user, { displayName: dataLogin.username });
      setDataLogin({
        username: "",
        mail: "",
        password: "",
      });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        createUser(res.user, res.user.displayName, "mitra");
      })
      .catch((err) => {
        console.log(err);
      });
    router.push("/");
  };

  return (
    <div className="h-screen w-screen flex justify-between">
      <div className="h-full bg-white w-screen md:w-1/2 flex justify-center items-center">
        <div className="w-80 h-fit text-center">
          <h1 className="mb-6 text-2xl text-gray-800">Daftar sebagai mitra</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Name"
                value={dataLogin.username}
                onChange={handleChange}
                name="username"
                className="border border-gray-200 rounded px-4 py-3 outline-none"
              />
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
                Daftar
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
            sudah punya akun mitra?{" "}
            <span className="text-gray-700 font-semibold">
              <Link href="/loginMitra">Masuk</Link>
            </span>{" "}
            disini
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full bg-gray-100 hidden md:block"></div>
    </div>
  );
}
