export default function BrandWatermark({ 
  position = "right", 
  size = "md", 
  opacity = 0.045,
  rotate = 0,
  className = "" 
}) {
  const sizeClasses = {
    sm: "w-72 sm:w-96",
    md: "w-96 sm:w-[500px] lg:w-[600px]",
    lg: "w-[480px] sm:w-[650px] lg:w-[780px]",
    xl: "w-[600px] sm:w-[800px] lg:w-[950px]",
  };

  const positionClasses = {
    "right": "top-1/2 -translate-y-1/2 -right-24 sm:-right-36 lg:-right-48",
    "left": "top-1/2 -translate-y-1/2 -left-24 sm:-left-36 lg:-left-48",
    "top-right": "top-8 sm:top-12 -right-20 sm:-right-32 lg:-right-40",
    "top-left": "top-8 sm:top-12 -left-20 sm:-left-32 lg:-left-40",
    "bottom-right": "bottom-6 sm:bottom-10 -right-20 sm:-right-32 lg:-right-40",
    "bottom-left": "bottom-6 sm:bottom-10 -left-20 sm:-left-32 lg:-left-40",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;
  const selectedPos = positionClasses[position] || positionClasses.right;

  return (
    <div 
      className={`brand-watermark absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`} 
      aria-hidden="true"
    >
      <img
        src="/logo.png"
        alt=""
        style={{ 
          opacity: opacity,
          transform: rotate ? `rotate(${rotate}deg)` : undefined 
        }}
        className={`absolute ${selectedPos} ${selectedSize} max-w-none h-auto object-contain pointer-events-none`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
