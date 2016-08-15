import React from 'react';
import App from './app.jsx';

class MyApp extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!!</p>
            <App />
         </div>
      );
   }
}

export default MyApp;