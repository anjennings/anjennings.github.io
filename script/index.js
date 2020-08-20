console.log('pringles');


let data = fetch('https://api.github.com/users/anjennings/repos')
  .then(response => response.json())
  .then(function(data){
	  console.log(data);
  });
