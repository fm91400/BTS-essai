import { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: "mecanique-vol",
    title: "Mécanique du Vol",
    description: "Principes fondamentaux de la dynamique du vol et des forces aérodynamiques",
    image: "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?auto=format&fit=crop&q=80&w=800",
    subtopics: [
      {
        id: "forces",
        title: "Forces Fondamentales",
        content: `Les quatre forces fondamentales agissant sur un aéronef sont essentielles à comprendre :

1. La Portance (Lift) :
   - Générée principalement par les ailes
   - Direction perpendiculaire à l'écoulement de l'air
   - Dépend de la forme du profil, de l'angle d'attaque et de la vitesse

2. La Traînée (Drag) :
   - Force qui s'oppose au mouvement de l'avion
   - Comprend la traînée de forme et la traînée induite
   - Augmente avec le carré de la vitesse

3. La Poussée (Thrust) :
   - Produite par le système propulsif
   - Peut être générée par hélice ou réaction
   - Varie selon le régime moteur

4. Le Poids (Weight) :
   - Force gravitationnelle
   - Agit toujours verticalement vers le bas
   - Dépend de la masse de l'aéronef

L'équilibre de ces forces permet le vol stable de l'aéronef.`,
        image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&q=80&w=800",
        quiz: [
          {
            id: "q1-forces",
            question: "Quelle force s'oppose directement au poids de l'avion ?",
            options: ["La traînée", "La portance", "La poussée", "La résistance"],
            correctAnswer: 1,
            explanation: "La portance est la force qui s'oppose directement au poids de l'avion. Elle est générée principalement par les ailes et permet à l'aéronef de se maintenir en vol."
          },
          {
            id: "q2-forces",
            question: "Comment la traînée varie-t-elle avec la vitesse ?",
            options: [
              "Linéairement",
              "Au carré de la vitesse",
              "De façon constante",
              "Inversement proportionnelle"
            ],
            correctAnswer: 1,
            explanation: "La traînée augmente avec le carré de la vitesse. C'est pourquoi il faut beaucoup plus de puissance pour voler à haute vitesse."
          },
          {
            id: "q3-forces",
            question: "Quels facteurs influencent la portance ?",
            options: [
              "Uniquement la vitesse",
              "Uniquement l'angle d'attaque",
              "La forme du profil, l'angle d'attaque et la vitesse",
              "Uniquement la masse de l'avion"
            ],
            correctAnswer: 2,
            explanation: "La portance dépend de plusieurs facteurs : la forme du profil de l'aile, l'angle d'attaque et la vitesse de l'écoulement d'air."
          }
        ]
      },
      {
        id: "stabilite",
        title: "Stabilité de l'Aéronef",
        content: `La stabilité d'un aéronef est un concept complexe qui se décompose en plusieurs aspects :

1. Types de Stabilité :
   - Stabilité Statique : Tendance initiale à revenir à l'équilibre
   - Stabilité Dynamique : Comportement dans le temps après perturbation

2. Axes de Stabilité :
   - Longitudinal (Tangage) : Rotation autour de l'axe transversal
   - Latéral (Roulis) : Rotation autour de l'axe longitudinal
   - Directionnel (Lacet) : Rotation autour de l'axe vertical

3. Facteurs Influençant la Stabilité :
   - Position du centre de gravité
   - Surface des empennages
   - Dièdre des ailes
   - Distribution des masses

4. Contrôle de la Stabilité :
   - Gouvernes principales
   - Compensateurs
   - Systèmes de stabilisation automatique`,
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
        quiz: [
          {
            id: "q1-stabilite",
            question: "Quels sont les trois axes de stabilité d'un aéronef ?",
            options: [
              "Vertical, horizontal, diagonal",
              "Tangage, roulis, lacet",
              "Avant, arrière, latéral",
              "Haut, bas, côté"
            ],
            correctAnswer: 1,
            explanation: "Les trois axes de stabilité sont le tangage (mouvement autour de l'axe transversal), le roulis (mouvement autour de l'axe longitudinal) et le lacet (mouvement autour de l'axe vertical)."
          },
          {
            id: "q2-stabilite",
            question: "Qu'est-ce que la stabilité statique ?",
            options: [
              "La capacité à maintenir une altitude constante",
              "La tendance initiale à revenir à l'équilibre",
              "La résistance au changement de direction",
              "La capacité à voler en ligne droite"
            ],
            correctAnswer: 1,
            explanation: "La stabilité statique est la tendance initiale d'un aéronef à revenir à sa position d'équilibre après une perturbation."
          },
          {
            id: "q3-stabilite",
            question: "Quel élément influence principalement la stabilité longitudinale ?",
            options: [
              "Les ailerons",
              "La dérive",
              "L'empennage horizontal",
              "Les volets"
            ],
            correctAnswer: 2,
            explanation: "L'empennage horizontal est le principal élément influençant la stabilité longitudinale (tangage) de l'aéronef."
          }
        ]
      }
    ]
  },
  {
    id: "structures",
    title: "Structures Aéronautiques",
    description: "Étude des composants structurels et des matériaux aéronautiques",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800",
    subtopics: [
      {
        id: "materiaux",
        title: "Matériaux Composites",
        content: `Les matériaux composites sont fondamentaux dans l'aéronautique moderne :

1. Composition :
   - Fibres de renfort (carbone, verre, aramide)
   - Matrice (résine époxy, thermoplastique)
   - Âme en nid d'abeille ou mousse

2. Avantages :
   - Excellent rapport résistance/poids
   - Résistance à la fatigue
   - Possibilité de formes complexes
   - Résistance à la corrosion

3. Applications :
   - Fuselage
   - Ailes et empennages
   - Pièces de structure intérieure
   - Éléments de carénage

4. Procédés de Fabrication :
   - Moulage par contact
   - Infusion sous vide
   - Autoclave
   - Placement de fibres automatisé`,
        image: "https://images.unsplash.com/photo-1565619624098-cf4168a7cd9d?auto=format&fit=crop&q=80&w=800",
        quiz: [
          {
            id: "q1-materiaux",
            question: "Quel est le principal avantage des matériaux composites en aéronautique ?",
            options: [
              "Leur faible coût",
              "Leur facilité de réparation",
              "Leur excellent rapport résistance/poids",
              "Leur conductivité électrique"
            ],
            correctAnswer: 2,
            explanation: "Les matériaux composites sont principalement utilisés pour leur excellent rapport résistance/poids, permettant de construire des structures légères mais très résistantes."
          },
          {
            id: "q2-materiaux",
            question: "Quels sont les composants principaux d'un matériau composite ?",
            options: [
              "Uniquement des fibres",
              "Fibres et matrice",
              "Uniquement de la résine",
              "Métal et plastique"
            ],
            correctAnswer: 1,
            explanation: "Un matériau composite est constitué de fibres de renfort (comme le carbone ou le verre) et d'une matrice (généralement une résine) qui lie les fibres ensemble."
          },
          {
            id: "q3-materiaux",
            question: "Quelle propriété des composites est particulièrement importante pour la durée de vie des structures aéronautiques ?",
            options: [
              "La conductivité thermique",
              "La résistance à la fatigue",
              "La transparence",
              "La densité"
            ],
            correctAnswer: 1,
            explanation: "La résistance à la fatigue des composites est cruciale car elle permet aux structures de maintenir leurs propriétés mécaniques sur de longues périodes d'utilisation."
          }
        ]
      }
    ]
  }
];