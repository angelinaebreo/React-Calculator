import React from "react";

export default function Display ({input, prevInput}) {
  let displayNum = prevInput !== 0 ? prevInput : input;
 
 const formatNumber = (num) => {
     let formattedNum = Intl.NumberFormat().format(parseFloat(num));
    // let newString = parseFloat(string).toLocaleString("en-US")
      return formattedNum;
  };

    return (
      <div className="display">
             <p>{formatNumber(displayNum)}</p>
      </div>
    );
}