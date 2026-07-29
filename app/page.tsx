const strengths = [
  {
    index: "01",
    zhTitle: "从调研到洞察",
    enTitle: "Research into insight",
    zh: "通过流程自跑通、用户调研、角色画像与业务全景梳理建立全局认知，识别真正影响体验与业务的问题。",
    en: "I combine hands-on workflow walkthroughs, user research, personas, and journey mapping to build a complete picture of the problems that matter.",
  },
  {
    index: "02",
    zhTitle: "理解复杂 B 端",
    enTitle: "Make complexity clear",
    zh: "经历覆盖工具型产品、数据治理、数据质量与埋点平台，习惯在复杂角色、流程和规则中建立清晰秩序。",
    en: "My work spans productivity tools, data governance, data quality, and tracking platforms. I bring clarity to complex roles, flows, and rules.",
  },
  {
    index: "03",
    zhTitle: "推动 0→1 共创",
    enTitle: "Build from 0→1",
    zh: "从洞察机会、共判优先级，到方案共创与验证度量，持续拉齐产品和研发资源，让模糊想法走向真实产品。",
    en: "From opportunity framing and priority alignment to co-creation and validation, I bring product and engineering together to turn ideas into real products.",
  },
  {
    index: "04",
    zhTitle: "自驱，也重视协作",
    enTitle: "Driven, and collaborative",
    zh: "在输入有限或目标模糊时主动补齐信息、阶段性对齐预期并引入验证，让设计不只停留在方案，而是产生结果。",
    en: "When inputs are limited or goals are unclear, I fill the gaps, realign expectations in stages, and introduce validation so design creates outcomes—not just proposals.",
  },
];

const career = [
  {
    period: "NOW",
    place: "LARK DESIGN · APAAS",
    zhRole: "产品设计师",
    enRole: "Product Designer",
    zh: "在平台型产品的真实业务场景中，继续探索复杂系统、AI 能力与用户体验之间更自然的连接方式。",
    en: "Exploring more natural connections between complex systems, AI capabilities, and user experience in real platform-product scenarios.",
    tags: ["PLATFORM", "AI", "B2B"],
  },
  {
    period: "2022—2026",
    place: "BYTEDANCE · VOLCENGINE",
    zhRole: "火山引擎数据平台 · 产品设计",
    enRole: "Volcengine Data Platform · Product Design",
    zh: "负责 Gaia 门户与低代码搭建平台、大数据开发治理套件中的治理平台和数据质量平台，以及埋点平台设计，覆盖工具型产品到数据中心复杂 B 端业务的完整链路。2025 年 H1 同时负责需求理解 Agent 项目，积累了 AI 产品设计经验。",
    en: "Designed Gaia Portal and its low-code builder, data governance and quality products, and a tracking platform—covering the full journey from productivity tools to complex enterprise data-center workflows. In H1 2025, I also designed a requirement-understanding Agent and built hands-on AI product experience.",
    tags: ["DATA", "GOVERNANCE", "AGENT"],
  },
  {
    period: "2020—2022",
    place: "ZHAOPIN · RECRUITMENT",
    zhRole: "智联招聘 · 交互设计师",
    enRole: "Zhaopin · Interaction Designer",
    zh: "负责 HR 端招聘系统的交互设计，围绕促回复率、商业化产品、拉新与注册流程持续优化关键链路，在 B 端体验中积累用户增长与商业化方法。",
    en: "Designed recruiter-facing products, improving reply rates, commercial experiences, and acquisition and registration journeys while building a practical understanding of growth in B2B products.",
    tags: ["GROWTH", "COMMERCIAL", "MOBILE"],
  },
  {
    period: "2019—2020",
    place: "IOT · ENTERPRISE",
    zhRole: "物联网监测系统 · 交互设计师",
    enRole: "IoT Monitoring · Interaction Designer",
    zh: "从纯 B 端物联网监测系统起步，负责复杂监测场景的交互设计，并参与优化产研设协作流程与组件沉淀。",
    en: "Started with enterprise IoT monitoring systems, designing complex monitoring workflows while improving product–engineering–design collaboration and reusable components.",
    tags: ["IOT", "B2B", "SYSTEM"],
  },
];

