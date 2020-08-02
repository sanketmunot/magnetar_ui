import React , {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import EmailPref from './EmailPrefComponent';
import ReactNotification from 'react-notifications-component'

class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            modal:false
        }
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal(){
        this.setState({
            modal : !this.state.modal
        })
    }

	render(){
		return(
			<div>  
                <ReactNotification />
				<Header/>
                <Switch>
                    <Route path='/home' component={()=>{return(<Home isOpen ={this.state.modal} toggleModal = {this.toggleModal}/>)}} />
                    <Route path='/emailpref' component={EmailPref} />                   
                    <Redirect to='/home' />
                </Switch>
                <br /><br />
                <Footer />
			</div>
			)
	}
}
export default Main;	