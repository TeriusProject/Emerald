export const adf = {
	header: {
		version: {
			label: "0.9.2",
			major: 0,
			minor: 9,
			patch: 2
		},
		farmingTechnique: {
			code: 0,
			label: "Regular"
		},
		lightInfo: {
			n: 10,
			min: 350,
			max: 950
		},
		soilTempInfo: {
			n: 2,
			min: 0,
			max: 50
		},
		reductionInfo: {
			
		},
		chunks: 4,
	},
	metadata: {
		periodSec: 86400
	},
	series: [
		{
			lightExposure: {
				labels: ['350', '450', '550', '650', '750', '850', '950'],
				series: {
					'Chunk 1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'Chunk 2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'Chunk 3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'Chunk 4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: [
				{
					order: 'Chunk 1',
					high: 3,
					low: -7,
				},
				{
					order: 'Chunk 2',
					high: 0,
					low: -5,
				},
				{
					order: 'Chunk 3',
					high: 10,
					low: 0,
				}
				,
				{
					order: 'Chunk 4',
					high: 9,
					low: 6,
				}
			],
			environmentTemp: [
				{
					temp: 10,
					chunk: 'Chunk 1',
				},
				{
					temp: 25,
					chunk: 'Chunk 2',
				},
				{
					temp: 30,
					chunk: 'Chunk 3',
				},
				{
					temp: 34,
					chunk: 'Chunk 4',
				}],
			waterUse: [
				{
					mm: 59,
					chunk: 'Chunk 1',
				},
				{
					mm: 28,
					chunk: 'Chunk 2',
				},
				{
					mm: 106,
					chunk: 'Chunk 3',
				},
				{
					mm: 92,
					chunk: 'Chunk 4',
				}],
			soilAdditives: [{
				id: '17632',
				name: 'Nitrate',
				concentration: 13.45
			},
			{
				id: '18420',
				name: 'Magnesium(2+) ion',
				concentration: 1.79
			}],
			atmAdditives: [{
				id: '49552',
				name: 'Copper(1+) ion',
				concentration: 2123.4
			},
			{
				id: '17996',
				name: 'Chloride',
				concentration: 3e-5
			},
			{
				id: '39745',
				name: 'Dihydrogenphosphate',
				concentration: 165.2
			}]
		},
		{
			lightExposure: {
				labels: ['350', '450', '550', '650', '750', '850', '950'],
				series: {
					'Chunk 1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'Chunk 2': [2400, 198, 900, 308, 400, 300, 4300],
					'Chunk 3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'Chunk 4': [0, 0, 1,1,1, 0, 0],
				}
			},
			soilTemperature: [
				{
					order: 'Chunk 1',
					high: 3,
					low: -7,
				},
				{
					order: 'Chunk 2',
					high: 0,
					low: -5,
				},
				{
					order: 'Chunk 3',
					high: 10,
					low: 0,
				}
				,
				{
					order: 'Chunk 4',
					high: 9,
					low: 6,
				}
			],
			environmentTemp: [
				{
					temp: 10,
					chunk: 'Chunk 1',
				},
				{
					temp: 15,
					chunk: 'Chunk 2',
				},
				{
					temp: 20,
					chunk: 'Chunk 3',
				},
				{
					temp: 4,
					chunk: 'Chunk 4',
				}],
			waterUse: [
				{
					mm: 59,
					chunk: 'Chunk 1',
				},
				{
					mm: 48,
					chunk: 'Chunk 2',
				},
				{
					mm: 16,
					chunk: 'Chunk 3',
				},
				{
					mm: 0,
					chunk: 'Chunk 4',
				}],
			soilAdditives: [{
				id: '17632',
				name: 'Nitrate',
				concentration: 13.45
			},
			{
				id: '18420',
				name: 'Magnesium(2+) ion',
				concentration: 1.79
			}],
			atmAdditives: [{
				id: '49552',
				name: 'Copper(1+) ion',
				concentration: 2123.4
			},
			{
				id: '39745',
				name: 'Dihydrogenphosphate',
				concentration: 165.2
			}]
		}
	]
};
