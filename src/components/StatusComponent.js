import React from 'react';
import {
	Card, CardText, CardBody,
	CardTitle
} from 'reactstrap';
import Typed from 'react-typed'
import ReactLoading from 'react-loading'
import Blink from 'react-blink-text';

function Status(props) {
	var lines = {
		'normal': ['Amigo', 'System is Running fine', 'Everything is cool'],
		'low': ['Seniore', 'A little problem detected', 'Good tolook here and there'],
		'medium': ['Hello', 'System is Running Quite well', 'Dont overlook', 'Look around for Flaws'],
		'high': ['Call for backup', 'System might fall any time soon', 'Need technicians urgently'],
		'recovery':['The sysytem was misleaded into dark','Please wait till it heals','Healing process for the sysytem is running','........'],
		'broken':['seems predictions were not monitored properly','Work done half is dangerous','The system is broken it may take A Day, A Week, A Month.... A Decade..... Wait a decade is 10 years right?'],
	}

	var color = {
		'normal' : 'green',
		'low' : 'yellow',
		'medium' : 'orange',
		'high' : 'red',
		'recovery':'blue',
		'broken':'maroon'
	}

	if (!props.alarm) {
		return (
			<Card >
				<center>
					<ReactLoading className='m-4' type='spinningBubbles' color='black' />
				</center>
				<CardBody>
					<CardTitle>
						
						<h4><i className='fa fa-eye mr-2' style={{ 'font-size': '18px' }}></i> Current Status </h4>
					</CardTitle>
				</CardBody>
			</Card>
		)
	}
	else {
		return (
			<div>
				<Card>

					{/* <img src={props.alarm + ".png"} style={{ 'height': '200px' }} /> */}
					<center>
						<Blink color={color[props.alarm]} text={props.event} fontSize='100px' />
					</center>

					<CardBody>
						<CardTitle>
						<h4><i className='fa fa-eye mr-2' style={{ 'font-size': '18px' }}></i> Current Status - {props.alarm.toUpperCase()} Condition </h4>
						
						</CardTitle>
						<CardText>
							<Typed
								strings={lines[props.alarm]}
								typeSpeed={60}
								backSpeed={100}
								loop
							/>
						</CardText>
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default Status
