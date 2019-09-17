import React, { Component } from 'react'
import moment from 'moment';



class Daily extends Component {
  render() {
    const forecast = this.props.forecast
    const { time, summary, icon, temperatureHigh, temperatureLow } = this.props.forecast
    console.log(forecast);

    return (
      <div className='container border'>
        {moment.unix(time).format('ddd')}: {temperatureHigh}
      </div>
    )
  }

}


export default Daily
