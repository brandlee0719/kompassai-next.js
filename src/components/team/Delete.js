import * as React from "react";

function Delete(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M11.667 8.335v5.834M8.333 8.335v5.834m-5-9.167h13.334m-1.667 0v9.833c0 .934 0 1.4-.181 1.757-.16.314-.416.569-.73.728-.356.182-.822.182-1.755.182H7.667c-.934 0-1.4 0-1.757-.182a1.666 1.666 0 01-.728-.728C5 16.235 5 15.769 5 14.835V5.002h10zm-1.667 0H6.667c0-.777 0-1.165.127-1.471.169-.409.493-.733.901-.902.307-.127.695-.127 1.472-.127h1.666c.777 0 1.165 0 1.472.127.408.169.732.493.901.902.127.306.127.694.127 1.471z"
        stroke="#090C05"
        strokeWidth={1.083}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoDelete = React.memo(Delete);
export default MemoDelete;
