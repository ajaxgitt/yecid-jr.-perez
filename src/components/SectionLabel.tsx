const SectionLabel = ({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) => {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span className="text-blue-400">{icon}</span>
      <span className="text-[11px] font-medium tracking-widest uppercase text-blue-400">
        {children}
      </span>
      <div className="flex-1 h-px bg-slate-700/60" />
    </div>
  )
}

export default SectionLabel
