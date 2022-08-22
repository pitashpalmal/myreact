import React from 'react';

class Clock extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = { date: new Date() };
  // }

  state = { date: new Date() };

  componentDidMount(){
    //this is life cycle event. one kind of document get ready
    this.clockTimer = setInterval(() => this.tick(), 1000);
  } 
  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(), //this.state.date = new Date() never do that
    });
  }
  

    render() {
      return (
        <h1 className="heading">
          <span className="text"> {this.state.date.toLocaleTimeString(this.props.locale)}</span>
        </h1>
      );
    }
  }


  export default Clock;