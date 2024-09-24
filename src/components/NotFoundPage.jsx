import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="notFound-box">
      <h1>
        <i className="bx bx-wink-smile"></i>
      </h1>
      <h2>الصفحة غير موجودة - 404</h2>
      <p>
        الصفحة التي تبحث عنها قد تمت إزالتها أو تغيير اسمها أو غير متاحة مؤقتًا.
      </p>
      <Link to=".">اذهب إلى الصفحة الرئيسية</Link>
    </div>
  );
}
