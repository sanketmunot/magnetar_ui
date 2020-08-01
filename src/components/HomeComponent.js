import React, { Component } from 'react';
import Status from './StatusComponent'
import Prediction from './PredictionComponent'
import Broken from './BrokenComponent'
import { Modal } from 'reactstrap'
import Frequency from './FrequencyComponent'
import Longest from './LongestComponent'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			alarm: null,
			next_event: null,
			event: null,
			timeout: 5000,
			freq: null
		}
	}


	async componentDidMount() {
		try {
			setInterval(async () => {
				const res = await fetch('http://localhost:9000/dummyrec').then(response => response.json());
				const data = res
				//   console.log(data) 

				const freq = await fetch('http://localhost:9000/frequency')
					.then(res => res.json())


				this.setState({
					alarm: data.alarm,
					next_event: data.next_event,
					event: data.event,
					freq: freq
				})
			}, this.state.timeout);
			console.log("llll")
		}
		catch (e) {

			this.setState({
				alarm: null,
				next_event: null,
				event: null,
				freq: null
			})
		}
	}

	render() {
		if (this.state.alarm == 'broken' || this.state.alarm == 'recovery') {
			return (

				<div className='container'>
					<div className='col-12'>
						<div><iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=large&timezone=Asia%2FKolkata" style={{ 'pointer-events': 'none' }} width="100%" height="140" frameborder="0" default></iframe> </div>
					</div>
					<div className='row'>
						<Broken alarm={this.state.alarm} />
						<div className='col-12 col-sm-6 mt-3' >
							<Frequency data={this.state.freq} />
							<Longest data={this.state.freq}/>
						</div>
					</div>
				</div>
			)
		}
		else {
			return ( //for event
				<div className='container'>
					<div className='row'>

						<div className='col-12 col-sm-4'>
							<div><iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=large&timezone=Asia%2FKolkata" style={{ 'pointer-events': 'none' }} width="100%" height="140" frameborder="0" default></iframe> </div>
						</div>

						<div className='col-12 col-sm-4 mt-3 mt-sm-0'>
							<Status alarm={this.state.alarm} event={this.state.event} />
						</div>

						<div className='col-12 col-sm-3 mt-3 mt-sm-0'>
							<Prediction events={this.state.next_event} />
						</div>
					</div>

					<div className='row'>
						<div className='col-12 col-sm-5 mt-3' >
							<Frequency data={this.state.freq} />
						</div>

						<div className='col-12 col-sm-5 mt-3 ml-2' >
							<Longest data={this.state.freq} />
						</div>
					</div>
				</div>
			)
		}
	}
}
export default Home