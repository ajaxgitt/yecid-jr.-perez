export const Pill = ({
  children,
  sm = false,
}: {
  children: React.ReactNode
  sm?: boolean
}) => {
  return (
    <span
      className={`bg-slate-800 border border-slate-700/60 rounded-full text-slate-400 ${
        sm ? "text-[11px] px-2 py-0.5" : "text-xs px-3 py-1"
      }`}
    >
      {children}
    </span>
  )
}
