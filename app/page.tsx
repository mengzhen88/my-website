const facts = [
  ["01", "我在两种语言、三座城市之间工作与生活。"],
  ["02", "喜欢把复杂的问题，讲成一句简单的话。"],
  ["03", "周末通常属于咖啡、相机和没有目的地的散步。"],
  ["04", "正在学习：把好奇心变成长期作品。"],
];

const works = [
  {
    number: "01",
    type: "PRODUCT / 2026",
    title: "让复杂的工作\n变得轻一点",
    note: "一个关于效率工具与创作体验的概念项目。",
    className: "work-card coral",
  },
  {
    number: "02",
    type: "RESEARCH / 2025",
    title: "城市里的\n微小善意",
    note: "从 24 次街头访谈里，寻找人与城市的连接。",
    className: "work-card blue",
  },
  {
    number: "03",
    type: "SIDE PROJECT / NOW",
    title: "一封写给\n陌生人的信",
    note: "每月分享一个问题、三件好东西和一些生活碎片。",
    className: "work-card ink",
  },
];

const notes = [
  ["JUL 18", "设计不是把东西变漂亮，而是让选择变清楚。"],
  ["JUN 02", "关于独处、散步，以及那些没有被记录的下午。"],
  ["APR 21", "我如何用一个周末完成自己的第一个小产品。"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="回到首页">
          YOUR NAME <span>·</span> 2026
        </a>
        <nav aria-label="主导航">
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#notes">NOTES</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="eyebrow">
          <span>ABOUT ME</span>
          <span className="availability">
            <i aria-hidden="true" /> OPEN TO NEW IDEAS
          </span>
        </div>
        <h1 id="hero-title">你好，</h1>
        <div className="hero-copy" id="about">
          <p className="lead">
            我是 <strong>你的名字</strong>，一名设计师与创作者。
            <br />
            我关心人与技术之间，那些微妙又真实的感受。
          </p>
          <p>
            我喜欢把模糊的问题变清楚，也喜欢把清楚的答案变得有温度。
            过去几年，我参与了从产品策略到体验设计的不同项目，也在持续记录
            关于设计、生活与成长的思考。
          </p>
          <div className="hero-links">
            <a className="pill primary" href="mailto:hello@yourname.com">
              SAY HELLO ↗
            </a>
            <a className="pill" href="#work">
              VIEW WORK ↓
            </a>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <span>好</span>
          <small>STAY CURIOUS</small>
        </div>
      </section>

      <section className="section facts-section" aria-labelledby="facts-title">
        <div className="section-label">01 · FUN FACTS</div>
        <h2 id="facts-title">一些关于我的小事</h2>
        <p className="section-intro">比简历更接近我的四个切片</p>
        <div className="facts-grid">
          {facts.map(([number, text]) => (
            <article className="fact-card" key={number}>
              <span>{number}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <div className="section-label">02 · SELECTED WORK</div>
        <h2 id="work-title">最近做过的事</h2>
        <p className="section-intro">一些项目、实验，以及还在生长的想法</p>
        <div className="work-grid">
          {works.map((work) => (
            <article className={work.className} key={work.number}>
              <div className="work-top">
                <span>{work.number}</span>
                <span>{work.type}</span>
              </div>
              <h3>
                {work.title.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h3>
              <p>{work.note}</p>
              <a href="#contact" aria-label={`了解 ${work.title.replace("\n", "")}`}>
                VIEW CASE ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section notes-section" id="notes" aria-labelledby="notes-title">
        <div className="notes-heading">
          <div>
            <div className="section-label">03 · FIELD NOTES</div>
            <h2 id="notes-title">最近在想</h2>
          </div>
          <p>偶尔写作，经常走神。</p>
        </div>
        <div className="notes-list">
          {notes.map(([date, title], index) => (
            <a href="#contact" key={date}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <time>{date}</time>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-label">04 · SAY HELLO</div>
        <h2 id="contact-title">
          有好玩的想法？
          <br />
          一起聊聊。
        </h2>
        <a className="contact-email" href="mailto:hello@yourname.com">
          hello@yourname.com ↗
        </a>
        <div className="contact-meta">
          <span>BASED IN SHANGHAI · AVAILABLE WORLDWIDE</span>
          <div>
            <a href="#top">LINKEDIN</a>
            <a href="#top">INSTAGRAM</a>
            <a href="#top">XIAOHONGSHU</a>
          </div>
        </div>
      </section>

      <footer>
        <span>YOUR NAME · 2026</span>
        <span>保持好奇，保持具体。</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
