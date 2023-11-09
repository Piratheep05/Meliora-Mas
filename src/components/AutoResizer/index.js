import React, { useState, useEffect, useRef } from "react";

const AutoResizer = ({ children }) => {
  const parentRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = parentRef.current.offsetWidth;
      setParentWidth(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const childWidth = parentWidth - 16;
  const childWidth = parentWidth;

  return (
    <>
      <div ref={parentRef}>
        <div style={{ width: parentWidth }}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { childWidth })
          )}
        </div>
      </div>
    </>
  );
};

export default AutoResizer;