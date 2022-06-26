export default function Toast({ text }) {
  return (
    <div className="max-w-[400px] h-fit fixed top-6 right-6 lg:bottom-3 lg:right-3 toast bg-slate-600 text-white rounded px-8 py-3 text-center">
      {text}
    </div>
  );
}
