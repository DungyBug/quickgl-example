let qgl = new QuickGL({
    fov: 45,
    saveVertPR: true
});

qgl.addVerticies({
    verticies: [
        0.0,  0.2,  0.0,
        -0.2, -0.2,  0.2,
         0.2, -0.2,  0.2,
        // Right face
         0.0,  0.2,  0.0,
         0.2, -0.2,  0.2,
         0.2, -0.2, -0.2,
        // Back face
         0.0,  0.2,  0.0,
         0.2, -0.2, -0.2,
        -0.2, -0.2, -0.2,
        // Left face
         0.0,  0.2,  0.0,
        -0.2, -0.2, -0.2,
        -0.2, -0.2,  0.2,

        0.2, -0.2, 0.2,
        -0.2, -0.2, 0.2,
        -0.2, -0.2, -0.2,

        0.2, -0.2, -0.2,
        0.2, -0.2, 0.2,
        -0.2, -0.2, -0.2
        
    ],
    poses: [
        0.0, 0.0, 0.0
    ],
    rotations: [
        0.0, 0.0, 0.0
    ],
    color: [
        1.0, 1.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 1.0,

        
        0.6, 0.6, 0.6, 1.0,
        0.6, 0.6, 0.6, 1.0,
        0.6, 0.6, 0.6, 1.0,

        
        0.6, 0.6, 0.6, 1.0,
        0.6, 0.6, 0.6, 1.0,
        0.6, 0.6, 0.6, 1.0,

        
        0.8, 0.8, 0.8, 1.0,
        0.8, 0.8, 0.8, 1.0,
        0.8, 0.8, 0.8, 1.0,

        0.2, 0.2, 0.2, 1.0,
        0.2, 0.2, 0.2, 1.0,
        0.2, 0.2, 0.2, 1.0,

        0.2, 0.2, 0.2, 1.0,
        0.2, 0.2, 0.2, 1.0,
        0.2, 0.2, 0.2, 1.0
    ],
    texture: [
        // Front face
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
  
        // Back face
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
  
        // Top face
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
  
        // Bottom face
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,
  
        // Right face
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
  
        // Left face
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
      ]
});

qgl.addVerticies({
    verticies: [
        // Front face
        -0.2, -0.2,  0.2,
         0.2, -0.2,  0.2,
         0.2,  0.2,  0.2,

        -0.2,  -0.2,  0.2,
        -0.2,  0.2,  0.2,
        0.2,  0.2,  0.2,
  
        // Back face
        -0.2, -0.2,  -0.2,
         0.2, -0.2,  -0.2,
         0.2,  0.2,  -0.2,

        -0.2,  -0.2,  -0.2,
        -0.2,  0.2,  -0.2,
        0.2,  0.2,  -0.2,
  
        // Top face
        -0.2,  0.2, -0.2,
        -0.2,  0.2,  0.2,
         0.2,  0.2,  0.2,
        -0.2,  0.2, -0.2,
        0.2,  0.2, -0.2,
        0.2,  0.2, 0.2,
  
        // Bottom face
        -0.2,  -0.2, -0.2,
        -0.2,  -0.2,  0.2,
         0.2,  -0.2,  0.2,
        -0.2,  -0.2, -0.2,
        0.2,  -0.2, -0.2,
        0.2,  -0.2, 0.2,
  
        // Right face
         0.2, -0.2, -0.2,
         0.2,  0.2, -0.2,
         0.2,  0.2,  0.2,
         0.2, -0.2, -0.2,
         0.2, -0.2, 0.2,
         0.2, 0.2, 0.2,
  
        // Left face
        -0.2, -0.2, -0.2,
        -0.2,  0.2, -0.2,
        -0.2,  0.2,  0.2,
        -0.2, -0.2, -0.2,
        -0.2, -0.2, 0.2,
        -0.2, 0.2, 0.2
        
    ],
    poses: [
        0.0, 0.0, 0.0
    ],
    rotations: [
        0.0, 0.5, 0.0
    ],
    color: [
        1.0, 1.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 1.0,

        
        0.4, 0.4, 0.4, 1.0,
        0.4, 0.4, 0.4, 1.0,
        0.4, 0.4, 0.4, 1.0,
        0.4, 0.4, 0.4, 1.0,
        0.4, 0.4, 0.4, 1.0,
        0.4, 0.4, 0.4, 1.0,

        
        0.6, 0.6, 0.6, 1.0,
        0.6, 0.6, 0.6, 1.0,
        0.6, 0.6, 0.6, 1.0,
        0.6, 0.6, 0.6, 1.0,
        0.6, 0.6, 0.6, 1.0,
        0.6, 0.6, 0.6, 1.0,
        
        0.8, 0.8, 0.8, 1.0,
        0.8, 0.8, 0.8, 1.0,
        0.8, 0.8, 0.8, 1.0,
        0.8, 0.8, 0.8, 1.0,
        0.8, 0.8, 0.8, 1.0,
        0.8, 0.8, 0.8, 1.0,

        
        0.9, 0.9, 0.9, 1.0,
        0.9, 0.9, 0.9, 1.0,
        0.9, 0.9, 0.9, 1.0,
        0.9, 0.9, 0.9, 1.0,
        0.9, 0.9, 0.9, 1.0,
        0.9, 0.9, 0.9, 1.0,

        0.2, 0.2, 0.2, 1.0,
        0.2, 0.2, 0.2, 1.0,
        0.2, 0.2, 0.2, 1.0,
        0.2, 0.2, 0.2, 1.0,
        0.2, 0.2, 0.2, 1.0,
        0.2, 0.2, 0.2, 1.0,

        0.2, 0.2, 0.2, 1.0,
        0.2, 0.2, 0.2, 1.0,
        0.2, 0.2, 0.2, 1.0,
        0.2, 0.2, 0.2, 1.0,
        0.2, 0.2, 0.2, 1.0,
        0.2, 0.2, 0.2, 1.0
    ],

    texture: [
        // Front face
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
  
        // Back face
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
  
        // Top face
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
  
        // Bottom face
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,
  
        // Right face
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
  
        // Left face
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
      ]
});

