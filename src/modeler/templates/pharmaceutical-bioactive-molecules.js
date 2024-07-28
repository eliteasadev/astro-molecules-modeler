// Ácido acetilsalicílico (aspirina) (C₉H₈O₄)
// Paracetamol (acetaminofén) (C₈H₉NO₂)
// Ibuprofeno (C₁₃H₁₈O₂)
// Penicilina (C₁₆H₁₈N₂O₄S)
// Amoxicilina (C₁₆H₁₉N₃O₅S)
// Tetraciclina (C₂₂H₂₄N₂O₈)
// Cloroquina (C₁₈H₂₆ClN₃)
// Aspirina (C₉H₈O₄)
// Diazepam (C₁₆H₁₃ClN₂O)
// Morfina (C₁₇H₁₉NO₃)
// Cocaína (C₁₇H₂₁NO₄)
// Cafeína (C₈H₁₀N₄O₂)
// Nicotina (C₁₀H₁₄N₂)
// Heroína (C₂₁H₂₃NO₅)
// Tetrahidrocannabinol (THC) (C₂₁H₃₀O₂)
// Estradiol (C₁₈H₂₄O₂)
// Progesterona (C₂₁H₃₀O₂)
// Testosterona (C₁₉H₂₈O₂)
// Adrenalina (C₉H₁₃NO₃)
// Serotonina (C₁₀H₁₂N₂O)

const acidoAcetilSalicilico = {
  name: 'Ácido Acetilsalicílico',
  molecule: {
    atoms: [
      {
        id: 'c1',
        pos: ['0', '0', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'c2',
        pos: ['1.4', '0', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'c3',
        pos: ['2.1', '1.2', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'c4',
        pos: ['1.4', '2.4', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'c5',
        pos: ['0', '2.4', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'c6',
        pos: ['-0.7', '1.2', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'c7',
        pos: ['-1.4', '1.2', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'c8',
        pos: ['-1.4', '0', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'c9',
        pos: ['-0.7', '-0.8', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'o1',
        pos: ['1.9', '2.4', '0'],
        rad: '0.3',
        color: '#FF0000'
      },
      {
        id: 'o2',
        pos: ['2.8', '1.6', '0'],
        rad: '0.3',
        color: '#FF0000'
      },
      {
        id: 'o3',
        pos: ['2.8', '0.8', '0'],
        rad: '0.3',
        color: '#FF0000'
      },
      {
        id: 'o4',
        pos: ['1.9', '-0.2', '0'],
        rad: '0.3',
        color: '#FF0000'
      },
      {
        id: 'o5',
        pos: ['0.7', '-0.8', '0'],
        rad: '0.3',
        color: '#FF0000'
      },
      {
        id: 'o6',
        pos: ['-0.7', '0.8', '0'],
        rad: '0.3',
        color: '#FF0000'
      },
      {
        id: 'h1',
        pos: ['-1.8', '0', '0'],
        rad: '0.2',
        color: '#FFFFFF'
      },
      {
        id: 'h2',
        pos: ['-2.0', '-1.2', '0'],
        rad: '0.2',
        color: '#FFFFFF'
      },
      {
        id: 'h3',
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
        id: 'c1',
        pos: ['0', '0', '0'],
        rad: '0.4',
        color: '#000000' // Carbono
      },
      {
        id: 'c2',
        pos: ['1.2', '0', '0'],
        rad: '0.4',
        color: '#000000' // Carbono
      },
      {
        id: 'c3',
        pos: ['1.8', '1.2', '0'],
        rad: '0.4',
        color: '#000000' // Carbono
      },
      {
        id: 'c4',
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
