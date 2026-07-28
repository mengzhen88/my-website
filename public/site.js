(() => {
  const root = document.documentElement;
  const langButtons = [...document.querySelectorAll("[data-lang-select]")];
  const titleByLang = {
    zh: "邵梦贞 — 产品设计师",
    en: "Mengzhen Shao — Product Designer",
  };
  const descriptionByLang = {
    zh: "邵梦贞的个人主页：Lark Design · APaaS 产品设计师，6 年产品设计经验。",
    en: "Mengzhen Shao, Product Designer at Lark Design · APaaS with 6 years of experience.",
  };

  const applyLanguage = (lang) => {
    const nextLang = lang === "en" ? "en" : "zh";
    root.dataset.lang = nextLang;
    root.lang = nextLang === "zh" ? "zh-CN" : "en";
    document.title = titleByLang[nextLang];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", descriptionByLang[nextLang]);
    langButtons.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.langSelect === nextLang),
      );
    });
    localStorage.setItem("site-lang", nextLang);
  };

  applyLanguage(localStorage.getItem("site-lang") || "zh");
  langButtons.forEach((button) => {
    button.addEventListener("click", () =>
      applyLanguage(button.dataset.langSelect),
    );
  });

  const contacts = [...document.querySelectorAll("[data-contact]")];
  const closeContacts = () => {
    contacts.forEach((contact) => {
      contact.classList.remove("is-visible");
      const button = contact.querySelector(".contact-btn");
      const card = contact.querySelector(".contact-card");
      button?.setAttribute("aria-expanded", "false");
      card?.setAttribute("aria-hidden", "true");
    });
  };

  contacts.forEach((contact) => {
    const button = contact.querySelector(".contact-btn");
    const card = contact.querySelector(".contact-card");
    button?.addEventListener("click", (event) => {
      event.stopPropagation();
      const shouldOpen = !contact.classList.contains("is-visible");
      closeContacts();
      if (shouldOpen) {
        contact.classList.add("is-visible");
        button.setAttribute("aria-expanded", "true");
        card?.setAttribute("aria-hidden", "false");
      }
    });
  });

  document.addEventListener("click", closeContacts);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeContacts();
  });

  document.querySelectorAll(".photo-flip").forEach((card) => {
    card.addEventListener("click", () => {
      const isFlipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(isFlipped));
    });
  });
})();
