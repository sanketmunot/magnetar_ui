function freq(){

	var data = [
		{alarm:'N'},
		{alarm:'N'},
		{alarm:'E1'},
		{alarm:'E2'},
		{alarm:'E5'},
		{alarm:'E6'},
		{alarm:'N'},
		{alarm:'E45'},
		{alarm:'E46'},
		{alarm:'N'}
	]

	return data[Math.floor((Math.random() * 7) + 1)]
}


export default freq;
