import React from 'react';

const RemoveIcon = ({ width, height, strokeColor }) => (
  <svg
    width={width}
    height={height}
    stroke={strokeColor}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fill="#0F0F0F"
        d="M17 12C17 11.4477 16.5523 11 16 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44771 13 8 13H16C16.5523 13 17 12.5523 17 12Z"
      />
      <path
        fill="#0F0F0F"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
      />
    </g>
  </svg>
);

export default RemoveIcon;
