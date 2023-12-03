import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { createRoot } from 'react-dom/client';
import './global.css';
import { RouterProvider } from "react-router-dom";
import router from './router';

const queryClient = new QueryClient()

createRoot(
  document.querySelector('#app'),
).render(<QueryClientProvider client={queryClient}>
<RouterProvider router={router} />
</QueryClientProvider>);

