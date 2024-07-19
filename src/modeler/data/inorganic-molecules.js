// 1. Moléculas Inorgánicas

// Agua (H₂O) ✅
// Dióxido de carbono (CO₂) ✅
// Amoniaco (NH₃) ✅
// Ácido sulfúrico (H₂SO₄) ✅
// Cloruro de sodio (NaCl) ✅
// Ácido nítrico (HNO₃)
// Óxido de calcio (CaO)
// Hidróxido de sodio (NaOH)
// Nitrato de amonio (NH₄NO₃)
// Fosfato de calcio (Ca₃(PO₄)₂)
// Ácido clorhídrico (HCl)
// Peróxido de hidrógeno (H₂O₂)
// Metano (CH₄)
// Sulfato de cobre (CuSO₄)
// Bicarbonato de sodio (NaHCO₃)
// Nitrógeno (N₂)
// Oxígeno (O₂)
// Óxido nitroso (N₂O)
// Monóxido de carbono (CO)
// Dióxido de azufre (SO₂)

const agua = {
  name: 'H₂O',
  molecule: {
    atoms: [
      {
        id: 'hx1',
        pos: ['0', '1.2', '0'],
        rad: '0.4',
        color: '#ff0000'
      },
      {
        id: 'YScEC_c_kzxLMFRv0CEC8',
        pos: ['-.8', '.4', '0'],
        rad: '0.2',
        color: '#ffffff'
      },
      {
        id: 'w8elhmFuKnP0EzH366FOl',
        pos: ['.8', '.4', '0'],
        rad: '0.2',
        color: '#ffffff'
      }
    ],
    connectors: [
      {
        id: 'NDRfdumAVPtaXhXw-v4Eh',
        startPoint: ['-.8', '.4', '0'],
        endPoint: ['0', '1.2', '0']
      },
      {
        id: 'w5fYlGUOch61qAg1K97Lt',
        startPoint: ['0', '1.2', '0'],
        endPoint: ['.8', '.4', '0']
      }
    ]
  }
}

const dioxidoDeCarbono = {
  name: 'CO₂',
  molecule: {
    atoms: [
      {
        id: 'hx1',
        pos: ['0', '1.2', '0'],
        rad: '0.4',
        color: '#000000'
      },
      {
        id: 'YScEC_c_kzxLMFRv0CEC8',
        pos: ['-.8', '1.2', '0'],
        rad: '0.2',
        color: '#ff0000'
      },
      {
        id: 'w8elhmFuKnP0EzH366FOl',
        pos: ['.8', '1.2', '0'],
        rad: '0.2',
        color: '#ff0000'
      }
    ],
    connectors: [
      {
        id: 'PKzY4NlhvFcl14-tAWdOt',
        startPoint: ['0', '1.2', '0'],
        endPoint: ['.8', '1.2', '0']
      },
      {
        id: 'LJbrTFy8Xhd4JAqt9RygE',
        startPoint: ['0', '1.2', '0'],
        endPoint: ['-.8', '1.2', '0']
      }
    ]
  }
}

const amoniaco = {
  name: 'NH₃',
  molecule: {
    atoms: [
      {
        id: 'hx1',
        pos: ['0', '1.2', '0'],
        rad: '0.4',
        color: '#321dcd'
      },
      {
        id: 'YScEC_c_kzxLMFRv0CEC8',
        pos: ['-0.6', '0.5', '0'],
        rad: '0.2',
        color: '#ffffff'
      },
      {
        id: 'w8elhmFuKnP0EzH366FOl',
        pos: ['.6', '0.5', '0'],
        rad: '0.2',
        color: '#ffffff'
      },
      {
        id: '1xNZ-dBPMEX1G9v0--_Z8',
        pos: ['0', '2', '0'],
        rad: '0.2',
        color: '#ffffff'
      }
    ],
    connectors: [
      {
        id: 'gg_0SGUGpeM--xHBZ_yKG',
        startPoint: ['0', '2', '0'],
        endPoint: ['0', '1.2', '0']
      },
      {
        id: 'ZOeMqdSWs444Y5RHutUKV',
        startPoint: ['-0.6', '0.5', '0'],
        endPoint: ['0', '1.2', '0']
      },
      {
        id: 'xZbt2nGKVKUC82OWbKCTA',
        startPoint: ['.6', '0.5', '0'],
        endPoint: ['0', '1.2', '0']
      }
    ]
  }
}

