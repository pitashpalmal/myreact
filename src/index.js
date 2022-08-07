import React from 'react';
import ReactDOM from 'react-dom';

// one way use

// function Clock({locale}){
//   return (
//     <h1 className="heading">
//       <span className="text">Hello {new Date().toLocaleTimeString(locale)}</span>
//     </h1>
//   );
// }

// ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));




// two way use

// class Clock{
//   print() {
//     return (
//       <h1 className="heading">
//         <span className="text">Hello {new Date().toLocaleTimeString()}</span>
//       </h1>
//     );
//   }
// }

// const ClockComponent = new Clock();
// ReactDOM.render(ClockComponent.print(), document.getElementById('root'));


// three way use and it is the final way to use react js

class Clock extends React.Component {
  render() {
    return (
      <h1 className="heading">
        <span className="text">Hello {new Date().toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}

ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));




