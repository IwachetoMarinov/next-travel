import React, { FC } from "react";

const CustomPrevArrow: FC = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "block",
        left: "10px",
        zIndex: 1,
        backgroundColor: "#ccc",
      }}
    >
      ◀
    </div>
  );
};

export default CustomPrevArrow;
