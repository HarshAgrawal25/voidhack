import React, { Component } from 'react'

class Test extends Component{
    render(){
        return(
            <div>
                <form name="sentMessage" id="contactForm" noValidate>
                    <div className="container" style={{width: "500px", marginTop:"200px",paddingLeft: "102px",borderTop: "solid black 1px",borderRight: "solid black 1px" , borderLeft: "solid black 1px"}}>
                            <button type="button" className="btn btn-primary btn-lg">Admin</button>
                            <button type="button" className="btn btn-secondary btn-lg">Faculty</button>
                            <button type="button" className="btn btn-primary btn-lg">Student</button><br></br>
                    </div>

                    <div className="container" style={{width: "500px",marginTop:"20px",borderBottom: "solid black 1px",borderRight:"solid black 1px",borderLeft: "solid black 1px"}}>
                    <div className="input-group mb-3">
                            <span className="input-group-text">@</span>
                            <div className="form-group">
                                <input 
                                    type="text"     
                                    id="email" 
                                    className="form-control" 
                                    placeholder="Username" 
                                    required="required"
                                    name="email"/>
                            </div>
                            <div class="input-group mb-3">
                                    <span class="input-group-text"><i class="fa fa-key"></i></span>
		                            <input type="password" class="form-control" placeholder="Password" />
		                    </div>
                                    <button type="Submit" className="btn btn-primary btn-lg" style={{marginLeft: "40%"}}>Log In</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Test;

