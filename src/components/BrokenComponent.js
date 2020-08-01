import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import Typed from 'react-typed'

function Broken(props) {
    var lines = {
		'recovery':['The sysytem was misleaded into dark','Please wait till it heals','Healing process for the sysytem is running','........'],
		'broken':['seems predictions were not monitored properly','Work done half is dangerous','The system is broken it may take A Day, A Week, A Month.... A Decade..... Wait a decade is 10 years right?'],
	 }
    
    return (
        <div className='col-sm-6 col-12'>
            <Card>
                <img src={props.alarm + ".png"} style={{ 'height': '300px' }} />
                <CardBody>
                    <Typed
                        strings={lines[props.alarm]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </CardBody>
            </Card>
        </div>
    )
}

export default Broken;