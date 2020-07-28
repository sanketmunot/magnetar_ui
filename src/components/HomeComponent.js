import React , {Component} from 'react';
import Status from './StatusComponent'
import Prediction from './PredictionComponent'
import home from '../shared/dummy'
class Home extends Component{
	constructor(props){
		super(props)
		this.state={
			alarm : null,
			events : null
		}
	}

	async componentDidMount(){
		try{
			setInterval(() => {
	              // const res = await fetch('https://api.apijson.com/...');
	              // const blocks = await res.json();            
	              var data = home()
	              this.setState({
	              	alarm:data.alarm,
	                events:data.event
	              })
	            }, 5000);
		}
		catch(e){
			
			this.setState({
	              	alarm:null,
	                events:null
	              })
		}
	}

	render(){
		return(
			<div className='container'>
				<div className='row'>

					<div className='col-12 col-sm-4'>
						<div><iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=large&timezone=Asia%2FKolkata" style={{'pointer-events': 'none'}} width="100%" height="140" frameborder="0" default></iframe> </div>
					</div>

					<div className='col-12 col-sm-4 mt-3 mt-sm-0'>
						<Status alarm={this.state.alarm}/>
					</div>

					<div className='col-12 col-sm-3 mt-3 mt-sm-0'>
						<Prediction events={this.state.events} />
					</div>
				</div>
			</div>
			)
	}
}
export default Home