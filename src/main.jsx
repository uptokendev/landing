import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const appBaseUrl = "https://apps.memewar.zone";
const homeUrl = "https://memewar.zone";

const navItems = [
  { label: "Pre-grad", href: "#pre-grad" },
  { label: "Promotion", href: "#promotion" },
  { label: "Arena", href: "#arena" },
  { label: "Leagues", href: "#leagues" },
  { label: "Roadmap", href: "#roadmap" },
];

const lifecycle = [
  [
    "01",
    "Pre-grad",
    "Build attention before deployment with a live promotion page, follows, comments, shares, opt-ins, official links, and launch timing.",
  ],
  [
    "02",
    "Deploy",
    "Launch first on BNB through the MemeWarzone campaign system and bonding-curve phase.",
  ],
  [
    "03",
    "Graduate",
    "Reach the graduation threshold and move into the DEX stage with public momentum already built.",
  ],
  [
    "04",
    "Post-grad",
    "Keep fighting for visibility through battles, sponsorships, and monthly or quarterly seasonal leagues.",
  ],
];

const comparison = [
  {
    title: "Normal launchpads",
    label: "Token factory",
    items: [
      "Create a token",
      "Start trading",
      "Promote manually",
      "Attention depends on outside socials",
      "No built-in campaign page before launch",
      "Little post-grad exposure",
      "No recurring league system for graduated coins",
    ],
  },
  {
    title: "MemeWarzone",
    label: "Campaign engine",
    featured: true,
    items: [
      "Prepare a campaign before launch",
      "Build a live promotion page",
      "Collect follows, comments, shares, and opt-ins",
      "Launch first on BNB",
      "Graduate into DEX trading",
      "Enter post-grad battles",
      "Compete in monthly and quarterly seasonal leagues",
      "Use labeled sponsorships for extra visibility",
    ],
  },
];

const preGradFeatures = [
  ["Live promotion page", "A public campaign page before the token deploys."],
  ["Opt-ins and follows", "Users can follow the campaign and signal interest before deployment."],
  ["Comments and sharing", "The community can react, comment, share, and help spread the launch."],
  ["Launch readiness", "Creators prepare identity, socials, launch copy, timing, and community plans."],
  ["Free marketing loop", "Every follow, share, comment, and opt-in gives the project more visibility before launch."],
  ["Better discovery", "Traders can discover upcoming projects before the bonding curve opens."],
];

const promotionFeatures = [
  "Project story and visuals",
  "Official links",
  "Follow button",
  "Notification opt-in",
  "Comments",
  "Share actions",
  "Launch timing",
  "Recruiter and squad visibility",
  "Community activity",
  "Hot draft ranking",
];

const deploymentCards = [
  ["BNB first", "A fast, active, retail-friendly battlefield for bonding curves, campaign pages, UpVotes, graduation, rewards, battles, and leagues."],
  ["Solana next", "The next expansion target, bringing the MemeWarzone campaign loop to a fast meme-native chain."],
  ["Major meme ecosystems", "Base, Ethereum, Tron, Polygon, and TON are roadmap targets for broader retail and meme-market reach."],
];

const graduationCards = [
  ["Pre-grad", "Prepare the campaign, gather followers, comments, shares, and opt-ins."],
  ["Live launch", "Deploy on BNB and trade through the bonding curve."],
  ["Graduation", "Reach the graduation threshold and move into DEX trading."],
  ["Post-grad", "Keep fighting for attention through battles, sponsorships, and seasonal leagues."],
];

const arenaFeatures = [
  ["Battle visibility", "Graduated coins can fight for attention in public matchups."],
  ["Seasonal leagues", "Monthly and quarterly seasons give post-grad projects recurring visibility moments."],
  ["Sponsorship slots", "Projects can pay for extra labeled placement in visible discovery areas."],
  ["Community pressure", "Comments, shares, UpVotes, battles, and league performance create more reasons to talk."],
  ["Trader discovery", "Traders get a reason to look beyond brand-new launches."],
];

