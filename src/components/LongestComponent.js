import React, { Component } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import ReactLoading from 'react-loading'

class Longest extends Component {
    constructor(props) {
        super(props)
        console.log(props.data);
    }
    render() {
        if (!this.props.data) {
            return (
                <div >
                <Card color='dark' inverse>
                    <center>
                        <ReactLoading className='m-4' type='spinningBubbles' color='black' />
                    </center>
                    <CardBody>
                        <CardTitle>
                            <i className='fa fa-clock-o mr-2' style={{ 'font-size': '18px' }}></i>
                            <strong>  Longest Time Lived </strong>
                        </CardTitle>
                    </CardBody>
                </Card>
                </div>
            )
        }
        else {
            var i = 1
            var c = this.props.data.map((f) => {
                return (<CardText className='col-12'>
                    <span>{i++}. </span>
                    <strong>{f.alarm}</strong>
                </CardText>)
            })
            return (
                <div >
                    <Card inverse color='dark'>
                        <CardBody>
                            <CardTitle>
                                <i className='fa fa-clock-o' style={{ 'font-size': '18px' }}></i>
                                <strong>  Longest Time Lived </strong>
                            </CardTitle>
                            <hr />
                            <div className='row' style={{overflow:'auto',maxHeight:'8rem'}}>
                                {c}
                            </div>
                        </CardBody>
                    </Card>
                </div>
            )
        }

    }
}

export default Longest