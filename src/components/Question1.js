import React, { Component } from 'react'
 

class Question1 extends Component{
     render(){
        return(
            <div>
            <div className="container-fluid head">
            <div className="row">
                <div className="col-1">
                    <div className="container avtar">
                        <i className="fa fa-user"></i>
                    </div>
                </div>
                <div className="col-3">
                    <div className="container name">
                        <h5 className="display-6">Kalravarun1999@gmail.com</h5>
                    </div>
                </div>
                <div  className="col-5"></div>
                <div className="col-3 item">
                    <div className="container timer">
                        <h6 className="container-timer" id="time"></h6>
                        <button type="button" className="btn btn-success">End Exam</button>
                    </div>
                </div>	
            </div>
        </div>
        <div className= "container-fluid content">
            <div className="row">
                <div className="col-10">
                    <div className="container-fluid question">
                        <pre>
                                Q1. River Luni originates near Pushkar and drains into which one of the following?<br /><br />
                                <input type="radio" value="Male" name="gender" /> Rann of Kachchh<br />
                                <input type="radio" value="Female" name="gender" /> Arabian Sea<br />
                                <input type="radio" value="Other" name="gender" /> Gulf of Cambay<br />
                                <input type="radio" value="Other" name="gender" /> Lake Sambhar<br />
                        </pre>
                        <button type="button" className="btn btn-success">Next Question</button>
                        <button type="button" className="btn btn-danger">Skip Question</button>
                    </div>
                </div>
                <div className="col-2 pannel ">
                    <table className="table table-bordered  ">
                        <tr className="mx-2">
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                    </table>
                    <div style={{height: "20px",width:"20px", backgroundColor:"blue" }}></div> *Not attempted<br />
                    <div style={{height: "20px",width:"20px" , backgroundColor: "green" }}></div> Attempted
                    
                </div>
            </div>
        </div>
        </div>
        )
     }
 }

 export default Question1