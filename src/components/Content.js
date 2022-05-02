import React from "react";
import Journal from "./Journal";
import data from "../data";

function Content() {
  return (
    <div className="content">
      {data.map((journal) => {
        return <Journal key={journal.title} {...journal} />;
      })}
    </div>
  );
}

export default Content;
