import React from 'react';
import { BookOpen, Brain } from 'lucide-react';
import { StudyMode } from '../types';

interface StudyModeSelectorProps {
  onSelectMode: (mode: StudyMode) => void;
}

export function StudyModeSelector({ onSelectMode }: StudyModeSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
      <button
        onClick={() => onSelectMode('learn')}
        className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
      >
        <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-blue-900">Mode Apprentissage</h3>
        <p className="text-blue-700 mt-2 text-center">
          Découvrez et apprenez le contenu en détail
        </p>
      </button>

      <button
        onClick={() => onSelectMode('practice')}
        className="flex flex-col items-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
      >
        <Brain className="h-12 w-12 text-green-600 mb-4" />
        <h3 className="text-xl font-semibold text-green-900">Mode Révision</h3>
        <p className="text-green-700 mt-2 text-center">
          Testez vos connaissances avec des quiz
        </p>
      </button>
    </div>
  );
}