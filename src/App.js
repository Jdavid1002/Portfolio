import React from 'react';
import Content from './views/Content'
import Navbar from './views/Navbar';
import NavResponsive from './views/navResponsive';

function App() {
  return (
    <div>
      <NavResponsive />
      <div className="content"  >
        <Content />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
