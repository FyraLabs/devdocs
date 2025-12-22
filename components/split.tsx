import React, { HTMLAttributes, useState } from "react";

function Split({ children }: React.PropsWithChildren) {
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

  // FIXME: I have no idea why it is not visible ;;
  // -- mado
  return (
    <div className="flex">
      {React.Children.map(children, (child: React.ReactElement<HTMLAttributes<HTMLDivElement>>) => {
        if (child.type == Split.Left) {
          return React.cloneElement(child, { style: { width: leftWidth.toString() } });
        }
        if (child.type == Split.Right) {
          return (
            <>
              {/* Divider */}
              <div
                className="w-1 group cursor-col-resize flex mt-3 mb-7"
                onMouseDown={handleMouseDown}
              >
                <div className="flex-1 border-l border-l-white/0 h-full w-0" />
                <div className="flex-1 border-l group-hover:border-l-white border-l-white/50 h-full w-0" />
              </div>
              {React.cloneElement(child, { style: { width: (100 - leftWidth).toString() } })}
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
