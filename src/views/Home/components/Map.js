import React from "react";
import Map from "../../../components/Map";
import HomeMapBlock from "../../../blocks/HomeMapBlock";
import { FaMapMarkerAlt } from "react-icons/fa";

function HomeMap(props) {
  return (
    <HomeMapBlock>
      <HomeMapBlock.SearchBar>
        <div className="title">Search Projects By Location</div>
        <div className="input">
          <FaMapMarkerAlt color="rgba(79, 79, 79, 0.8)" />
          <input type="text" placeholder="Ikorodu, Lagos" />
        </div>
      </HomeMapBlock.SearchBar>
      <Map />
    </HomeMapBlock>
  );
}

export default HomeMap;
