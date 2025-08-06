import { MainPage } from '@pages/MainPage';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <MainPage />
      {/* 
      Для демонстрации изолированности компонентов
      можете раскоментировать :)
      <MainPage />
      <MainPage />
      <MainPage /> */}
    </React.Fragment>
  );
}

export default App;
