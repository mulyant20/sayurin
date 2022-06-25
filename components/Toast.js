export default function Toast({text}) {
  return (
    <div className="w-screen fixed top-6 right-0 h-fit p-4">
      <div className="bg-slate-600 text-white rounded px-8 py-3 w-full lg:max-w-[200px] text-center ml-auto">
        {text}
      </div>
    </div>
  );
}
