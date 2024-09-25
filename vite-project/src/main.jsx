// TODO: Import BrowserRouter and wrap the entire app with it

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RobotProvider from './context/RobotProvider'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Browser router is a specialized context provider that lets the whole app switch between "pages" via their components, by switching to their specified components when their path is hit. 
  <BrowserRouter>
    <RobotProvider>
      <App />
    </RobotProvider>
  </BrowserRouter>
);
