import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

import ActivityContainer from "../blocks/ActivityContainer";

const Loader = () => (
  <ActivityContainer>
    <BeatLoader size={9} color="#2D9CDB" />
  </ActivityContainer>
);

export default Loader;
