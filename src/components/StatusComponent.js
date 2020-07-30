import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import Typed from 'react-typed'
import ReactLoading from 'react-loading'

function Status(props) {
	var lines = {
		'normal':['Amigo','System is Running fine','Everything is cool'],
		'low':['Seniore','A little problem detected','Good tolook here and there'],
		'medium' : ['Hello','System is Running Quite well','Dont overlook','Look around for Flaws'],
		'high' : ['Call for backup','System might fall any time soon','Need technicians urgently']
	}

	if(!props.alarm){
		return(
			<Card>
				<center>
		      	<ReactLoading className='m-4' type='spinningBubbles' color='black' />
		      	</center>
		      	<CardBody>
			      	 <CardTitle>
						<i className='fa fa-eye mr-2' style={{'font-size':'18px'}}></i>
			    	    <strong>  Status </strong>
	    	  		</CardTitle>
	    	  </CardBody>
		    </Card>
			)}
	else{
	return(
		<div>
	      <Card>	      
	        <img src={props.alarm+".png"} style={{'height':'200px'}} />
	        <CardBody>
	          <CardTitle>
				<i className='fa fa-eye mr-2' style={{'font-size':'18px'}}></i>
	    	    <strong>  Status </strong>
	    	  </CardTitle>
	    	  <CardText>
	    	  	<Typed
	    	  	strings = {lines[props.alarm]}
	    	  	typeSpeed={40}
                backSpeed={50}
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
