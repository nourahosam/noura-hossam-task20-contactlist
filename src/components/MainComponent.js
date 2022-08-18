import React from "react";
import axios from 'axios';
import CardComponent from './CardComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MainComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    dismiss(){

    }
    componentWillMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data);
                const data = res.data;
                this.setState({ data });
                console.log(this.state);
            })
    }
    render(){
        return (<div>
            <Container className="cont">
                <Row>
          {this.state.data.map(el=>{
            return(<CardComponent  {...el}/> )
          })}
          </Row>
          </Container>
        </div>)
    }
}

export default MainComponent;