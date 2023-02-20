import {createGlobalStyle} from "styled-components";
import RubikR from "../fonts/Rubik-Regular.woff";
import RubikRWoff2 from "../fonts/Rubik-Regular.woff2";
import RubikRTtf from "../fonts/Rubik-Regular.ttf";
import RubikM from "../fonts/Rubik-Medium.woff";
import RubikMWoff2 from "../fonts/Rubik-Medium.woff2";
import RubikMTtf from "../fonts/Rubik-Medium.ttf";
import RubikB from "../fonts/Rubik-ExtraBold.woff";
import RubikBWoff2 from "../fonts/Rubik-ExtraBold.woff2";
import RubikBTtf from "../fonts/Rubik-ExtraBold.ttf";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Rubik";
    src: url(${RubikR}) format('woff'),
    url(${RubikRWoff2}) format('woff2'),
    url(${RubikRTtf}) format('truetype');
    font-weight: 400
  } 
  @font-face {
    font-family: "Rubik";
    src: url(${RubikM}) format('woff'),
    url(${RubikMWoff2}) format('woff2'),
    url(${RubikMTtf}) format('truetype');
    font-weight: 500
  } 
  @font-face {
    font-family: "Rubik";
    src: url(${RubikB}) format('woff'),
    url(${RubikBWoff2}) format('woff2'),
    url(${RubikBTtf}) format('truetype');
    font-weight: 700
  }
`

export default FontStyles