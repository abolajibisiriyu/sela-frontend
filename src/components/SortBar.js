import React from "react";

import SortBlock from "../blocks/SortBlock";

function SortBar({ sortValue, sortValues, onChange }) {
  return (
    <SortBlock>
      <SortBlock.Title>
        <h3>Sort by:</h3>
      </SortBlock.Title>
      <SortBlock.Selectors>
        <SortBlock.Select onChange={onChange}>
          <option value="">None</option>
          {(sortValues || []).map(_s => (
            <option key={_s.value} value={_s.value}>
              {_s.text}
            </option>
          ))}
        </SortBlock.Select>
      </SortBlock.Selectors>
    </SortBlock>
  );
}

export default SortBar;
