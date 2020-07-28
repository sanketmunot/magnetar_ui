function home(){

	var data = [
		{alarm:'normal',event:'N'},
		{alarm:'normal',event:'N'},
		{alarm:'low',event:'E1'},
		{alarm:'low',event:'E2'},
		{alarm:'medium',event:'E5'},
		{alarm:'medium',event:'E6'},
		{alarm:'normal',event:'N'},
		{alarm:'high',event:'E45'},
		{alarm:'high',event:'E46'},
		{alarm:'normal',event:'N'}
	]

	return data[Math.floor((Math.random() * 7) + 1)]
}


export default home;
