"use client";

/**
 * GAINSNegotiationTool组件
 * 
 * 功能：提供GAINS薪酬谈判策略工具的交互界面
 * - 跟踪5个谈判阶段(Gather, Align, Influence, Navigate, Secure)的进度
 * - 为每个阶段提供任务清单、思考要点和实用对话脚本
 * - 允许用户记录笔记并标记已完成的任务
 * - 显示总体进度和各阶段进度
 */

import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Circle, AlertCircle, Target, Users, Brain, Navigation, Shield, LucideIcon } from 'lucide-react';

// 类型定义
type PhaseKey = 'G' | 'A' | 'I' | 'N' | 'S';

interface TaskItem {
  id: string;
  title: string;
  description: string;
  questions: string[];
}

interface ScriptItem {
  scenario: string;
  script: string;
}

interface PhaseData {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  description: string;
  tasks: TaskItem[];
  scripts: ScriptItem[];
}

interface PhaseProgress {
  completed: string[];
  notes: Record<string, string>;
}

type ProgressState = {
  [key in PhaseKey]: PhaseProgress;
};

type PhasesData = {
  [key in PhaseKey]: PhaseData;
};

const GAINSNegotiationTool = () => {
  const [activePhase, setActivePhase] = useState<PhaseKey>('G');
  const [progress, setProgress] = useState<ProgressState>({
    G: { completed: [], notes: {} },
    A: { completed: [], notes: {} },
    I: { completed: [], notes: {} },
    N: { completed: [], notes: {} },
    S: { completed: [], notes: {} }
  });

  const phases: PhasesData = {
    G: {
      title: "Gather Intelligence",
      subtitle: "收集情报",
      icon: Brain,
      color: "blue",
      description: "深入了解公司、决策者和真实需求",
      tasks: [
        {
          id: 'g1',
          title: '绘制权力地图',
          description: '识别真正的决策者和影响者',
          questions: [
            '谁在重要决策前会被征询意见？',
            '哪些过去的失败还在影响领导层？',
            'CEO身边的红人是谁？',
            '谁的意见被高度重视？'
          ]
        },
        {
          id: 'g2',
          title: '了解决策者',
          description: '研究关键人物的背景和动机',
          questions: [
            '每个关键人物的职业背景是什么？',
            '他们的领导哲学是什么？',
            '什么让他们夜不能寐？',
            '他们如何衡量成功？'
          ]
        },
        {
          id: 'g3',
          title: '发现隐藏挑战',
          description: '挖掘公司真正的痛点',
          questions: [
            '哪些部门没有达到目标？',
            '哪些职位空缺已久？',
            '公司内部在争论什么？',
            '六个月后他们会面临什么问题？'
          ]
        }
      ],
      scripts: [
        {
          scenario: '了解决策流程',
          script: '"在贵公司，重要决策通常是如何做出的？我想了解一下团队的协作方式。"'
        },
        {
          scenario: '探索职位背景',
          script: '"这个职位是新设立的还是接替某人？能分享一下设立这个职位的背景吗？"'
        }
      ]
    },
    A: {
      title: "Align with Needs",
      subtitle: "与需求对齐",
      icon: Target,
      color: "green",
      description: "展示你如何解决他们的具体问题",
      tasks: [
        {
          id: 'a1',
          title: '建立关联故事',
          description: '准备与他们挑战相关的经历',
          questions: [
            '你的哪些经历直接对应他们的问题？',
            '失败经历中有哪些适用的教训？',
            '如何把故事连接到解决方案？'
          ]
        },
        {
          id: 'a2',
          title: '提出洞察问题',
          description: '通过提问展示战略思维',
          questions: [
            '他们的假设中有哪些可能是错的？',
            '什么根本原因没有被讨论？',
            '行业趋势会如何影响他们？'
          ]
        },
        {
          id: 'a3',
          title: '描绘成功图景',
          description: '让他们看到与你合作后的未来',
          questions: [
            '30/90/180天后会有什么改变？',
            '哪些指标会得到改善？',
            '团队会有什么不同的感受？'
          ]
        }
      ],
      scripts: [
        {
          scenario: '分享相关经历',
          script: '"您提到的产品市场契合度挑战让我想起在[公司]的类似情况。我们发现根本原因不是流程，而是客户开发方法。您觉得贵公司的产品和研究团队在理想客户画像上的一致性如何？"'
        },
        {
          scenario: '提出挑战性问题',
          script: '"看了你们的产品路线图，我有个担心。您是否验证过企业用户真的需要所有这些功能？"'
        }
      ]
    },
    I: {
      title: "Influence Stakeholders",
      subtitle: "影响利益相关者",
      icon: Users,
      color: "purple",
      description: "在组织内建立支持者网络",
      tasks: [
        {
          id: 'i1',
          title: '定制化故事',
          description: '为不同角色准备相关案例',
          questions: [
            '每个利益相关者最关心什么？',
            '如何让技术概念易于理解？',
            '哪些例子能引起共鸣？'
          ]
        },
        {
          id: 'i2',
          title: '建立深度关系',
          description: '把潜在反对者变成支持者',
          questions: [
            '谁可能会反对或质疑？',
            '如何让他们参与到解决方案中？',
            '什么共同挑战能建立连接？'
          ]
        },
        {
          id: 'i3',
          title: '持续创造价值',
          description: '在入职前就开始贡献',
          questions: [
            '能分享什么相关洞察？',
            '如何用行动展示能力？',
            '什么快速胜利能创造动力？'
          ]
        }
      ],
      scripts: [
        {
          scenario: '建立跨部门关系',
          script: '"我很欣赏您对[具体观点]的看法。这让我重新思考了[相关方面]。能否请教您会如何处理[相关挑战]？您在[背景]方面的经验会非常有价值。"'
        },
        {
          scenario: '创造价值的跟进',
          script: '"感谢我们关于[挑战]的讨论。我一直在思考您的方法，想分享一个来自[相关经历]的洞察。[简短的有价值见解]。期待我们下次讨论时分享更多想法。"'
        }
      ]
    },
    N: {
      title: "Navigate Complexity",
      subtitle: "驾驭复杂性",
      icon: Navigation,
      color: "orange",
      description: "策略性地管理谈判进程",
      tasks: [
        {
          id: 'n1',
          title: '创造积极动态',
          description: '保持热情同时建立杠杆',
          questions: [
            '如何表达兴趣但不显得急切？',
            '怎样把要求转化为问题？',
            '如何聚焦于共同价值？'
          ]
        },
        {
          id: 'n2',
          title: '管理时间线',
          description: '控制节奏，避免仓促决定',
          questions: [
            '你有多少其他选择？',
            '如何创造良性竞争？',
            '什么是你的真实时间线？'
          ]
        },
        {
          id: 'n3',
          title: '协调多方利益',
          description: '平衡不同利益相关者的优先级',
          questions: [
            '每个人的核心关注点是什么？',
            '谁有真正的决策权？',
            '如何让所有人都感到被重视？'
          ]
        }
      ],
      scripts: [
        {
          scenario: '回应初始报价',
          script: '"我对这个机会感到非常兴奋，已经准备好开始了。我想更多了解您如何看待这个角色的发展——以及我们如何让这个合作对双方都更有价值。下周初一起喝杯咖啡如何？"'
        },
        {
          scenario: '管理时间压力',
          script: '"我想坦诚地说——我正在考虑几个机会。我对我们的讨论最感兴趣，想确保我们找到合适的契合点。我们来对齐一个对大家都合适的时间线？"'
        }
      ]
    },
    S: {
      title: "Secure Your Value",
      subtitle: "确保价值",
      icon: Shield,
      color: "red",
      description: "锁定长期成功的条件",
      tasks: [
        {
          id: 's1',
          title: '明确所有条款',
          description: '消除模糊表述，获得书面确认',
          questions: [
            '每个模糊词汇的确切含义是什么？',
            '绩效如何具体衡量？',
            '口头承诺是否已书面化？'
          ]
        },
        {
          id: 's2',
          title: '尽早创造价值',
          description: '在正式入职前就开始贡献',
          questions: [
            '能分享什么行业洞察？',
            '如何帮助未来团队建立联系？',
            '什么快速胜利能立即实现？'
          ]
        },
        {
          id: 's3',
          title: '法律保护',
          description: '确保协议保护你的利益',
          questions: [
            '是否有专业律师审查？',
            '离职条款是否清晰？',
            '股权条款是否有利？'
          ]
        }
      ],
      scripts: [
        {
          scenario: '澄清模糊条款',
          script: '"我对完成我们的协议感到兴奋。我注意到讨论中提到了\'重要股权\'。为确保我们的理解一致，能否帮我了解这代表的具体百分比或股数？"'
        },
        {
          scenario: '定义成功标准',
          script: '"我想确保能够提供您期望的价值。当您说[模糊词汇]时，六个月后的成功具体是什么样子？用什么指标来衡量我是否达到了要求？"'
        }
      ]
    }
  };

  const toggleTask = (phase: PhaseKey, taskId: string) => {
    setProgress(prev => {
      const completed = prev[phase].completed.includes(taskId)
        ? prev[phase].completed.filter(id => id !== taskId)
        : [...prev[phase].completed, taskId];
      
      return {
        ...prev,
        [phase]: {
          ...prev[phase],
          completed
        }
      };
    });
  };

  const updateNotes = (phase: PhaseKey, taskId: string, notes: string) => {
    setProgress(prev => ({
      ...prev,
      [phase]: {
        ...prev[phase],
        notes: {
          ...prev[phase].notes,
          [taskId]: notes
        }
      }
    }));
  };

  const getPhaseProgress = (phase: PhaseKey) => {
    const totalTasks = phases[phase].tasks.length;
    const completedTasks = progress[phase].completed.length;
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };

  const getOverallProgress = () => {
    const totalProgress = Object.keys(phases).reduce((sum, phase) => {
      return sum + getPhaseProgress(phase as PhaseKey);
    }, 0);
    return totalProgress / Object.keys(phases).length;
  };

  const currentPhase = phases[activePhase];
  const Icon = currentPhase.icon;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">GAINS 薪酬谈判策略工具</h1>
        <p className="text-gray-600 mb-6">系统化提升你的谈判能力，创造非凡职业机会</p>
        
        {/* 总体进度 */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>总体进度</span>
            <span>{Math.round(getOverallProgress())}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${getOverallProgress()}%` }}
            />
          </div>
        </div>

        {/* 阶段选择 */}
        <div className="grid grid-cols-5 gap-2 mb-8">
          {Object.entries(phases).map(([key, phase]) => (
            <button
              key={key}
              onClick={() => setActivePhase(key as PhaseKey)}
              className={`p-4 rounded-lg transition-all ${
                activePhase === key 
                  ? `bg-${phase.color}-100 border-2 border-${phase.color}-500` 
                  : 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent'
              }`}
            >
              <div className="text-center">
                <div className={`text-2xl font-bold ${
                  activePhase === key ? `text-${phase.color}-600` : 'text-gray-600'
                }`}>{key}</div>
                <div className="text-xs mt-1">{phase.subtitle}</div>
                <div className="mt-2">
                  <div className="w-full bg-gray-300 rounded-full h-1">
                    <div 
                      className={`bg-${phase.color}-500 h-1 rounded-full transition-all`}
                      style={{ width: `${getPhaseProgress(key as PhaseKey)}%` }}
                    />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* 当前阶段详情 */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Icon className={`w-8 h-8 text-${currentPhase.color}-600 mr-3`} />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{currentPhase.title}</h2>
              <p className="text-gray-600">{currentPhase.description}</p>
            </div>
          </div>

          {/* 任务列表 */}
          <div className="space-y-4 mb-6">
            {currentPhase.tasks.map((task) => {
              const isCompleted = progress[activePhase].completed.includes(task.id);
              const notes = progress[activePhase].notes[task.id] || '';
              
              return (
                <div key={task.id} className="bg-white rounded-lg p-4 shadow">
                  <div className="flex items-start">
                    <button
                      onClick={() => toggleTask(activePhase, task.id)}
                      className="mt-1 mr-3"
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-400" />
                      )}
                    </button>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">{task.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                      
                      <div className="bg-blue-50 rounded p-3 mb-3">
                        <p className="text-sm font-medium text-blue-800 mb-2">思考要点：</p>
                        <ul className="space-y-1">
                          {task.questions.map((question, idx) => (
                            <li key={idx} className="text-sm text-blue-700 flex items-start">
                              <ChevronRight className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" />
                              <span>{question}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-3">
                        <label className="text-sm font-medium text-gray-700">你的笔记：</label>
                        <textarea
                          value={notes}
                          onChange={(e) => updateNotes(activePhase, task.id, e.target.value)}
                          className="w-full mt-1 p-2 border rounded-lg text-sm"
                          rows={3}
                          placeholder="记录你的想法、发现和行动计划..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 实用脚本 */}
          <div className="bg-yellow-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-yellow-600" />
              实用对话脚本
            </h3>
            <div className="space-y-3">
              {currentPhase.scripts.map((script, idx) => (
                <div key={idx} className="bg-white rounded p-3">
                  <p className="text-sm font-medium text-gray-700 mb-1">{script.scenario}：</p>
                  <p className="text-sm text-gray-600 italic">{script.script}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 核心原则提醒 */}
        <div className="mt-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">记住核心原则</h3>
          <p className="text-sm text-gray-700">
            谈判不是魔法，而是方法。不要问"你能给我什么？"，而要展示"这是我如何解决你最紧迫的挑战并为你的业务创造新可能。"
          </p>
        </div>
      </div>
    </div>
  );
};

export default GAINSNegotiationTool; 