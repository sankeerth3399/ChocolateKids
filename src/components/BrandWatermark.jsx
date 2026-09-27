export default function BrandWatermark({ 
  position = "center", 
  size = "lg", 
  opacity = 0.12,
  rotate = 0,
  className = "" 
}) {
  const sizeClasses = {
    sm: "w-[320px] sm:w-[460px] lg:w-[600px]",
    md: "w-[380px] sm:w-[560px] lg:w-[720px] xl:w-[780px]",
    lg: "w-[440px] sm:w-[650px] lg:w-[840px] xl:w-[920px]",
    xl: "w-[480px] sm:w-[750px] lg:w-[950px] xl:w-[1020px]",
  };

  const positionClasses = {
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "center-offset-left": "top-1/2 left-1/2 -translate-x-[58%] -translate-y-1/2",
    "center-offset-right": "top-1/2 left-1/2 -translate-x-[42%] -translate-y-1/2",
    "right": "top-1/2 -translate-y-1/2 -right-16 sm:-right-24 lg:-right-36",
    "left": "top-1/2 -translate-y-1/2 -left-16 sm:-left-24 lg:-left-36",
    "top-right": "top-8 sm:top-12 -right-16 sm:-right-24 lg:-right-32",
    "top-left": "top-8 sm:top-12 -left-16 sm:-left-24 lg:-left-32",
    "bottom-right": "bottom-6 sm:bottom-10 -right-16 sm:-right-24 lg:-right-32",
    "bottom-left": "bottom-6 sm:bottom-10 -left-16 sm:-left-24 lg:-left-32",
  };

  const selectedSize = sizeClasses[size] || sizeClasses.lg;
  const selectedPos = positionClasses[position] || positionClasses.center;

  return (
    <div 
      className={`page-background-logo brand-watermark absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 ${className}`} 
      aria-hidden="true"
    >
      <img
        src="/logo.png"
        alt=""
        style={{ 
          opacity: opacity,
          transform: rotate ? `rotate(${rotate}deg)` : undefined 
        }}
        className={`absolute ${selectedPos} ${selectedSize} max-w-none h-auto object-contain pointer-events-none transition-opacity duration-300`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
