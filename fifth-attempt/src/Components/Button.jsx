import React from "react";

export default function Button(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="api-call">
      API Call
    </button>
  );
}
