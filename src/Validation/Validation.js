import React, {Component} from 'react';
class Validation extends Component{
    lengthValidHandler=()=>{
        if(this.props.length<=5)
        {
            return(
                <p>(Text too short)</p>
            );
        }
        else
        {
            return(
                <p>(Text long enough)</p>
            );
        }
    }
    render=()=>{
        return(
            <div className="Validation">
                <h1>Inside Validation Component</h1>
                <h3>Current string length: {this.props.length}</h3>
                {this.lengthValidHandler(this.props.length)}
            </div>
        );
    }
}
export default Validation;