import React, { useState } from "react";

function Split({ children }) {
  const [leftWidth, setLeftWidth] = useState(50); // Initial width of the left pane (percentage)

  const handleMouseDown = (e) => {
    e.preventDefault();

    const startX = e.clientX;
    const initialLeftWidth = leftWidth;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
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

  return (
    <div className="flex">
      {React.Children.map(children, (child) => {
        if (child.classList.contains("split-left")) {
          return React.cloneElement(child, { width: leftWidth });
        }
        if (child.classList.contains("split-right")) {
          return (
            <>
              {/* Divider */}
              <div
                className="w-1 bg-sky-300 cursor-col-resize"
                onMouseDown={handleMouseDown}
              />
              {React.cloneElement(child, { width: 100 - leftWidth })}
            </>
          );
        }
        return child; // Render other children as-is
      })}
    </div>
  );
}

Split.Left = function Left({ width, children }) {
  return (
    <div className="p-2 split-left" style={{ width: `${width}%` }}>
      {children}
    </div>
  );
};

Split.Right = function Right({ width, children }) {
  return (
    <div className="p-2 flex-1 split-right" style={{ width: `${width}%` }}>
      {children}
    </div>
  );
};

export { Split };
