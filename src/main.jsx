import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const appBaseUrl = "https://app.memewar.zone";
const homeUrl = "https://memewar.zone";

const navItems = [
  { label: "Pre-bonded", href: "#pre-bonded" },
  { label: "Promotion", href: "#promotion" },
  { label: "Battles", href: "#battles" },
  { label: "Leagues", href: "#leagues" },
  { label: "Roadmap", href: "#roadmap" },
];

const lifecycle = [
  [
    "01",
    "Pre-bonded",
    "Create a live promotion page, collect follows, comments, shares, opt-ins, and build visible community heat before the token bonds.",
  ],
  [
    "02",
    "Bond on BNB",
    "Launch first on BNB through the MemeWarzone bonding curve and bring the early campaign heat into the launch moment.",
  ],
  [
    "03",
    "Graduate",
    "Reach the bonding threshold and move into the wider market with public signals already attached to the campaign.",
  ],
  [
    "04",
    "Post-bonded",
    "Keep fighting for attention through battles, sponsored prize pools, tournaments, squads, and seasonal points leagues.",
  ],
];

const comparison = [
  {
    title: "Normal launchpads",
    label: "Token factory",
    items: [
      "Create a token",
      "Start trading",
      "Promote manually outside the platform",
      "Attention depends on socials and raids",
      "No live pre-bonded heatmap",
      "Limited post-bonded competition",
      "No recurring league system for platform activity",
    ],
  },
  {
    title: "MemeWarzone",
    label: "Campaign battlefield",
    featured: true,
    items: [
      "Build heat before bonding",
      "Launch with a live promotion page",
      "Track follows, comments, shares, opt-ins, and squad activity",
      "Bond first on BNB",
      "Keep competing after bonding",
      "Enter money-backed project battles",
      "Compete in monthly and quarterly points leagues",
      "Let sponsors fund prize pools, not hidden placement",
    ],
  },
];

const preBondedFeatures = [
  ["Live promotion page", "A public campaign page before the token bonds."],
  ["Follow and opt-in signals", "Users can watch the project and ask for updates before bonding."],
  ["Comments and shares", "The community can talk, react, and spread the launch before the curve becomes the only signal."],
  ["Official source", "Creators can show links, story, visuals, timing, and campaign details in one place."],
  ["Squad and recruiter push", "Growth from organized community action becomes part of the visible launch picture."],
  ["Launch readiness", "Traders can see which campaigns are building attention before launch day."],
];

const heatmapFeatures = [
  ["Follow heat", "Shows how many users are watching the project."],
  ["Comment heat", "Shows whether the community is actually talking."],
  ["Share heat", "Shows how much the launch is spreading."],
  ["Opt-in heat", "Shows how many users want updates before bonding."],
  ["Squad and recruiter heat", "Shows whether growth is coming from organized community push."],
  ["Launch readiness heat", "Helps users see which projects are building real pre-bonded momentum."],
];

const promotionFeatures = [
  "Project story and visuals",
  "Official links",
  "Follow button",
  "Notification opt-in",
  "Comments",
  "Share actions",
  "Live heatmap",
  "Launch timing",
  "Recruiter and squad heat",
  "Pre-bonded momentum",
];

const deploymentCards = [
  ["BNB first", "The first live battlefield for promotion pages, bonding curves, UpVotes, graduation, rewards, battles, and leagues."],
  ["Solana next", "A planned expansion target for bringing the MemeWarzone campaign loop to a fast meme-native ecosystem."],
  ["Major meme ecosystems", "Base, Ethereum, Tron, Polygon, and TON are roadmap targets for broader retail and meme-market reach."],
];

const graduationCards = [
  ["Pre-bonded heat", "Prepare the campaign, gather followers, comments, shares, opt-ins, and visible community signals."],
  ["Live bonding", "Launch on BNB and build through the bonding curve."],
  ["Graduation", "Reach the bonding threshold and move into the DEX stage."],
  ["Post-bonded competition", "Keep fighting through battles, sponsored prize pools, tournaments, squads, and leagues."],
];

