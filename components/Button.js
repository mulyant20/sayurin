export default function Button({ text, click }) {
  return (
    <button
      className="min-w-[120px] h-[48px] px-6 btn bg-primary active:bg-[#00AD7A] rounded-[10px] hover:shadow-md hover:shadow-primary/30 duration-[150ms] ease-in"
      onClick={click}
    >
      <span className="text-white text-[14px] lg:text-[18px] lg:text-[15px] font-normal lg:font-semibold">
        {text}
      </span>
    </button>
  );
}
