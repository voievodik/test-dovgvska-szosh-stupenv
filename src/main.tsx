import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { Root } from './Root.tsx';
import { PostProvider } from './store/PostContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostProvider>
      <Root />
    </PostProvider>
  </React.StrictMode>,
)
