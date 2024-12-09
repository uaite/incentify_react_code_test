import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/components/App.tsx';
// import App from './src/components/App/index';
import './index.css';
import PokemonProvider from './src/context/Pokemon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </QueryClientProvider>
  </StrictMode>
);
