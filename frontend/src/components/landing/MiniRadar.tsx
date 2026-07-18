export function MiniRadar() {
  const pts = [
    [50, 8],
    [92, 38],
    [76, 88],
    [24, 88],
    [8, 38],
  ];
  const player = [
    [50, 18],
    [82, 44],
    [70, 78],
    [30, 82],
    [22, 44],
  ];
  const toStr = (arr: number[][]) => arr.map((p) => p.join(",")).join(" ");
  return (
    <svg viewBox="0 0 100 100" className="h-24 w-24">
      {[0.3, 0.6, 1].map((s, i) => (
        <polygon
          key={i}
          points={toStr(pts.map(([x, y]) => [50 + (x - 50) * s, 50 + (y - 50) * s]))}
          fill="none"
          stroke="rgba(16,185,129,0.35)"
          strokeWidth="0.6"
        />
      ))}
      <polygon points={toStr(player)} fill="rgba(249,115,22,0.35)" stroke="#F97316" strokeWidth="1.2" />
    </svg>
  );
}
