import Image from "next/image";

export default function CartProduct({ nama, harga, diskon, satuan, jum, subtotal }) {
  let hargaDiskon = subtotal - (harga * diskon) / 100;

  return (
    <div className="flex justify-between">
      <div className="flex gap-[10px] h-[75px]">
        <div className="w-[80px] h-[80px] rounded border border-gray-400 overflow-hidden relative">
            <Image
              src="/img/productPlaceholder.png"
              layout="fill"
              priority="20"
            />
        </div>
        <div className="flex flex-col justify-center text-gray-600">
          <h5>{nama}</h5>
          <p className="text-gray-700 text-[16px] font-semibold">
            Rp. {diskon ? hargaDiskon : harga}
            <span className="text-gray-400 font-normal text-[14px]">
              /{satuan}
            </span>
          </p>
          {diskon && (
            <div>
              <span className="inline-block py-[2px] px-[10px] rounded bg-[#FCCECE] text-[#D10505] text-[14px]">
                {diskon}%
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end justify-center">
        <p className="text-[14px] text-gray-400">Subtotal</p>
        <p className="text-gray-700 text-[14px] font-semibold">Rp. {diskon ? hargaDiskon : subtotal}</p>
        <p className="text-[14px] text-gray-400">Jumlah : <span className="text-gray-500">{jum}</span></p>
      </div>
    </div>
  );
}
