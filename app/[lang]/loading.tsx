export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      <div className="relative w-24 h-24">
        {/* Animated outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-primary/10 border-t-primary animate-spin"></div>
        {/* Pulsing center logo/dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-primary/20 animate-pulse-premium"></div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center gap-2">
        <h2 className="text-xl font-bold tracking-widest uppercase text-primary animate-pulse">
          Buloqboshi
        </h2>
        <div className="h-1 w-32 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
}
