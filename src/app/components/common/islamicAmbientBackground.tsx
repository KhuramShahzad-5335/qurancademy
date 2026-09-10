const motifs = [
  { symbol: "☾", side: "left", top: "2%", edge: "7%", size: "3.8rem", delay: "-1s", duration: "9s" },
  { symbol: "✦", side: "right", top: "5%", edge: "10%", size: "2.8rem", delay: "-5s", duration: "7s" },
  { symbol: "۞", side: "left", top: "12%", edge: "2%", size: "4.5rem", delay: "-8s", duration: "11s" },
  { symbol: "◇", side: "right", top: "17%", edge: "3%", size: "3.2rem", delay: "-3s", duration: "8s" },
  { symbol: "✧", side: "left", top: "23%", edge: "13%", size: "2.4rem", delay: "-6s", duration: "10s" },
  { symbol: "☽", side: "right", top: "28%", edge: "14%", size: "4rem", delay: "-2s", duration: "12s" },
  { symbol: "✦", side: "left", top: "34%", edge: "4%", size: "3rem", delay: "-10s", duration: "7s" },
  { symbol: "◇", side: "right", top: "39%", edge: "5%", size: "2.3rem", delay: "-4s", duration: "9s" },
  { symbol: "۞", side: "left", top: "46%", edge: "11%", size: "3.6rem", delay: "-7s", duration: "10s" },
  { symbol: "☾", side: "right", top: "51%", edge: "11%", size: "4.2rem", delay: "-1s", duration: "8s" },
  { symbol: "✧", side: "left", top: "57%", edge: "1%", size: "2.5rem", delay: "-9s", duration: "11s" },
  { symbol: "✦", side: "right", top: "63%", edge: "2%", size: "3.4rem", delay: "-6s", duration: "7s" },
  { symbol: "◇", side: "left", top: "69%", edge: "9%", size: "4rem", delay: "-3s", duration: "12s" },
  { symbol: "☽", side: "right", top: "74%", edge: "8%", size: "2.6rem", delay: "-11s", duration: "9s" },
  { symbol: "۞", side: "left", top: "81%", edge: "3%", size: "3.1rem", delay: "-5s", duration: "10s" },
  { symbol: "✧", side: "right", top: "86%", edge: "13%", size: "3.8rem", delay: "-8s", duration: "8s" },
  { symbol: "☾", side: "left", top: "92%", edge: "15%", size: "2.7rem", delay: "-2s", duration: "11s" },
  { symbol: "✦", side: "right", top: "97%", edge: "4%", size: "3rem", delay: "-7s", duration: "7s" },
  { symbol: "", kind: "lantern", side: "left", top: "8%", edge: "18%", size: "2.8rem", delay: "-4s", duration: "10s" },
  { symbol: "", kind: "candle", side: "right", top: "22%", edge: "19%", size: "2.6rem", delay: "-9s", duration: "8s" },
  { symbol: "✺", kind: "rosette", side: "left", top: "31%", edge: "16%", size: "2.5rem", delay: "-2s", duration: "9s" },
  { symbol: "", kind: "arch", side: "right", top: "44%", edge: "17%", size: "3.4rem", delay: "-6s", duration: "12s" },
  { symbol: "", kind: "lantern", side: "left", top: "62%", edge: "17%", size: "3.1rem", delay: "-11s", duration: "7s" },
  { symbol: "", kind: "candle", side: "right", top: "71%", edge: "16%", size: "2.3rem", delay: "-3s", duration: "10s" },
  { symbol: "✺", kind: "rosette", side: "left", top: "77%", edge: "19%", size: "2.2rem", delay: "-8s", duration: "8s" },
  { symbol: "", kind: "arch", side: "right", top: "90%", edge: "18%", size: "3rem", delay: "-5s", duration: "11s" },
];

export default function IslamicAmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-background__pattern" />
      {motifs.map((motif) => (
        <span
          key={`${motif.side}-${motif.top}`}
          className={`ambient-motif ambient-motif--${motif.side}${motif.kind ? ` ambient-motif--${motif.kind}` : ""}`}
          style={{
            "--motif-top": motif.top,
            "--motif-edge": motif.edge,
            "--motif-size": motif.size,
            "--motif-delay": motif.delay,
            "--motif-duration": motif.duration,
          } as React.CSSProperties}
        >
          <i />
          <span className="ambient-motif__glyph">{motif.symbol}</span>
        </span>
      ))}
    </div>
  );
}