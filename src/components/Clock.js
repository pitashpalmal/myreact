import React from 'react';
import Button from './Button';

class Clock extends React.Component {
  state = { date: new Date(), locale: 'bn-BD' };

  componentDidMount(){
    //this is life cycle event. one kind of document get ready
    this.clockTimer = setInterval(() => this.tick(), 1000);
  } 
  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  }

  tick() {
    this.setState({
      date: new Date(), //this.state.date = new Date() never do that
    });
  }
  

    render() {
      console.log('clock component render');
      const { date,locale } = this.state;
      return (
        <div>
          <h1 className="heading">
            <span className="text"> {date.toLocaleTimeString(locale)}</span>
          </h1>
          {/* <Button change={this.handleClick.bind(this, 'en-US')}>Click Here</Button> */}
          <Button change={this.handleClick} locale="en-US">Click Here</Button>
        </div>
      );
    }
  }


  export default Clock;