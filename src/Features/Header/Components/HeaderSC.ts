import styled from "styled-components";
import { types } from "../Themes/classical.theme";
import { HeaderType } from "./Header.types";

export const MyHeader = styled("ul")<HeaderType>((props: HeaderType)=> ({
  ...types[props?.headerType!],
  maxWidth: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "15px",
  marginBottom: "0px",
  marginTop:"0",
  fontSize: "20px",
  position: "sticky",
  top: "0",
  zIndex: "1012987",
  "&  #list-icon": {
    display: "none",
  },
  "&  .links": {
    justifySelf: "flex-end",
    display: "flex",
  },
  "&  h4": {
    margin: "0",
    paddingTop: "0",
    paddingBottom: "0",
    fontFamily: "'Dancing Script', cursive",
  },

  //icon appears on the left side of the header
  "@media (max-width: 745px)": {
    display: "none",
  },
  "& .link": {
    minWidth: "100px",
    maxHeight: "20px",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid #ffffff",
    paddingRight: "15px",
    paddingLeft: "15px",
    cursor: "pointer",
    "&:last-child": {
      borderRight: "none",
      paddingLeft: "0",
    },
    "&:first-child": {
      paddingLeft: "0px",
    },
  },
}));

export default MyHeader;
