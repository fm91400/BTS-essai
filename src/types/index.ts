export interface Topic {
  id: string;
  title: string;
  description: string;
  image: string;
  subtopics: Subtopic[];
}

export interface Subtopic {
  id: string;
  title: string;
  content: string;
  image: string;
  quiz: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export type StudyMode = 'learn' | 'practice' | null;