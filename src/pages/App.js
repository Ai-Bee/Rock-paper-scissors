import '../styling/App.scss';

function App() {
  return (
    <div className="App">
      <section className='appView'>
      <section className='scoreBoard'>
          <div>
            <h6>ROCK</h6>
            <h6>PAPER</h6>
            <h6>SCISSORS</h6>
          </div>
          <div className='score'>
            <span>SCORE: </span>
            <br/>
            <span>0</span>
          </div>
      </section>
      </section>
    </div>
  );
}

export default App;
