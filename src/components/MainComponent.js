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
            data: [],
            loading: true
        };
    }
    dismiss = (id)=>{
        console.log(id);
        var tempArray = this.state.data;
        tempArray.splice(id, 1);
        console.log("tempArtay");
        console.log(tempArray);
        this.setState({data: tempArray})
        console.log(this.state.data);
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
            {/* {if(this.state.loading)} */}
            <Container className="cont">
                <Row>
          {this.state.data.map((el, index)=>{
            el.id = index;
            console.log(el.id);
            return(<CardComponent  {...el} dismiss={this.dismiss}/> )
          })}
          </Row>
          </Container>
        </div>)
    }
}

export default MainComponent;