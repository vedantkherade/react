import React from "react";

const Toolbar = React.memo(function Toolbar({ onSave, onExport, onPrint }) {
  console.log("Toolbar re-rendered");

  return (
    <div>
      <button onClick={onSave}>Save</button>
      <button onClick={onExport}>Export</button>
      <button onClick={onPrint}>Print</button>
    </div>
  );
});

export default Toolbar;
