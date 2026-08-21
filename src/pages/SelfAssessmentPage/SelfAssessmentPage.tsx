import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import {
  CAPABILITY_DIMENSIONS,
  LLM_LEVELS,
  PORTFOLIO_CHECKLIST,
  ASSESSMENT_QUESTIONS,
  DIMENSION_COMMENTS,
} from "@/data/self-assessment";

export default function SelfAssessmentPage() {
  const { progress, setAssessmentAnswer, dimensionScores } = useStudyProgress();
  const [currentQ, setCurrentQ] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const answeredCount = Object.keys(progress.assessmentAnswers).length;
  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const progress_pct = Math.round((answeredCount / totalQuestions) * 100);

  const totalScore = Object.values(progress.assessmentAnswers).reduce((s, v) => s + v, 0);
  const maxScore = totalQuestions * 4;

  const getLevel = (score: number) => {
    if (score <= 5) return "below";
    if (score <= 7) return "pass";
    if (score <= 9) return "good";
    return "excellent";
  };

  const dimensionLabels: Record<string, string> = {
    tech: "技术认知", product: "产品基本功", data: "数据与评估",
    business: "商业判断", ethics: "伦理与合规",
  };

  if (showResult) {
    return (
      <ScrollArea className="h-full">
        <div className="mx-auto max-w-3xl space-y-6 p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">测评结果</h1>
            <Button variant="outline" size="sm" onClick={() => { setShowResult(false); setCurrentQ(0); }}>重新测评</Button>
          </div>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold">{totalScore}<span className="text-lg text-muted-foreground">/{maxScore}</span></div>
              <p className="mt-2 text-sm text-muted-foreground">总分</p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {CAPABILITY_DIMENSIONS.map((dim) => {
              const score = dimensionScores[dim.id] || 0;
              const maxDim = ASSESSMENT_QUESTIONS.filter((q) => q.dimension === dim.id).length * 4;
              const level = getLevel(score);
              const comment = DIMENSION_COMMENTS[dim.id]?.[level];
              return (
                <Card key={dim.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{dim.name}</CardTitle>
                      <Badge variant={level === "excellent" ? "default" : level === "good" ? "secondary" : "outline"}>
                        {comment?.label ?? "未测评"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{score}/{maxDim} 分</span>
                    </div>
                    <Progress value={maxDim > 0 ? (score / maxDim) * 100 : 0} className="h-2" />
                    {comment && (
                      <p className="mt-3 text-sm text-muted-foreground">{comment.comment}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardHeader><CardTitle className="text-base">LLM 熟悉度档位参考</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {LLM_LEVELS.map((l) => (
                <div key={l.level} className="rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <Badge>{l.level}</Badge>
                    <span className="font-medium text-sm">{l.title}</span>
                    <span className="text-xs text-muted-foreground">{l.subtitle}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{l.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">作品集自查清单</CardTitle></CardHeader>
            <CardContent>
              <div className="grid gap-2 sm:grid-cols-2">
                {PORTFOLIO_CHECKLIST.map((item) => (
                  <div key={item.id} className="rounded-lg border p-3">
                    <div className="text-sm font-medium">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    );
  }

  const q = ASSESSMENT_QUESTIONS[currentQ];

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">能力自测</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {totalQuestions} 道选择题，覆盖五维能力，完成后获取个性化评估
        </p>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between text-sm">
            <span>进度：{answeredCount}/{totalQuestions}</span>
            <span>{progress_pct}%</span>
          </div>
          <Progress value={progress_pct} className="mt-2 h-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{dimensionLabels[q.dimension]}</Badge>
            <span className="text-sm text-muted-foreground">第 {q.number}/{totalQuestions} 题</span>
          </div>
          <CardTitle className="text-base mt-2">{q.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={progress.assessmentAnswers[q.id]?.toString() ?? ""}
            onValueChange={(v) => setAssessmentAnswer(q.id, parseInt(v))}
            className="space-y-3"
          >
            {q.options.map((opt) => (
              <Label
                key={opt.label}
                className="flex items-start gap-3 cursor-pointer rounded-lg border p-3 hover:bg-accent/50"
              >
                <RadioGroupItem value={opt.score.toString()} className="mt-0.5" />
                <div>
                  <span className="font-medium text-sm">{opt.label}.</span>
                  <span className="ml-2 text-sm text-muted-foreground">{opt.text}</span>
                </div>
              </Label>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          disabled={currentQ === 0}
          onClick={() => setCurrentQ((p) => p - 1)}
        >
          上一题
        </Button>
        {currentQ < totalQuestions - 1 ? (
          <Button onClick={() => setCurrentQ((p) => p + 1)}>下一题</Button>
        ) : (
          <Button onClick={() => setShowResult(true)} disabled={answeredCount < totalQuestions}>
            查看结果
          </Button>
        )}
      </div>
    </div>
  );
}
