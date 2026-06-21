export const StatCard = ({ num, label }: { num: string; label: string }) => {
  return (
    <div className="bg-slate-950 border border-slate-700/60 rounded-lg px-4 py-2 text-center">
      <p className="text-base font-medium text-blue-300">{num}</p>
      <p className="text-[11px] text-slate-500 mt-0.5">{label}</p>
    </div>
  )
}
