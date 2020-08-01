import React, { Component } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import ReactLoading from 'react-loading'

class Frequency extends Component {
    constructor(props) {
        super(props)
        console.log(props.data);
    }
    render() {
        if (!this.props.data) {
            return (
                <Card>
                    <center>
                        <ReactLoading className='m-4' type='spinningBubbles' color='black' />
                    </center>
                    <CardBody>
                        <CardTitle>
                            <i className='fa fa-file mr-2' style={{ 'font-size': '18px' }}></i>
                            <strong>  Report by Occurance </strong>
                        </CardTitle>
                    </CardBody>
                </Card>
            )
        }
        else {
            var i = 1
            var c = this.props.data.map((f) => {
                return (<CardText className='col-4 col-sm-3'>
                    <span>{i++}. </span>
                    <strong>{f.alarm} - {f.count}</strong>
                </CardText>)
            })
            return (
                <div>
                    <Card color='light'>
                        <CardBody>
                            <CardTitle>
                                <i className='fa fa-file' style={{ 'font-size': '18px' }}></i>
                                <strong>  Report by Occurance </strong>
                            </CardTitle>
                            <hr />
                            <div className='row'>
                                {c}
                            </div>
                        </CardBody>
                    </Card>
                </div>
            )
        }

    }
}

export default Frequency