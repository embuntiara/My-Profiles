import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import ScrollReveal from "scrollreveal";

const services = [
  {
    title: ["Project", "Leadership"],
    description:
      "Own the delivery lifecycle from discovery to steady-state handover through disciplined documentation and follow-through.",
    items: [
      "Craft BRD/FSD packs that align business and tech scope.",
      "Turn discovery workshops into prioritized feature roadmaps.",
      "Track milestones, RAID items, and share transparent status.",
      "Facilitate sign-off, retro, and rollout readiness.",
      "Secure knowledge transfer and hypercare support plans.",
    ],
  },
  {
    title: ["System", "Analysis"],
    description:
      "Model business processes and system behavior using diagrams to guide engineering decisions.",
    items: [
      "Capture current/future flows with use case & activity diagrams.",
      "Design integration contracts, data mappings, and error states.",
      "Write detailed acceptance criteria plus UAT scenarios.",
      "Review solution designs for scalability, security, and ops.",
      "Maintain traceability so every requirement has an owner.",
    ],
  },
  {
    title: ["Team", "Enablement"],
    description:
      "Coach squads on collaboration rituals so delivery stays predictable without sacrificing quality.",
    items: [
      "Define RACI, escalation paths, and meeting cadences.",
      "Spin up dashboards for throughput and blocker visibility.",
      "Lead retrospectives and ensure action follow-up.",
      "Build reusable templates (status decks, playbooks, SOP).",
      "Mentor coordinators on concise stakeholder communication.",
    ],
  },
];

const workFilters = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "movil" },
  { label: "Design", value: "design" },
];

const works = [
  {
    title: "ERP Modernization",
    role: "Project Lead • Finance & procurement rollout",
    category: "web",
    image: "/img/work1.jpg",
  },
  {
    title: "Field Service Super App",
    role: "Collaboration Lead • Offline squad operations",
    category: "movil",
    image: "/img/work2.jpg",
  },
  {
    title: "Data Governance Dashboard",
    role: "System Analyst • Lineage, SLA, and DQ guardrails",
    category: "design",
    image: "/img/work3.jpg",
  },
  {
    title: "Customer Onboarding Portal",
    role: "BRD/FSD Specialist • Automated KYC journey",
    category: "web",
    image: "/img/work4.jpg",
  },
  {
    title: "Logistics Control Tower",
    role: "Team Enablement • Vendor & fleet readiness",
    category: "movil",
    image: "/img/work5.jpg",
  },
];

const projectSkills = [
  { name: "Project Planning", level: "Roadmaps & milestone tracking" },
  { name: "Stakeholder Updates", level: "CxO-ready reporting" },
  { name: "Risk & RAID Control", level: "Escalation & mitigation" },
  { name: "Agile Rituals", level: "Sprint, retro, demo facilitation" },
  { name: "Team Coaching", level: "Alignment across squads" },
  { name: "Vendor Partnerships", level: "Contract & delivery sync" },
];

const analysisSkills = [
  { name: "Process Modeling", level: "Use case & activity diagrams" },
  { name: "System Blueprint", level: "FSD/FDD & integration specs" },
  { name: "Data Mapping", level: "Source-to-target + lineage" },
  { name: "Acceptance Testing", level: "UAT scenarios & sign-off" },
  { name: "Documentation", level: "Templates, traceability matrix" },
  { name: "Change Management", level: "Training & rollout playbook" },
];

const contactOptions = [
  {
    icon: "bx bx-mail-send",
    title: "Email",
    data: "embuntiarar@gmail.com",
    href: "mailto:embuntiarar@gmail.com",
  },
  {
    icon: "bx bxl-whatsapp",
    title: "Whatsapp",
    data: "+62 858-5329-2884",
    href: "https://api.whatsapp.com/send?phone=+6285853292884&text=Hey there!",
  },
  {
    icon: "bx bxl-instagram",
    title: "Instagram",
    data: "@embun.tralala",
    href: "https://instagram.com/embun.tralala",
  },
];

