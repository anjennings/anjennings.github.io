import './App.css';

function TopHeader(props) {
	return (
		<h1 className="TopHeader">
			Aidan Jennings
		</h1>
	)
}

function RandomSubHeader(props) {
	
	var subheaders = [
		"Is the person who made this website",
		"Welcomes you!",
		"The man, the myth, the legend (allegedly)",
		"Professional Computer Toucher",
		"Prefers Tabs over Spaces",
		"Has a website",
		"Carries a Z80 with him at all times",
		"Assures you that he knows what he is doing",
	];
	
	return (
		<h5 className="SubHeader">
			{subheaders[(Math.random() * subheaders.length) | 0]}
		</h5>
	)
}

function Headers(props) {
	return (
		<div className="Headers">
			<TopHeader />
			<RandomSubHeader />
		</div>
	)
}	

function Link(props) {
	return (
		<a href={props.link} className="WebsiteLink">
			{props.linkText}
		</a>
	)
}

function LinkCollection(props) {
	return (
		props.links.map((item, i) =>
			<Link className="LinkObject" link={item.link} linkText={item.linkText} />,
		)
	)
}

function Links(props) {
	const links = [
		{link:"https://github.com/anjennings", linkText:"Github",},
		{link:"https://twitter.com/AidanJennings19", linkText:"Twitter",},
		{link:"https://www.youtube.com/c/AidanJennings", linkText:"Youtube",},
		{link:"https://www.linkedin.com/in/aidan-jennings-2568aa158/", linkText:"Linkedin",},
	]
	
	return (
		<LinkCollection className="LinksObject" links={links}/>
	)
}

function App() {
  return (
    <div className="App">
		<Headers />
		<Links />
    </div>
  );
}

export default App;
