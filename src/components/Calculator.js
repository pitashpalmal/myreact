import React from 'react'
import { convert, toCelsius, toFarenheit } from '../lib/converter';
import BoilingVerdict from './BoilingVerdict';
import TemparatureInput from './TemparatureInput';

export default class Calculator extends React.Component {
  state = {temperature: '', scale: 'c' };

  handleChange = (e, scale) => {
    this.setState({
      temperature : e.target.value,
      scale,
      
    });
  }

  render (){

    const { temperature, scale } = this.state;
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const farenheit = scale === 'c' ? convert(temperature, toFarenheit) : temperature;

    return(
        <div>
            <TemparatureInput scale="c" temperature={celsius} onTemparetureChange={this.handleChange} />
            <TemparatureInput scale="f" temperature={farenheit} onTemparetureChange={this.handleChange} />
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </div>
    );
  }
}
