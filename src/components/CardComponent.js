import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


class CardComponent extends React.Component{
    constructor(props){
        super(props);

    }
    
    render(){
        return (<Col className='card-col m-0'>  
        <h3>{this.props.name}</h3>  
        <h3>{this.props.email}</h3>    
        <h3>{this.props.phone}</h3>
                <button onClick={()=>{this.props.unmountMe()}}>Delete</button>
        </Col>)
    }
}

export default CardComponent;