for(let i = 0; i < 40; i++) {
    qgl.addVerticies({
        verticies: [
            0.0, -10.0, -1000.0,
            -0.3, -10.0, -1000.0,
            -0.3, -10.0, 1000.0,
            0.0, -10.0, -1000.0,
            0.0, -10.0, 1000.0,
            -0.3, -10.0, 1000.0,
        ],
        color: [
            1.0, 0.0, 1.0, 1.0,
            1.0, 0.0, 1.0, 1.0,
            1.0, 0.0, 1.0, 1.0,
            1.0, 0.0, 1.0, 1.0,
            1.0, 0.0, 1.0, 1.0,
            1.0, 0.0, 1.0, 1.0
        ],
        poses: [
            i * 10 - 200, 0.0, 0.0
        ],
        rotations: [
            0.0, 0.5, 0.0
        ],
    
        texture: [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
      
            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
      
            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
      
            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
      
            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
      
            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
          ]
    });
}

for(let i = 3; i < 103; i++) {
    qgl.addVerticies({
        verticies: [
            -200.0, -10.0, 0.0,
            -200.0, -10.0, -1.0,
            200.0, -10.0, -1.0,
            -200.0, -10.0, 0.0,
            200.0, -10.0, 0.0,
            200.0, -10.0, -1.0
        ],
        color: [
            1.0, 0.0, 1.0, 1.0,
            1.0, 0.0, 1.0, 1.0,
            1.0, 0.0, 1.0, 1.0,
            1.0, 0.0, 1.0, 1.0,
            1.0, 0.0, 1.0, 1.0,
            1.0, 0.0, 1.0, 1.0
        ],
        poses: [
            0.0, 0.0, -i * 10
        ],
        rotations: [
            0.0, 0.0, 0.0
        ],
    
        texture: [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
      
            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
      
            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
      
            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
      
            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
      
            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
          ]
    });
}



// qgl.addVerticities({
//     verticities: [
//         -1.0,  1.0,  0.0,
//         1.0,  -1.0,  0.0,
//         -1.0, -1.0,  0.0
//     ],
//     poses: [
//         -1.0, 0.0, 0.0
//     ]
// });

let i = 0;

function tick() {
    qgl._webGLStart();
    qgl.poses[0] = [
        Math.sin(i / 40) * 2, Math.cos(i / 360) * 2, -Math.sin(i / 360) * 2 - 8
    ];

    qgl.poses[1] = [
        -Math.sin(i / 40) * 2, Math.cos(i / 180) * 2, -Math.sin(i / 360) * 2 - 8
    ];

    qgl.rotations[0] = [
        0.0, i * 1.2, i
    ];

    qgl.rotations[1] = [
        i, 0.0, i / 2
    ];

    for(let j = 0; j < 100; j++) {
        let pos = (((i % 100) - j * 20) / 20) % 100 * 10;
        qgl.poses[j + 42] = [
            0.0, 0.0, pos
        ];
    }
    i++;
    if(i > 11036) {
        i = 0;
    }
    requestAnimationFrame(() => tick());
}

tick();