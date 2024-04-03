var APP_DATA = {
  "scenes": [
    {
      "id": "0-desert",
      "name": "desert",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.265114581134629,
        "pitch": -0.1320474245760721,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 0.4968388128769785,
          "pitch": 0.03924911551057875,
          "rotation": 0.7853981633974483,
          "target": "1-house"
        },
        {
          "yaw": -1.8018900548589158,
          "pitch": -0.01014805447835343,
          "rotation": 5.497787143782138,
          "target": "4-snow"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2203519778328076,
          "pitch": -0.04184064586958769,
          "title": "Car",
          "text": "Useful car"
        }
      ]
    },
    {
      "id": "1-house",
      "name": "house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": -2.0268543407616626,
        "pitch": -0.07065805417253657,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 3.009214585558448,
          "pitch": 0.06842681698952546,
          "rotation": 11.780972450961727,
          "target": "2-lake"
        },
        {
          "yaw": -0.10587127740840074,
          "pitch": 0.31236107396280666,
          "rotation": 0,
          "target": "0-desert"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6626587648728393,
          "pitch": 0.30090280377496903,
          "title": "House",
          "text": "Fancy house"
        }
      ]
    },
    {
      "id": "2-lake",
      "name": "lake",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.9659837678205454,
        "pitch": -0.18003678341900908,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": -2.817094441906562,
          "pitch": 0.052458523342270524,
          "rotation": 6.283185307179586,
          "target": "1-house"
        },
        {
          "yaw": -0.12256091761370413,
          "pitch": -0.010281994754583579,
          "rotation": 0,
          "target": "3-pool"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.012681043611746,
          "pitch": -0.5717445644803831,
          "title": "Sun",
          "text": "Shiny sun"
        }
      ]
    },
    {
      "id": "3-pool",
      "name": "pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 0.018758738426610577,
        "pitch": 0.06800604899032692,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": -0.07550328560978059,
          "pitch": 0.5041417561829888,
          "rotation": 0,
          "target": "4-snow"
        },
        {
          "yaw": -3.1414255558308,
          "pitch": 0.36844520070630793,
          "rotation": 0,
          "target": "2-lake"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7770810362077611,
          "pitch": -0.6274157241157248,
          "title": "Sky",
          "text": "Biue sky"
        }
      ]
    },
    {
      "id": "4-snow",
      "name": "snow",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 2.472471401053026,
        "pitch": 0.05443858938992818,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 1.4562775947104205,
          "pitch": 0.11630902361482143,
          "rotation": 0,
          "target": "0-desert"
        },
        {
          "yaw": -1.5171695363816617,
          "pitch": 0.12094146338820977,
          "rotation": 0,
          "target": "3-pool"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5996319839417072,
          "pitch": 0.02327360099477538,
          "title": "Museum",
          "text": "Joyful museum"
        }
      ]
    }
  ],
  "name": "place",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
