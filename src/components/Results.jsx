import React from "react";
import Card from "./Card";

const Results = (props) => {
  return (
    <div className="sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {props.results.map((result) => (
        <Card key={result.key} result={result}/>
      ))}
    </div>
  );
};

export default Results;
