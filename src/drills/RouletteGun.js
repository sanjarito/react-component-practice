import React from 'react';



class Roulette extends React.Component{

  static defaultProps = {
  bulletInChamber:8
  }

  getRandomInt=(min,max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum = Math.floor(Math.random() * (max - min)) + min;
    return randomNum
  }

  pullTriggerFunction=()=>{

    this.setState({
      spinningTheChamber:true
    })

    this.timeout = setTimeout(() => {
      let randomNumber = this.getRandomInt(1,9)
    this.setState({
      chamber: randomNumber,
      spinningTheChamber:false
    })
    },2000)



  }
  constructor(props) {
     console.log('props in constructor', props)
     super(props)
     this.state = {
       chamber: null,
       spinningTheChamber:false
     }
   }

   componentDidMount() {

  }

   componentWillUnmount() {
      clearTimeout(this.timeout)
      console.log('unmounted')

  }

  renderDisplay(){
    if (this.state.spinningTheChamber == true) {
      return "spinning the chamber and pulling the trigger!"
    } else if (this.state.chamber == this.props['bulletInChamber']) {
      this.componentWillUnmount()
      return "BANGGGG"
    } else {
      return "YOU ARE SAFE"
    }

  }


   render(){
     console.log(this.props['bulletInChamber'])
     console.log(this.state.chamber)

     return (
       <div>
       <p>{this.renderDisplay()}</p>
       <button onClick={this.pullTriggerFunction}>Pull the Trigger!</button>
       </div>
     )
   }

}
export default Roulette
