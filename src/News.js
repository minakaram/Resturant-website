import React from "react";
import NewsHead from "./NewsHead";
import NewsFooter from "./NewsFooter";
function News() {
  return (
    <div>
      <div className="head">
        <NewsHead />
        <NewsFooter />
      </div>
    </div>
  );
}

export default News;
