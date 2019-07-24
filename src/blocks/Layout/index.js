import styled from "styled-components";

import Row from "./Row";
import Body from "./Body";
import FlexBox from "./FlexBox";

const Layout = styled.div`
  height: 100%;
  width: 100%;
`;

Layout.Row = Row;
Layout.Body = Body;
Layout.FlexBox = FlexBox;

export default Layout;
