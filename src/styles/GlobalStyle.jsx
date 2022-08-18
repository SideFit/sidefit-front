import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        box-sizing: border-box;
        /* font-family: 'Noto Sans KR', sans-serif; */
    }
    body{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background: black;
        color: white;
    };
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        outline: none;
        border-radius: 5px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    };
    a {
        text-decoration:none ;
    }
`;

export default GlobalStyle;
