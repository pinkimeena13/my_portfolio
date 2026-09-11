/**
 * Botanical line-art accent — spec element 5.
 * Purely decorative: sits behind content at low opacity and is hidden from
 * assistive tech. Drawn as paths so it costs one inline SVG, no image request.
 */

type Leaf = { y: number; dir: 1 | -1; len: number; drop: number }

// Alternating leaves up a single stem.
const LEAVES: Leaf[] = [
  { y: 292, dir: -1, len: 58, drop: 30 },
  { y: 246, dir: 1, len: 66, drop: 34 },
  { y: 200, dir: -1, len: 62, drop: 32 },
  { y: 154, dir: 1, len: 56, drop: 28 },
  { y: 112, dir: -1, len: 46, drop: 24 },
  { y: 74, dir: 1, len: 38, drop: 20 },
]

const leafPath = ({ y, dir, len, drop }: Leaf) => {
  const x = 100
  const tipX = x + len * dir
  const tipY = y - drop
  return [
    `M${x} ${y}`,
    `C${x + len * 0.35 * dir} ${y + 4} ${tipX - len * 0.2 * dir} ${tipY + drop * 0.55} ${tipX} ${tipY}`,
    `C${tipX - len * 0.45 * dir} ${tipY - drop * 0.12} ${x + len * 0.3 * dir} ${y - drop * 0.85} ${x} ${y - drop * 0.2}`,
    'Z',
  ].join(' ')
}

export default function LeafMark({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 200 340"
      fill="none"
      className={className}
    >
      {/* stem */}
      <path
        d="M100 340 C100 280 99 200 100 48"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {LEAVES.map((leaf) => (
        <path
          key={`${leaf.y}-${leaf.dir}`}
          d={leafPath(leaf)}
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      ))}
      {/* tip */}
      <path d="M100 48 C96 38 98 28 100 20 C102 28 104 38 100 48Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}
