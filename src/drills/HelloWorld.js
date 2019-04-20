import React from 'react';

class HelloWorld extends React.Component {

  static defaultProps = {

  }

  constructor(props){
    super(props)
    this.state = { who: 'World' }
  }

  handleButtonClickWorld = option => {
    this.setState({
      who: 'World'
    })
  }
  handleButtonClickFriend = option => {
    this.setState({
      who: 'Friend'
    })
  }
  handleButtonClickReact = option => {
    this.setState({
      who: 'React'
    })
  }

  render() {
    return (
      <div className="Helloworld">
        <p>{this.state.who}</p>
        <button onClick={this.handleButtonClickWorld}>World</button>
        <button onClick={this.handleButtonClickFriend}>Friend</button>
        <button onClick={this.handleButtonClickReact}>React</button>
      </div>
    )
  }

}

export default HelloWorld
