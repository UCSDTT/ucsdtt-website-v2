<script>
	import PledgeClass from '../components/PledgeClass.svelte';
	import activeData from '../scripts/activeData.js';

	const pledgeClasses = activeData;

</script>


<svelte:head>
	<title>Members</title>
</svelte:head>

<h1>Members</h1>

<PledgeClass {pledgeClasses} />
