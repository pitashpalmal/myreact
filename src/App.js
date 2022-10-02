import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import Counter from './components/Counter';

function App() {
    return(
      <div className="app">
          {/* <User render={(isLoggedIn) => isLoggedIn ? 'Sumit' : 'Guest'} /> */}
          
          {/* <Counter 
                render={(counter,incrementCount) => (
                    <ClickCounter count={counter} incrementCount={incrementCount} /> 
                )} 
          />

          <Counter 
                render={(counter,incrementCount) => (
                    <HoverCounter count={counter} incrementCount={incrementCount} /> 
                )} 
          /> */}


          <Counter>
              {(counter,incrementCount) => (
                  <ClickCounter count={counter} incrementCount={incrementCount} /> 
              )} 
          </Counter>

          <Counter>
              {(counter,incrementCount) => (
                  <HoverCounter count={counter} incrementCount={incrementCount} /> 
              )} 
          </Counter>


      </div>
    );
}

export default App;