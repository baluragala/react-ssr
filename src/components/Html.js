import React from "react";

export default class HTML extends React.Component {
  render() {
    console.log(this.props);
    return (
      <html>
        <head>
          <title>Recipes</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/semantic-ui/2.2.2/semantic.min.css"
          />
        </head>
        <body>
          <div
            id="root"
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          />
          <script src="/bundle.js" />
        </body>
      </html>
    );
  }
}
