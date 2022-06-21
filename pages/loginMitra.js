import { useState } from "react";
import Link from "next/link";

export default function LoginMitra() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataLogin);
  };
  return (
    <div className="h-screen w-screen flex justify-betwee">
      <div className="h-full bg-white w-screen md:w-1/2 flex justify-center items-center">
        <div className="w-80 h-fit text-center">
          <h1 className="mb-6 text-2xl text-gray-800">Masuk sebagai mitra</h1>
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
          <button className="w-full mt-4 py-2 text-white bg-blue-500 rounded shadow font-semibold">
            Google
          </button>
          <p className="mt-2 text-gray-400">
            Belum punya akun?{" "}
            <span className="text-gray-700 font-semibold">
              <Link href="/registerMitra">Daftar</Link>
            </span>{" "}
            disini
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full bg-gray-100 hidden md:block"></div>
    </div>
  );
}