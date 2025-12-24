import React from "react";

const ReportPanel = React.memo(function ReportPanel({ summary, onRefresh }) {
  console.log("ReportPanel re-rendered");

  return (
    <div>
      <h3>Report Summary</h3>
      <p>Total Users: {summary.totalUsers}</p>
      <p>Active Users: {summary.activeUsers}</p>

      <button onClick={onRefresh}>Refresh Report</button>
    </div>
  );
});

export default ReportPanel;
