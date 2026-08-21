import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MOCK_PRINCIPLES, MOCK_RESOURCES } from "@/data/principles";
import { BookOpen, Wrench, Rss } from "lucide-react";

export default function PrinciplesPage() {
  return (
    <ScrollArea className="h-full">
      <div className="mx-auto max-w-3xl space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold">原则与资源</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            学习 AI 产品经理的核心原则和持续学习资源
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <BookOpen className="h-5 w-5" /> 七条学习原则
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {MOCK_PRINCIPLES.map((p) => (
              <div key={p.id} className="flex gap-3 rounded-lg border p-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {p.number}
                </span>
                <div>
                  <h3 className="text-sm font-medium">{p.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{p.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Wrench className="h-5 w-5" /> 学习工具
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {MOCK_RESOURCES.map((cat) => (
              <div key={cat.id}>
                <h3 className="mb-2 flex items-center gap-2 text-sm font-medium">
                  {cat.id === "tools" ? <Wrench className="h-4 w-4" /> : <Rss className="h-4 w-4" />}
                  {cat.name}
                </h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <div key={item.id} className="rounded-lg border p-3">
                      <div className="text-sm font-medium">{item.name}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground">
              本应用基于开源项目 <a href="https://github.com/archlizheng/AIPM-Wiki" target="_blank" rel="noopener noreferrer" className="text-primary underline">AIPM-Wiki</a> 构建，
              遵循 CC BY-NC-SA 4.0 协议
            </p>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
}
