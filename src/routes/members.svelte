<script>
	import PledgeClass from '../components/PledgeClass.svelte';

	const pledgeClasses = [
		{
			className: "Upsilon",
			image: "images/upsilon_class.jpg",
			members: [{
				name: "Rishi Dhanaraj",
				major: "Computer Science",
				pixelLocationX: "50%",
				pixelLocationY: "50%",
				linkedIn: "..",
			}]
		}
	]

</script>


<svelte:head>
	<title>Members</title>
</svelte:head>

<h1>Members</h1>

<PledgeClass {pledgeClasses} />
