export const outputTemplate = `
<!doctype html>
<html lang="en">
  <head>
    <title>All Features</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <style>
      @keyframes fadeInLeft {
        0% {
          opacity: 0.1;
          transform: translateX(-14px);
        }
        100% {
          opacity: 1;
          transform: translateX(0px);
        }
      }
      @keyframes fadeInBottom {
        0% {
          opacity: 0.1;
          transform: translateY(14px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    </style>
    <style>
      body {
        background-color: #393e46;
        color: #eeeeee;
        font-family: Montserrat,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
      }

      nav {
        top: 0;
        left: 0;
        width: 200px;
        position: fixed;
        background: #232931;
        max-height: 100vh;
        min-height: 100vh;
        overflow-y: auto;
        box-shadow: 0px 1px 7px -1px rgb(0 0 0 / 30%);
        padding-top: 14px;
      }

      nav li:first-of-type {
        margin-top: 14px;
      }

      nav li {
        display: block;
      }
      
      nav ul {
        margin: 0;
        padding: 0;
      }

      a {
        text-decoration: none;
      }
      
      a:visited {
        text-decoration: none;
        color: #eeeeee;
      }

      nav li a {
        width: 100%;
        color: #eeeeee;
        text-decoration: none;
        padding: 10px;
        display: block;
        border-bottom: 1px solid rgba(0,0,0,0.4);
        background: none;
        transition: 0.1s background, color;
        text-transform: capitalize;
        font-size: 16px;
      }

      nav li:first-of-type {
        border-top: 1px solid rgba(0,0,0,0.4);
      }

      nav li a:hover {
        color: #4ecca3 !important;
        background: #14181d;
        transition: 0.2s background, color;
      }

      nav li a:visited {
        color: #eeeeee;
      }

      * {
        box-sizing: border-box;
      }

      pre:target {
        border-left: 5px solid #4ecca3;
        transition: 0.2s border-color;
      }


      main {
        margin-left: 200px;
        padding: 14px;
      }

      pre:first-of-type {
        margin-top: 0;
      }

      pre {
        transition: 0.1s border-color;
        font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
        animation: 0.2s ease-out 0s 1 fadeInBottom;
        padding: 14px;
        background: #232931;
        border-left: 5px solid #232931;
        border-radius: 4px;
        box-shadow: 0px 1px 7px -1px rgba(0,0,0,0.3);
        overflow-x: auto;
        font-size: 16px;
        display: inline-block;
        float: left;
        clear: left;
        min-width: 810px;
        margin-bottom: 0px;
      }

      @media (max-width: 1030px) {
        pre {
          width: 100%;
          min-width: 0;
        }
      }

      #navigation-header {
        font-size: 14px;
        margin-top: 4px;
        margin-bottom: 7px;
        display: block;
        color: #4ecca3;
        text-align: center;
      }

      #navigation-content {
        animation: 0.2s ease-out 0s 1 fadeInLeft;
      }

      .step {
        color: #4ecca3;
      }

      .comment {
        opacity: 0.5;
      }

      .tag {
        color: #232931;
        background: #4ecca3;
        padding: 4px;
        display: inline-block;
        font-size: 12px;
        border-radius: 2px;
        margin-right: 6px;
        margin-bottom: 4px;
      }
    </style>
  </head>
  <body>
  <nav>
    <div id="navigation-content">
      <a href="https://github.com/pietmichal/gherkin-to-docs">
        <div style="text-align: center; font-size: 32px;">🥒➡️📄</div>
        <b id="navigation-header">Gherkin To Docs</b>
      </a>
      {{NAVIGATION}}
    </div>
  </nav>
  <main>
    {{CONTENT}}
  </main>
  </body>
</html>
`;
