import { useState } from "react";
import { Database, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useStudyProgress } from "@/hooks/useStudyProgress";

export default function DataManagementDialog() {
  const { progress, resetProgress } = useStudyProgress();
  const [open, setOpen] = useState(false);

  const handleExport = () => {
    const data = JSON.stringify(progress, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `aipm-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    if (window.confirm("确定要重置所有学习进度吗？此操作不可撤销。")) {
      resetProgress();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" title="数据管理">
          <Database className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>数据管理</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-sm font-medium">本地存储</h3>
            <p className="text-xs text-muted-foreground">
              你的学习进度保存在浏览器本地，不会上传到任何服务器。清除浏览器数据会导致进度丢失，建议定期导出备份。
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleExport} className="gap-2">
              <Download className="h-4 w-4" />
              导出进度
            </Button>
            <Button variant="outline" size="sm" onClick={handleReset} className="gap-2 text-destructive">
              <Trash2 className="h-4 w-4" />
              重置进度
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
