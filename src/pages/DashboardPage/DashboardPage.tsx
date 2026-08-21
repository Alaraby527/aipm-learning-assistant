import { Link } from "react-router-dom";
import { BookOpen, CalendarDays, MessageSquareQuote, ClipboardCheck, Map, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import { useProfile } from "@/hooks/useProfile";
import { STUDY_PLAN_DATA } from "@/data/study-plan";
import { INTERVIEW_QUESTIONS } from "@/data/interview-questions";
import { ASSESSMENT_QUESTIONS } from "@/data/self-assessment";

export default function DashboardPage() {
  const { activeProfile } = useProfile();
  const { completedCount, totalTasks, completionRate, currentWeek } = useStudyProgress();

  const stats = [
    { label: "学习进度", value: `${completionRate}%`, sub: `${completedCount}/${totalTasks} 天`, icon: CalendarDays, to: "/study-plan" },
    { label: "面试题库", value: `${INTERVIEW_QUESTIONS.length} 题`, sub: "含参考答案与追问", icon: MessageSquareQuote, to: "/interview" },
    { label: "能力自测", value: `${ASSESSMENT_QUESTIONS.length} 题`, sub: "五维能力评估", icon: ClipboardCheck, to: "/self-assessment" },
    { label: "知识地图", value: "197 篇", sub: "AIPM-Wiki 全文内置", icon: Map, to: "/knowledge-map" },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">你好，{activeProfile?.name ?? "学习者"}</h1>
        <p className="mt-1 text-muted-foreground">欢迎使用 AI 产品经理学习助手，今天继续加油。</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Link key={s.label} to={s.to}>
            <Card className="transition-colors hover:bg-accent/50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <s.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">当前阶段：{currentWeek?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-3 text-sm text-muted-foreground">{currentWeek?.subtitle}</p>
          <Progress value={completionRate} className="h-2" />
          <p className="mt-2 text-xs text-muted-foreground">
            已完成 {completedCount} / {totalTasks} 天学习任务
          </p>
          <Button asChild className="mt-4" size="sm">
            <Link to="/study-plan">继续学习</Link>
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">快速入口</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start gap-2" asChild>
              <Link to="/interview-experience"><Users className="h-4 w-4" /> 面经分享</Link>
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2" asChild>
              <Link to="/principles"><BookOpen className="h-4 w-4" /> 原则与资源</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">学习计划概览</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {STUDY_PLAN_DATA.map((w) => (
                <div key={w.weekIndex} className="flex items-center justify-between text-sm">
                  <span className="truncate">{w.title}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {w.tasks.filter((t) => completedCount >= STUDY_PLAN_DATA.slice(0, w.weekIndex - 1).reduce((s, x) => s + x.tasks.length, 0) + w.tasks.length).length}/{w.tasks.length}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
