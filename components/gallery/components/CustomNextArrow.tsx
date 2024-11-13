import React, { FC } from "react";

const CustomNextArrow: FC = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "block",
        right: "10px",
        zIndex: 1,
        backgroundColor: "#ccc",
      }}
    >
      ▶
    </div>
  );
};

export default CustomNextArrow;
