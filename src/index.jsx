// import { createRoot } from 'react-dom/client';
// import { HomePage } from './pages/HomePage';
// import './global.css';

// createRoot(
//   document.querySelector('#app'),
// ).render(<HomePage />);
import { createRoot } from 'react-dom/client';
import './global.css';
import { RouterProvider } from "react-router-dom";
import router from './router';


createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);