import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Your Name</h1>
        <p>Priyanshu Mukherjee </p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>Hello, I'm a computer science student hailing from the vibrant city of Ahmedabad in Gujarat. When I'm not engrossed in the world of algorithms and code, you'll often find me pursuing my passions.

My love for technology extends beyond the classroom, as I'm also a web developer, enjoying the creative process of building and optimizing websites. I delight in experimenting with programming projects, seeking innovative solutions to real-world problems.

 I'm a dedicated photographer, capturing moments and stories through my lens.

While I'm deeply immersed in the digital world, I always strive to maintain a balance, valuing personal connections, and seeking adventure in life's little moments.</p>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Priyanshu.mukherjee2021@vitstudent.ac.in</p>
        <p>6358741870</p>
      </section>
    </div>
  );
};

export default App;
