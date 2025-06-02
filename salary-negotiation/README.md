# GAINS 薪酬谈判策略工具

这是一个基于 [Next.js](https://nextjs.org) 框架开发的薪酬谈判策略工具，使用 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 搭建。

## 项目介绍

GAINS 薪酬谈判策略工具是一个帮助求职者系统化提升谈判能力的应用。它基于GAINS模型，将谈判过程分为五个关键阶段：

- **G (Gather Intelligence)**: 收集情报，深入了解公司、决策者和真实需求
- **A (Align with Needs)**: 与需求对齐，展示如何解决他们的具体问题
- **I (Influence Stakeholders)**: 影响利益相关者，在组织内建立支持者网络
- **N (Navigate Complexity)**: 驾驭复杂性，策略性地管理谈判进程
- **S (Secure Your Value)**: 确保价值，锁定长期成功的条件

每个阶段都提供了具体任务、思考要点和实用对话脚本，帮助用户在谈判过程中取得更好的结果。

## 开始使用

首先，克隆项目并安装依赖:

```bash
git clone <项目地址>
cd salary-negotiation
npm install
```

然后，启动开发服务器:

```bash
npm run dev
# 或者
yarn dev
# 或者
pnpm dev
# 或者
bun dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用效果。

## 功能特点

- 🚀 跟踪五个谈判阶段的进度
- 📝 为每个阶段提供任务清单和思考要点
- 💬 提供实用对话脚本，应对各种谈判场景
- 📊 显示总体进度和各阶段完成情况
- 📓 允许用户记录笔记并标记已完成的任务

## 技术栈

- **前端框架**: Next.js 14 (React)
- **类型系统**: TypeScript
- **样式方案**: Tailwind CSS
- **图标库**: Lucide React
- **部署平台**: Vercel (推荐)

## 如何贡献

欢迎提交问题和贡献代码。贡献前请先讨论您想要更改的内容。

## 部署

推荐使用 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 部署，它是 Next.js 的创建者提供的托管服务。

更多部署详情，请查看 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。
