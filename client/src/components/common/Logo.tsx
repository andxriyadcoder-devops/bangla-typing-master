export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
        BT
      </div>

      <div>
        <h1 className="text-lg font-bold text-white">
          Bangla Typing Master
        </h1>

        <p className="text-xs text-slate-400">
          Bijoy • Avro • Unicode
        </p>
      </div>
    </div>
  );
}