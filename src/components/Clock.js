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

      // let button;
      // if(locale=== 'bn-BD'){
      //   button = (<Button change={this.handleClick} locale="en-US"/>);
      // } else {
      //   button = (<Button change={this.handleClick} locale="bn-BD"/>);
      // }

      return (
        <div>
          <h1 className="heading">
            <span className="text"> {date.toLocaleTimeString(locale)}</span>
          </h1>
          {/* {button} */}

          { 
            locale === 'bn-BD' ? <Button change={this.handleClick} locale="en-US" show={false} enable /> : 
            // locale === 'bn-BD' ? <Button change={this.handleClick} locale="en-US" show={false} enable = {false} /> : 
              <Button change={this.handleClick} locale="bn-BD" show enable />
          }
        </div>
      );
    }
  }


  export default Clock;