import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const appBaseUrl = "https://apps.memewar.zone";
const homeUrl = "https://memewar.zone";

const navItems = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why different", href: "#why-different" },
  { label: "Arena", href: "#arena" },
  { label: "Rewards", href: "#rewards" },
];

const comparisonCards = [
  {
    title: "Normal launchpads",
    label: "Create and trade",
    items: [
      "Create token",
      "Trade token",
      "Promote manually",
      "Hard to track who helped",
      "Attention disappears fast",
    ],
  },
  {
    title: "MemeWarzone",
    label: "Launch and build",
    featured: true,
    items: [
      "Create or prepare token",
      "Recruit supporters",
      "Run missions",
      "Enter battles",
      "Build squads",
      "Track reward paths",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Create or prepare a coin",
    body: "Launch immediately or build the campaign first with a clear page, story, links, goals, and launch plan.",
  },
  {
    number: "02",
    title: "Bring in the community",
    body: "Recruiters, squads, and social missions help push the token before and after launch.",
  },
  {
    number: "03",
    title: "Compete for attention",
    body: "Tokens enter battles, leaderboards, events, and arena sections where momentum is visible.",
  },
  {
    number: "04",
    title: "Reward the push",
    body: "Recruiters, squads, airdrop winners, league winners, and creators can be tracked through reward systems.",
  },
];

const roles = [
  {
    icon: "👥",
    title: "Creators",
    body: "Launch with more than a chart. Give your coin a campaign page, mission, socials, recruiter links, and a path into the arena.",
  },
  {
    icon: "🎯",
    title: "Traders",
    body: "Find coins with visible momentum. See which tokens are active, battling, recruiting, and gaining attention.",
  },
  {
    icon: "📡",
    title: "Recruiters",
    body: "Share campaigns, bring in users, and build visible performance instead of disappearing into random referral links.",
  },
  {
    icon: "🛡️",
    title: "Squads",
    body: "Coordinate as a group, push campaigns together, and compete as part of the token's growth machine.",
  },
];

const arenaFeatures = [
  "Live token battles",
  "Open-for-battle coins",
  "Featured UpVotes",
  "Events and leagues",
  "Arena visibility",
  "Community momentum",
];

const rewardTypes = [
  "Recruiter rewards",
  "Squad rewards",
  "Airdrop rewards",
  "League rewards",
  "Creator fee rewards",
  "Community missions",
];

const faq = [
  {
    question: "Is MemeWarzone a launchpad?",
    answer:
      "Yes. You can launch meme coins, but MemeWarzone adds campaign tools, battles, squads, missions, and rewards around the launch.",
  },
  {
    question: "How is it different from pump.fun or Four.Meme?",
    answer:
      "Those platforms focus mostly on token creation and trading. MemeWarzone adds the campaign layer: preparation, recruiters, squads, missions, battles, arena progression, and reward paths.",
  },
  {
    question: "Do I need to create a coin?",
    answer:
      "No. You can also trade, recruit, join squads, complete missions, follow campaigns, or compete through the arena.",
  },
  {
    question: "What happens after a token launches?",
    answer:
      "It can build visibility through the Arena, battles, UpVotes, leagues, events, social missions, and community activity.",
  },
  {
    question: "Are rewards guaranteed?",
    answer:
      "No. Rewards depend on the active campaign, rules, eligibility, and platform systems. MemeWarzone is designed to make contribution and reward paths easier to track.",
  },
];

function IconCheck() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="checkIcon">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrowIcon">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function App() {
  return (
    <div className="siteShell">
      <header className="navBar" aria-label="MemeWarzone navigation">
        <a className="brand" href={homeUrl} aria-label="MemeWarzone home">
          <img src="/assets/hero/logo.png" alt="" />
          <span>MemeWarzone</span>
        </a>

        <nav className="navLinks" aria-label="Page sections">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="navCta" href={appBaseUrl}>
          Launchpad
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroCopy">
            <p className="eyebrow">Meme coin launchpad + battle arena</p>
            <h1 id="hero-title">Launch meme coins with a built-in army.</h1>
            <p className="heroLead">
              MemeWarzone is a meme coin launchpad where every token can prepare its launch,
              recruit supporters, enter battles, climb the arena, and reward the people who help it grow.
            </p>
            <p className="brandLine">Launch the coin. Build the army. Fight for attention.</p>
            <div className="heroActions">
              <a className="button buttonPrimary" href={appBaseUrl}>
                Enter Launchpad <ArrowIcon />
              </a>
              <a className="button" href="#how-it-works">
                How it works
              </a>
            </div>
          </div>

          <aside className="heroPanel" aria-label="What makes MemeWarzone different">
            <p className="panelKicker">What makes it different?</p>
            <h2>Launchpad + Missions + Battles + Squads + Rewards</h2>
            <p>
              Most launchpads help you create a token. MemeWarzone helps you build the campaign around it.
            </p>
            <div className="miniStats" aria-label="MemeWarzone product layers">
              <span>Launch</span>
              <span>Recruit</span>
              <span>Battle</span>
              <span>Reward</span>
            </div>
          </aside>
        </section>

        <section className="section sectionTight" id="why-different" aria-labelledby="different-title">
          <div className="sectionHeading centered">
            <p className="eyebrow">Why it is different</p>
            <h2 id="different-title">Used to pump.fun or Four.Meme?</h2>
            <p>
              Most launchpads help you create a token. After that, promotion, raids, community growth,
              and momentum happen somewhere else. MemeWarzone adds the campaign layer inside the platform.
            </p>
          </div>

          <div className="comparisonGrid">
            {comparisonCards.map((card) => (
              <article className={`comparisonCard ${card.featured ? "comparisonCardFeatured" : ""}`} key={card.title}>
                <div>
                  <span className="cardLabel">{card.label}</span>
                  <h3>{card.title}</h3>
                </div>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>
                      <IconCheck />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="how-it-works" aria-labelledby="works-title">
          <div className="sectionHeading">
            <p className="eyebrow">How it works</p>
            <h2 id="works-title">How MemeWarzone works</h2>
            <p>
              A meme coin does not only need a chart. It needs a campaign, supporters, visibility,
              and a reason for people to keep pushing.
            </p>
          </div>

          <div className="stepGrid">
            {steps.map((step) => (
              <article className="panel stepCard" key={step.title}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="roles-title">
          <div className="sectionHeading centered">
            <p className="eyebrow">Who it is for</p>
            <h2 id="roles-title">Built for everyone around a meme coin.</h2>
          </div>

          <div className="roleGrid">
            {roles.map((role) => (
              <article className="panel roleCard" key={role.title}>
                <div className="roleIcon" aria-hidden="true">{role.icon}</div>
                <h3>{role.title}</h3>
                <p>{role.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="featureBlock" aria-labelledby="prepare-title">
          <div className="featureCopy">
            <p className="eyebrow">Prepare Mode</p>
            <h2 id="prepare-title">Prepare before you launch.</h2>
            <p>
              Most meme coins launch first and organize later. MemeWarzone lets creators prepare the campaign
              before the token goes live: story, socials, missions, recruiter links, squad push, and launch timing.
            </p>
          </div>
          <a className="button buttonPrimary" href={`${appBaseUrl}/create`}>
            Start a Campaign <ArrowIcon />
          </a>
        </section>

        <section className="section" id="arena" aria-labelledby="arena-title">
          <div className="arenaBlock">
            <div className="arenaCopy">
              <p className="eyebrow">Arena</p>
              <h2 id="arena-title">After launch, tokens fight for visibility.</h2>
              <p>
                Tokens can enter the Arena, appear in battle lanes, compete on activity, collect UpVotes,
                join events, and climb leaderboards. The goal is simple: make momentum visible.
              </p>
              <a className="button" href={`${appBaseUrl}/arena`}>
                Explore Arena
              </a>
            </div>
            <div className="featureStrip" aria-label="Arena features">
              {arenaFeatures.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="rewards" aria-labelledby="rewards-title">
          <div className="sectionHeading">
            <p className="eyebrow">Rewards</p>
            <h2 id="rewards-title">When people help, the platform can track it.</h2>
            <p>
              Recruiters, squads, airdrop winners, league winners, active contributors, and creators can all have
              reward paths connected to campaign activity.
            </p>
          </div>

          <div className="rewardGrid">
            {rewardTypes.map((reward) => (
              <div className="rewardPill" key={reward}>
                <IconCheck />
                <span>{reward}</span>
              </div>
            ))}
          </div>
          <p className="disclaimer">
            Rewards are not guaranteed. Eligibility depends on each campaign, active rules, and platform systems.
          </p>
        </section>

        <section className="section" aria-labelledby="faq-title">
          <div className="sectionHeading centered">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title">Questions before you enter?</h2>
          </div>

          <div className="faqGrid">
            {faq.map((item) => (
              <article className="faqItem" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="finalCta" aria-labelledby="final-title">
          <p className="eyebrow">Enter the Warzone</p>
          <h2 id="final-title">Ready to launch, trade, or join the fight?</h2>
          <p>
            Start from the launchpad, explore active campaigns, or prepare your own coin for battle.
          </p>
          <div className="finalActions">
            <a className="button buttonPrimary" href={appBaseUrl}>
              Enter Launchpad <ArrowIcon />
            </a>
            <a className="button" href={`${appBaseUrl}/create`}>
              Create a Coin
            </a>
            <a className="button" href={`${appBaseUrl}/arena`}>
              Explore Arena
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
