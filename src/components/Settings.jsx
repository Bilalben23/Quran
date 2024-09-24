import { useEffect, useRef } from "react";

export default function Setting() {
  const smileIcon = useRef();

  useEffect(() => {
    const icon = smileIcon.current;
    setTimeout(() => {
      icon.className = "bx bx-wink-smile";
    }, 1500);
  });
  return (
    <div className="settings-box">
      <p>
        <i className="bx bx-smile" ref={smileIcon}></i>
      </p>
      <h1>لا یوجد إعدادات حالیا</h1>
    </div>
  );
}
