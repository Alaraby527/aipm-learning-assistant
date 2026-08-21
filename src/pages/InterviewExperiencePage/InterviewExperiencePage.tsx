import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { INTERVIEW_EXPERIENCES } from "@/data/interview-experiences";
import { Building2, Clock, Lightbulb } from "lucide-react";

export default function InterviewExperiencePage() {
  return (
    <ScrollArea className="h-full">
      <div className="mx-auto max-w-3xl space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold">面经分享</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            真实面试经验参考，了解不同公司的面试风格和常考题目
          </p>
        </div>

        {INTERVIEW_EXPERIENCES.map((exp) => (
          <Card key={exp.id}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-base">{exp.company}</CardTitle>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="outline">{exp.position}</Badge>
                <span className="flex items-center gap-1 text-xs">
                  <Clock className="h-3 w-3" /> {exp.date}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {exp.rounds.map((round, i) => (
                <div key={i} className="rounded-lg border p-3">
                  <h3 className="text-sm font-medium">{round.round}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{round.content}</p>
                  <ul className="mt-2 space-y-1">
                    {round.questions.map((q, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">Q:</span> {q}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="rounded-lg bg-muted/50 p-3">
                <p className="text-sm">{exp.summary}</p>
              </div>

              <div>
                <h3 className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <Lightbulb className="h-4 w-4 text-yellow-500" /> 面试 Tips
                </h3>
                <ul className="space-y-1">
                  {exp.tips.map((tip, i) => (
                    <li key={i} className="text-xs text-muted-foreground">• {tip}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground">
              更多面经请参考 AIPM-Wiki 仓库的 04-interview-prep/experiences/ 目录
            </p>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
}
