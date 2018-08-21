import React from "react";

const Route2 = () => (
  <div>
    <h1> Beep Beep Boop Bap 2</h1>
    <img src="data:image/jpeg;base64,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" />
  </div>
);

export default Route2;