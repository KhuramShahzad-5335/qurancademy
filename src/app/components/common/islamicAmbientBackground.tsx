const motifs = [
  { symbol: "☾", className: "ambient-motif--one" },
  { symbol: "✦", className: "ambient-motif--two" },
  { symbol: "۞", className: "ambient-motif--three" },
  { symbol: "◇", className: "ambient-motif--four" },
  { symbol: "✧", className: "ambient-motif--five" },
  { symbol: "☽", className: "ambient-motif--six" },
];

export default function IslamicAmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-background__pattern" />
      {motifs.map((motif) => (
        <span key={motif.className} className={`ambient-motif ${motif.className}`}>
          <i />
          {motif.symbol}
        </span>
      ))}
    </div>
  );
}