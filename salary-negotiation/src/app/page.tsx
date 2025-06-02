/**
 * 薪酬规划应用首页
 * 
 * 功能：展示GAINS薪酬谈判策略工具
 * - 作为应用入口点
 * - 提供基本的页面容器
 */

import GAINSNegotiationTool from '@/components/GAINSNegotiationTool';

export default function Home() {
  return (
    <main>
      <GAINSNegotiationTool />
    </main>
  );
}
