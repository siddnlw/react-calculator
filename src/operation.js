import React from 'react'

class Operation extends React.Component{

    render(){
        return(
       
        <div
                style={{ border: "1px solid black", width:'50px',height:'50px',fontSize:'1.2em',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'lightgrey' }}
                onClick={() => this.props.op(this.props.value)}
              >
                {this.props.value}
              </div>


        );
    }

}
export default Operation;