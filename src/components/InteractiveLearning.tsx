import React, { useState } from 'react';
import { ChevronRight, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';
import type { Subtopic } from '../types';

interface InteractiveLearningProps {
  subtopic: Subtopic;
}

interface FlashCard {
  question: string;
  answer: string;
}

interface KeyPoint {
  title: string;
  content: string;
}

function generateFlashCards(content: string): FlashCard[] {
  // Exemple de cartes pour les forces aérodynamiques
  if (content.includes("forces fondamentales")) {
    return [
      {
        question: "Quelles sont les 4 forces fondamentales agissant sur un aéronef ?",
        answer: "La portance, la traînée, la poussée et le poids."
      },
      {
        question: "Comment la portance est-elle générée ?",
        answer: "La portance est générée principalement par les ailes, dans une direction perpendiculaire à l'écoulement de l'air."
      },
      {
        question: "Qu'est-ce qui influence la portance ?",
        answer: "La forme du profil de l'aile, l'angle d'attaque et la vitesse de l'écoulement."
      },
      {
        question: "Comment varie la traînée avec la vitesse ?",
        answer: "La traînée augmente avec le carré de la vitesse."
      }
    ];
  }
  
  // Cartes pour la stabilité
  if (content.includes("stabilité")) {
    return [
      {
        question: "Quels sont les trois axes de stabilité ?",
        answer: "Le tangage (longitudinal), le roulis (latéral) et le lacet (directionnel)."
      },
      {
        question: "Qu'est-ce que la stabilité statique ?",
        answer: "La tendance initiale d'un aéronef à revenir à sa position d'équilibre après une perturbation."
      },
      {
        question: "Quels facteurs influencent la stabilité ?",
        answer: "La position du centre de gravité, la surface des empennages, le dièdre des ailes et la distribution des masses."
      }
    ];
  }
  
  // Cartes pour les matériaux composites
  return [
    {
      question: "Quels sont les composants principaux d'un matériau composite ?",
      answer: "Les fibres de renfort (carbone, verre, aramide) et la matrice (résine époxy, thermoplastique)."
    },
    {
      question: "Quels sont les avantages des matériaux composites ?",
      answer: "Excellent rapport résistance/poids, résistance à la fatigue, possibilité de formes complexes, résistance à la corrosion."
    }
  ];
}

function generateKeyPoints(content: string): KeyPoint[] {
  const sections = content.split('\n\n');
  return sections
    .filter(section => section.includes(':'))
    .map(section => {
      const [title, ...contentLines] = section.split('\n');
      return {
        title: title.replace(':', '').trim(),
        content: contentLines.join('\n').trim()
      };
    });
}

export function InteractiveLearning({ subtopic }: InteractiveLearningProps) {
  const [expandedPoints, setExpandedPoints] = useState<Set<number>>(new Set([0]));
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const flashCards = generateFlashCards(subtopic.content);
  const keyPoints = generateKeyPoints(subtopic.content);

  const togglePoint = (index: number) => {
    const newExpanded = new Set(expandedPoints);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedPoints(newExpanded);
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashCards.length);
    setShowAnswer(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={subtopic.image} 
          alt={subtopic.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6">{subtopic.title}</h2>
          
          {/* Points clés avec animations */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Points Clés</h3>
            <div className="space-y-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="border rounded-lg">
                  <button
                    className="w-full px-4 py-3 flex items-center justify-between text-left font-medium hover:bg-gray-50"
                    onClick={() => togglePoint(index)}
                  >
                    <span>{point.title}</span>
                    {expandedPoints.has(index) ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    )}
                  </button>
                  {expandedPoints.has(index) && (
                    <div className="px-4 py-3 bg-gray-50">
                      <p className="text-gray-700 whitespace-pre-line">{point.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Cartes mémoire interactives */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Cartes de Révision</h3>
            <div className="border rounded-lg p-6 bg-gray-50">
              <div className="text-center mb-4">
                <span className="text-sm text-gray-500">
                  Carte {currentCard + 1} sur {flashCards.length}
                </span>
              </div>
              <div 
                className="bg-white p-6 rounded-lg shadow-sm min-h-[200px] flex flex-col justify-between cursor-pointer"
                onClick={() => setShowAnswer(!showAnswer)}
              >
                <div>
                  <h4 className="font-medium mb-4">{flashCards[currentCard].question}</h4>
                  {showAnswer && (
                    <p className="text-gray-700 mt-4 pt-4 border-t">
                      {flashCards[currentCard].answer}
                    </p>
                  )}
                </div>
                <div className="text-center text-sm text-gray-500 mt-4">
                  {showAnswer ? "Cliquez pour masquer" : "Cliquez pour voir la réponse"}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setShowAnswer(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded"
                >
                  Masquer
                </button>
                <button
                  onClick={nextCard}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Suivant
                </button>
              </div>
            </div>
          </div>

          {/* Contenu détaillé */}
          <div className="prose lg:prose-xl max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {subtopic.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}