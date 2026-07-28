const facts = [
  {
    index: "01",
    zh: "习惯从一张白纸开始，先问对问题，再寻找答案。",
    en: "I like to start with a blank page: ask the right question, then find the answer.",
  },
  {
    index: "02",
    zh: "在两种语言、三座城市之间工作与生活。",
    en: "I have worked and lived across two languages and three cities.",
  },
  {
    index: "03",
    zh: "周末通常属于咖啡、相机和没有目的地的散步。",
    en: "Weekends belong to coffee, a camera, and walks without a destination.",
  },
  {
    index: "04",
    zh: "正在学习：把短暂的好奇，变成可以持续很久的作品。",
    en: "Currently learning how to turn brief curiosity into work that lasts.",
  },
];

const recommendations = [
  {
    eyebrow: "SCREEN",
    zhTitle: "剧与电影",
    enTitle: "Films & Series",
    items: [
      ["机器人之梦", "Robot Dreams"],
      ["完美的日子", "Perfect Days"],
      ["星际牛仔", "Cowboy Bebop"],
      ["布达佩斯大饭店", "The Grand Budapest Hotel"],
    ],
  },
  {
    eyebrow: "BOOKS",
    zhTitle: "书",
    enTitle: "Books",
    items: [
      ["夜晚的潜水艇", "The Submarine at Night"],
      ["我在北京送快递", "Delivering Packages in Beijing"],
      ["反脆弱", "Antifragile"],
      ["中年之路", "The Middle Passage"],
    ],
  },
  {
    eyebrow: "MUSIC",
    zhTitle: "音乐",
    enTitle: "Music",
    items: [
      ["陈粒", "Chen Li"],
      ["坂本龙一", "Ryuichi Sakamoto"],
      ["草东没有派对", "No Party For Cao Dong"],
      ["Of Monsters And Men", "Of Monsters And Men"],
    ],
  },
];

const moments = [
  {
    index: "01",
    tone: "photo-tone--one",
    zh: "海边 · 没有行程的一天",
    en: "By the sea · A day without plans",
  },
  {
    index: "02",
    tone: "photo-tone--two",
    zh: "上海 · 深夜散步",
    en: "Shanghai · A late-night walk",
  },
  {
    index: "03",
    tone: "photo-tone--three",
    zh: "山里 · 追一场日落",
    en: "In the mountains · Chasing sunset",
  },
  {
    index: "04",
    tone: "photo-tone--four",
    zh: "工作坊 · 一起把问题说清楚",
    en: "Workshop · Making the question clear",
  },
  {
    index: "05",
    tone: "photo-tone--five",
    zh: "街角 · 偶然遇见的颜色",
    en: "Street corner · A color found by chance",
  },
  {
    index: "06",
    tone: "photo-tone--six",
    zh: "家里 · 周日下午四点",
    en: "At home · Sunday, 4 PM",
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
            YOUR NAME <span aria-hidden="true">·</span> 2026
          </a>
          <nav className="nav-tabs" aria-label="主导航">
            <a href="#about">ABOUT</a>
            <a href="#facts">FACTS</a>
            <a href="#recs">REC&nbsp;LIST</a>
            <a href="#moments">MOMENTS</a>
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
          <span className="ornament-signal">ON AIR</span>
          <span className="ornament-signal ornament-signal--right">SAY HI</span>
        </div>
        <p className="eyebrow">ABOUT ME</p>
        <h1 id="hero-title">
          <LanguagePair zh="你好" en="Hello" />
          <em aria-hidden="true">。</em>
        </h1>
        <div className="hero-body" id="about">
          <div className="hero-index" aria-hidden="true">
            <span>00</span>
            <span>31°13′N</span>
            <span>121°28′E</span>
          </div>
          <div className="hero-copy">
            <p className="hero-lead">
              <LanguagePair
                zh={
                  <>
                    我是 <strong>你的名字</strong>，一名体验设计师。
                    <br />
                    相信好的设计，让复杂的世界更容易被理解。
                  </>
                }
                en={
                  <>
                    I&apos;m <strong>Your Name</strong>, an experience designer.
                    <br />I believe good design makes a complex world easier to
                    understand.
                  </>
                }
              />
            </p>
            <p>
              <LanguagePair
                zh="我喜欢观察人与技术之间那些细微、真实的感受。从产品策略到体验细节，我在模糊中寻找秩序，也为理性的系统保留一点温度。"
                en="I observe the subtle, real feelings between people and technology. From product strategy to experience details, I look for order in ambiguity and leave room for warmth in rational systems."
              />
            </p>
            <p>
              <LanguagePair
                zh="工作之外，我用散步、阅读和相机认识世界。这里收集一些关于我的小事，也记录那些让我停下来看的瞬间。"
                en="Beyond work, I understand the world through walking, reading, and a camera. This page collects small facts about me and the moments that make me pause."
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
              <a className="text-link" href="mailto:hello@yourname.com">
                EMAIL ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section page-shell"
        id="facts"
        aria-labelledby="facts-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 · FUN FACTS</p>
            <h2 id="facts-title">
              <LanguagePair zh="一些关于我的小事" en="A few things about me" />
            </h2>
          </div>
          <p className="section-intro">
            <LanguagePair
              zh="比简历更接近我的四个切片"
              en="Four fragments closer to me than a résumé"
            />
          </p>
        </div>
        <div className="facts-list">
          {facts.map((fact) => (
            <article className="fact" key={fact.index}>
              <span className="fact-index">{fact.index}</span>
              <p>
                <LanguagePair zh={fact.zh} en={fact.en} />
              </p>
              <span className="fact-mark" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section page-shell"
        id="recs"
        aria-labelledby="recs-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 · RECOMMENDATIONS</p>
            <h2 id="recs-title">
              <LanguagePair zh="书影音推荐" en="Things worth sharing" />
            </h2>
          </div>
          <p className="section-intro">
            <LanguagePair
              zh="如果我们品味相似，也许会很聊得来"
              en="If our taste overlaps, we may have a lot to talk about"
            />
          </p>
        </div>
        <div className="rec-grid">
          {recommendations.map((rec) => (
            <article className="rec-card" key={rec.eyebrow}>
              <p className="eyebrow">{rec.eyebrow}</p>
              <h3>
                <LanguagePair zh={rec.zhTitle} en={rec.enTitle} />
              </h3>
              <ol>
                {rec.items.map(([zh, en], index) => (
                  <li key={zh}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <LanguagePair zh={zh} en={en} />
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section page-shell moments-section"
        id="moments"
        aria-labelledby="moments-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 · MOMENTS</p>
            <h2 id="moments-title">
              <LanguagePair zh="这都是我" en="All of this is me" />
            </h2>
          </div>
          <p className="section-intro">
            <LanguagePair
              zh="点击卡片，看看每个瞬间背后的注脚"
              en="Flip a card to read the note behind each moment"
            />
          </p>
        </div>
        <div className="photo-masonry">
          {moments.map((moment) => (
            <figure className="photo-item" key={moment.index}>
              <button
                className="photo-flip"
                type="button"
                aria-pressed="false"
                aria-label={`Moment ${moment.index}`}
              >
                <span
                  className={`photo-face photo-face--front ${moment.tone}`}
                >
                  <span className="photo-coordinates">MOMENT / {moment.index}</span>
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
          <p className="footer-brand">YOUR NAME · 2026</p>
          <p className="footer-quote">
            <LanguagePair
              zh="世界的有趣，我很好奇。"
              en={"Curious about the world's wonder."}
            />
          </p>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
