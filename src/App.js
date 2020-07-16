import React from "react";
import Button from "./button";
import Operation from "./operation";

class App extends React.Component {
  state ={number1:'' , number2 : '' , operation : '' , result : 0 , cal : ""};

  func = (arg) => {
    if(this.state.operation == '')
    {
    this.setState({number1 : this.state.number1+arg})
    this.setState({cal : this.state.cal+arg})

    }

    else{
      this.setState({number2 : this.state.number2+ arg})
    this.setState({cal : this.state.cal+arg})

      if(this.state.operation =='+')
      var res = parseInt(this.state.number1) + parseInt(this.state.number2+ arg);

      else if (this.state.operation =='-')
      var res = parseInt(this.state.number1) - parseInt(this.state.number2+ arg);

      else if (this.state.operation =='*')
      var res = parseInt(this.state.number1) * parseInt(this.state.number2+ arg);

      else if (this.state.operation =='/')
      var res = parseInt(this.state.number1) / parseInt(this.state.number2+ arg);

    
    this.setState({result : res })
  }

   
  }

  op =(arg) => {
    this.setState({operation : arg})
    if(this.state.operation != '') {
      this.setState({number1: ''+this.state.result, number2:''})
    }
    this.setState({cal : this.state.cal+arg})

  }

  render()
   {
    return(
         <div>
           
          <div style={{ display: "flex", alignItems: "center" ,flexDirection:"column" }}>

            <div style={{ display: "flex",flexDirection:"row",width:'250px',background:"cyan",justifyContent:'center'}}>

              <h1 >Calculator</h1>
             

            </div>
            <hr></hr>
            <div style={{ display: "flex",flexDirection:"row",width:'250px',justifyContent:'space-between'}}>

             <h1 >{this.state.result}</h1>
            
            </div>

            <div style={{ display: "flex",flexDirection:"row",width:'250px',justifyContent:'space-between'}}>

              <h3 style={{color:"grey"}}> {this.state.cal}&nbsp;</h3>

            </div>


            <div style={{ display: "flex",flexDirection:"row",width:'250px',justifyContent:'space-between'}}>

             <Button func={this.func} value={1}/>
             <Button func={this.func} value={2}/>
             <Button func={this.func} value={3}/>

            </div>
            <br></br>
           
            <div style={{ display: "flex",flexDirection:"row",width:'250px',justifyContent:'space-between'}}>

             <Button func={this.func} value={4}/>
             <Button func={this.func} value={5}/>
             <Button func={this.func} value={6}/>

            </div>
            <br></br>
           
            <div style={{ display: "flex",flexDirection:"row",width:'250px',justifyContent:'space-between'}}>

             <Button func={this.func} value={7}/>
             <Button func={this.func} value={8}/>
             <Button func={this.func} value={9}/>

            </div>

            <br></br>
           
            <div style={{ display: "flex",flexDirection:"row",width:'250px',justifyContent:'center'}}>

             <Button func={this.func} value={0}/>

            </div>
            <br></br>

            <div style={{ display: "flex",flexDirection:"row",width:'250px',justifyContent:'space-between'}}>
          
             <Operation op={this.op} value={'+'}/>
             <Operation op={this.op} value={'-'}/>
             <Operation op={this.op} value={'*'}/>
             <Operation op={this.op} value={'/'}/>

             </div>

           </div>



         </div>
    )
  }
}

export default App;
