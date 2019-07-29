import React from "react";

import Progress from "../blocks/ProgressBar";

function ProgressBar({ height, progress }) {
  return (
    <Progress progress={progress}>
      <div className="progress-text">{progress}% progress</div>
      <div className="innerBar" />
    </Progress>
  );
}

export default ProgressBar;
