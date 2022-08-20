import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


class CardComponent extends React.Component{
    constructor(props){
        super(props);

    }
    
    render(){
        return (<Col className=''>  
        <h3>{this.props.name}</h3>  
        <h3>{this.props.email}</h3>    
        <h3>{this.props.phone}</h3>
                <button onClick={(e)=>{ this.props.dismiss(this.props.id)}}>Delete</button>
        </Col>)
    }
}

export default CardComponent;