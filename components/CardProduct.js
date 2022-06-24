import Image from "next/image";

export default function CardProduct({
  nama,
  harga,
  satuan,
  jumbeli,
  click,
  diskon,
}) {
  let hargaDiskon = harga - (harga * diskon) / 100;

  return (
    <div className="card-product min-h-[200px] bg-white/80 hover:bg-white hover:shadow-sm border border-transparent rounded-[8px] relative p-2 duration-[150ms] ease-in flex flex-col justify-between">
      <div className="w-full h-24 rounded-[5px] border border-gray-200 overflow-hidden relative">
        <Image src="/img/productPlaceholder.png" layout="fill" priority="20" />
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
      <div>
        <p className="text-gray-300 text-[12px] mb-2">Terjual {jumbeli}</p>
        <button
          className="w-full py-1 text-sm text-blue-400 hover:text-white bg-blue-100 hover:bg-blue-600 rounded-[5px] duration-[150ms] ease-in"
          onClick={click}
        >
          Tambah
        </button>
      </div>
    </div>
  );
}
