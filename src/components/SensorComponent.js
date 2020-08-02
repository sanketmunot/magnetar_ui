import React, { Component } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import ReactLoading from 'react-loading'

class Sensors extends Component {
    constructor(props) {
        super(props)
        console.log(props.data);
    }
    render() {
        if (!this.props.data) {
            return (
                <div >
                    <Card color='secondary' inverse>
                        <center>
                            <ReactLoading className='m-4' type='spinningBubbles' color='black' />
                        </center>
                        <CardBody>
                            <CardTitle>
                                <i className='fa fa-line-chart  mr-2' style={{ 'font-size': '18px' }}></i>
                                <strong>  Sensors State </strong>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            // if (!this.props.data.high.length == 0) {
            //     var high = this.props.data.high.map((a) => {
            //         return (<Card color='danger' className='col-3 m-2 col-sm-1'>
            //             <center>
            //                 <strong>{a.name}</strong>
            //                 <CardText>{a.reading}</CardText>
            //             </center>
            //         </Card>)
            //     })

            // }
            // if (!this.props.data.low.length == 0) {
            //     var low = this.props.data.low.map((a) => {
            //         return (<Card color='warning' className='col-3 m-2 col-sm-1'>
            //             <center>
            //                 <h5>{a.name}</h5>

            //                 <CardText>{a.reading}</CardText>
            //             </center>
            //         </Card>)
            //     })
            // }
            // if (!this.props.data.ideal.length == 0) {
            //     var ideal = this.props.data.ideal.map((a) => {
            //         return (<Card color='success' className='col-3 m-2 col-sm-1'>
            //             <center>
            //                 <h5>{a.name}</h5>

            //                 <CardText>{a.reading}</CardText>
            //             </center>
            //         </Card>)
            //     })
            // }
            if (this.props.data.length > 0) {
                var color = {
                    'high':'danger',
                    'ideal':'success',
                    'low':'warning'
                }
                var c = this.props.data.map((s) => {
                    return (<Card color={color[s.state]} className='col-3 m-2 col-sm-1'>
                        <center>
                            <h5>{s.name}</h5>

                            <CardText>{s.reading}</CardText>
                        </center>
                    </Card>)
                })
            }


            return (
                <div >
                    <Card inverse color='secondary'>
                        <CardBody>
                            <CardTitle>
                                <i className='fa fa-line-chart ' style={{ 'font-size': '18px' }}></i>
                                <strong>  Sensors Reading and State </strong>
                            </CardTitle>
                            <div className='row' style={{ overflow: 'auto', maxHeight: '10rem' }}>
                                {/* {high}
                                {low}
                                {ideal} */}
                                {c}
                            </div>
                        </CardBody>
                    </Card>
                </div>
            )
        }

    }
}

export default Sensors