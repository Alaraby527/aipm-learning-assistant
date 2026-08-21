import { useState, useMemo } from "react";
import { X, FileText, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getDocContent, hasDoc, extractTitle, getAllDocPaths } from "@/lib/wiki-utils";

interface WikiDocViewerProps {
  filePath: string;
  onClose?: () => void;
}

export default function WikiDocViewer({ filePath, onClose }: WikiDocViewerProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const content = useMemo(() => {
    if (!filePath || !hasDoc(filePath)) return null;
    return getDocContent(filePath);
  }, [filePath]);

  const title = useMemo(() => {
    if (!content) return "文档未找到";
    return extractTitle(content, filePath);
  }, [content, filePath]);

  const relatedDocs = useMemo(() => {
    const dir = filePath.includes("/") ? filePath.split("/").slice(0, -1).join("/") : "";
    return getAllDocPaths()
      .filter((p) => p.startsWith(dir) && p !== filePath)
      .slice(0, 10);
  }, [filePath]);

  const filteredRelated = useMemo(() => {
    if (!searchQuery.trim()) return relatedDocs;
    const q = searchQuery.toLowerCase();
    return relatedDocs.filter((p) => p.toLowerCase().includes(q));
  }, [relatedDocs, searchQuery]);

  if (!content) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <FileText className="mx-auto mb-2 h-12 w-12 text-muted-foreground/50" />
          <p className="text-sm text-muted-foreground">文档未找到或未内置</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground/70">{filePath}</p>
        </div>
      </div>
    );
  }

  // Simple markdown to HTML conversion
  const renderMarkdown = (md: string) => {
    let html = md
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Code blocks
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
    // Inline code
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
    // Headers
    html = html.replace(/^#### (.+)$/gm, "<h4>$1</h4>");
    html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
    html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
    html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");
    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    // Blockquote
    html = html.replace(/^&gt; (.+)$/gm, "<blockquote>$1</blockquote>");
    // Horizontal rule
    html = html.replace(/^---$/gm, "<hr/>");
    // Unordered list
    html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
    html = html.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");
    // Ordered list
    html = html.replace(/^\d+\. (.+)$/gm, "<li>$1</li>");
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="#" onclick="return false">$1</a>');
    // Line breaks
    html = html.replace(/\n\n/g, "</p><p>");
    html = html.replace(/\n/g, "<br/>");
    html = "<p>" + html + "</p>";

    return html;
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-semibold">{title}</h2>
          <p className="truncate font-mono text-xs text-muted-foreground">{filePath}</p>
        </div>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex flex-1 overflow-hidden">
        <ScrollArea className="flex-1 px-6 py-4">
          <div
            className="prose-wiki max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
          />
        </ScrollArea>
        {relatedDocs.length > 0 && (
          <div className="hidden w-56 shrink-0 border-l p-3 xl:block">
            <h3 className="mb-2 text-xs font-semibold text-muted-foreground">相关文档</h3>
            <Input
              placeholder="搜索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-2 h-7 text-xs"
            />
            <ScrollArea className="h-[calc(100%-60px)]">
              <div className="space-y-1">
                {filteredRelated.map((doc) => (
                  <button
                    key={doc}
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent("wiki-navigate", { detail: doc }));
                    }}
                    className="flex w-full items-center gap-1 rounded px-2 py-1.5 text-left text-xs text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    <ChevronRight className="h-3 w-3 shrink-0" />
                    <span className="truncate">{doc.split("/").pop()}</span>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
      </div>
    </div>
  );
}
