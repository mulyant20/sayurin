export default function Toast({ text }) {
  return (
    <div className="max-w-[400px] h-fit fixed top-3 lg:top-20 right-6 toast bg-slate-600 text-white rounded px-8 py-3 text-center">
      {text}
    </div>
  );
}
