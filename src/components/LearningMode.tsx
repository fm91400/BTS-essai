import React from 'react';
import { InteractiveLearning } from './InteractiveLearning';
import type { Subtopic } from '../types';

interface LearningModeProps {
  subtopic: Subtopic;
}

export function LearningMode({ subtopic }: LearningModeProps) {
  return <InteractiveLearning subtopic={subtopic} />;
}