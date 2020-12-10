import React, { Component } from 'react'
 
class InFaculty extends Component{
    render(){
        return(
            <div>
                    <div align="center">
                        <form>
                            <label>
                            <b>Enter faculty's email : </b>
                            <input type="text"className="form-control" required="required" name="email"></input>
                            </label>
                            <br /><br />
                            <input type="submit" value="send"></input>
                        </form>
                    </div>
            </div>
        )
    }
} 

export default InFaculty 