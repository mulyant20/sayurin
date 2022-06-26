import { useUserAuth } from "../context/UserAuthContextProvider";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
    <div>
      <div className="max-w-96 h-32 absolute left-1/2 top-[116px] lg:top-12 -translate-x-1/2 flex items-center justify-center">
        <div className="w-[72px] h-[80px] relative">
          <Image src="/img/logo-big.png" layout="fill" priority="20" />
        </div>
      </div>
      <div className="h-[560px] lg:h-fit bg-white w-screen md:w-fit px-8 py-10 flex justify-center items-start absolute bottom-0 lg:bottom-6 left-1/2 rounded-t-[24px] lg:rounded-xl -translate-x-1/2">
        <div className="w-96 h-fitG">
          <h1 className="mb-6 text-2xl text-gray-800 mb-8">Masuk</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Email"
                value={dataLogin.mail}
                onChange={handleChange}
                name="mail"
                className="border border-gray-200 rounded-md px-4 py-3 outline-none bg-[#F5F5F5] mb-3 w-full"
              />
              <input
                type="password"
                placeholder="Password"
                value={dataLogin.password}
                onChange={handleChange}
                name="password"
                className="border border-gray-200 rounded-md px-4 py-3 outline-none bg-[#F5F5F5] w-full"
              />
              <button
                type="submit"
                className="mt-4 py-3 text-white bg-primary rounded-md hover:shadow-md hover:shadow-primary/30 font-semibold"
              >
                Login
              </button>
            </div>
          </form>
          <button
            className="w-full mt-4 py-3 text-white bg-[#454DFF] rounded-md hover:shadow-md hover:shadow-blue-200 font-semibold"
            onClick={signInGoogle}
          >
            Google
          </button>
          <p className="mt-4 text-gray-400 text-center">
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
