import styled from "styled-components";
import { types } from "../Themes/classical.theme";
import { HeaderType } from "./Header.types";

export const MyHeader = styled("div")<HeaderType>((props: HeaderType) => ({
  ...types[props?.headerType!],
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "15px",
  fontSize: "20px",
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
    "&:last-child": {
        borderRight: "none",
        paddingRight: "0px",
    },
}));

export default MyHeader;

//
//
//
//
//
//
