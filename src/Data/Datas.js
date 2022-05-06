import doc from '../images/doc.PNG'
import React from 'react';
var Data = [
    {
        "id": 1,
        "photo": doc,
        "categorie": 'Calistenics',
        "nom": 'Seche du coprs pour un mois',
        "semaine": [
            {
                id: 1,
                titre: "Jours 1 à 5",
                "photo": doc,
                "intro": <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start' }}>
                    <h2>Tout Commence Maintenant ! 🔥</h2>
                    <p>Ça y est, c'est le moment de te lancer ! La marche à suivre est simple :</p>
                    <ul>
                        <li style={{ textAlign: 'left', marginBottom: 10 }}>Pour chaque jour du Programme, clique sur les images des différentes routines dans l'ordre pour accéder à la vidéo à suivre en temps réel. Si une image est présente deux fois à la suite, c'est parce qu'il faut la faire deux fois de suite.</li>
                        <li style={{ textAlign: 'left', marginBottom: 10 }}>Tu peux prendre <code style={{ fontWeight: 'bold', fontSize: 18 }}>1-2 minutes </code>de repos entre l'échauffement et la première routine, et <code style={{ fontWeight: 'bold', fontSize: 18 }}>5 minutes </code> entre deux routines. N'hésites pas à modifier ces temps en fonction de ton ressenti. Les durées totales indiquées pour les séances comprennent ces temps de repos ainsi que l'échauffement.</li>
                        <li style={{ textAlign: 'left', marginBottom: 10 }}>Les routines proposées lors <code style={{ fontWeight: 'bold', fontSize: 18 }}>des jour de repos</code> sont facultatives, cependant c'est le meilleur moment si jamais tu souhaites entraîner autre chose, comme ta Souplesse ou de la technique pour un sport/exercice particulier.</li>
                        <li style={{ textAlign: 'left', marginBottom: 10 }}>Il y a une séance abdos présente dans le programme, mais en fonction des objectifs, des envies de diversité ou d'en faire encore plus de chacun, il est possible de la remplacer par la Séance <code style={{ fontWeight: 'bold', fontSize: 18 }}>L-SIT </code> Intensive ou de rajouter celle-ci au programme du jour en cas d'envie.</li>
                    </ul>

                </div>,
                "soustitres": [
                    {
                        "id": 1,
                        "nom": "JOUR 1",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 2,
                        "nom": "JOUR 2",
                        "dure": "1h20",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 3,
                        "nom": "JOUR 3",
                        "dure": "50min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },

                        ]
                    },

                    {
                        "id": 4,
                        "nom": "JOUR 4",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 5,
                        "nom": "JOUR 5",
                        "desc": "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                ],
            },
            {
                id: 2,
                titre: "Jours 6 à 10",
                "photo": doc,
                "intro": <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start' }}>
                    <h2>Tiens bon ,on y est ! 🔥</h2>
                    <p>tu est si pret du bute</p>
    

                </div>,
                "soustitres": [
                    {
                        "id": 1,
                        "nom": "JOUR 6",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 2,
                        "nom": "JOUR 7",
                        "dure": "1h20",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 3,
                        "nom": "JOUR 8",
                        "dure": "50min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },

                        ]
                    },

                    {
                        "id": 4,
                        "nom": "JOUR 9",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 5,
                        "nom": "JOUR 10",
                        "desc": "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                ],
            },
            {
                id: 3,
                titre: "Jours 11 à 15",
                "photo": doc,
                "intro": <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start' }}>
                    <h2>Tiens bon ,on y est ! 🔥</h2>
                    <p>tu est si pret du bute</p>
    

                </div>,
                "soustitres": [
                    {
                        "id": 1,
                        "nom": "JOUR 6",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 2,
                        "nom": "JOUR 7",
                        "dure": "1h20",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 3,
                        "nom": "JOUR 8",
                        "dure": "50min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },

                        ]
                    },

                    {
                        "id": 4,
                        "nom": "JOUR 9",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 5,
                        "nom": "JOUR 10",
                        "desc": "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                ],
            },
            {
                id: 4,
                titre: "Jours 16 à 20",
                "photo": doc,
                "intro": <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start' }}>
                    <h2>Tiens bon ,on y est ! 🔥</h2>
                    <p>tu est si pret du bute</p>
    

                </div>,
                "soustitres": [
                    {
                        "id": 1,
                        "nom": "JOUR 6",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 2,
                        "nom": "JOUR 7",
                        "dure": "1h20",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 3,
                        "nom": "JOUR 8",
                        "dure": "50min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },

                        ]
                    },

                    {
                        "id": 4,
                        "nom": "JOUR 9",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 5,
                        "nom": "JOUR 10",
                        "desc": "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                ],
            },
            {
                id: 5,
                titre: "Jours 21 à 25",
                "photo": doc,
                "intro": <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start' }}>
                    <h2>Tiens bon ,on y est ! 🔥</h2>
                    <p>tu est si pret du bute</p>
    

                </div>,
                "soustitres": [
                    {
                        "id": 1,
                        "nom": "JOUR 6",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 2,
                        "nom": "JOUR 7",
                        "dure": "1h20",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 3,
                        "nom": "JOUR 8",
                        "dure": "50min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },

                        ]
                    },

                    {
                        "id": 4,
                        "nom": "JOUR 9",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 5,
                        "nom": "JOUR 10",
                        "desc": "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                ],
            },
            {
                id: 6,
                titre: "Jours 26 à 30",
                "photo": doc,
                "intro": <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start' }}>
                    <h2>Tiens bon ,on y est ! 🔥</h2>
                    <p>tu est si pret du bute</p>
    

                </div>,
                "soustitres": [
                    {
                        "id": 1,
                        "nom": "JOUR 6",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 2,
                        "nom": "JOUR 7",
                        "dure": "1h20",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 3,
                        "nom": "JOUR 8",
                        "dure": "50min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },

                        ]
                    },

                    {
                        "id": 4,
                        "nom": "JOUR 9",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 5,
                        "nom": "JOUR 10",
                        "desc": "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                ],
            },
        ]

    }


]

export default Data;