export default function StatsBar() {
  const stats = [
    { value: "1500+", label: "Happy Clients" },
    { value: "150+", label: "Attorneys" },
    { value: "200+", label: "Practice Areas" },
    { value: "100%", label: "Case Dismiss" },
  ];

  return (
    <div className="flex justify-center items-center bg-[#f7f9fc] py-8 space-x-12">
      {stats.map((stat, idx) => (
        <div key={stat.label} className="flex items-center">
          <div className="text-4xl font-bold text-[#22314a] text-center">{stat.value}</div>
          <div className="ml-2 text-xs text-gray-500 text-center">{stat.label}</div>
          {idx < stats.length - 1 && (
            <div className="mx-8 h-16 border-l border-gray-300"></div>
          )}
        </div>
      ))}
    </div>
  );
}