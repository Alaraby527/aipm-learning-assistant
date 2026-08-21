import { WIKI_DOCS } from "@/data/wiki-docs";

/**
 * 获取文档内容
 */
export function getDocContent(path: string): string | undefined {
  return WIKI_DOCS[path];
}

/**
 * 检查文档是否存在
 */
export function hasDoc(path: string): boolean {
  return path in WIKI_DOCS;
}

/**
 * 从文件路径推断文档标题
 */
export function inferTitle(path: string): string {
  const fileName = path.split("/").pop() || path;
  return fileName
    .replace(/\.md$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * 解析 Markdown 内容中的标题
 */
export function extractTitle(content: string, fallback: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}

/**
 * 获取所有文档路径
 */
export function getAllDocPaths(): string[] {
  return Object.keys(WIKI_DOCS);
}

/**
 * 按目录分组文档
 */
export function groupDocsByDirectory(): Record<string, string[]> {
  const groups: Record<string, string[]> = {};
  for (const path of Object.keys(WIKI_DOCS)) {
    const dir = path.includes("/") ? path.split("/").slice(0, -1).join("/") : "root";
    if (!groups[dir]) groups[dir] = [];
    groups[dir].push(path);
  }
  return groups;
}
