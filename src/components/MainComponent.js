import React , {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import EmailPref from './EmailPrefComponent';

class Main extends Component {
	render(){
		return(
			<div>
				<Header/>
                <Switch>
                    <Route path='/home' component={Home} />
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