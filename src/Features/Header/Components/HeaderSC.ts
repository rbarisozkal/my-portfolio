import styled from "styled-components";
import { types } from "../Themes/classical.theme";
import { HeaderType } from "./Header.types";

export const MyHeader = styled("div")<HeaderType>((props: HeaderType) => ({
  ...types[props?.headerType!],
  maxWidth: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent:"space-between",
  padding: "15px",
 
  marginBottom:"0px",
  //marginBottom: "15px",
  fontSize: "20px",
  position: "sticky",
  //boxShadow: "1px 1px 1px 1px",
  opacity: "0.8",
  top: "0",
  zIndex: "1012987",
  "&  #list-icon": {
    display:"none" ,
  },
  "&  .links": {
    justifySelf:"flex-end",
    display:"flex",
  },
  "&  h4": {
    margin: "0",
    paddingTop:"0",
    paddingBottom:"0",
    fontFamily: "'Dancing Script', cursive"
  },

  //icon appears on the left side of the header 
  "@media (max-width: 745px)": {
display:"none" ,
    // display: "flex",
    // position: "absolute",
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "center",
    // height:"100%",
    // width:"10%",
    // opacity: "1",
    // "&  .links ,h4": {
    //   display:"none" ,
    // },
    // "&  #list-icon": {
    //   display:"flex" ,
    //   color: "white",
    // },
    
  }

  
  

}));
export const HeaderLink = styled("a")<HeaderType>((props: HeaderType) => ({
  ...types[props?.headerType!],
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
    "&:last-child": {
        borderRight: "none",
        paddingLeft:"0"
    },
    "&:first-child": {
      paddingLeft: "0px",
  },
    
}));

export default MyHeader;

//
//
//
//
//
//
