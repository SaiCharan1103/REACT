import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                isLoggedIn: true
            }
        }
    
    render() {
        return(
        this.state.isLoggedIn && <div>Welcome Sai</div>)
        //turnery Approach
        // return(
        //  this.state.isLoggedIn?
        //  <div>Welcome Sai</div> :
        //  <div>Welcome Guest</div>
        // )
        //2nd Method
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Sai</div>    
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        //1st Method
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Sai</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Sai</div>
        //         <div>Welcome Guest</div>
                
        //     </div>
        // )
    }
}

export default UserGreeting
