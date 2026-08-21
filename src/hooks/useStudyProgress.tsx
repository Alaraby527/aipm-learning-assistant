import { useCallback, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useProfile } from "./useProfile";
import { STUDY_PLAN_DATA, TOTAL_TASKS } from "@/data/study-plan";
import { ASSESSMENT_QUESTIONS } from "@/data/self-assessment";

export interface IStudyProgress {
  completedTasks: string[]; // day IDs like "D1", "D2"
  completedDeliverables: string[];
  assessmentAnswers: Record<string, number>; // questionId -> score
  interviewProgress: Record<string, boolean>; // questionId -> mastered
}

const DEFAULT_PROGRESS: IStudyProgress = {
  completedTasks: [],
  completedDeliverables: [],
  assessmentAnswers: {},
  interviewProgress: {},
};

export function useStudyProgress() {
  const { activeProfileId } = useProfile();
  const storageKey = `aipm-progress-${activeProfileId}`;
  const [progress, setProgress] = useLocalStorage<IStudyProgress>(storageKey, DEFAULT_PROGRESS);

  const toggleTask = useCallback(
    (dayId: string) => {
      setProgress((prev) => {
        const exists = prev.completedTasks.includes(dayId);
        return {
          ...prev,
          completedTasks: exists
            ? prev.completedTasks.filter((id) => id !== dayId)
            : [...prev.completedTasks, dayId],
        };
      });
    },
    [setProgress]
  );

  const toggleDeliverable = useCallback(
    (id: string) => {
      setProgress((prev) => {
        const exists = prev.completedDeliverables.includes(id);
        return {
          ...prev,
          completedDeliverables: exists
            ? prev.completedDeliverables.filter((d) => d !== id)
            : [...prev.completedDeliverables, id],
        };
      });
    },
    [setProgress]
  );

  const setAssessmentAnswer = useCallback(
    (questionId: string, score: number) => {
      setProgress((prev) => ({
        ...prev,
        assessmentAnswers: { ...prev.assessmentAnswers, [questionId]: score },
      }));
    },
    [setProgress]
  );

  const toggleInterviewMastered = useCallback(
    (questionId: string) => {
      setProgress((prev) => ({
        ...prev,
        interviewProgress: {
          ...prev.interviewProgress,
          [questionId]: !prev.interviewProgress[questionId],
        },
      }));
    },
    [setProgress]
  );

  const resetProgress = useCallback(() => {
    setProgress(DEFAULT_PROGRESS);
  }, [setProgress]);

  const completedCount = progress.completedTasks.length;
  const completionRate = TOTAL_TASKS > 0 ? Math.round((completedCount / TOTAL_TASKS) * 100) : 0;

  const currentWeek = useMemo(() => {
    for (const week of STUDY_PLAN_DATA) {
      const weekCompleted = week.tasks.filter((t) => progress.completedTasks.includes(t.day)).length;
      if (weekCompleted < week.tasks.length) {
        return week;
      }
    }
    return STUDY_PLAN_DATA[STUDY_PLAN_DATA.length - 1];
  }, [progress.completedTasks]);

  const dimensionScores = useMemo(() => {
    const scores: Record<string, number> = {};
    for (const q of ASSESSMENT_QUESTIONS) {
      const score = progress.assessmentAnswers[q.id];
      if (score !== undefined) {
        scores[q.dimension] = (scores[q.dimension] || 0) + score;
      }
    }
    return scores;
  }, [progress.assessmentAnswers]);

  return {
    progress,
    toggleTask,
    toggleDeliverable,
    setAssessmentAnswer,
    toggleInterviewMastered,
    resetProgress,
    completedCount,
    totalTasks: TOTAL_TASKS,
    completionRate,
    currentWeek,
    dimensionScores,
  };
}
