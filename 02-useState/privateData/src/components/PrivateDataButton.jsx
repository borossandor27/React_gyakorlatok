import { useState, useId } from "react";


console.log("PrivateDataButton module loaded");

function PrivateDataButton({instanceId}) {
  const [clickCount, setClickCount] = useState(0);
  console.log("PrivateDataButton render");
  
  console.log(`PrivateDataButton instanceId: ${instanceId}`);

  return (
    <button
      onClick={() => setClickCount(clickCount + 1)}
    >{`private_${instanceId}: ${clickCount}`}</button>
  );
}

export default PrivateDataButton;