const selectedWork = [
  {
    index: "01",
    category: "BUSINESS INSIGHT",
    zhTitle: "从全链路摸底，到可落地的机会",
    enTitle: "From end-to-end discovery to actionable opportunities",
    zhContext:
      "复杂数据平台角色多、链路长，局部需求很难解释真实体验问题。",
    enContext:
      "Complex data platforms involve many roles and long workflows, so isolated requests rarely reveal the real experience problem.",
    zhMove:
      "通过流程自跑通、用户访谈、角色画像和业务全景梳理建立全局认知，再与产研共同判断机会优先级。",
    enMove:
      "I combined hands-on workflow walkthroughs, interviews, personas, and journey mapping, then aligned priorities with product and engineering.",
    zhValue:
      "让分散反馈变成团队共享的问题地图与优化节奏，推动洞察真正进入产品迭代。",
    enValue:
      "Scattered feedback became a shared problem map and delivery rhythm, turning research into product change.",
  },
  {
    index: "02",
    category: "EXPERIENCE REFRAME",
    zhTitle: "把一次 UI 改版，推动成体验重构",
    enTitle: "Turning a UI refresh into an experience reframe",
    zhContext:
      "Gaia 门户结构日益复杂、体验不一致，项目最初只被理解为视觉层面的改版。",
    enContext:
      "Gaia Portal had grown structurally complex and inconsistent, while the initial brief focused mainly on visual polish.",
    zhMove:
      "主动补充产品自查、用户调研与竞品分析，通过阶段性对齐推动利益相关方重新定义目标，并用轻量 UAT 辅助决策。",
    enMove:
      "I initiated an audit, user research, and competitive analysis, reframed the goal with stakeholders, and used lightweight UAT to resolve key decisions.",
    zhValue:
      "项目从表层视觉更新升级为围绕框架、搭建逻辑与关键动线的系统体验重构。",
    enValue:
      "The work expanded from surface-level polish into a system rethink across structure, building logic, and key journeys.",
  },
  {
    index: "03",
    category: "DESIGN × ENGINEERING",
    zhTitle: "让多角色复杂流程，一眼看见全貌",
    enTitle: "Making multi-role workflows visible at a glance",
    zhContext:
      "治理场景涉及多角色、多模块协同，传统单点或步骤式引导难以呈现完整工作流。",
    enContext:
      "Governance workflows span multiple roles and modules, making conventional step-by-step guidance too fragmented.",
    zhMove:
      "提出泳道式互动引导，并与前端共同沉淀可复用组件与搭建能力，把设计方案变成团队可持续使用的工具。",
    enMove:
      "I designed interactive swimlane guidance and co-built reusable components and authoring capabilities with engineering.",
    zhValue:
      "同时提升用户对复杂链路的理解与产研交付效率，并形成专利创新沉淀。",
    enValue:
      "The approach improved workflow comprehension and delivery efficiency, and became a patented design innovation.",
  },
  {
    index: "04",
    category: "AI PRODUCT",
    zhTitle: "为需求理解 Agent 建立可信赖的交互",
    enTitle: "Designing trustworthy interaction for an AI Agent",
    zhContext:
      "需求理解处于数据开发上游，AI 输出既要准确，也要让用户感知过程、建立信任。",
    enContext:
      "Requirement understanding sits upstream of data development, so AI output must be both accurate and understandable enough to trust.",
    zhMove:
      "从 0→1 梳理任务链路，分析数据开发类与通用 Agent 的能力差异，重点设计对话流、过程反馈与结果确认。",
    enMove:
      "I shaped the 0→1 workflow, compared domain-specific and general Agents, and focused on conversation flow, process feedback, and confirmation.",
    zhValue:
      "帮助原始业务需求转化为结构化输入，为后续自动开发与测试建立更清晰的起点。",
    enValue:
      "Raw business requests became clearer structured inputs, creating a stronger starting point for downstream automation.",
  },
];

