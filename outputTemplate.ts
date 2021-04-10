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
        font-family: sans-serif;
      }

      a {
        color: #eeeeee;
        text-decoration: none;
      }

      a:hover {
        color: #eeeeee;
        text-decoration: underline;
      }

      a:focus {
        text-decoration: underline;
      }

      a:visited {
        color: #eeeeee;
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
        box-sizing: border-box;
        padding: 14px;
      }

      nav li {
        display: block;
        margin-bottom: 7px;
      }
      
      nav ul {
        margin: 0;
        padding: 0;
        padding-left: 7px;
      }

      main {
        margin-left: 200px;
        box-sizing: border-box;
        padding: 14px;
      }

      pre:first-of-type {
        margin-top: 0;
      }

      pre {
        font-family: Consolas;
        animation: 0.2s ease-out 0s 1 fadeInBottom;
        box-sizing: border-box;
        padding: 14px;
        background: #232931;
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
        font-size: 24px;
        margin-bottom: 7px;
        display: block;
        color: #4ecca3;
      }

      #navigation-content {
        animation: 0.2s ease-out 0s 1 fadeInLeft;
      }

      .step {
        color: #4ecca3;
      }
    </style>
  </head>
  <body>
  <nav>
    <div id="navigation-content">
      <b id="navigation-header">Features</b>
      {{NAVIGATION}}
    </div>
  </nav>
  <main>
    {{CONTENT}}
  </main>
  </body>
</html>
`;
