<script>
	import PledgeClass from '../components/PledgeClass.svelte';

	const pledgeClasses = {
		upsilon: {
			// Just a proof of concept, definitely want to move tihs to a JSON 
			// and write a script to expedite this -> parse roster
			image: "images/upsilon_class.jpg",
			members: [{
				name: "Brent Neldner",
				major: "Computer Science",
				pixelLocationX: 219,
				pixelLocationY: 339,
				linkedIn: "..",
			}, {
				name: "Amy Li",
				major: "Computer Science",
				pixelLocationX: 317,
				pixelLocationY: 374,
				linkedIn: "..",
			}, {
				name: "Jordan Luk",
				major: "Mechanical Engineering",
				pixelLocationX: 409,
				pixelLocationY: 377,
				linkedIn: "..",
			}, {
				name: "Austin Le",
				major: "Data Science",
				pixelLocationX: 529,
				pixelLocationY: 369,
				linkedIn: "..",
			}, {
				name: "Barry Cheung",
				major: "Mechanical Engineering",
				pixelLocationX: 654,
				pixelLocationY: 380,
				linkedIn: "..",
			}, {
				name: "Jade Tran",
				major: "Computer Science",
				pixelLocationX: 715,
				pixelLocationY: 412,
				linkedIn: "..",
			}, {
				name: "Jack Lin",
				major: "Data Science",
				pixelLocationX: 812,
				pixelLocationY: 348,
				linkedIn: "..",
			}, {
				name: "Lulu Zhu",
				major: "Computer Science",
				pixelLocationX: 451,
				pixelLocationY: 476,
				linkedIn: "..",
			}, {
				name: "Claire Zhang",
				major: "Bioengineering",
				pixelLocationX: 600,
				pixelLocationY: 487,
				linkedIn: "..",
			}, {
				name: "BaoBao Laosirihongthong",
				major: "Chemical Engineering",
				pixelLocationX: 398,
				pixelLocationY: 567,
				linkedIn: "..",
			}, {
				name: "Ryan Murase",
				major: "Computer Science",
				pixelLocationX: 791,
				pixelLocationY: 562,
				linkedIn: "..",
			}]
		},	
		tau: {
			image: "images/tau_class.JPG"
		}
	}

</script>


<svelte:head>
	<title>Members</title>
</svelte:head>

<h1>Members</h1>

<PledgeClass {pledgeClasses} />
