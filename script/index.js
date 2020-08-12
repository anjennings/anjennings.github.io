import axios from 'axios';

console.log('Penis');

axios.get('https://api.github.com/users/anjennings/repos')
	.then(response => {
		console.log(response.data)
	})
	.catch(error => console.error(error));