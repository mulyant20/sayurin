import { useRouter } from "next/router";

export default function Button({ goto, path, text, click }) {
  const router = useRouter();

  const moveTo = () => {
    router.push(`${path}`);
  };
  return (
    <button
      className="min-w-[120px] h-[48px] px-6 btn bg-primary rounded-[10px] duration-[150ms] ease-in"
      onClick={goto ? moveTo : click}
    >
      <span className="text-white text-[18px] lg:text-[15px] font-semibold">{text}</span>
    </button>
  );
}
