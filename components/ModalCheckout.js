import Button from "../components/Button";

export default function ModalCheckout({ click }) {
  return (
    <div className="w-full lg:w-[500px] h-80 modal-checkout bottom-0 left-1/2 -translate-x-1/2 px-3 lg:px-0">
      <div className="bg-white w-full h-full rounded-t-[16px] shadow-lg flex flex-col p-6">
        <div>
          <button
            className="h-10 w-10 rounded-full bg-gray-100 hover:bg-red-200 active:bg-red-500 text-red-500 hover:text-red-800 active:text-white duration-[150ms] ease-in"
            onClick={click}
          >
            X
          </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">Ringkasan Pembelian</p>
          <div className="w-full h-fit">
            <div className="flex justify-between mt-4">
              <p className="text-gray-500">Total</p>
              <p className="text-gray-700 font-semibold">Rp. 100000</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-gray-500">Diskon</p>
              <p className="text-gray-700 font-semibold">Rp. 100000</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-gray-500">Subtotal</p>
              <p className="text-gray-700 font-semibold">Rp. 100000</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <Button text="Bayar" />
        </div>
      </div>
    </div>
  );
}
