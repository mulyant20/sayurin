import Image from "next/image";

export default function CardProduct({
  nama,
  harga,
  satuan,
  jumbeli,
  click,
  diskon,
  img,
}) {
  let hargaDiskon = harga - (harga * diskon) / 100;

  return (
    <div className="card-product min-h-[200px] bg-white/80 hover:bg-white hover:shadow-sm border border-transparent rounded-[8px] relative p-2 duration-[150ms] ease-in flex flex-col justify-between">
      <div className="w-full h-24 rounded-[5px] border border-gray-200 flex items-center justify-center bg-[#F6F6F6]">
        <div className="w-1/2 h-full relative">
          <Image src={`/img/${img}.png`} layout="fill" priority="20" />
        </div>
      </div>
      <p className="mt-2 text-md text-gray-400">{nama}</p>
      <div className="mt-2 block lg:flex items-center">
        <p className="text-gray-700 text-[16px] font-semibold">
          Rp. {diskon ? hargaDiskon : harga}
          <span className="text-gray-200 font-normal text-[14px]">
            /{satuan}
          </span>
        </p>
        {diskon != null && (
          <span className="ml-2 text-gray-400 text-[12px] relative harga-normal before:bg-gray-300">
            Rp. {harga}
          </span>
        )}
      </div>
      {diskon != null && (
        <div className="absolute -right-[1px] top-[55%] -translate-y-1/2 bg-red-400 w-[40px] h-6 text-white flex items-center justify-center text-sm">
          {diskon}%
        </div>
      )}
      <div className="mt-3">
        <p className="text-gray-300 text-[12px] mb-[4px]">Terjual {jumbeli}</p>
        <button
          className="w-full h-[30px] text-sm text-[#454DFF] hover:text-white active:text-white bg-[#E0E1FF] hover:bg-[#454DFF] active:bg-[#454DFF] rounded-[5px] duration-[150ms] ease-in flex justify-center items-center gap-2"
          onClick={click}
        >
          Tambah
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#454DFF"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
