import React, { Component } from 'react';
import Status from './StatusComponent'
import Prediction from './PredictionComponent'
import Frequency from './FrequencyComponent'
import Longest from './LongestComponent'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import Sensors from './SensorComponent'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			alarm: null,
			next_event: null,
			event: null,
			timeout: 5000,
			freq: null,
			long: null,
			sensor: null
		}
		this.handleNotification = this.handleNotification.bind(this)
	}



	async componentDidMount() {
		try {
			setInterval(async () => {
				const res = await fetch('http://localhost:9000/dummyrec').then(response => response.json());
				const data = res
				//   console.log(data) 

				const freq = await fetch('http://localhost:9000/frequency')
					.then(res => res.json())

				const long = await fetch('http://localhost:9000/frequency')
					.then(res => res.json())

				const sensor = await fetch('http://localhost:9000/sensor')
					.then(res => res.json())

				this.setState({
					alarm: data.alarm,
					next_event: data.next_event,
					event: data.event,
					freq: freq,
					long: long,
					sensor: sensor
				})
			}, this.state.timeout);

		}
		catch (e) {

			this.setState({
				alarm: null,
				next_event: null,
				event: null,
				freq: null,
				long: null,
				sensor: null
			})
		}
	}



	handleNotification(alarm) {
		if (alarm === 'high') {
			store.addNotification({
				title: "Alert High Level Alarm !",
				message: "A high level alarm is raised",
				type: "warning",
				insert: "top",
				container: "top-right",
				animationIn: ["animated", "fadeIn"],
				animationOut: ["animated", "fadeOut"],
				dismiss: {
					duration: 5000,
					onScreen: true
				}
			});
		}
		else if (alarm === 'medium') {
			store.addNotification({
				title: "Medium Alarm !",
				message: "A medium level alarm is raised",
				type: "info",
				insert: "top",
				container: "top-right",
				animationIn: ["animated", "fadeIn"],
				animationOut: ["animated", "fadeOut"],
				dismiss: {
					duration: 5000,
					onScreen: true
				}
			});
		}

		else if (alarm === 'broken') {
			if (!this.props.isOpen) {
				this.props.toggleModal()
			}
		}

	}

	render() {
		return ( //for event
			<div className='container-fluid'>
				{this.handleNotification(this.state.alarm)}
				<div className='row'>
					<div className='col-12 col-sm-2 mt-3 ' >
						<Frequency data={this.state.freq} />
					</div>

					<div className='col mt-3'>
						<div className='row'>
							<div className='col-12 col-sm-4 '>
								<Status alarm={this.state.alarm} event={this.state.event} />
							</div>

							<div className='col-12 col-sm-4 mt-3 mt-sm-0'>
								<Prediction events={this.state.next_event} />
							</div>

							<div className='col-12 col-sm-3 mt-3' >
								<Longest data={this.state.long} />
							</div>
						</div>
						<div className='row'>

							<div className='col-sm-10 mt-3'>
								<Sensors data={this.state.sensor} />

							</div>
						</div>
					</div>
				</div>

				<Modal isOpen={this.props.isOpen} >
					<ModalHeader >Broken! Dangerous Alarm</ModalHeader>
					<ModalBody>
						<strong>
							The system has been been broken,
							Please follow the advisory.
						</strong>
						<button className='btn btn-primary' onClick={this.props.toggleModal}>Submit</button>
					</ModalBody>
				</Modal>


			</div>
		)

	}
}
export default Home