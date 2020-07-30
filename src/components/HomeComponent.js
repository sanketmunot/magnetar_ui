import React, { Component } from 'react';
import Status from './StatusComponent'
import Prediction from './PredictionComponent'
import Broken from './BrokenComponent'
import { Modal } from 'reactstrap'
class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			alarm: null,
			events: null,
			timeout: 5000
		}
	}


	async componentDidMount() {
		try {
			setInterval(async () => {
				const res = await fetch('http://localhost:9000/dummyrec').then(response => response.json());
				const data = res
				//   console.log(data)          
				this.setState({
					alarm: data.alarm,
					events: data.event
				})
			}, this.state.timeout);
			console.log("llll")
		}
		catch (e) {

			this.setState({
				alarm: null,
				events: null
			})
		}
	}

	render() {
		if (this.state.alarm == 'broken' || this.state.alarm=='recovery') {
			return (
				<div className='container'>
					<div className='col-12'>
						<div><iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=large&timezone=Asia%2FKolkata" style={{ 'pointer-events': 'none' }} width="100%" height="140" frameborder="0" default></iframe> </div>
					</div>					
					<Broken alarm={this.state.alarm}/>
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
							<Status alarm={this.state.alarm} />
						</div>

						<div className='col-12 col-sm-3 mt-3 mt-sm-0'>
							<Prediction events={this.state.events} />
						</div>
					</div>
				</div>
			)
		}
	}
}
export default Home