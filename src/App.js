import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact name='Robert Reyes' avatar='https://randomuser.me/api/portraits/men/28.jpg' />
      <Contact name='Nellie Caldwell' avatar='https://randomuser.me/api/portraits/women/17.jpg' />
      <Contact name='Vernon Mason' avatar='https://randomuser.me/api/portraits/men/84.jpg' />
      <Contact name='Erica Hunt' avatar='https://randomuser.me/api/portraits/women/87.jpg' />
      <Contact name='Juanita Philips' avatar='https://randomuser.me/api/portraits/women/55.jpg' />
    </div>
  );
}

export default App;
