/** Petit casque de samouraï (kabuto) — clin d'œil à Richter, le premier projet. */
export const Logo = ({ size = 30, color = '#1f8a5b' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    {/* maedate (croissant) */}
    <path d="M20 16c4-6 20-6 24 0" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
    {/* dôme du casque */}
    <path d="M10 44c0-16 10-24 22-24s22 8 22 24" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* bord / fukigaeshi */}
    <path d="M8 44c6 5 16 7 24 7s18-2 24-7" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* rivet central */}
    <circle cx="32" cy="30" r="3" fill={color} />
  </svg>
)
