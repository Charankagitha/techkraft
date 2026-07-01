var APP_DATA = {
  "scenes": [
    {
      "id": "0-reception",
      "name": "Reception",
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
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.028277896684159032,
        "pitch": 0.012626703711232423,
        "fov": 1.3683693825392056
      },
      "linkHotspots": [
        {
          "yaw": -0.03212918269404774,
          "pitch": 0.4604964728678187,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.05999743745753605,
          "pitch": -0.3896328629304442,
          "title": "Authentic Telugu Restuarent",
          "text": "One of our Prestigious live Project called Aahara Vihara , A Multicusine Restaurant in Jadcharla&nbsp;"
        }
      ]
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
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
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.04661751678010084,
        "pitch": -0.0024861361225330114,
        "fov": 1.3683693825392056
      },
      "linkHotspots": [
        {
          "yaw": 1.7250162530766975,
          "pitch": 0.5945183413110762,
          "rotation": 0,
          "target": "0-reception"
        },
        {
          "yaw": 0.028849087456695344,
          "pitch": 0.5083496951450517,
          "rotation": 0,
          "target": "2-ambience-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ambience-1",
      "name": "Ambience-1",
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
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3683693825392056
      },
      "linkHotspots": [
        {
          "yaw": -3.076365598254686,
          "pitch": 0.44856666333514994,
          "rotation": 0,
          "target": "1-entrance"
        },
        {
          "yaw": -1.6044148628736536,
          "pitch": 0.590031536800451,
          "rotation": 5.497787143782138,
          "target": "3-handwash"
        },
        {
          "yaw": -0.008749278520781445,
          "pitch": 0.5235505889047722,
          "rotation": 0,
          "target": "4-billing"
        },
        {
          "yaw": 1.6462862728279113,
          "pitch": 0.594818196416993,
          "rotation": 0,
          "target": "6-ambience-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-handwash",
      "name": "Handwash",
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
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.415985263496717,
          "pitch": 0.6692402509737434,
          "rotation": 7.0685834705770345,
          "target": "2-ambience-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-billing",
      "name": "Billing",
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
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.010456224059433694,
        "pitch": -0.0032844940718987914,
        "fov": 1.3683693825392056
      },
      "linkHotspots": [
        {
          "yaw": 3.0815803775007584,
          "pitch": 0.6135504732362751,
          "rotation": 0,
          "target": "2-ambience-1"
        },
        {
          "yaw": 1.529050638275729,
          "pitch": 0.4366421770085811,
          "rotation": 0,
          "target": "5-ambience-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-ambience-2",
      "name": "Ambience-2",
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
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 1.4794840137860872,
        "pitch": 0.14601912435366593,
        "fov": 1.3683693825392056
      },
      "linkHotspots": [
        {
          "yaw": -1.5024820374694272,
          "pitch": 0.595003071387989,
          "rotation": 0,
          "target": "4-billing"
        },
        {
          "yaw": 3.048181185641491,
          "pitch": 0.635796482573685,
          "rotation": 0,
          "target": "6-ambience-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-ambience-3",
      "name": "Ambience-3",
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
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.08031823676193817,
        "pitch": -0.01446436745418822,
        "fov": 1.3683693825392056
      },
      "linkHotspots": [
        {
          "yaw": 2.9635802613829263,
          "pitch": 0.42867709314765357,
          "rotation": 6.283185307179586,
          "target": "5-ambience-2"
        },
        {
          "yaw": 1.7027383796713966,
          "pitch": 0.4597204432321238,
          "rotation": 0,
          "target": "2-ambience-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Aahara-Vihara-Restuarant",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
