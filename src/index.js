import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// import WebFont from 'webfontloader';

// WebFont.load({
//   custom: {
//     families: [
//       'Raleway:n4,n7',
//     ],
//     urls: [
//       'https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;700&display=swap',
//     ],
//   },
// });
const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={
      <div style={{ height: '100vh', position: 'relative' }}>
        <div className="loader centered"></div>
      </div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);


