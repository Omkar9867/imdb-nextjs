import React from "react";

const Results = (props) => {
  return (
    <div>
      {props.results.map((result) => (
        <div key={result.id}>
          <h2>{result.original_title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Results;
