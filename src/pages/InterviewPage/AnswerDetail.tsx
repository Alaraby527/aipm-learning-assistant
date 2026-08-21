import { ArrowLeft, Star, MessageCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import type { IInterviewAnswer } from "@/data/interview-answers";

interface AnswerDetailProps {
  answer: IInterviewAnswer;
  onBack: () => void;
}

export default function AnswerDetail({ answer, onBack }: AnswerDetailProps) {
  return (
    <ScrollArea className="h-full">
      <div className="mx-auto max-w-3xl p-6">
        <Button variant="ghost" size="sm" onClick={onBack} className="mb-4 gap-2">
          <ArrowLeft className="h-4 w-4" /> 返回题库
        </Button>

        <div className="mb-4 flex items-center gap-2">
          <Badge variant="outline">第 {answer.questionNumber} 题</Badge>
          <Badge variant="secondary">{answer.difficulty}</Badge>
          <Badge>考频：{answer.frequency}</Badge>
        </div>

        <h1 className="text-xl font-bold mb-4">{answer.answerSummary}</h1>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Star className="h-4 w-4 text-yellow-500" /> 评分要点
            </h3>
            <ul className="space-y-1">
              {answer.keyPoints.map((kp, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary">•</span> {kp}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {answer.table && (
          <Card className="mb-4">
            <CardContent className="p-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    {answer.table.headers.map((h, i) => (
                      <th key={i} className="px-3 py-2 text-left font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {answer.table.rows.map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      {row.map((cell, j) => (
                        <td key={j} className={`px-3 py-2 ${j === 0 ? "font-medium" : "text-muted-foreground"}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        )}

        {answer.bodySections.map((section, i) => (
          <Card key={i} className="mb-4">
            <CardContent className="p-4">
              <h3 className="mb-2 text-sm font-semibold">{section.heading}</h3>
              <p className="whitespace-pre-line text-sm text-muted-foreground leading-relaxed">{section.content}</p>
            </CardContent>
          </Card>
        ))}

        <Separator className="my-6" />

        <div>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <MessageCircle className="h-4 w-4" /> 追问延伸
          </h3>
          <div className="space-y-3">
            {answer.followUps.map((fu, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <p className="text-sm font-medium">Q：{fu.question}</p>
                  <p className="mt-1 text-sm text-muted-foreground">A：{fu.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {answer.relatedReadings.length > 0 && (
          <div className="mt-6">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <BookOpen className="h-4 w-4" /> 延伸阅读
            </h3>
            <div className="flex flex-wrap gap-2">
              {answer.relatedReadings.map((r, i) => (
                <Badge key={i} variant="outline" className="font-mono text-xs">{r}</Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
