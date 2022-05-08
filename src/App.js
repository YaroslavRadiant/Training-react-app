import React from 'react';

import ElsePage from './components/Else page/ElsePage';

import Homepage from './components/homepage/Homepage';
import ToDoPage from './components/Todo page/ToDoPage';
import NotFound from './components/not found/NotFound';
import Layout from './components/layout/Layout';
import { ToDoProvider } from './context/context';

import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <ToDoProvider>
      <Routes className="rout-section">
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Homepage />}></Route>
          <Route path="/todo" element={<ToDoPage />}></Route>
          <Route path="/else" element={<ElsePage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </ToDoProvider>
  );
}