const acidoSulfurico = {
  name: 'H₂SO₄',
  molecule: {
    atoms: [
      {
        id: 'hx1',
        pos: ['0', '1', '0'],
        rad: '0.5',
        color: '#e4d211'
      },
      {
        id: 'KITSXanmPuVqwn6zZlZCm',
        pos: ['0', '2', '0'],
        rad: '0.3',
        color: '#ff0000'
      },
      {
        id: 'MYZ5I2ECMw2-3DPnqUWZy',
        pos: ['0', '0', '0'],
        rad: '0.3',
        color: '#ff0000'
      },
      {
        id: 'IreCvb9-zzWDYtoRH8doz',
        pos: ['-1', '1', '0'],
        rad: '0.3',
        color: '#ff0000'
      },
      {
        id: 'DmojtopNNdyYZSZoYQT7f',
        pos: ['1', '1', '0'],
        rad: '0.3',
        color: '#ff0000'
      },
      {
        id: 'fQpN2ELTypopXY7LbD1HB',
        pos: ['1.7', '1', '0'],
        rad: '0.2',
        color: '#ffffff'
      },
      {
        id: 'c6YFD4zRCR8kp7z143i_Y',
        pos: ['-1.7', '1', '0'],
        rad: '0.2',
        color: '#ffffff'
      }
    ],
    connectors: [
      {
        id: 'IA2p1dWOiTQhruCFLt5lN',
        startPoint: ['-.6', '1.9', '0'],
        endPoint: ['-.6', '1.9', '0']
      },
      {
        id: 'LRUyTjhjurX5jXUgZkOnH',
        startPoint: ['-.6', '1.9', '0'],
        endPoint: ['-.6', '1.9', '0']
      },
      {
        id: '4Rs4SA5ALj_awh0ip0fM0',
        startPoint: ['-1', '1', '0'],
        endPoint: ['0', '1', '0']
      },
      {
        id: '9HlIYSeKuSZnU0vxbxrad',
        startPoint: ['0', '2', '0'],
        endPoint: ['0', '1', '0']
      },
      {
        id: '5KJvupH_8jhFj327PJKZx',
        startPoint: ['1', '1', '0'],
        endPoint: ['0', '1', '0']
      },
      {
        id: '1R5Ae7AI03mUw33eCo7my',
        startPoint: ['0', '0', '0'],
        endPoint: ['0', '1', '0']
      },
      {
        id: 'DE6he7W_2BLTga0MBVPoW',
        startPoint: ['-1.7', '1', '0'],
        endPoint: ['-1', '1', '0']
      },
      {
        id: 'eEQTUCyyqxeBY_A91dJ5l',
        startPoint: ['1', '1', '0'],
        endPoint: ['1.7', '1', '0']
      }
    ]
  }
}

const cloruroDeSodio = {
  name: 'NaCl',
  molecule: {
    atoms: [
      {
        id: 'hx1',
        pos: ['-0.75', '1', '0'],
        rad: '0.5',
        color: '#7213e7'
      },
      {
        id: 'AsC9-buCocP8AytZKmbQR',
        pos: ['0.75', '1', '0'],
        rad: '0.5',
        color: '#c1a206'
      }
    ],
    connectors: [
      {
        id: '7uNGouqrhMY761tp2d-3e',
        startPoint: ['-0.75', '1', '0'],
        endPoint: ['0.75', '1', '0']
      }
    ]
  }
}

export default [
  agua,
  dioxidoDeCarbono,
  amoniaco,
  acidoSulfurico,
  cloruroDeSodio
]