const postBondedFeatures = [
  ["Battle visibility", "Post-bonded coins can fight for attention in public rivalries."],
  ["Sponsored prize pools", "Sponsors back leagues, tournaments, or battles with clearly labeled funding."],
  ["Seasonal points leagues", "Monthly and quarterly rankings reward active platform participation."],
  ["Squad pressure", "Communities, recruiters, and squads get a reason to keep pushing after bonding."],
  ["Trader discovery", "Traders get a reason to look beyond brand-new launches."],
];

const battleFlow = [
  "A project challenges another project.",
  "The challenger puts money into the battle.",
  "The opponent accepts and matches the battle entry.",
  "The battle runs for 24 hours, 3 days, or 7 days.",
  "Communities push activity during the battle window.",
  "The winner takes the prize.",
];

const battleDurations = [
  ["24-hour battles", "Fast, high-energy fights for quick attention."],
  ["3-day battles", "A stronger campaign window with time for community push."],
  ["7-day battles", "A full-week war for bigger rivalries, stronger narratives, and larger prize pools."],
];

const battlePoolFlow = [
  "A selected battle opens with published pool rules.",
  "Eligible users choose the side they believe will win.",
  "The pool closes before settlement.",
  "The battle result is calculated from the published outcome rules.",
  "Eligible winning-side users receive the official platform outcome where enabled.",
];

const sponsorCards = [
  ["Sponsor a League", "Fund a monthly or quarterly points season. 70% of the sponsorship goes into the league prize pool."],
  ["Sponsor a Tournament", "Back a structured event with public rules, brackets, finalists, and winners. 70% goes into the tournament prize pool."],
  ["Sponsor a Battle", "Fuel a specific battle between meme coins. 70% goes into the battle prize pool."],
  ["Sponsor visibility", "Sponsors are clearly shown as the backer of the competition, not hidden as organic ranking."],
];

const sponsorshipTypes = [
  "League sponsorships",
  "Tournament sponsorships",
  "Battle sponsorships",
  "Named prize pools",
  "Sponsored winner recaps",
  "Clearly labeled sponsor branding",
];

const leagueTypes = [
  ["Monthly Leagues", "Fast recurring points seasons that keep active projects and communities visible."],
  ["Quarterly Championships", "Bigger seasonal competitions for the strongest point gatherers across the platform."],
  ["Seasonal rankings", "Published rules, public leaderboards, monthly winners, and quarterly champions."],
  ["Platform-wide activity", "Projects, traders, recruiters, and squads can all matter inside the active rules."],
];

const pointsExamples = [
  "Campaign activity",
  "Trading activity",
  "Battle participation",
  "Battle wins",
  "Promotion page heat",
  "Comments and shares",
  "Recruiter growth",
  "Squad contribution",
  "Tournament activity",
  "League-specific rules",
];

const rewards = [
  [
    "Creator fee share",
    "Creators can earn from the fee flow connected to their own campaign where enabled by the active rules.",
  ],
  [
    "Recruiter Program",
    "Recruiters can earn a big chunk of the routed fees from creators and traders who joined through them and became part of their squad.",
  ],
  [
    "Squad Pool",
    "Eligible squad members can earn back part of the fee flow through the Squad Pool based on contribution and activity.",
  ],
  [
    "League and tournament prizes",
    "Active projects, communities, traders, recruiters, and squads can compete for points, prizes, status, and public winner moments.",
  ],
];

const chainRoadmap = [
  ["Phase 1", "BNB", "First live battlefield for deployment, bonding curves, graduation, rewards, battles, and leagues."],
  ["Phase 2", "Solana", "Next expansion target after the BNB-first launch."],
  ["Phase 3", "Base / Ethereum / Tron / Polygon / TON", "Expansion across major meme and retail ecosystems."],
  ["Phase 4", "Interchain + MemeWarzone Bridge", "Long-term connected battlefield across chains with profiles, rankings, rewards, and campaign history."],
];

