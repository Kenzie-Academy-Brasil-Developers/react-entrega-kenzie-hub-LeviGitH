import { createGlobalStyle } from "styled-components";

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;

        --success: #3FE864;
        --negative: #E83F5B;
        -white-neutral: #FFFFFF;

        --inter-font: font-family: 'Inter', sans-serif;
    }
    .title1{
        font-family: var(--inter-font);
        font-weight: bold;
        font-size: 1rem;
    }
    .title2{
        font-family: var(--inter-font)
        font-weight: bold;
        font-size: 1rem;
    }
    .title3{
        font-family: var(--inter-font)
        font-weight: bold;
        font-size: 1rem;
    }
    .headline{
        font-family: var(--inter-font)
        font-weight: normal;
        font-size: 0.75rem;
    }
    .headlineBold{
        font-family: var(--inter-font)
        font-weight: bold;
        font-size: 0.75rem;
    }
    .headlineItalic{
        font-family: var(--inter-font)
        font-weight: bold;
        font-size: 0.75rem;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;
