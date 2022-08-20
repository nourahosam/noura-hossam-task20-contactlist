import React from 'react';
import Button from 'react-bootstrap/Button';

class CardComponent extends React.Component{
    constructor(props){
        super(props);

    }
    
    render(){
        return (<div className='cardd'>  
        <p>{this.props.name}</p>  
        <p>{this.props.email}</p>    
        <p>{this.props.phone}</p>
                <Button variant="danger" onClick={(e)=>{ this.props.dismiss(this.props.id)}}>Delete</Button>
        </div>)
    }
}

export default CardComponent;