const battleFlow = [
  "A token enters or accepts a battle.",
  "The matchup appears publicly in the Arena.",
  "Communities push trading, UpVotes, comments, shares, holders, and social momentum.",
  "The scoreboard updates during the battle window.",
  "Winners gain visibility, ranking movement, and potential league impact.",
];

const battleMetrics = [
  "Trading activity",
  "Community activity",
  "UpVotes",
  "Holders and traders",
  "Comments and shares",
  "Momentum during the battle window",
];

const sponsorshipPlacements = [
  "Landing feature slots",
  "Arena sponsored row",
  "Pre-grad promotion page boosts",
  "Post-grad spotlight cards",
  "Battle or event sponsorship",
  "Newsletter or social recap placements, if enabled",
];

const poolFlow = [
  "A battle opens with published rules.",
  "Eligible users choose a side.",
  "The pool closes before settlement.",
  "The battle result is calculated from the published battle outcome.",
  "Eligible winning-side users receive their pool outcome through the official platform flow.",
];

const leagueTypes = [
  ["Monthly Leagues", "Fast recurring seasons for active graduated coins."],
  ["Quarterly Championships", "Bigger seasonal events for the strongest post-grad projects."],
  ["Category Battles", "Different ways to win: volume, momentum, community activity, UpVotes, growth, and battle results."],
  ["Public Winners", "Winners become content moments, not hidden dashboard numbers."],
];

const chainRoadmap = [
  ["Phase 1", "BNB", "First live battlefield for deployment, bonding curves, graduation, rewards, battles, and leagues."],
  ["Phase 2", "Solana", "Next expansion, targeted quickly after BNB."],
  ["Phase 3", "Base / Ethereum / Tron / Polygon / TON", "Expansion across major meme and retail ecosystems."],
  ["Phase 4", "Interchain + MemeWarzone Bridge", "Long-term connected battlefield across chains with profiles, rankings, rewards, and campaign history."],
];

const rewards = [
  ["Creator trade share", "Campaign creators can participate in platform fee flows where enabled by the active rules."],
  ["Recruiter attribution", "Recruiters can build visible contribution history instead of disappearing into random links."],
  ["Squad impact", "Squads can coordinate community pressure and compete together around campaigns and battles."],
  ["Season moments", "Airdrops, claims, league winners, and recaps can turn contribution into visible platform moments."],
];

