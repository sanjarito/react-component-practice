import React from 'react';

class Bomb extends React.Component {
  static defaultProps = {
    step: 1,
  };


  constructor(props){
    super(props)
    this.state = {
      count:0,
      status:''}
  }

  componentDidMount() {
    this.interval = setInterval(() => {

      this.setState({
        count: this.state.count+1,
      })

      if(this.state.count<8){
        if(this.state.count%2==0){
          this.setState({
            status: "tock"
          })
        } else if (this.state.count%2!==0) {
          this.setState({
            status: "tick"
          })
        }
      } else {
        this.setState({
          status: "BOOM"
        })
        this.componentWillUnmount()

      }



    }, 1000)
  }

  componentWillUnmount() {
     clearInterval(this.interval)
     
 }

  render(){

    return (
      <div>
        <p>Content: {this.state.count}</p>
        <h1>{this.state.status}</h1>

      </div>
    )
  }
}

export default Bomb;
