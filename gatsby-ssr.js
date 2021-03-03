import React from "react"
// import { Provider } from "react-redux"
import { renderToString } from "react-dom/server"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
// import { store } from "./src/store";
const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheet = new ServerStyleSheet()
  const ConnectedBody = () => (
    // <Provider>
      <StyleSheetManager sheet={sheet.instance}>
        {bodyComponent}
      </StyleSheetManager>
    // </Provider>
  )
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
  // setHeadComponents([sheet.getStyleElement()])
}

export {replaceRenderer}


// import * as React from "react";
// import { Provider } from "react-redux";
// import { renderToString } from "react-dom/server";

// import { store } from "./src/store";

// exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
//   const ConnectedBody = () => (
//     <Provider store={store}>
//       {bodyComponent}
//     </Provider>
//   );
//   replaceBodyHTMLString(renderToString(<ConnectedBody />));
// };