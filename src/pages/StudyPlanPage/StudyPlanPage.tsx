import { useState } from "react";
import { CheckCircle2, Circle, FileText, ChevronDown, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import { STUDY_PLAN_DATA, PHASE1_DELIVERABLES } from "@/data/study-plan";
import WikiDocViewer from "@/components/WikiDocViewer";

export default function StudyPlanPage() {
  const { progress, toggleTask, toggleDeliverable } = useStudyProgress();
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [openWeeks, setOpenWeeks] = useState<Set<number>>(new Set([1]));

  const toggleWeek = (weekIndex: number) => {
    setOpenWeeks((prev) => {
      const next = new Set(prev);
      if (next.has(weekIndex)) next.delete(weekIndex);
      else next.add(weekIndex);
      return next;
    });
  };

  if (selectedDoc) {
    return (
      <div className="h-full">
        <WikiDocViewer filePath={selectedDoc} onClose={() => setSelectedDoc(null)} />
      </div>
    );
  }

  return (
    <div className="flex h-full">
      <ScrollArea className="flex-1 p-6">
        <div className="mx-auto max-w-3xl space-y-4">
          <div>
            <h1 className="text-2xl font-bold">12 周学习计划</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              系统学习 AI 产品经理知识，8 周系统学习 + 4 周面试冲刺，共 84 天任务
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">阶段一交付物（第 1-8 周）</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 sm:grid-cols-2">
                {PHASE1_DELIVERABLES.map((d) => (
                  <label key={d.id} className="flex items-start gap-2 cursor-pointer rounded-lg border p-3 hover:bg-accent/50">
                    <Checkbox
                      checked={progress.completedDeliverables.includes(d.id)}
                      onCheckedChange={() => toggleDeliverable(d.id)}
                      className="mt-0.5"
                    />
                    <div>
                      <div className="text-sm font-medium">{d.title}</div>
                      <div className="text-xs text-muted-foreground">{d.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {STUDY_PLAN_DATA.map((week) => {
            const isOpen = openWeeks.has(week.weekIndex);
            const completedInWeek = week.tasks.filter((t) =>
              progress.completedTasks.includes(t.day)
            ).length;
            return (
              <Card key={week.weekIndex}>
                <Collapsible open={isOpen} onOpenChange={() => toggleWeek(week.weekIndex)}>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-accent/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                          <CardTitle className="text-base">{week.title}</CardTitle>
                          {week.phase === 2 && <Badge variant="secondary">面试冲刺</Badge>}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {completedInWeek}/{week.tasks.length}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground pl-6">{week.subtitle}</p>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="space-y-2">
                      {week.tasks.map((task) => {
                        const done = progress.completedTasks.includes(task.day);
                        return (
                          <div key={task.day} className="rounded-lg border p-3">
                            <label className="flex items-start gap-3 cursor-pointer">
                              <Checkbox
                                checked={done}
                                onCheckedChange={() => toggleTask(task.day)}
                                className="mt-0.5"
                              />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-mono text-muted-foreground">{task.day}</span>
                                  <span className={`text-sm font-medium ${done ? "line-through text-muted-foreground" : ""}`}>
                                    {task.title}
                                  </span>
                                </div>
                                {task.description && (
                                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                                    {task.description}
                                  </p>
                                )}
                                <div className="mt-2 flex flex-wrap items-center gap-2">
                                  {task.files.map((f) => (
                                    <button
                                      key={f}
                                      onClick={(e) => { e.preventDefault(); setSelectedDoc(f); }}
                                      className="inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-xs hover:bg-accent"
                                    >
                                      <FileText className="h-3 w-3" />
                                      {f.split("/").pop()}
                                    </button>
                                  ))}
                                  <Badge variant="outline" className="text-xs">产出：{task.output}</Badge>
                                </div>
                              </div>
                              {done ? <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> : <Circle className="h-4 w-4 text-muted-foreground/30 shrink-0" />}
                            </label>
                          </div>
                        );
                      })}
                      <div className="mt-3 rounded-lg bg-muted/50 p-3">
                        <p className="text-xs font-medium">周末自测：</p>
                        <p className="text-xs text-muted-foreground">{week.weekendSelfTest}</p>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
