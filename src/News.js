import React from "react";
import NewsHead from "./NewsHead";
import NewsFooter from "./NewsFooter";
function News() {
  return (
    <div>
      <div className="head">
        <NewsHead h1="News And Events" />
        <NewsFooter />
      </div>
    </div>
  );
}

export default News;
