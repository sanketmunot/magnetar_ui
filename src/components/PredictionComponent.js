import React , {Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import Blink from 'react-blink-text';
import ReactLoading from 'react-loading'

 function Prediction(props) {

 		if(!props.events){
		return(
			<Card>
				<center>
		      	<ReactLoading className='m-4' type='spinningBubbles' color='black' />
		      	</center>
		      	<CardBody>
			      	 <CardTitle>
						<i className='fa fa-eye mr-2' style={{'font-size':'18px'}}></i>
			    	    <strong>  Event Classified is : </strong>
	    	  		</CardTitle>
	    	  </CardBody>
		    </Card>
			)}

	else{
		return(
			<div>
		      <Card color='danger'>
		        <CardBody>
		          <CardTitle>
		    	    <h4>  Event Classified is : </h4>
		    	  </CardTitle>
		    	  <CardText>
		    	  <center>
			    	  <Blink color='yellow' text={props.events} fontSize='100px' />
	          		</center>
		    	  </CardText>
		        </CardBody>
		      </Card>
		    </div>
			)
	}
}

export default Prediction
