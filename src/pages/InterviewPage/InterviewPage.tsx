import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { INTERVIEW_QUESTIONS } from "@/data/interview-questions";
import { INTERVIEW_ANSWERS } from "@/data/interview-answers";
import AnswerDetail from "./AnswerDetail";

const priorityColors: Record<string, string> = {
  P0: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  P1: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  P2: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
};

export default function InterviewPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all"
    ? INTERVIEW_QUESTIONS
    : INTERVIEW_QUESTIONS.filter((q) => q.priority === filter);

  const selectedAnswer = selectedId
    ? INTERVIEW_ANSWERS.find((a) => a.questionId === selectedId)
    : null;

  if (selectedAnswer) {
    return (
      <div className="h-full">
        <AnswerDetail answer={selectedAnswer} onBack={() => setSelectedId(null)} />
      </div>
    );
  }

  return (
    <ScrollArea className="h-full">
      <div className="mx-auto max-w-3xl space-y-4 p-6">
        <div>
          <h1 className="text-2xl font-bold">面试题库</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {INTERVIEW_QUESTIONS.length} 道高频面试题，每题含参考答案、评分要点、追问延伸
          </p>
        </div>

        <Tabs value={filter} onValueChange={setFilter}>
          <TabsList>
            <TabsTrigger value="all">全部</TabsTrigger>
            <TabsTrigger value="P0">P0 必考</TabsTrigger>
            <TabsTrigger value="P1">P1 常考</TabsTrigger>
            <TabsTrigger value="P2">P2 进阶</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-2">
          {filtered.map((q) => {
            const answer = INTERVIEW_ANSWERS.find((a) => a.questionId === q.id);
            return (
              <Card
                key={q.id}
                className="cursor-pointer transition-colors hover:bg-accent/50"
                onClick={() => setSelectedId(q.id)}
              >
                <CardContent className="flex items-center gap-3 p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                    {q.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{q.question}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">{q.category}</Badge>
                      {answer && <span className="text-xs text-muted-foreground">{answer.difficulty}</span>}
                    </div>
                  </div>
                  <Badge className={`text-xs ${priorityColors[q.priority]}`}>{q.priority}</Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </ScrollArea>
  );
}
