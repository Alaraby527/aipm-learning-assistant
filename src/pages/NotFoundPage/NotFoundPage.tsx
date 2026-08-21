import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-8 text-center">
      <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
      <p className="mt-4 text-lg">页面未找到</p>
      <p className="mt-2 text-sm text-muted-foreground">你访问的页面不存在或已被移动。</p>
      <Button asChild className="mt-6">
        <Link to="/">返回首页</Link>
      </Button>
    </div>
  );
}
