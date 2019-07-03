<script>
	import PledgeClass from '../components/PledgeClass.svelte';

	const pledgeClasses = [
		{
			// Just a proof of concept, definitely want to move tihs to a JSON 
			// and write a script to expedite this -> parse roster?
			className: "Upsilon",
			image: "images/upsilon_class.jpg",
			members: [{
				name: "Brent Neldner",
				major: "Computer Science",
				pixelLocationX: "219px",
				pixelLocationY: "339px",
				linkedIn: "..",
			}, {
				name: "Amy Li",
				major: "Computer Science",
				pixelLocationX: "317px",
				pixelLocationY: "374px",
				linkedIn: "..",
			}, {
				name: "Jordan Luk",
				major: "Mechanical Engineering",
				pixelLocationX: "409px",
				pixelLocationY: "377px",
				linkedIn: "..",
			}, {
				name: "Austin Le",
				major: "Data Science",
				pixelLocationX: "529px",
				pixelLocationY: "369px",
				linkedIn: "..",
			}, {
				name: "Barry Cheung",
				major: "Mechanical Engineering",
				pixelLocationX: "654px",
				pixelLocationY: "380px",
				linkedIn: "..",
			}, {
				name: "Jade Tran",
				major: "Computer Science",
				pixelLocationX: "715px",
				pixelLocationY: "412px",
				linkedIn: "..",
			}, {
				name: "Jack Lin",
				major: "Data Science",
				pixelLocationX: "812px",
				pixelLocationY: "348px",
				linkedIn: "..",
			}, {
				name: "Lulu Zhu",
				major: "Computer Science",
				pixelLocationX: "451px",
				pixelLocationY: "476px",
				linkedIn: "..",
			}, {
				name: "Claire Zhang",
				major: "Bioengineering",
				pixelLocationX: "600px",
				pixelLocationY: "487px",
				linkedIn: "..",
			}, {
				name: "BaoBao Laosirihongthong",
				major: "Chemical Engineering",
				pixelLocationX: "398px",
				pixelLocationY: "567px",
				linkedIn: "..",
			}, {
				name: "Ryan Murase",
				major: "Computer Science",
				pixelLocationX: "791px",
				pixelLocationY: "562px",
				linkedIn: "..",
			}, 
			]
		}
	]

</script>


<svelte:head>
	<title>Members</title>
</svelte:head>

<h1>Members</h1>

<PledgeClass {pledgeClasses} />
