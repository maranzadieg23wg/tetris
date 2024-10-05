// ↓ Hemen ditugu piezen posizio guztiak
const shape= [
    // I piece
    [
      [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0]
      ],
      [
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0]
      ],
      [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
      ],
      [
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0]
      ]
    ],
    // H piece
    [
      [
        [0,0],
        [1,1],
        [1,1]
      ]
    ],
    // J piece
    [
      [
        [0,0,0],
        [1,1,1],
        [0,0,1]
      ],
      [
        [0,1,0],
        [0,1,0],
        [1,1,0]
      ],
      [
        [1,0,0],
        [1,1,1],
        [0,0,0]
      ],
      [
        [0,1,1],
        [0,1,0],
        [0,1,0]
      ]
    ],
    // L piece
    [
      [
        [0,0,0],
        [1,1,1],
        [1,0,0]
      ],
      [
        [1,1,0],
        [0,1,0],
        [0,1,0]
      ],
      [
        [0,0,1],
        [1,1,1],
        [0,0,0]
      ],
      [
        [0,1,0],
        [0,1,0],
        [0,1,1]
      ]
    ],
    // S piece
    [
      [
        [0,0,0],
        [0,1,1],
        [1,1,0]
      ],
      [
        [1,0,0],
        [1,1,0],
        [0,1,0]
      ],
      [
        [0,1,1],
        [1,1,0],
        [0,0,0]
      ],
      [
        [0,1,0],
        [0,1,1],
        [0,0,1]
      ]
    ],
    // Z piece
    [
      [
        [0,0,0],
        [1,1,0],
        [0,1,1]
      ],
      [
        [0,1,0],
        [1,1,0],
        [1,0,0]
      ],
      [
        [1,1,0],
        [0,1,1],
        [0,0,0]
      ],
      [
        [0,0,1],
        [0,1,1],
        [0,1,0]
      ]
    ],
    // T piece
    [
      [
        [0,0,0],
        [1,1,1],
        [0,1,0]
      ],
      [
        [0,1,0],
        [1,1,0],
        [0,1,0]
      ],
      [
        [0,1,0],
        [1,1,1],
        [0,0,0]
      ],
      [
        [0,1,0],
        [0,1,1],
        [0,1,0]
      ]
    ]
]


// ↓ Sortu egiten dugu pieza klasea erabiliko dena lortzeko ze irudi edukiko duen piezak
class Pieza{


    constructor(mota){
      this.mota = mota; // ← Gorde egiten dugu ze motatakoa den pieza, H, I, J eta abar
      this.rotazioa= 0; // ← Zein rotazio edukiko duen

      this.list = this.lortuFOrma(mota); // ← Hemen dauden piezaren rotazio guztiak
        
    }


    // ↓ Baldin eta zein pieza aukeratu den, forma bat edo beste itzuliko du
    lortuFOrma(mota) {
        switch (mota) {
            case "I":
                return shape[0];
            case "H":
                return shape[1];
            case "J":
                return shape[2];
            case "L":
                return shape[3];
            case "S":
                return shape[4];
            case "Z":
                return shape[5];
            case "T":
                return shape[6];
            default:
                throw new Error("Sartutako mota ez da egokia");
        }
    }

    rotatu90(){
        this.rotazioa++;
        if(this.rotazioa >3){
            this.rotazioa = 0;
        }
    }

    rotatu_90(){
        this.rotazioa--
        if(this.rotazioa <0){
            this.rotazioa = 3;
        }
    }


    // ↓ Piezaren irudia bueltatuko du bere rotazioaren arabera.
    getIrudia(){
        return this.list[this.rotazioa];
    }


    



}



export default Pieza;