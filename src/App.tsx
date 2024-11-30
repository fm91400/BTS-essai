import React, { useState } from 'react';
import { Header } from './components/Header';
import { TopicCard } from './components/TopicCard';
import { StudyModeSelector } from './components/StudyModeSelector';
import { Quiz } from './components/Quiz';
import { LearningMode } from './components/LearningMode';
import { topics } from './data/topics';
import { ArrowLeft } from 'lucide-react';
import type { Topic, Subtopic, StudyMode } from './types';

function App() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<Subtopic | null>(null);
  const [studyMode, setStudyMode] = useState<StudyMode>(null);

  const handleBack = () => {
    if (studyMode) {
      setStudyMode(null);
    } else if (selectedSubtopic) {
      setSelectedSubtopic(null);
    } else if (selectedTopic) {
      setSelectedTopic(null);
    }
  };

  const handleQuizComplete = () => {
    setStudyMode(null);
    setSelectedSubtopic(null);
  };

  const renderContent = () => {
    if (selectedSubtopic) {
      if (studyMode === 'learn') {
        return <LearningMode subtopic={selectedSubtopic} />;
      }
      if (studyMode === 'practice') {
        return <Quiz questions={selectedSubtopic.quiz} onComplete={handleQuizComplete} />;
      }
      return <StudyModeSelector onSelectMode={setStudyMode} />;
    }

    if (selectedTopic) {
      return (
        <div className="max-w-4xl mx-auto p-6">
          <button
            onClick={handleBack}
            className="flex items-center text-blue-600 mb-6 hover:text-blue-800"
          >
            <ArrowLeft className="mr-2" />
            Retour
          </button>
          <h2 className="text-3xl font-bold mb-6">{selectedTopic.title}</h2>
          <div className="grid gap-6">
            {selectedTopic.subtopics.map((subtopic) => (
              <div
                key={subtopic.id}
                onClick={() => setSelectedSubtopic(subtopic)}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center">
                  <img
                    src={subtopic.image}
                    alt={subtopic.title}
                    className="w-24 h-24 object-cover rounded-lg mr-6"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{subtopic.title}</h3>
                    <p className="text-gray-600">{subtopic.content.substring(0, 100)}...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Programme de Révision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              description={topic.description}
              image={topic.image}
              onClick={() => setSelectedTopic(topic)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        {(selectedSubtopic || selectedTopic) && (
          <div className="max-w-4xl mx-auto px-6 mb-6">
            <button
              onClick={handleBack}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft className="mr-2" />
              Retour
            </button>
          </div>
        )}
        {renderContent()}
      </main>
    </div>
  );
}

export default App;