import { useUserAuth } from "../context/UserAuthContextProvider";
import { useEffect, useState } from "react";
import SearchField from "./SearchField";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useUserAuth();
  const [hasCart, setHasCart] = useState(false)

  const checkStorage = (key) => {
    const localcart = localStorage.getItem(key);
    if (localcart) setHasCart(true);
 }

 useEffect(() => {
  checkStorage('cart')
 }, [checkStorage])
  
  const handleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="w-screen h-fit px-6 lg:px-32 py-4 flex items-center justify-between bg-primary gap-[16px] duration-200">
      <div className="w-fit h-fit flex gap-2 items-center hidden md:flex">
        <svg
          id="logo-15"
          width="36"
          height="35"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
            className="ccustom"
            fill="#fff"
          ></path>
          <path
            d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
            className="ccustom"
            fill="#fff"
          ></path>
          <path
            d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
            className="ccustom"
            fill="#fff"
          ></path>
          <path
            d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
            className="ccustom"
            fill="#fff"
          ></path>
        </svg>
        <h1 className="text-white text-[18px] font-bold">
          Sayur<span className="text-white/90">In</span>
        </h1>
      </div>

      <SearchField />

      <div className="w-fit flex justify-end gap-2">
        <div className="w-8 h-8 rounded-full bg-white/40 relative">
          <Link href={"/keranjang"}>
            <div className="w-full h-full flex items-center justify-center cursor-pointer">
              <Image src="/icons/cart.svg" width="20" height="20" alt="cart" />
            </div>
          </Link>
          {hasCart && <div className="w-[13px] h-[13px] rounded-full bg-[#FF4B4B] absolute -top-[2px] -right-[3px] border-[2px] border-primary"></div>}
        </div>
        {user ? (
          <>
            <div className="relative w-8 h-8">
              <button
                className="h-full w-full rounded-full bg-white/40"
                onClick={handleOpen}
              ></button>
              {isOpen && (
                <div className="absolute -bottom-[48px] right-0 h-[40px] w-20 bg-white menu-profile shadow">
                  <button
                    onClick={logOut}
                    className="w-full text-center py-2 text-red-500"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link href={"/login"}>
              <button className="px-2 py-1 rounded flex justify-center items-center bg-white/30 text-white text-sm hidden md:block">
                Login
              </button>
            </Link>
            <Link href={"/register"}>
              <button className="px-2 py-1 rounded flex justify-center items-center bg-white/30 text-white text-sm hidden md:block">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
