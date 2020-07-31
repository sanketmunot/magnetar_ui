import React from 'react';
import {
	Card ,CardText, CardBody,
	CardTitle
} from 'reactstrap';
import Blink from 'react-blink-text';
import ReactLoading from 'react-loading'
import Typed from 'react-typed'
function Prediction(props) {

	if (!props.events) {
		return (
			<Card>
				<center>
					<ReactLoading className='m-4' type='spinningBubbles' color='black' />
				</center>
				<CardBody>
					<CardTitle>
						<i className='fa fa-eye mr-2' style={{ 'font-size': '18px' }}></i>
						<strong>  Up in time : </strong>
					</CardTitle>
				</CardBody>
			</Card>
		)
	}

	else {
		return (
			<div>
				<Card >
					<CardBody>
						<CardTitle>
							<h4>  Up in time : </h4>
						</CardTitle>
						<CardText>
							<Typed
								strings={['In the future',
								'The prediction is a algorithm',
							'algorithms are never perfect']}
								typeSpeed={40}
								backSpeed={50}
								loop
							/>
						</CardText>
						<CardText>
							<center>
								<Blink text={props.events} fontSize='100px' />
							</center>
						</CardText>
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default Prediction
