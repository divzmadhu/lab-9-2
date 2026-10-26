
// 1. TextInput Component
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// 2. StatsDisplay Component
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}
 
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

// 3. CharacterCounter Component

export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}