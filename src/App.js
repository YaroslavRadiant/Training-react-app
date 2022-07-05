import React from "react";

import ElsePage from "./components/pages/Else-page/ElsePage";
import NotFound from "./components/pages/Not-found/NotFound";
import Homepage from "./components/pages/Homepage/Homepage";
import ToDoPage from "./components/pages/Todo-page/ToDoPage";
import Layout from "./components/layout/Layout";

import { ToDoProvider } from "./context/context";
import { Route, Routes } from "react-router-dom";
import CurrentPostPage from "./components/pages/Current-post-page/CurrentPostPage";
import WeatherPage from "./components/pages/Weather-page/WeatherPage";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <ToDoProvider>
        <Routes className="rout-section">
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Homepage />}></Route>
            <Route path="/todo" element={<ToDoPage />}></Route>
            <Route path="/else" element={<ElsePage />}></Route>
            <Route path="else/:id" element={<CurrentPostPage />}></Route>
            <Route path="/weather" element={<WeatherPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </ToDoProvider>
    </Provider>
  );
}
