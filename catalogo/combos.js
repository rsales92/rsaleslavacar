// Combos e valores fornecidos pelo usuário. Preços finais já incluem 5% OFF.
const catalogCombos = {
    "PICAPE": [
        {
            "name": "Combo Brilho Extra",
            "services": [
                "Lavagem Completa + Cera Tradicional",
                "Revitalização dos plásticos externos"
            ],
            "originalPrice": 210.0,
            "price": 199.5
        },
        {
            "name": "Combo Interior Renovado",
            "services": [
                "Lavagem Completa + Cera Tradicional",
                "Revitalização dos plásticos internos"
            ],
            "originalPrice": 230.0,
            "price": 218.5
        },
        {
            "name": "Combo Proteção Premium",
            "services": [
                "Lavagem Detalhada + Cera Premium",
                "Revitalização dos plásticos internos e externos"
            ],
            "originalPrice": 300.0,
            "price": 285.0
        },
        {
            "name": "Combo Visibilidade na Chuva",
            "services": [
                "Lavagem Completa + Cera Tradicional",
                "Descontaminação e Cristalização dos vidros"
            ],
            "originalPrice": 420.0,
            "price": 399.0
        },
        {
            "name": "Combo Cuidado Completo",
            "services": [
                "Lavagem Detalhada + Cera Premium",
                "Revitalização dos plásticos internos e externos",
                "Descontaminação e Cristalização dos vidros"
            ],
            "originalPrice": 550.0,
            "price": 522.5
        },
        {
            "name": "Combo Pintura Renovada",
            "services": [
                "Polimento Comercial (inclui lavagem e descontaminação)",
                "Revitalização dos plásticos externos"
            ],
            "originalPrice": 740.0,
            "price": 703.0
        }
    ],
    "HATCH": [
        {
            "name": "Combo Brilho Extra",
            "services": [
                "Lavagem Completa + Cera Tradicional",
                "Revitalização dos plásticos externos"
            ],
            "originalPrice": 160.0,
            "price": 152.0
        },
        {
            "name": "Combo Interior Renovado",
            "services": [
                "Lavagem Completa + Cera Tradicional",
                "Revitalização dos plásticos internos"
            ],
            "originalPrice": 180.0,
            "price": 171.0
        },
        {
            "name": "Combo Proteção Premium",
            "services": [
                "Lavagem Detalhada + Cera Premium",
                "Revitalização dos plásticos internos e externos"
            ],
            "originalPrice": 250.0,
            "price": 237.5
        },
        {
            "name": "Combo Visibilidade na Chuva",
            "services": [
                "Lavagem Completa + Cera Tradicional",
                "Descontaminação e Cristalização dos vidros"
            ],
            "originalPrice": 370.0,
            "price": 351.5
        },
        {
            "name": "Combo Cuidado Completo",
            "services": [
                "Lavagem Detalhada + Cera Premium",
                "Revitalização dos plásticos internos e externos",
                "Descontaminação e Cristalização dos vidros"
            ],
            "originalPrice": 500.0,
            "price": 475.0
        },
        {
            "name": "Combo Pintura Renovada",
            "services": [
                "Polimento Comercial (inclui lavagem e descontaminação)",
                "Revitalização dos plásticos externos"
            ],
            "originalPrice": 440.0,
            "price": 418.0
        }
    ],
    "SUV": [
        {
            "name": "Combo Brilho Extra",
            "services": [
                "Lavagem Completa + Cera Tradicional",
                "Revitalização dos plásticos externos"
            ],
            "originalPrice": 210.0,
            "price": 199.5
        },
        {
            "name": "Combo Interior Renovado",
            "services": [
                "Lavagem Completa + Cera Tradicional",
                "Revitalização dos plásticos internos"
            ],
            "originalPrice": 230.0,
            "price": 218.5
        },
        {
            "name": "Combo Proteção Premium",
            "services": [
                "Lavagem Detalhada + Cera Premium",
                "Revitalização dos plásticos internos e externos"
            ],
            "originalPrice": 320.0,
            "price": 304.0
        },
        {
            "name": "Combo Visibilidade na Chuva",
            "services": [
                "Lavagem Completa + Cera Tradicional",
                "Descontaminação e Cristalização dos vidros"
            ],
            "originalPrice": 400.0,
            "price": 380.0
        },
        {
            "name": "Combo Cuidado Completo",
            "services": [
                "Lavagem Detalhada + Cera Premium",
                "Revitalização dos plásticos internos e externos",
                "Descontaminação e Cristalização dos vidros"
            ],
            "originalPrice": 570.0,
            "price": 541.5
        },
        {
            "name": "Combo Pintura Renovada",
            "services": [
                "Polimento Comercial (inclui lavagem e descontaminação)",
                "Revitalização dos plásticos externos"
            ],
            "originalPrice": 660.0,
            "price": 627.0
        }
    ],
    "SEDAN": [
        {
            "name": "Combo Brilho Extra",
            "services": [
                "Lavagem Completa + Cera Tradicional",
                "Revitalização dos plásticos externos"
            ],
            "originalPrice": 170.0,
            "price": 161.5
        },
        {
            "name": "Combo Interior Renovado",
            "services": [
                "Lavagem Completa + Cera Tradicional",
                "Revitalização dos plásticos internos"
            ],
            "originalPrice": 190.0,
            "price": 180.5
        },
        {
            "name": "Combo Proteção Premium",
            "services": [
                "Lavagem Detalhada + Cera Premium",
                "Revitalização dos plásticos internos e externos"
            ],
            "originalPrice": 260.0,
            "price": 247.0
        },
        {
            "name": "Combo Visibilidade na Chuva",
            "services": [
                "Lavagem Completa + Cera Tradicional",
                "Descontaminação e Cristalização dos vidros"
            ],
            "originalPrice": 380.0,
            "price": 361.0
        },
        {
            "name": "Combo Cuidado Completo",
            "services": [
                "Lavagem Detalhada + Cera Premium",
                "Revitalização dos plásticos internos e externos",
                "Descontaminação e Cristalização dos vidros"
            ],
            "originalPrice": 510.0,
            "price": 484.5
        },
        {
            "name": "Combo Pintura Renovada",
            "services": [
                "Polimento Comercial (inclui lavagem e descontaminação)",
                "Revitalização dos plásticos externos"
            ],
            "originalPrice": 540.0,
            "price": 513.0
        }
    ]
};
