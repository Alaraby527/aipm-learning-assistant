import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { KNOWLEDGE_MAP } from "@/data/knowledge-map";
import { KNOWLEDGE_CARDS } from "@/data/knowledge-cards";
import { FileText, ChevronRight, Lightbulb } from "lucide-react";
import WikiDocViewer from "@/components/WikiDocViewer";

const categoryColors: Record<string, string> = {
  "基础": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "核心": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  "技能": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "拓展": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

export default function KnowledgeMapPage() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  if (selectedDoc) {
    return (
      <div className="h-full">
        <WikiDocViewer filePath={selectedDoc} onClose={() => setSelectedDoc(null)} />
      </div>
    );
  }

  const card = selectedCard ? KNOWLEDGE_CARDS.find((c) => c.id === selectedCard) : null;

  return (
    <ScrollArea className="h-full">
      <div className="mx-auto max-w-4xl space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold">知识地图</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            按知识板块浏览 197 篇 AIPM-Wiki 文档，点击即可阅读全文
          </p>
        </div>

        {card && (
          <Card className="border-primary/30">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  <h2 className="text-lg font-semibold">{card.title}</h2>
                  <Badge variant="outline">{card.category}</Badge>
                </div>
                <button onClick={() => setSelectedCard(null)} className="text-sm text-muted-foreground hover:text-foreground">关闭</button>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{card.summary}</p>
              <div className="space-y-3">
                {card.sections.map((s, i) => (
                  <div key={i}>
                    <h3 className="text-sm font-medium">{s.heading}</h3>
                    <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground leading-relaxed">{s.content}</p>
                  </div>
                ))}
              </div>
              {card.keyPoints && (
                <div className="mt-4 rounded-lg bg-muted/50 p-3">
                  <h4 className="text-xs font-semibold mb-1">关键点</h4>
                  <ul className="space-y-1">
                    {card.keyPoints.map((kp, i) => (
                      <li key={i} className="text-xs text-muted-foreground">• {kp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {!card && (
          <div className="grid gap-4 md:grid-cols-2">
            {KNOWLEDGE_CARDS.map((c) => (
              <Card
                key={c.id}
                className="cursor-pointer transition-colors hover:bg-accent/50"
                onClick={() => setSelectedCard(c.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    <h3 className="text-sm font-medium">{c.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{c.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">文档目录</h2>
          {KNOWLEDGE_MAP.map((node) => (
            <Card key={node.id}>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-sm font-semibold">{node.label}</h3>
                  <Badge className={categoryColors[node.category] ?? ""}>{node.category}</Badge>
                </div>
                <div className="grid gap-1 sm:grid-cols-2">
                  {node.children?.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => child.docPath && setSelectedDoc(child.docPath)}
                      disabled={!child.docPath}
                      className="flex items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-accent/50 disabled:opacity-50"
                    >
                      <FileText className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      <span className="truncate flex-1">{child.label}</span>
                      {child.docPath && <ChevronRight className="h-3 w-3 shrink-0 text-muted-foreground" />}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
