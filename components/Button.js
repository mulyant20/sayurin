import { useRouter } from "next/router";

export default function Button({ goto, path, text, click }) {
  const router = useRouter();

  const moveTo = () => {
    router.push(`${path}`);
  };
  return (
    <button
      className="w-[200px] lg:w-[120px] h-[56px] lg:h-[40px] btn bg-primary rounded-[16px] lg:rounded-[10px] shadow-md hover:shadow-primary/50 duration-[150ms] ease-in"
      onClick={goto ? moveTo : click}
    >
      <span className="text-white text-[18px] lg:text-[15px] font-semibold">{text}</span>
    </button>
  );
}