const navSections = ["home", "about", "skills", "work", "contact"];

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.classList.toggle("light-theme", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY >= 50);

      const checkpoints = navSections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        return {
          id,
          top: el.offsetTop - 70,
          bottom: el.offsetTop + el.offsetHeight - 70,
        };
      });

      const current = checkpoints.find(
        (section) => section && window.scrollY >= section.top && window.scrollY < section.bottom
      );
      if (current?.id) {
        setActiveSection(current.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 200,
      reset: true,
    });

    sr.reveal(".home__data, .home__handle, .home__social, .home__scroll");
    sr.reveal(".about__img", { origin: "left" });
    sr.reveal(".about__data", { origin: "right" });
    sr.reveal(".skills__content", { interval: 100 });
    sr.reveal(".services__card", { interval: 100 });
    sr.reveal(".work__card", { interval: 100 });
    sr.reveal(".contact__content", { interval: 100, origin: "bottom" });
    sr.reveal(".footer__container", { origin: "bottom" });

    return () => sr.destroy();
  }, []);

  const filteredWorks = useMemo(() => {
    if (activeFilter === "all") return works;
    return works.filter((work) => work.category === activeFilter);
  }, [activeFilter]);

  const themeIcon = theme === "light" ? "bx bx-moon" : "bx bx-sun";

  return (
    <>
      <header className={`header ${headerScrolled ? "scroll-header" : ""}`} id="header">
        <nav className="nav container">
          <a href="#home" className="nav__logo">
            Embun
          </a>

          <div className="nav__menu">
            <ul className="nav__list">
              {navSections.map((section) => (
                <li className="nav__item" key={section}>
                  <a
                    href={`#${section}`}
                    className={`nav__link ${activeSection === section ? "active-link" : ""}`}
                    aria-label={section}
                  >
                    {section === "home" && <i className="bx bx-home"></i>}
                    {section === "about" && <i className="bx bx-user"></i>}
                    {section === "skills" && <i className="bx bx-book"></i>}
                    {section === "work" && <i className="bx bx-briefcase-alt-2"></i>}
                    {section === "contact" && <i className="bx bx-message-square-dots"></i>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="change__theme change-theme change-theme-button"
            id="theme-button"
            aria-label="Toggle theme"
            onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
          >
            <i className={themeIcon}></i>
          </button>
        </nav>
      </header>

      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__data">
              <span className="home__greeting">Hello, I'm</span>
              <h1 className="home__name">Embun Tiara</h1>
              <h3 className="home__education">Project Manager & System Analyst</h3>

              <div className="home__button">
                <a download href="/pdf/hailee-Cv.pdf" className="button button--ghost">
                  Download CV
                </a>

                <a href="#about" className="button">
                  About
                </a>
              </div>
            </div>

            <div className="home__handle">
              <img src="/img/perfil.png" alt="Embun portrait" className="home__img" />
            </div>

            <div className="home__social">
              <a href="https://www.linkedin.com/in/embun-tiara-rahmatullah-84979631a/" target="_blank" rel="noreferrer" className="home__social-link">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://github.com/embuntiara" target="_blank" rel="noreferrer" className="home__social-link">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://www.instagram.com/embun.tralala" target="_blank" rel="noreferrer" className="home__social-link">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>

            <a href="#about" className="home__scroll">
              <i className="bx bx-mouse home__scroll-icon"></i>
              <span className="home__scroll-name">Scroll Down</span>
            </a>
          </div>
        </section>

        <section className="about section" id="about">
          <span className="section__subtitle">My Intro</span>
          <h2 className="section__title">About Me</h2>

          <div className="about__container container grid">
            <img src="/img/about.jpeg" alt="About me" className="about__img" />

            <div className="about__data">
              <div className="about__info">
                <div className="about__box">
                  <i className="bx bx-award about__icon"></i>
                  <h3 className="about__title">Experience</h3>
                  <span className="about__subtitle">2 Years Working</span>
                </div>
                <div className="about__box">
                  <i className="bx bx-briefcase-alt about__icon"></i>
                  <h3 className="about__title">Completed</h3>
                  <span className="about__subtitle">15+ Projects</span>
                </div>
                <div className="about__box">
                  <i className="bx bx-support about__icon"></i>
                  <h3 className="about__title">Support</h3>
                  <span className="about__subtitle">Online 24/7</span>
                </div>
              </div>

              <p className="about__description">
                Focus on project management and system analysis clarifying business needs, translating them into BRD/FSD
                packs, and guiding delivery teams until the release stabilizes. Collaboration, documentation, and process
                transparency are the pillars of every engagement I lead.
              </p>

              <a href="#contact" className="button about__button-contact">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <span className="section__subtitle">My Abilities</span>
          <h2 className="section__title">My Experience</h2>

          <div className="skills__container container grid">
            <div className="skills__content">
              <h3 className="skills__title">Project Management</h3>
              <div className="skills__box">
                {[projectSkills.slice(0, 3), projectSkills.slice(3)].map((group, groupIndex) => (
                  <div className="skills__group" key={`project-${groupIndex}`}>
                    {group.map((skill) => (
                      <div className="skills__data" key={skill.name}>
                        <i className="bx bxs-badge-check"></i>
                        <div>
                          <h3 className="skills__name">{skill.name}</h3>
                          <span className="skills__level">{skill.level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="skills__content">
              <h3 className="skills__title">System Analysis</h3>
              <div className="skills__box">
                {[analysisSkills.slice(0, 3), analysisSkills.slice(3)].map((group, groupIndex) => (
                  <div className="skills__group" key={`analysis-${groupIndex}`}>
                    {group.map((skill) => (
                      <div className="skills__data" key={skill.name}>
                        <i className="bx bxs-badge-check"></i>
                        <div>
                          <h3 className="skills__name">{skill.name}</h3>
                          <span className="skills__level">{skill.level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <span className="section__subtitle">My Services</span>
          <h2 className="section__title">What I Offer</h2>

          <div className="services__container container grid">
            {services.map((service, index) => (
              <div className="services__card" key={service.title.join("-")}>
                <h3 className="services__title">
                  {service.title.map((part, idx) => (
                    <span key={`${part}-${idx}`}>
                      {part}
                      {idx === 0 && <br />}
                    </span>
                  ))}
                </h3>
                <button type="button" className="services__button" onClick={() => setActiveModal(index)}>
                  See More <i className="bx bx-right-arrow services__icon"></i>
                </button>
              </div>
            ))}
          </div>
        </section>

        {activeModal !== null &&
          createPortal(
            <div
              className="services__modal active-modal"
              aria-modal="true"
              role="dialog"
              onClick={() => setActiveModal(null)}
            >
              <div className="services__modal-content" onClick={(e) => e.stopPropagation()}>
                <button type="button" className="services__modal-close" onClick={() => setActiveModal(null)}>
                  <i className="bx bx-x"></i>
                </button>
                <h3 className="services__modal-title">{services[activeModal].title.join(" ")}</h3>
                <p className="services__modal-description">{services[activeModal].description}</p>
                <ul className="services__modal-list">
                  {services[activeModal].items.map((item) => (
                    <li className="services__modal-item" key={item}>
                      <i className="bx bx-check-circle"></i>
                      <p className="services__modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>,
            document.body
          )}

        <section className="work section" id="work">
          <span className="section__subtitle">My Portfolio</span>
          <h2 className="section__title">Recent Works</h2>

          <div className="work__filters">
            {workFilters.map((filter) => (
              <button
                type="button"
                key={filter.value}
                className={`work__item ${activeFilter === filter.value ? "active-work" : ""}`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="work__container container grid">
            {filteredWorks.map((work) => (
              <div className={`work__card mix ${work.category}`} key={`${work.title}-${work.image}`}>
                <img src={work.image} alt={work.title} className="work__img" />
                <h3 className="work__title">{work.title}</h3>
                {work.role && <p className="work__subtitle">{work.role}</p>}
                <a href="#" className="work__button">
                  Demo <i className="bx bx-right-arrow work__icon"></i>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <span className="section__subtitle">Get in touch</span>
          <h3 className="section__title">Contact Me</h3>

          <div className="contact__container container grid">
            <div className="contact__content">
              <h3 className="contact__title contact__title-info">Talk to me</h3>
              <div className="contact__info">
                {contactOptions.map((option) => (
                  <div className="contact__card" key={option.title}>
                    <i className={`${option.icon} contact__card-icon`}></i>
                    <h3 className="contact__card-title">{option.title}</h3>
                    <span className="contact__card-data">{option.data}</span>
                    <a href={option.href} target="_blank" rel="noreferrer" className="contact__button">
                      Write Me <i className="bx bx-right-arrow contact__button-icon"></i>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact__content">
              <h3 className="contact__title contact__title-form">Write me your message</h3>
              <form className="contact__form">
                <div className="contact__form-div">
                  <label className="contact__form-tag" htmlFor="name">
                    Name
                  </label>
                  <input id="name" type="text" placeholder="Enter name" className="contact__form-input" />
                </div>

                <div className="contact__form-div">
                  <label className="contact__form-tag" htmlFor="email">
                    Mail
                  </label>
                  <input id="email" type="email" placeholder="Enter email" className="contact__form-input" />
                </div>

                <div className="contact__form-div contact__form-area">
                  <label className="contact__form-tag" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Write your message"
                    className="contact__form-input"
                  ></textarea>
                </div>

                <button type="button" className="button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Embun</h1>

          <ul className="footer__list">
            {navSections.map((section) => (
              <li className="footer__item" key={`footer-${section}`}>
                <a href={`#${section}`} className="footer__link">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <ul className="footer__social">
            {["facebook", "twitter", "linkedin", "instagram"].map((network) => (
              <li className="footer__social-item" key={network}>
                <a href="#" target="_blank" rel="noreferrer" className="footer__social-link">
                  <i className={`bx bxl-${network} footer__social-icon`}></i>
                </a>
              </li>
            ))}
          </ul>

          <span className="footer__copy">&#169; 2025 Embun. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
