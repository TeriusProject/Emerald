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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
					'1': [4000, 3000, 2000, 2780, 1890, 2390, 3490],
					'2': [2400, 1398, 9800, 3908, 4800, 3800, 4300],
					'3': [2400, 2210, 0, 2000, 2181, 2500, 2100],
					'4': [0, 0, 0, 0, 0, 0, 0],
				}
			},
			soilTemperature: {
				depths: ["0", "10"],
				labels: ['Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4'],
				series: [
					{
						"0": 3,
						"10": -7,
						"12": 9,
					},
					{
						"0": 0,
						"10": -5,
						"12": 9,
					},
					{
						"0": 10,
						"10": 0,
						"12": 9,
					},
					{
						"0": 9,
						"10": 6,
						"12": 9,
					}
				]
			},
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
	]
};
