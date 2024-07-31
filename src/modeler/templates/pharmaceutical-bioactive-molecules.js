const acidoAcetilSalicilico = {
  name: 'Ácido Acetilsalicílico',
  molecule: {
    atoms: [
      {
        id: 'C1',
        pos: ['0', '0', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'C2',
        pos: ['1.4', '0', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'C3',
        pos: ['2.1', '1.2', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'C4',
        pos: ['1.4', '2.4', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'C5',
        pos: ['0', '2.4', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'C6',
        pos: ['-0.7', '1.2', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'C7',
        pos: ['-1.4', '1.2', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'C8',
        pos: ['-1.4', '0', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'C9',
        pos: ['-0.7', '-0.8', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'O1',
        pos: ['1.9', '2.4', '0'],
        rad: '0.3',
        color: '#FF0000'
      },
      {
        id: 'O2',
        pos: ['2.8', '1.6', '0'],
        rad: '0.3',
        color: '#FF0000'
      },
      {
        id: 'O3',
        pos: ['2.8', '0.8', '0'],
        rad: '0.3',
        color: '#FF0000'
      },
      {
        id: 'O4',
        pos: ['1.9', '-0.2', '0'],
        rad: '0.3',
        color: '#FF0000'
      },
      {
        id: 'O5',
        pos: ['0.7', '-0.8', '0'],
        rad: '0.3',
        color: '#FF0000'
      },
      {
        id: 'O6',
        pos: ['-0.7', '0.8', '0'],
        rad: '0.3',
        color: '#FF0000'
      },
      {
        id: 'H1',
        pos: ['-1.8', '0', '0'],
        rad: '0.2',
        color: '#FFFFFF'
      },
      {
        id: 'H2',
        pos: ['-2.0', '-1.2', '0'],
        rad: '0.2',
        color: '#FFFFFF'
      },
      {
        id: 'H3',
        pos: ['-0.4', '-1.2', '0'],
        rad: '0.2',
        color: '#FFFFFF'
      }
    ],
    connectors: [
      {
        id: 'conn1',
        startPoint: ['0', '0', '0'],
        endPoint: ['1.4', '0', '0']
      },
      {
        id: 'conn2',
        startPoint: ['1.4', '0', '0'],
        endPoint: ['2.1', '1.2', '0']
      },
      {
        id: 'conn3',
        startPoint: ['2.1', '1.2', '0'],
        endPoint: ['1.4', '2.4', '0']
      },
      {
        id: 'conn4',
        startPoint: ['1.4', '2.4', '0'],
        endPoint: ['0', '2.4', '0']
      },
      {
        id: 'conn5',
        startPoint: ['0', '2.4', '0'],
        endPoint: ['-0.7', '1.2', '0']
      },
      {
        id: 'conn6',
        startPoint: ['-0.7', '1.2', '0'],
        endPoint: ['-1.4', '1.2', '0']
      },
      {
        id: 'conn7',
        startPoint: ['-1.4', '1.2', '0'],
        endPoint: ['-1.4', '0', '0']
      },
      {
        id: 'conn8',
        startPoint: ['-1.4', '0', '0'],
        endPoint: ['-0.7', '-0.8', '0']
      },
      {
        id: 'conn9',
        startPoint: ['-0.7', '-0.8', '0'],
        endPoint: ['0', '0', '0']
      },
      {
        id: 'conn10',
        startPoint: ['2.1', '1.2', '0'],
        endPoint: ['1.9', '2.4', '0']
      },
      {
        id: 'conn11',
        startPoint: ['1.9', '2.4', '0'],
        endPoint: ['2.8', '1.6', '0']
      },
      {
        id: 'conn12',
        startPoint: ['2.8', '1.6', '0'],
        endPoint: ['2.8', '0.8', '0']
      },
      {
        id: 'conn13',
        startPoint: ['2.8', '0.8', '0'],
        endPoint: ['1.9', '-0.2', '0']
      },
      {
        id: 'conn14',
        startPoint: ['1.9', '-0.2', '0'],
        endPoint: ['-0.7', '0.8', '0']
      }
    ]
  }
}

const paracetamol = {
  name: 'Paracetamol',
  molecule: {
    atoms: [
      {
        id: 'C1',
        pos: ['0', '0', '0'],
        rad: '0.4',
        color: '#000000' // Carbono
      },
      {
        id: 'C2',
        pos: ['1.2', '0', '0'],
        rad: '0.4',
        color: '#000000' // Carbono
      },
      {
        id: 'C3',
        pos: ['1.8', '1.2', '0'],
        rad: '0.4',
        color: '#000000' // Carbono
      },
      {
        id: 'C4',
        pos: ['0.6', '2.0', '0'],
        rad: '0.4',
        color: '#000000' // Carbono
      },
      {
        id: 'c5',
        pos: ['-0.6', '1.2', '0'],
        rad: '0.4',
        color: '#000000' // Carbono
      },
      {
        id: 'c6',
        pos: ['-1.8', '0', '0'],
        rad: '0.4',
        color: '#000000' // Carbono
      },
      {
        id: 'c7',
        pos: ['-1.2', '-1.2', '0'],
        rad: '0.4',
        color: '#000000' // Carbono
      },
      {
        id: 'c8',
        pos: ['-0.6', '-0.2', '0'],
        rad: '0.4',
        color: '#000000' // Carbono
      },
      {
        id: 'o1',
        pos: ['2.4', '1.2', '0'],
        rad: '0.3',
        color: '#FF0000' // Oxígeno
      },
      {
        id: 'o2',
        pos: ['1.8', '2.0', '0'],
        rad: '0.3',
        color: '#FF0000' // Oxígeno
      },
      {
        id: 'o3',
        pos: ['-2.0', '0', '0'],
        rad: '0.3',
        color: '#FF0000' // Oxígeno
      },
      {
        id: 'n1',
        pos: ['-0.6', '1.8', '0'],
        rad: '0.3',
        color: '#0000FF' // Nitrógeno
      },
      {
        id: 'h1',
        pos: ['-0.2', '2.6', '0'],
        rad: '0.2',
        color: '#FFFFFF' // Hidrógeno
      },
      {
        id: 'h2',
        pos: ['-1.2', '2.0', '0'],
        rad: '0.2',
        color: '#FFFFFF' // Hidrógeno
      },
      {
        id: 'h3',
        pos: ['-2.0', '-0.6', '0'],
        rad: '0.2',
        color: '#FFFFFF' // Hidrógeno
      },
      {
        id: 'h4',
        pos: ['-0.8', '-1.0', '0'],
        rad: '0.2',
        color: '#FFFFFF' // Hidrógeno
      },
      {
        id: 'h5',
        pos: ['0.2', '-1.0', '0'],
        rad: '0.2',
        color: '#FFFFFF' // Hidrógeno
      },
      {
        id: 'h6',
        pos: ['0.2', '0.2', '0'],
        rad: '0.2',
        color: '#FFFFFF' // Hidrógeno
      }
    ],
    connectors: [
      {
        id: 'conn1',
        startPoint: ['0', '0', '0'],
        endPoint: ['1.2', '0', '0']
      },
      {
        id: 'conn2',
        startPoint: ['1.2', '0', '0'],
        endPoint: ['1.8', '1.2', '0']
      },
      {
        id: 'conn3',
        startPoint: ['1.8', '1.2', '0'],
        endPoint: ['0.6', '2.0', '0']
      },
      {
        id: 'conn4',
        startPoint: ['0.6', '2.0', '0'],
        endPoint: ['-0.6', '1.2', '0']
      },
      {
        id: 'conn5',
        startPoint: ['-0.6', '1.2', '0'],
        endPoint: ['-1.8', '0', '0']
      },
      {
        id: 'conn6',
        startPoint: ['-1.8', '0', '0'],
        endPoint: ['-1.2', '-1.2', '0']
      },
      {
        id: 'conn7',
        startPoint: ['-1.2', '-1.2', '0'],
        endPoint: ['-0.6', '-0.2', '0']
      },
      {
        id: 'conn8',
        startPoint: ['-0.6', '-0.2', '0'],
        endPoint: ['0', '0', '0']
      },
      {
        id: 'conn9',
        startPoint: ['1.8', '1.2', '0'],
        endPoint: ['2.4', '1.2', '0']
      },
      {
        id: 'conn10',
        startPoint: ['2.4', '1.2', '0'],
        endPoint: ['1.8', '2.0', '0']
      },
      {
        id: 'conn11',
        startPoint: ['1.8', '2.0', '0'],
        endPoint: ['-0.6', '1.8', '0']
      },
      {
        id: 'conn12',
        startPoint: ['-0.6', '1.8', '0'],
        endPoint: ['-2.0', '0', '0']
      },
      {
        id: 'conn13',
        startPoint: ['-2.0', '0', '0'],
        endPoint: ['-0.6', '-0.2', '0']
      }
    ]
  }
}

export const bioactiveMolecules = [
  acidoAcetilSalicilico,
  paracetamol
]
