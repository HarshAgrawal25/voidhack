import React, { Component } from 'react'

class Timmer extends Component{
    constructor(){
        this.state = {
            time: {}
        };
        this.interval = null;
    }
    componentDidMount(){
        this.startTimer();
    }

    startTimer = () => {
      const countDownTime = Date.now() + 30000;
      this.interval = setInterval(() => {
          const  now  = new Date();
          const distance  = countDownTime - now;

          const minutes = Math.floor((distance % (1000*60*60)) / (1000 * 60))
          const seconds = Math.floor((distance % (1000*60)) / (1000))

          if(distance < 0 ){
              clearInterval(this.interval);
              this.setState({
                  time: {
                      minutes: 0,
                      seconds:0  
                  }
                } , () => {
                    alert('quiz ended');
                    this.props.history.push('/');
                });
            }
            else{
                this.setState({
                    time:{
                        minutes,
                        seconds
                    }
                })
            }
      }, 1000); 
    }
    render(){
        const{
            time
        } = this.state
        return(
<p>{time.minutes}:{time.seconds}</p>
        )
    }
} 


export default Timmer