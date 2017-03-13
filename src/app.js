import React from 'react';
import ReactDOM from 'react-dom';
import Chance from 'chance';
let change = new Chance();

class Hello extends React.Component{
    render(){
        return (
            <p className="text-primary">Hello {this.props.name}</p>
        );
    }
}

ReactDOM.render(
    <Hello name={chance.first()}/>,
    document.getElementById('app')
);