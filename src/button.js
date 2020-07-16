import React from "react";


class Button extends React.Component {
    render() {
      return (
        <div>
         
              <div
                style={{ border: "1px solid black", width:'50px',height:'50px',fontSize:'1.2em',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'khaki' }}
                onClick={() => this.props.func(this.props.value)}
              >
                {this.props.value}
              </div>
            </div>
          
        );
    }
}

export default Button;