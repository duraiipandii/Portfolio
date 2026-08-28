import React, { useState, useRef } from 'react';

export default function Card3D({ 
  children, 
  className = "", 
  maxRotation = 12, 
  scale = 1.02,
  glowColor = "rgba(56, 189, 248, 0.2)"
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) * 100;
    const yPct = (mouseY / height) * 100;

    // Calculate rotation (-maxRotation to +maxRotation)
    const rotateY = ((mouseX - width / 2) / (width / 2)) * maxRotation;
    const rotateX = -((mouseY - height / 2) / (height / 2)) * maxRotation;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`);
    setGlarePosition({ x: xPct, y: yPct, opacity: 0.6 });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePosition({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out preserve-3d cursor-pointer ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* 3D Spotlight Glow Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-30"
        style={{
          background: `radial-gradient(600px circle at ${glarePosition.x}% ${glarePosition.y}%, ${glowColor}, transparent 40%)`,
          opacity: glarePosition.opacity,
        }}
      />

      {/* Card Content with 3D Depth */}
      <div className="relative z-10 preserve-3d">
        {children}
      </div>
    </div>
  );
}
