<script lang="js">
	import { onMount } from 'svelte';

	// Import Chart.js
	import Chart from 'chart.js/auto';
	import { Container } from 'sveltestrap';

	// Data for the pie chart
	export let paid;
	export let bal;
	export let total;
	let chartData = [
		{ label: 'Debts', value: bal, color: '#132A13' },
		{ label: 'Total', value: total, color: '#EB6424' },
		{ label: 'Paid', value: paid, color: '#4B2142' }
	];

	let chart;

	// Create the chart when the component is mounted
	onMount(() => {
		const ctx = document.getElementById('chart').getContext('2d');
		chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: chartData.map((item) => item.label),
				datasets: [
					{
						label: 'Cash Flow',
						data: chartData.map((item) => item.value),
						backgroundColor: chartData.map((item) => item.color)
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				},
				plugins: {
					legend: {
						labels: {
							color: 'black' // Set the color of the legend
						}
					},
					tooltip: {
						callbacks: {
							label: (context) => {
								const label = chartData[context.dataIndex].label;
								const value = chartData[context.dataIndex].value;
								return `${label}: ${value}`;
							}
						}
					}
				}
			}
		});
	});
</script>

<Container>
	<div class="mt-10 items-center h-fit overflow-hidden w-full">
		<canvas id="chart" />
	</div>
</Container>
