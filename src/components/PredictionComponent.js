import React from 'react';
import {
	Card, CardText, CardBody,
	CardTitle
} from 'reactstrap';
import Blink from 'react-blink-text';
import ReactLoading from 'react-loading'
import Typed from 'react-typed'
function Prediction(props) {

	if (!props.events) {
		return (
			<Card color='warning'>
				
				<CardBody>
					<CardTitle>
						<h4><i className='fa fa-eye mr-2' style={{ 'font-size': '18px' }}></i>Alarm Prediction :</h4>
					</CardTitle>
					<center>
					<ReactLoading className='m-4' type='spinningBubbles' color='black' />
				</center>
				</CardBody>
			</Card>
		)
	}

	else {
		return (
			<div>
				<Card color='warning'>
					<CardBody>
						<CardTitle>
						<h4><i className='fa fa-eye mr-2'></i>Alarm Prediction :</h4>
						</CardTitle>
						<CardText>
							<Typed
								strings={['In the future',
									'The prediction is a algorithm',
									'algorithms are never perfect']}
								typeSpeed={60}
								backSpeed={100}
								loop
							/>
						</CardText>
						<CardText>
							<center>
								<Blink color='black' text={props.events} fontSize='100px' />
							</center>
						</CardText>
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default Prediction
