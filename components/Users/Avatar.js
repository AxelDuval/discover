import React from "react";

export default function Avatar(props) {
  return (
    <div className={props.className}>
      <img
        className={props.className}
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.height }}
      />
    </div>
  );
}
