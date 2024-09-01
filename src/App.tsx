import React from 'react';
import './App.css';
import { Search } from './components/search';
import { Footer } from './components/footer';
import { Header } from './components/header';
import ExcelToJson from './utils/excelToJson';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Footer />
      {/* <ExcelToJson /> */}
    </div>
  );
}

export default App;