const lifeMoments = [
  {
    index: "01",
    tone: "photo-tone--one",
    zh: "ENFJ · 温暖小太阳",
    en: "ENFJ · A warm source of energy",
  },
  {
    index: "02",
    tone: "photo-tone--two",
    zh: "脱口秀与播客重度爱好者",
    en: "Deep into comedy and podcasts",
  },
  {
    index: "03",
    tone: "photo-tone--three",
    zh: "健身、徒步，持续充能",
    en: "Recharged by fitness and hiking",
  },
  {
    index: "04",
    tone: "photo-tone--four",
    zh: "骑行与滑雪，享受速度",
    en: "Cycling, skiing, and a little speed",
  },
  {
    index: "05",
    tone: "photo-tone--five",
    zh: "穿搭，也是每天的小创作",
    en: "Style as a small daily creation",
  },
  {
    index: "06",
    tone: "photo-tone--six",
    zh: "不设限，也期待认识更多朋友",
    en: "Open-minded and always glad to meet new people",
  },
];

function LanguagePair({
  zh,
  en,
  className = "",
}: {
  zh: React.ReactNode;
  en: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`i18n-pair ${className}`}>
      <span className="i18n i18n-zh">{zh}</span>
      <span className="i18n i18n-en">{en}</span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="nav-shell page-shell">
          <a className="brand" href="#top" aria-label="回到首页">
            SHAO MENGZHEN <span aria-hidden="true">·</span> 2026
          </a>
          <nav className="nav-tabs" aria-label="主导航">
            <a href="#about">ABOUT</a>
            <a href="#career">JOURNEY</a>
            <a href="#work">WORK</a>
            <a href="#strengths">APPROACH</a>
            <a href="#life">OFF DUTY</a>
          </nav>
          <div className="lang-switch" role="group" aria-label="语言切换">
            <button type="button" data-lang-select="zh" aria-pressed="true">
              中文
            </button>
            <button type="button" data-lang-select="en" aria-pressed="false">
              EN
            </button>
          </div>
        </div>
      </header>

      <section className="hero page-shell" id="top" aria-labelledby="hero-title">
        <div className="hero-ornament" aria-hidden="true">
          <span className="ornament-cross ornament-cross--one" />
          <span className="ornament-cross ornament-cross--two" />
          <span className="ornament-orbit" />
          <span className="ornament-signal">PRODUCT DESIGN</span>
          <span className="ornament-signal ornament-signal--right">
            STAY CURIOUS
          </span>
        </div>
        <p className="eyebrow">ABOUT ME</p>
        <h1 id="hero-title">
          <LanguagePair zh="你好" en="Hello" />
          <em aria-hidden="true">。</em>
        </h1>
        <div className="hero-body" id="about">
          <div className="hero-index" aria-hidden="true">
            <span>00</span>
            <span>06 YEARS</span>
            <span>03+ AT BYTE</span>
            <span>ENFJ</span>
          </div>
          <div className="hero-copy">
            <p className="hero-lead">
              <LanguagePair
                zh={
                  <>
                    我是 <strong>邵梦贞</strong>，现任 Lark Design · APaaS
                    产品设计师。
                    <br />6 年产品设计经验，字节司龄 3 年+。
                  </>
                }
                en={
                  <>
                    I&apos;m <strong>Mengzhen Shao</strong>, a Product Designer
                    at Lark Design · APaaS.
                    <br />6 years in product design, including 3+ at ByteDance.
                  </>
                }
              />
            </p>
            <p>
              <LanguagePair
                zh="学生时期，《简约至上》和《破茧成蝶》让我第一次感受到：凭借洞察与设计改善用户体验、推动业务目标，是一件很了不起的事。六年过去，我依然相信，也希望一直保有这份初心。"
                en="As a student, books such as Simple and Usable and 破茧成蝶 showed me that insight and design can improve people's experiences while moving a business forward. Six years later, I still believe that—and hope to keep that original conviction."
              />
            </p>
            <p>
              <LanguagePair
                zh="我擅长通过用户调研和全链路业务摸底找到可落地的机会，并推动跨部门协作。从理解复杂问题，到和产研伙伴一起把 0→1 做成真实产品，是我最享受的过程。"
                en="I use user research and end-to-end business discovery to uncover actionable opportunities, then drive cross-functional delivery. Turning a complex question into a real 0→1 product with product and engineering partners is the part I enjoy most."
              />
            </p>
            <div className="contact-row" aria-label="联系方式">
              <div className="contact" data-contact>
                <button
                  className="contact-btn"
                  type="button"
                  aria-expanded="false"
                >
                  WECHAT
                </button>
                <div className="contact-card" role="status" aria-hidden="true">
                  <span className="qr-placeholder" aria-hidden="true" />
                  <LanguagePair zh="微信二维码待替换" en="Replace with WeChat QR" />
                </div>
              </div>
              <div className="contact" data-contact>
                <button
                  className="contact-btn"
                  type="button"
                  aria-expanded="false"
                >
                  LARK
                </button>
                <div className="contact-card" role="status" aria-hidden="true">
                  <span className="qr-placeholder" aria-hidden="true" />
                  <LanguagePair zh="飞书二维码待替换" en="Replace with Lark QR" />
                </div>
              </div>
              <a className="text-link" href="#life">
                <LanguagePair zh="再认识我一点 ↓" en="More about me ↓" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section page-shell"
        id="career"
        aria-labelledby="career-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 · THE ROAD SO FAR</p>
            <h2 id="career-title">
              <LanguagePair zh="来时的路" en="The road so far" />
            </h2>
          </div>
          <p className="section-intro">
            <LanguagePair
              zh="从招聘增长到数据平台，再到 Lark APaaS"
              en="From recruitment growth to data platforms and Lark APaaS"
            />
          </p>
        </div>
        <div className="career-list">
          {career.map((item) => (
            <article className="career-item" key={item.period}>
              <div className="career-meta">
                <time>{item.period}</time>
                <span>{item.place}</span>
              </div>
              <div className="career-content">
                <h3>
                  <LanguagePair zh={item.zhRole} en={item.enRole} />
                </h3>
                <p>
                  <LanguagePair zh={item.zh} en={item.en} />
                </p>
                <ul className="career-tags" aria-label="领域标签">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section page-shell"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 · SELECTED PRACTICE</p>
            <h2 id="work-title">
              <LanguagePair zh="代表实践" en="Selected practice" />
            </h2>
          </div>
          <p className="section-intro">
            <LanguagePair
              zh="从理解问题，到推动改变"
              en="Understand the problem, then make change happen"
            />
          </p>
        </div>
        <div className="work-list">
          {selectedWork.map((work) => (
            <article className="work-item" key={work.index}>
              <div className="work-meta">
                <span>{work.index}</span>
                <p>{work.category}</p>
              </div>
              <div className="work-content">
                <h3>
                  <LanguagePair zh={work.zhTitle} en={work.enTitle} />
                </h3>
                <div className="work-arc">
                  <div>
                    <span className="work-label">CONTEXT</span>
                    <p>
                      <LanguagePair zh={work.zhContext} en={work.enContext} />
                    </p>
                  </div>
                  <div>
                    <span className="work-label">MOVE</span>
                    <p>
                      <LanguagePair zh={work.zhMove} en={work.enMove} />
                    </p>
                  </div>
                  <div>
                    <span className="work-label">VALUE</span>
                    <p>
                      <LanguagePair zh={work.zhValue} en={work.enValue} />
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="confidential-note">
          <LanguagePair
            zh="基于公开可接受信息整理；详细过程与方案可在交流时分享。"
            en="Summarized from publicly acceptable information; detailed process and artifacts are available in conversation."
          />
        </p>
      </section>

      <section
        className="section page-shell"
        id="strengths"
        aria-labelledby="strengths-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 · HOW I WORK</p>
            <h2 id="strengths-title">
              <LanguagePair zh="我如何工作" en="How I work" />
            </h2>
          </div>
          <p className="section-intro">
            <LanguagePair
              zh="洞察复杂业务，也推动真实改变"
              en="Understand complexity, then move things forward"
            />
          </p>
        </div>
        <div className="facts-list">
          {strengths.map((strength) => (
            <article className="fact fact--detailed" key={strength.index}>
              <span className="fact-index">{strength.index}</span>
              <div className="fact-content">
                <h3>
                  <LanguagePair
                    zh={strength.zhTitle}
                    en={strength.enTitle}
                  />
                </h3>
                <p>
                  <LanguagePair zh={strength.zh} en={strength.en} />
                </p>
              </div>
              <span className="fact-mark" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section page-shell moments-section"
        id="life"
        aria-labelledby="life-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 · OFF DUTY</p>
            <h2 id="life-title">
              <LanguagePair zh="工作之外" en="Beyond the brief" />
            </h2>
          </div>
          <p className="section-intro">
            <LanguagePair
              zh="中原人的爽朗与细腻，一半思考，一半热闹"
              en="Straightforward yet thoughtful—equal parts reflection and fun"
            />
          </p>
        </div>
        <div className="life-intro">
          <p>
            <LanguagePair
              zh="作为中原人，我既有北方的豪爽，也有南方的细腻。现在是 ENFJ「大剑姐」，也是一个温暖小太阳；可盐可甜，不设限、不局限，希望广结各路好友。"
              en="Growing up in central China gave me both northern candor and southern sensitivity. I'm an ENFJ protagonist and a warm source of energy—bold or soft, never boxed in, and always happy to make new friends."
            />
          </p>
          <p>
            <LanguagePair
              zh="脱口秀和播客让我在轻松与深度之间切换；健身、徒步、骑行、滑雪和穿搭，则是持续给生活充能的方式。希望以后我们可以一起工作，也一起耍。"
              en="Comedy and podcasts let me move between lightness and deeper thinking. Fitness, hiking, cycling, skiing, and style keep life charged. I hope we get to work together—and have fun together, too."
            />
          </p>
        </div>
        <div className="photo-masonry">
          {lifeMoments.map((moment) => (
            <figure className="photo-item" key={moment.index}>
              <button
                className="photo-flip"
                type="button"
                aria-pressed="false"
                aria-label={`Off duty ${moment.index}`}
              >
                <span
                  className={`photo-face photo-face--front ${moment.tone}`}
                >
                  <span className="photo-coordinates">
                    OFF DUTY / {moment.index}
                  </span>
                  <span className="photo-aperture" aria-hidden="true" />
                </span>
                <span className="photo-face photo-face--back">
                  <span className="photo-index">{moment.index}</span>
                  <span className="photo-caption">
                    <LanguagePair zh={moment.zh} en={moment.en} />
                  </span>
                  <span className="photo-hint">
                    <LanguagePair zh="再次点击返回" en="Tap again to return" />
                  </span>
                </span>
              </button>
              <figcaption className="sr-only">
                <LanguagePair zh={moment.zh} en={moment.en} />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-shell">
          <p className="footer-brand">SHAO MENGZHEN · 2026</p>
          <p className="footer-quote">
            <LanguagePair
              zh="保持初心，一起工作，也一起耍。"
              en="Stay true. Work together, have fun together."
            />
          </p>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
