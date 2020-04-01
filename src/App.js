import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Kevin McAllister" avatar= "https://www.disneyphile.fr/wp-content/uploads/2020/02/american-horror-story-macaulay-culkin-1920x1080.jpg" online/>
      <Contact name="Chuck Norris" avatar= "https://img.20mn.fr/dV8WuHl5QtqTBUrhCds4fQ/830x532_chuck-norris-souffle-75-bougies.jpg"/>
      <Contact name="Power Ranger Rouge" avatar="https://www.xm-studios.shop/images/product_images/original_images/4a.jpg" online/>
    </div>
  );
}

export default App;
