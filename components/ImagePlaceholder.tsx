interface ImagePlaceholderProps {
  label?: string;
  className?: string;
}

/**
 * Duotone photo placeholder — reserves editorial image space until
 * real photography is supplied. Swap for <Image> with the same
 * wrapper classes when assets arrive.
 */
export default function ImagePlaceholder({ label = "Photograph", className = "" }: ImagePlaceholderProps) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#16294a] via-[#1a3a5c] to-[#0a1428] ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #d4af37 0, #d4af37 1px, transparent 1px, transparent 14px)",
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-10 h-px bg-[#d4af37]/50 mx-auto mb-4"></div>
          <p className="text-[#d4af37]/60 text-[11px] tracking-[3px] uppercase mb-0 leading-relaxed">{label}</p>
          <div className="w-10 h-px bg-[#d4af37]/50 mx-auto mt-4"></div>
        </div>
      </div>
    </div>
  );
}
