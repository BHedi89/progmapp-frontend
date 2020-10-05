export interface Statistic {
  userId: string;
  nrOfAllQuestions: number;
  nrOfRightAnswers: number;
  nrOfBadAnswers: number;
  targetPercentage: number;
  achievedPercentage: number;
}