const faq = [
  {
    question: "Is MemeWarzone just another meme coin launchpad?",
    answer:
      "No. MemeWarzone starts as a launchpad, but adds pre-grad promotion pages, community actions, battles, sponsorships, seasonal leagues, and post-grad exposure.",
  },
  {
    question: "What is pre-grad?",
    answer:
      "Pre-grad is the stage before deployment. Projects can build a live promotion page, collect follows, comments, shares, opt-ins, and prepare the launch before trading starts.",
  },
  {
    question: "Why is pre-grad good for creators?",
    answer:
      "It helps creators avoid launching cold. They can build attention, show official links, explain the meme, and gather early community signals.",
  },
  {
    question: "Why is pre-grad good for MemeWarzone?",
    answer:
      "It creates a visible pipeline of upcoming campaigns, gives the platform more content, and helps users discover projects before deployment.",
  },
  {
    question: "What happens after graduation?",
    answer:
      "The project moves into the DEX stage and can continue fighting for visibility through battles, sponsorships, and seasonal leagues.",
  },
  {
    question: "What are battles?",
    answer:
      "Battles are public matchups between meme coins where communities push activity and compete for visibility.",
  },
  {
    question: "What are seasonal leagues?",
    answer:
      "Monthly and quarterly post-grad competitions for graduated meme coins. They create recurring winner moments and reasons for communities to keep returning.",
  },
  {
    question: "What are Battle Pools?",
    answer:
      "Where enabled, Battle Pools let eligible users back a side in selected battles. Availability depends on rules, compliance, jurisdiction, and final platform configuration.",
  },
  {
    question: "Which chain launches first?",
    answer:
      "MemeWarzone launches on BNB first, then expands to Solana, followed by Base, Ethereum, Tron, Polygon, and TON.",
  },
  {
    question: "What is the long-term vision?",
    answer:
      "A multi-chain and eventually interchain meme coin battlefield connected by profiles, rankings, campaign history, rewards, and MemeWarzone's own bridge.",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon iconArrow">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon iconCheck">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, children, centered = false }) {
  return (
    <div className={`sectionHeading ${centered ? "centered" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function FeatureCard({ title, body, label }) {
  return (
    <article className="card featureCard">
      {label ? <span className="cardLabel">{label}</span> : null}
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function NumberedFlow({ items }) {
  return (
    <ol className="flowList">
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{item}</p>
        </li>
      ))}
    </ol>
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
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="navCta" href={appBaseUrl}>Launchpad</a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroCopy">
            <p className="eyebrow">Launchpad + Promotion Engine + Post-Grad Arena</p>
            <h1 id="hero-title">Launch better. Graduate louder. Keep fighting after the chart goes live.</h1>
            <p className="heroLead">
              MemeWarzone is a meme coin launchpad built for the full campaign lifecycle: prepare before launch,
              build a live promotion page, collect early attention, deploy on BNB, graduate into DEX trading,
              and keep earning visibility through battles, sponsorships, and seasonal leagues.
            </p>
            <p className="brandLine">
              Pump.fun and Four.Meme help you launch. MemeWarzone helps you prepare, promote, graduate, and keep getting attention after graduation.
            </p>
            <div className="heroActions">
              <a className="button buttonPrimary" href={appBaseUrl}>Enter Launchpad <ArrowIcon /></a>
              <a className="button" href="#how-it-works">See how it works</a>
            </div>
          </div>

          <aside className="heroPanel" aria-label="Why MemeWarzone is different">
            <p className="panelKicker">Why it is different</p>
            <h2>Pre-grad promotion. Post-grad exposure.</h2>
            <p>
              Most launchpads focus on the token creation moment. MemeWarzone gives projects a campaign before launch and a battlefield after graduation.
            </p>
            <div className="miniStats" aria-label="MemeWarzone lifecycle">
              <span>Prepare</span>
              <span>Deploy</span>
              <span>Graduate</span>
              <span>Battle</span>
            </div>
          </aside>
        </section>

        <section className="section sectionTight" id="how-it-works" aria-labelledby="lifecycle-title">
          <SectionHeading
            eyebrow="Full campaign lifecycle"
            title="Prepare, deploy, graduate, then keep fighting."
            centered
          >
            MemeWarzone is not just a token factory. It is a linear campaign journey that starts before deployment and continues after graduation.
          </SectionHeading>
          <div className="timelineRail" aria-hidden="true" />
          <div className="lifecycleGrid">
            {lifecycle.map(([number, title, body]) => (
              <article className="card lifecycleCard" key={title}>
                <span className="stepNumber">{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="why-different" aria-labelledby="comparison-title">
          <SectionHeading eyebrow="Why launch here?" title="Why launch here instead of another token factory?">
            Most meme launchpads help you create a token and start trading. After that, the creator has to handle promotion, community building, holder attention, raids, and post-launch visibility somewhere else. MemeWarzone builds those campaign tools into the launchpad.
          </SectionHeading>
          <div className="comparisonGrid">
            {comparison.map((card) => (
              <article className={`card comparisonCard ${card.featured ? "comparisonCardFeatured" : ""}`} key={card.title}>
                <span className="cardLabel">{card.label}</span>
                <h3>{card.title}</h3>
                <ul className="checkList">
                  {card.items.map((item) => (
                    <li key={item}><CheckIcon /><span>{item}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="featureBlock preGradBlock" id="pre-grad" aria-labelledby="pregrad-title">
          <div className="featureCopy">
            <p className="eyebrow">Pre-grad / Prepare Mode</p>
            <h2 id="pregrad-title">Pre-grad is where serious launches build attention before deployment.</h2>
            <p>
              Most meme coins launch first and try to organize later. MemeWarzone flips that. Before deployment, a project can create a live promotion page, tell its story, add official links, collect follows, receive comments, build share activity, gather opt-ins, and prepare its community before trading starts.
            </p>
            <div className="featureStrip">
              <span>Not a waiting room</span>
              <span>Early attention</span>
              <span>More eyes before launch</span>
            </div>
          </div>
          <div className="grid2">
            {preGradFeatures.map(([title, body]) => (
              <FeatureCard key={title} title={title} body={body} />
            ))}
          </div>
        </section>

        <section className="section" id="promotion" aria-labelledby="promotion-title">
          <SectionHeading eyebrow="Live promotion pages" title="Every serious launch gets a live promotion page before trading starts.">
            A MemeWarzone campaign can start building attention before deployment. The promotion page gives the project a public home where users can follow, comment, share, opt in for updates, check official links, and understand the launch before the bonding curve opens.
          </SectionHeading>
          <div className="splitPanel">
            <div className="promoMock card">
              <span className="cardLabel">Campaign page</span>
              <h3>Official source before launch</h3>
              <p>
                Creators get free early marketing. Users get a safer official source. MemeWarzone gets a better way to surface projects already gaining attention.
              </p>
              <a className="button buttonPrimary" href={`${appBaseUrl}/create`}>Start a campaign <ArrowIcon /></a>
            </div>
            <div className="pillGrid">
              {promotionFeatures.map((feature) => <span key={feature}>{feature}</span>)}
            </div>
          </div>
        </section>

        <section className="section" id="deploy" aria-labelledby="deploy-title">
          <SectionHeading eyebrow="Deployment" title="BNB first. Then every major meme chain.">
            MemeWarzone launches on BNB first because it gives the platform a fast, active, retail-friendly battlefield for the full launchpad system: bonding curves, campaign pages, UpVotes, graduation, rewards, and post-grad competition.
          </SectionHeading>
          <div className="cardGrid3">
            {deploymentCards.map(([title, body]) => <FeatureCard key={title} title={title} body={body} />)}
          </div>
        </section>

        <section className="section" id="graduation" aria-labelledby="graduation-title">
          <SectionHeading eyebrow="Graduation" title="Graduation is not the end. It is the start of the next battlefield.">
            When a campaign reaches the graduation threshold, it moves from the early bonding-curve phase into the DEX stage. That is where most launchpads stop. MemeWarzone keeps the story going with post-grad visibility, battles, sponsorship placements, seasonal leagues, and community competition.
          </SectionHeading>
          <div className="timelineCards">
            {graduationCards.map(([title, body], index) => (
              <article className="card timelineCard" key={title}>
                <span className="stepNumber">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="featureBlock postGradBlock" id="arena" aria-labelledby="arena-title">
          <div className="featureCopy">
            <p className="eyebrow">Post-grad Arena</p>
            <h2 id="arena-title">Post-grad coins do not disappear. They enter the Arena.</h2>
            <p>
              Graduated meme coins need more than liquidity. They need attention, competition, content, and reasons for communities to keep showing up. The Arena gives graduated projects ongoing visibility through battles, leaderboards, sponsorship slots, and seasonal leagues.
            </p>
          </div>
          <div className="grid2">
            {arenaFeatures.map(([title, body]) => <FeatureCard key={title} title={title} body={body} />)}
          </div>
        </section>

        <section className="section" id="battles" aria-labelledby="battles-title">
          <SectionHeading eyebrow="Battles" title="Battles turn attention into a public contest.">
            A battle is a public matchup between meme coins. Instead of every project shouting into the void, battles give communities a clear opponent, a scoreboard, and a reason to push harder.
          </SectionHeading>
          <div className="splitPanel splitPanelReverse">
            <NumberedFlow items={battleFlow} />
            <article className="card calloutCard">
              <span className="cardLabel">Built for content</span>
              <h3>“We are fighting this project today — push us up the board.”</h3>
              <p>
                Battles give communities a simple story to rally around. Scoreboards can use signals like trading activity, community activity, UpVotes, holders, comments, shares, and momentum over the battle window.
              </p>
              <div className="pillGrid compact">
                {battleMetrics.map((metric) => <span key={metric}>{metric}</span>)}
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="sponsorship" aria-labelledby="sponsorship-title">
          <SectionHeading eyebrow="Labeled visibility" title="Sponsorship gives projects extra visibility without hiding it.">
            Projects that want more attention can sponsor visible placement inside MemeWarzone. Sponsored projects should be clearly labeled, so users know the difference between paid visibility and organic battle or league performance.
          </SectionHeading>
          <div className="splitPanel">
            <article className="card warningPanel">
              <span className="cardLabel">Transparent monetization</span>
              <h3>Paid visibility should be labeled, not hidden.</h3>
              <p>
                For projects, sponsorship means more eyes during important launch or post-grad moments. For users, it means clear labeling instead of hidden manipulation. For the platform, it creates a direct growth layer that can support content, rewards, and operations.
              </p>
            </article>
            <div className="pillGrid">
              {sponsorshipPlacements.map((placement) => <span key={placement}>{placement}</span>)}
            </div>
          </div>
        </section>

        <section className="section" id="pools" aria-labelledby="pools-title">
          <SectionHeading eyebrow="Planned / gated feature" title="Battle Pools: support the side you think will win.">
            Where enabled, Battle Pools let users back a side in selected battles. Users choose which project they think will win based on public battle rules, then the result is settled from the published battle outcome.
          </SectionHeading>
          <div className="splitPanel splitPanelReverse">
            <NumberedFlow items={poolFlow} />
            <article className="card warningPanel warningPanelStrong">
              <span className="cardLabel">Compliance note</span>
              <h3>Not universally available.</h3>
              <p>
                Battle Pools are planned as a regulated, gated feature. Availability may depend on jurisdiction, compliance rules, age checks, wallet eligibility, and final platform configuration.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="leagues" aria-labelledby="leagues-title">
          <SectionHeading eyebrow="Seasonal leagues" title="Monthly and quarterly leagues keep graduated coins in the spotlight.">
            Most meme coins lose attention after the first launch window. MemeWarzone gives graduated projects recurring competitive seasons so communities have a reason to return, push, and create content.
          </SectionHeading>
          <div className="cardGrid4">
            {leagueTypes.map(([title, body]) => <FeatureCard key={title} title={title} body={body} />)}
          </div>
        </section>

        <section className="section" id="roadmap" aria-labelledby="roadmap-title">
          <SectionHeading eyebrow="Multi-chain expansion" title="One meme battlefield across every major chain.">
            MemeWarzone starts with BNB, then expands toward the biggest meme and retail ecosystems. Future chains are roadmap targets, not live-chain claims.
          </SectionHeading>
          <div className="roadmapGrid">
            {chainRoadmap.map(([phase, title, body]) => (
              <article className="card roadmapCard" key={phase}>
                <span className="cardLabel">{phase}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="rewards" aria-labelledby="rewards-title">
          <SectionHeading eyebrow="Rewards and fee flywheel" title="Contribution should create visible platform moments.">
            MemeWarzone is designed to make launches, battles, recruiter activity, squad pressure, airdrops, claims, and seasonal winners visible. Rewards depend on active campaign rules, eligibility, and final platform configuration.
          </SectionHeading>
          <div className="cardGrid4">
            {rewards.map(([title, body]) => <FeatureCard key={title} title={title} body={body} />)}
          </div>
        </section>

        <section className="section faqSection" id="faq" aria-labelledby="faq-title">
          <SectionHeading eyebrow="FAQ" title="Common questions, answered." centered />
          <div className="faqGrid">
            {faq.map((item) => (
              <article className="card faqCard" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="finalCta" aria-labelledby="final-title">
          <p className="eyebrow">Ready for deployment</p>
          <h2 id="final-title">Build attention before launch. Graduate into the market. Keep fighting after graduation.</h2>
          <p>
            MemeWarzone is the meme coin launchpad that helps projects prepare, promote, graduate, and stay visible after the first chart candle.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href={appBaseUrl}>Enter Launchpad <ArrowIcon /></a>
            <a className="button" href={`${appBaseUrl}/create`}>Start a campaign</a>
          </div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
