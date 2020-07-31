import React, { Component } from 'react';
import { FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap'
import axios from 'axios'
function EmailTags(props) {
	return (
		<div className='col mt-1'>
			{
				props.tags.map((tag) => {
					if (tag === 'low') {
						return (
							<button className='btn offset-1 btn-outline-success mt-1' style={{ 'pointer-events': 'none' }}>{tag}</button>
						)
					}

					else if (tag === 'medium') {
						return (
							<button className='btn offset-1 btn-outline-warning mt-1' style={{ 'pointer-events': 'none' }}>{tag}</button>
						)
					}

					else if (tag === 'everyday') {
						return (
							<button className='btn offset-1 btn-outline-dark mt-1' style={{ 'pointer-events': 'none' }}>Daily Report</button>
						)
					}

					else {
						return (
							<button className='btn offset-1 btn-outline-danger mt-1' style={{ 'pointer-events': 'none' }}>{tag}</button>
						)
					}


				})
			}
		</div>
	)
}

class EmailPref extends Component {
	constructor(props) {
		super(props)


		this.state = {
			data: [],
			isModalOpen: false,
			low: true,
			medium: false,
			high: false,
			everyday: false
		}

		this.toggleMailModel = this.toggleMailModel.bind(this)
		this.toggleLow = this.toggleLow.bind(this)
		this.toggleMedium = this.toggleMedium.bind(this)
		this.toggleHigh = this.toggleHigh.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.toggleEve = this.toggleEve.bind(this)
		this.remove = this.remove.bind(this)
	}

	componentDidMount() {
		fetch('http://localhost:9000/dummyemail')
			.then(res => res.json())
			.then((res) =>
				this.setState({
					data: res
				})
			)
	}
	toggleMailModel() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		})
	}

	toggleLow() {
		this.setState({
			low: !this.state.low
		})
	}

	toggleMedium() {
		this.setState({
			medium: !this.state.medium
		})
	}

	toggleHigh() {
		this.setState({
			high: !this.state.high
		})
	}

	toggleEve() {
		this.setState({
			everyday: !this.state.everyday
		})
	}

	handleSubmit() {
		var data = {
			'email': document.getElementById('email').value,
			'low': this.state.low,
			'medium': this.state.medium,
			'high': this.state.high,
			'everyday': this.state.everyday
		}
		this.toggleMailModel()

		axios.put('http://localhost:9000/insert', data).then((res) => {
			if (res.data) {
				alert('Added new alert preference')
			}
			else{
				alert("something's not right try again!")
			}
			window.location.reload()

		})
		// alert(JSON.stringify(data))
	}

	remove(e){
		var data = {
			email:e
		}
		axios.post('http://localhost:9000/remove', data)
		window.location.reload()
	}

	render() {

		return (
			<div className='container'>
				{
					this.state.data.map((e) => {
						return (
							<div className='row'>
								<div className='col mt-1 text-center text-monospace'>{e.email}</div>
								<EmailTags tags={e.tags} />
								<button className='btn btn-danger mr-5 mt-1'
								onClick={()=>this.remove(e.email)}> <i class="fa fa-remove mr-1"></i>Remove</button>
							</div>
						)
					})


				}

				<div className='p-4'>
					<button type="button" class="btn mt-4 btn-primary btn-lg btn-block" onClick={this.toggleMailModel}>Add new email to mailing list</button>
				</div>

				<Modal isOpen={this.state.isModalOpen} >
					<ModalHeader >Add new email to mailing list</ModalHeader>
					<ModalBody>


						<FormGroup>
							<Label>Email</Label>
							<Input type='email' id='email' name='email' required />
						</FormGroup>

						<FormGroup>
							<button className={this.state.low ? 'btn btn-outline-success mr-1 active' : 'btn btn-outline-success mr-1'}
								onClick={this.toggleLow}>Low</button>

							<button className={this.state.medium ? 'btn btn-outline-warning mr-1 active' : 'btn btn-outline-warning mr-1'}
								onClick={this.toggleMedium}>Medium</button>

							<button className={this.state.high ? 'btn btn-outline-danger mr-1 active' : 'btn btn-outline-danger mr-1'}
								onClick={this.toggleHigh}>High</button>

							<button className={this.state.everyday ? 'btn btn-outline-dark mr-1 active' : 'btn btn-outline-dark mr-1'}
								onClick={this.toggleEve}>Daily Report</button>
						</FormGroup>

						<button type='submit' className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
						<button className='btn btn-dark ml-1' onClick={this.toggleMailModel}>Cancel</button>

					</ModalBody>
				</Modal>

			</div>
		)
	}
}

export default EmailPref