const faq = [
  {
    question: "Is MemeWarzone just another meme coin launchpad?",
    answer:
      "No. MemeWarzone is a launchpad, promotion engine, and battle arena. It helps meme coins build heat before bonding, then keep fighting for attention after bonding.",
  },
  {
    question: "What does pre-bonded mean?",
    answer:
      "Pre-bonded is the stage before the token bonds or graduates into the DEX stage. Projects can build a promotion page, collect follows, comments, shares, opt-ins, and community heat before the bonding curve becomes the main signal.",
  },
  {
    question: "What does post-bonded mean?",
    answer:
      "Post-bonded is the stage after the token has bonded and moved into the wider market. Projects can keep competing through battles, sponsored prize pools, tournaments, squads, and monthly or quarterly points leagues.",
  },
  {
    question: "What does the heatmap show?",
    answer:
      "The heatmap makes early attention visible before bonding. It can show follow heat, comment heat, share heat, opt-in heat, squad heat, recruiter heat, and launch readiness heat.",
  },
  {
    question: "How do battles work?",
    answer:
      "A project challenges another project and puts money into the battle. If the opponent accepts, they also put money in. The battle runs for 24 hours, 3 days, or 7 days, and the winner takes the prize under published rules.",
  },
  {
    question: "What are Battle Pools?",
    answer:
      "Battle Pools are separate from project-vs-project battle entries. In selected battles, eligible users may be able to back the side they believe will win. Availability depends on jurisdiction, compliance, age checks, wallet eligibility, and final platform configuration.",
  },
  {
    question: "How does sponsorship work?",
    answer:
      "Sponsors fund the fight, not hidden placement. A sponsor backs a league, tournament, or battle, and 70% of the sponsor payment goes directly into that competition's prize pool.",
  },
  {
    question: "How do recruiters earn?",
    answer:
      "Recruiters earn from the creators and traders they bring into their squad. When linked users are active, a major part of the routed fee share can go back to the recruiter system.",
  },
  {
    question: "What does the squad earn?",
    answer:
      "Eligible squad members can earn from the Squad Pool, which routes part of the fee flow back to squads based on contribution and eligibility.",
  },
  {
    question: "How do leagues work?",
    answer:
      "Monthly and quarterly leagues are seasonal points competitions. Points can be gathered by platform activity such as campaign heat, trading activity, battle participation, recruiter growth, squad contribution, and league-specific rules.",
  },
  {
    question: "Which chain launches first?",
    answer:
      "MemeWarzone launches on BNB first, then expands toward Solana, followed by Base, Ethereum, Tron, Polygon, and TON as roadmap targets.",
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
            <p className="eyebrow">Launchpad + Promotion Engine + Battle Arena</p>
            <h1 id="hero-title">Build heat before bonding. Keep fighting after bonding.</h1>
            <p className="heroLead">
              MemeWarzone helps meme coins prepare before launch, build live community heat, bond on BNB,
              and keep earning attention through battles, leagues, tournaments, squads, and sponsored prize pools.
            </p>
            <p className="brandLine">
              Pump.fun and Four.Meme help you launch. MemeWarzone helps you build heat, bond stronger, and stay visible after bonding.
            </p>
            <div className="heroActions">
              <a className="button buttonPrimary" href={appBaseUrl}>Enter Launchpad <ArrowIcon /></a>
              <a className="button" href="#how-it-works">See how it works</a>
            </div>
          </div>

          <aside className="heroPanel" aria-label="Why MemeWarzone is different">
            <p className="panelKicker">North star</p>
            <h2>Meme coins need more than a token button.</h2>
            <p>
              MemeWarzone helps meme coins build heat before bonding, then keep fighting for attention after bonding.
            </p>
            <div className="miniStats" aria-label="MemeWarzone lifecycle">
              <span>Promote</span>
              <span>Bond</span>
              <span>Graduate</span>
              <span>Battle</span>
            </div>
          </aside>
        </section>

        <section className="section sectionTight" id="how-it-works" aria-labelledby="lifecycle-title">
          <SectionHeading
            eyebrow="Full campaign lifecycle"
            title="Prepare, bond, graduate, then keep fighting."
            centered
          >
            MemeWarzone is a meme coin launchpad where projects can build a live promotion page, collect follows, comments, shares, opt-ins, and heat before launch, bond first on BNB, then keep competing through battles, squads, sponsored prize pools, tournaments, and monthly or quarterly points leagues.
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
            Most meme launchpads help you create a token and start trading. After that, creators still need promotion, community growth, activity loops, battle content, and recurring reasons for attention. MemeWarzone builds that campaign layer into the launchpad.
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

        <section className="featureBlock preBondedBlock" id="pre-bonded" aria-labelledby="prebonded-title">
          <div className="featureCopy">
            <p className="eyebrow">Pre-bonded / Prepare Mode</p>
            <h2 id="prebonded-title">Pre-bonded is where serious launches build heat before bonding.</h2>
            <p>
              Most meme coins launch first and try to organize later. MemeWarzone flips that. Before bonding, a project can create a live promotion page, tell its story, add official links, collect follows, receive comments, build share activity, gather opt-ins, and prepare its community before trading starts.
            </p>
            <div className="featureStrip">
              <span>Pre-bonded heat</span>
              <span>Early attention</span>
              <span>Launch readiness</span>
            </div>
          </div>
          <div className="grid2">
            {preBondedFeatures.map(([title, body]) => (
              <FeatureCard key={title} title={title} body={body} />
            ))}
          </div>
        </section>

        <section className="section" id="promotion" aria-labelledby="promotion-title">
          <SectionHeading eyebrow="Live promotion pages" title="The promotion page shows where the heat is building.">
            Every pre-bonded campaign gets a live promotion page. Users can follow, opt in, comment, share, and interact before the token bonds. The live heatmap turns that activity into a clear signal: which campaigns are getting attention before launch.
          </SectionHeading>
          <div className="splitPanel">
            <div className="promoMock card">
              <span className="cardLabel">Campaign page</span>
              <h3>Official source before bonding</h3>
              <p>
                Creators get free early marketing. Users get a clearer official source. The heatmap makes early attention visible before the bonding curve becomes the only signal.
              </p>
              <a className="button buttonPrimary" href={`${appBaseUrl}/create`}>Start a campaign <ArrowIcon /></a>
            </div>
            <div className="pillGrid">
              {promotionFeatures.map((feature) => <span key={feature}>{feature}</span>)}
            </div>
          </div>
          <div className="heatmapGrid">
            {heatmapFeatures.map(([title, body]) => <FeatureCard key={title} title={title} body={body} />)}
          </div>
        </section>

        <section className="section" id="deploy" aria-labelledby="deploy-title">
          <SectionHeading eyebrow="Deployment" title="BNB first. Then every major meme chain.">
            MemeWarzone launches on BNB first because it gives the platform a fast, active, retail-friendly battlefield for the full launchpad system: bonding curves, promotion pages, UpVotes, graduation, rewards, battles, and leagues.
          </SectionHeading>
          <div className="cardGrid3">
            {deploymentCards.map(([title, body]) => <FeatureCard key={title} title={title} body={body} />)}
          </div>
        </section>

        <section className="section" id="graduation" aria-labelledby="graduation-title">
          <SectionHeading eyebrow="Bonding and graduation" title="Graduation is not the end. It is the start of the next battlefield.">
            When a campaign reaches the bonding threshold, it moves from the early bonding curve into the wider market. That is where most launchpads stop. MemeWarzone keeps the story going with post-bonded competition.
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

        <section className="featureBlock postBondedBlock" id="post-bonded" aria-labelledby="postbonded-title">
          <div className="featureCopy">
            <p className="eyebrow">Post-bonded competition</p>
            <h2 id="postbonded-title">Post-bonded coins do not disappear. They keep fighting.</h2>
            <p>
              Meme coins need more than liquidity. They need attention, competition, content, and reasons for communities to keep showing up. MemeWarzone gives projects ongoing competition through battles, sponsored prize pools, tournaments, squads, and leagues.
            </p>
          </div>
          <div className="grid2">
            {postBondedFeatures.map(([title, body]) => <FeatureCard key={title} title={title} body={body} />)}
          </div>
        </section>

        <section className="section" id="battles" aria-labelledby="battles-title">
          <SectionHeading eyebrow="Battles" title="Battles put real stakes behind meme coin rivalries.">
            A battle starts when one project puts money into a challenge. If the opponent accepts, they also put money in. The battle runs for a fixed window - 24 hours, 3 days, or 7 days - and the winner takes the prize.
          </SectionHeading>
          <div className="splitPanel splitPanelReverse">
            <NumberedFlow items={battleFlow} />
            <article className="card calloutCard">
              <span className="cardLabel">Project vs project</span>
              <h3>Challenge. Match. Fight. Win.</h3>
              <p>
                Battles turn meme coin rivalry into a public contest with entry money, opponent acceptance, a fixed time window, community pressure, and a winner-takes-prize outcome.
              </p>
              <p className="smallNote">
                Battle rules, scoring, eligibility, and settlement must be published before the battle starts.
              </p>
            </article>
          </div>
          <div className="durationGrid">
            {battleDurations.map(([title, body]) => <FeatureCard key={title} title={title} body={body} />)}
          </div>
        </section>

        <section className="section" id="battle-pools" aria-labelledby="battle-pools-title">
          <SectionHeading eyebrow="Battle Pools" title="Battle Pools let users back the side they believe in.">
            In selected battles, eligible users may be able to put money behind the side they think will win. Battle Pools are separate from the project-vs-project battle entry. They are user-side pools and must follow platform rules, eligibility checks, and jurisdiction limits.
          </SectionHeading>
          <div className="splitPanel">
            <NumberedFlow items={battlePoolFlow} />
            <article className="card warningPanel warningPanelStrong">
              <span className="cardLabel">Gated feature</span>
              <h3>Availability depends on final rules.</h3>
              <p>
                Battle Pools are a gated feature. Availability depends on jurisdiction, compliance rules, age checks, wallet eligibility, and final platform configuration.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="sponsorship" aria-labelledby="sponsorship-title">
          <SectionHeading eyebrow="Sponsorship" title="Sponsors fund the fight, not hidden placement.">
            MemeWarzone sponsorship is not buying a fake ranking or hidden placement. A sponsor backs a league, tournament, or battle, and 70% of the sponsor payment goes directly into that prize pool.
          </SectionHeading>
          <div className="sponsorFlow">
            {sponsorCards.map(([title, body]) => <FeatureCard key={title} title={title} body={body} />)}
          </div>
          <div className="pillGrid compact">
            {sponsorshipTypes.map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section className="section" id="leagues" aria-labelledby="leagues-title">
          <SectionHeading eyebrow="Seasonal points leagues" title="Monthly and quarterly leagues reward active platform participation.">
            MemeWarzone leagues are seasonal points competitions. Projects, traders, recruiters, and squads gather points by being active on the platform. Monthly leagues create frequent winner moments, while quarterly leagues create bigger seasonal championships.
          </SectionHeading>
          <div className="cardGrid4">
            {leagueTypes.map(([title, body]) => <FeatureCard key={title} title={title} body={body} />)}
          </div>
          <article className="card pointsPanel">
            <span className="cardLabel">Points can come from</span>
            <div className="pillGrid compact">
              {pointsExamples.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        </section>

        <section className="section" id="rewards" aria-labelledby="rewards-title">
          <SectionHeading eyebrow="Rewards and fee flywheel" title="Recruiters, squads, creators, and active communities should have a reason to push.">
            Rewards depend on active campaign rules, eligibility, anti-abuse checks, and final platform configuration. The goal is simple: make contribution visible and route value back into the warzone.
          </SectionHeading>
          <div className="cardGrid4">
            {rewards.map(([title, body]) => <FeatureCard key={title} title={title} body={body} />)}
          </div>
        </section>

        <section className="featureBlock recruiterBlock" id="recruiters" aria-labelledby="recruiters-title">
          <div className="featureCopy">
            <p className="eyebrow">Recruiters and squads</p>
            <h2 id="recruiters-title">Growth should belong to the people who bring the army.</h2>
            <p>
              Recruiters are not just sharing links. When creators and traders join through your recruiter link and become part of your squad, you can earn a major share of the routed platform fees connected to their activity.
            </p>
          </div>
          <div className="grid2">
            <FeatureCard
              title="Recruiter Program"
              body="Bring creators and traders into MemeWarzone, grow your squad, and earn a big chunk of the routed fees from the activity your squad generates."
            />
            <FeatureCard
              title="Squad Pool"
              body="Your squad can earn back part of the fee flow through the Squad Pool. It is not an equal split: contribution, activity, eligibility, and anti-abuse checks matter."
            />
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
          <h2 id="final-title">Build heat before bonding. Keep fighting after bonding.</h2>
          <p>
            MemeWarzone helps meme coins prepare before launch, build live community heat, bond on BNB, and keep earning attention through battles, leagues, tournaments, squads, and sponsored prize pools.
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
