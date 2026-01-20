"use client";
import React, { useState } from "react";

interface SplitProps {
  children: React.ReactNode;
}

export function Root({ children }: SplitProps) {
  const [leftWidth, setLeftWidth] = useState(50);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();

    const startX = e.clientX;
    const initialLeftWidth = leftWidth;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const newLeftWidth = Math.max(
        20,
        Math.min(80, initialLeftWidth + (deltaX / window.innerWidth) * 100),
      );
      setLeftWidth(newLeftWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const childrenArray = React.Children.toArray(children);
  const leftChild = childrenArray[0];
  const rightChild = childrenArray[1];

  return (
    <div className="flex">
      <div className="p-2 split-left" style={{ width: `${leftWidth}%` }}>
        {leftChild}
      </div>
      <div
        className="w-1 group cursor-col-resize flex mt-3 mb-7"
        onMouseDown={handleMouseDown}
      >
        <div className="flex-1 border-l border-l-white/0 h-full w-0" />
        <div className="flex-1 border-l group-hover:border-l-white border-l-white/50 h-full w-0" />
      </div>
      <div
        className="p-2 flex-1 split-right"
        style={{ width: `${100 - leftWidth}%` }}
      >
        {rightChild}
      </div>
    </div>
  );
}
