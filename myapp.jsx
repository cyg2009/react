import React from 'react';
import App from './app.jsx';

class MyApp extends React.Component {
   render() {
       
      return (
          
              <html>
        <head>
          <title>test</title>
        </head>
          <body>
         <div>
            <h1>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!!</p>
            <App />
         </div>
              </body>
                 </html>
      );
   }
}

export default MyApp;