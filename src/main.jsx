import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const appUrl = "https://app.memewar.zone";

const chapters = [
  ["01", "Launchpad", "entry"],
  ["02", "Campaign Lifecycle", "lifecycle"],
  ["03", "Launch Engine", "launch-engine"],
  ["04", "Battle Arena", "battle-arena"],
  ["05", "War Trade Room", "war-room"],
  ["06", "Fee & Prize Routing", "war-economy"],
  ["07", "Recruiters / Squads", "squads"],
  ["08", "Major Leagues", "seasonal-war"],
  ["09", "Enter MemeWarzone", "deploy"],
];

const bootLines = [
  "INITIALIZING MEMEWARZONE",
  "SYNCING CHAINS",
  "LOADING BATTLEFIELD",
  "REWARD ROUTER ONLINE",
  "WAR ROOM ONLINE",
];

const statusRail = [
  "PREPARE MODE ACTIVE",
  "ARENA QUEUE OPEN",
  "REWARD ROUTER ONLINE",
  "WAR ROOM LIVE",
];

const tickerItems = [
  "BUY PRESSURE +12%",
  "UPVOTES SPIKING",
  "LIQUIDITY LOCKED",
  "BATTLE TIMER 04:21",
  "RECRUITER ROUTE ARMED",
  "SEASON POOL +18.4K",
];

const lifecycle = [
  ["Prepare", "Build the campaign before launch.", "37%"],
  ["Launch", "Collect follows, comments, shares, opt-ins, and heat.", "49%"],
  ["Bond", "Launch on BNB or Solana through the bonding curve.", "61%"],
  ["Graduate", "Move into the wider market with campaign signals already attached.", "73%"],
  ["Battle", "Challenge other projects in 24h, 3-day, or 7-day fights.", "86%"],
  ["Earn", "Compete through rewards, squads, sponsored prize pools, and seasonal leagues.", "100%"],
];

const launchModes = {
  "Pre-Bonded": {
    chain: "BNB",
    ticker: "$WAR",
    state: "Prepare mode",
    visibility: "Campaign heat",
    route: "Recruiter scout",
    image: "/images/landing/prepare/multichain-launch-base.png",
  },
  "Bonding Curve": {
    chain: "Solana",
    ticker: "$RAID",
    state: "Curve armed",
    visibility: "Live bonding",
    route: "Public push",
    image: "/images/landing/prepare/prebonded-launch-base.png",
  },
  "Graduated": {
    chain: "BNB",
    ticker: "$BURN",
    state: "DEX active",
    visibility: "Battle eligible",
    route: "Arena queue",
    image: "/images/landing/endgame/chain-roadmap-ui.png",
  },
  "Post-Bonded": {
    chain: "Solana",
    ticker: "$CLANK",
    state: "League season",
    visibility: "Ranked campaign",
    route: "Reward router",
    image: "/images/landing/prepare/promotion-command-room.png",
  },
};

// Battle data mirrors the canonical participant-card shape from the post-grad
// build plan: each side carries score, market cap, 24h volume and trader count,
// with a derived leader. States follow the battle lifecycle (pending → settled).
const battleStates = {
  Open: {
    status: "Open for Battle",
    timer: "06:12",
    challenger: { score: 0, mc: "$284K", vol: "$41K", traders: "612" },
    defender: { score: 0, mc: "$310K", vol: "$52K", traders: "740" },
    signal: "Challenge sent",
    note: "Entry deposited",
  },
  Matched: {
    status: "Matched",
    timer: "04:48",
    challenger: { score: 38, mc: "$291K", vol: "$96K", traders: "1,180" },
    defender: { score: 34, mc: "$318K", vol: "$88K", traders: "1,320" },
    signal: "Opponent matched",
    note: "Battle live",
  },
  Live: {
    status: "Live",
    timer: "01:54",
    challenger: { score: 71, mc: "$352K", vol: "$240K", traders: "4,120" },
    defender: { score: 58, mc: "$331K", vol: "$205K", traders: "3,880" },
    signal: "Leader pulse active",
    note: "Momentum rising",
  },
  Settled: {
    status: "Settled",
    timer: "00:00",
    challenger: { score: 88, mc: "$408K", vol: "$612K", traders: "9,330" },
    defender: { score: 71, mc: "$372K", vol: "$540K", traders: "8,120" },
    signal: "Winner takes prize",
    note: "Rewards routing",
  },
};

const warRows = [
  ["$BURN", "Trending", 92, "+14.2%", "Upvotes and buys are moving together."],
  ["$RAID", "Near Graduation", 84, "+8.7%", "Curve depth is close to promotion."],
  ["$CLANK", "In Battle", 76, "+19.5%", "Live duel with ticket pressure."],
  ["$VOLT", "Graduated", 69, "+5.1%", "Season points and pool visibility online."],
  ["$FUSE", "Trending", 63, "+11.3%", "Recruiter inflow just crossed alert level."],
];

const routeProfiles = {
  Solo: { League: 24, Recruiter: 0, Airdrop: 18, Squad: 10, Protocol: 48 },
  "Recruiter Linked": { League: 22, Recruiter: 20, Airdrop: 14, Squad: 16, Protocol: 28 },
  "OG Recruiter": { League: 20, Recruiter: 28, Airdrop: 12, Squad: 18, Protocol: 22 },
};

const ranks = [
  ["Soldier", "10 recruits", "Entry squad telemetry", 24],
  ["Captain", "50 recruits", "Higher reward lane", 48],
  ["Commander", "150 recruits", "Squad pool multiplier", 72],
  ["General", "500 recruits", "Top-tier routing", 92],
];

const divisions = [
  ["Alpha", "$BURN", "Promoting", 88],
  ["Bravo", "$RAID", "Holding", 73],
  ["Charlie", "$CLANK", "Volume incoming", 41],
  ["Delta", "$VOLT", "Community vote", 66],
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h13" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function BootSequence() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setDone(true), 3200);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className={`bootSequence ${done ? "isDone" : ""}`} aria-hidden={done}>
      <div className="bootPanel">
        <span className="bootMark">MWZ/BOOT</span>
        {bootLines.map((line, index) => (
          <p key={line} style={{ "--boot-delay": `${index * 520}ms` }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function ScanlineOverlay() {
  return (
    <>
      <div className="scanlineOverlay" aria-hidden="true" />
      <div className="noiseLayer" aria-hidden="true" />
      <div className="gridDrift" aria-hidden="true" />
      <div className="emberLayer" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} style={{ "--spark": index }} />
        ))}
      </div>
    </>
  );
}

function ChapterLabel({ number, title }) {
  return (
    <div className="chapterLabel">
      <span>[ {number} / 09 ]</span>
      <span>{title}</span>
    </div>
  );
}

function GlitchText({ as: Tag = "span", children, className = "" }) {
  return (
    <Tag className={`glitchText ${className}`} data-text={children}>
      {children}
    </Tag>
  );
}

function HudFrame({ children, className = "" }) {
  return <div className={`hudFrame ${className}`}>{children}</div>;
}

function StatusPill({ children }) {
  return (
    <span className="statusPill">
      <i />
      {children}
    </span>
  );
}

function MagneticCommandButton({ children, href, variant = "", onClick }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag className={`commandButton ${variant}`} href={href} onClick={onClick} type={href ? undefined : "button"}>
      <span>{children}</span>
      <i className="reticle" />
    </Tag>
  );
}

function BattleTicker({ compact = false }) {
  return (
    <div className={`battleTicker ${compact ? "compact" : ""}`} aria-label="Live battle ticker">
      <div>
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function RadarSweep() {
  return (
    <div className="radarSweep" aria-hidden="true">
      <span />
      <i />
    </div>
  );
}

function ParallaxBackplate({ src, alt = "", className = "", priority = false }) {
  return (
    <div className={`backplate ${className}`} aria-hidden={alt ? undefined : true}>
      <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} />
      <span />
    </div>
  );
}

function AnimatedCounter({ value, prefix = "", suffix = "" }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 28;
    const start = display;
    const change = value - start;
    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setDisplay(Math.round(start + change * progress));
      if (frame < totalFrames) window.requestAnimationFrame(tick);
    };
    const request = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(request);
  }, [value]);

  return (
    <strong>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </strong>
  );
}

function MissionRail() {
  return (
    <div className="missionRail">
      {lifecycle.map(([title, copy, progress], index) => (
        <article key={title} style={{ "--node-progress": progress, "--node-delay": `${index * 120}ms` }}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
          <i />
        </article>
      ))}
    </div>
  );
}

function ChapterRail() {
  return (
    <aside className="chapterRail" aria-label="Chapter navigation">
      {chapters.map(([number, title, id]) => (
        <a href={`#${id}`} key={id}>
          <span>{number}</span>
          <b>{title}</b>
        </a>
      ))}
    </aside>
  );
}

function Hero() {
  return (
    <section className="hero" id="entry">
      <ParallaxBackplate src="/images/landing/hero/hero-battlefield.png" alt="MemeWarzone battlefield MemeCoin Launchpad" priority />
      <ParallaxBackplate src="/images/landing/hero/real-competition-wide.png" className="depthPlate" priority />
      <RadarSweep />
      <div className="heroInner">
        <div className="heroStatus">
          {statusRail.map((item) => (
            <StatusPill key={item}>{item}</StatusPill>
          ))}
        </div>
        <div className="heroCopy">
          <ChapterLabel number="01" title="MemeCoin Launchpad" />
          <GlitchText as="h1">MemeWarzone</GlitchText>
          <p>MemeWarzone is a multichain meme coin launchpad where projects can build a live promotion page, collect follows, comments, shares, opt-ins, and heat before launch, bond on BNB or Solana, then keep competing through money-backed battles, squads, sponsored prize pools, tournaments, and monthly or quarterly points leagues.</p>
          <div className="buttonRow">
            <MagneticCommandButton href={appUrl} variant="primary">
              Enter Launchpad <Arrow />
            </MagneticCommandButton>
            <MagneticCommandButton href="#lifecycle">See How It Works</MagneticCommandButton>
          </div>
        </div>
      </div>
      <BattleTicker />
    </section>
  );
}

function Lifecycle() {
  return (
    <section className="chapter lifecycle" id="lifecycle">
      <ParallaxBackplate src="/images/landing/prepare/prebonded-launch-base.png" className="sectionBackplate left" />
      <ParallaxBackplate src="/images/landing/prepare/promotion-command-room.png" className="sectionBackplate right" />
      <ChapterLabel number="02" title="Campaign Lifecycle" />
      <div className="chapterIntro">
        <GlitchText as="h2">MemeCoin Lifecycle</GlitchText>
        <p>Projects build heat before launch, bond on BNB or Solana, graduate with public campaign signals already attached, then keep fighting through battles, squads, sponsored prize pools, tournaments, and seasonal points leagues.</p>
      </div>
      <MissionRail />
      <div className="warningStrip">BUILD HEAT / BOND ON BNB OR SOLANA / GRADUATION DOES NOT END THE CAMPAIGN</div>
    </section>
  );
}

function LaunchEngine() {
  const [mode, setMode] = useState("Pre-Bonded");
  const active = launchModes[mode];

  return (
    <section className="chapter launchEngine" id="launch-engine">
      <ParallaxBackplate src={active.image} className="sectionBackplate wide" />
      <ChapterLabel number="03" title="Launch Engine" />
      <div className="splitConsole">
        <div className="chapterIntro">
          <GlitchText as="h2">Launch like a weapons system.</GlitchText>
          <p>MemeWarzone launches multichain on BNB and Solana with promotion pages, bonding curves, UpVotes, recruiter squads, rewards, battles, and leagues. Base, Ethereum, Tron, Polygon, and TON follow as roadmap targets.</p>
          <div className="modeSelector">
            {Object.keys(launchModes).map((item) => (
              <MagneticCommandButton key={item} onClick={() => setMode(item)} variant={mode === item ? "active" : ""}>
                {item}
              </MagneticCommandButton>
            ))}
          </div>
        </div>
        <HudFrame className="commandPanel">
          <div className="panelHeader">
            <span>MWZ/LAUNCH</span>
            <StatusPill>{active.state}</StatusPill>
          </div>
          <dl className="dataGrid">
            <div><dt>Chain</dt><dd>{active.chain}</dd></div>
            <div><dt>Ticker</dt><dd>{active.ticker}</dd></div>
            <div><dt>Launch State</dt><dd>{active.state}</dd></div>
            <div><dt>Visibility</dt><dd>{active.visibility}</dd></div>
            <div><dt>Route Profile</dt><dd>{active.route}</dd></div>
          </dl>
          <div className="chainMarquee">
            {["BNB", "SOL", "BASE", "ETH", "TRON", "TON", "POLY", "MEMEWARZONE BRIDGE"].map((chain, index) => (
              <span key={`${chain}-${index}`}>{chain}</span>
            ))}
          </div>
        </HudFrame>
      </div>
    </section>
  );
}

function BattleArena() {
  const [state, setState] = useState("Live");
  const active = battleStates[state];
  const { status, timer, challenger, defender, signal, note } = active;
  const leader = challenger.score === defender.score ? "tie" : challenger.score > defender.score ? "left" : "right";
  const scoreTotal = challenger.score + defender.score || 1;

  useEffect(() => {
    const states = Object.keys(battleStates);
    const interval = window.setInterval(() => {
      setState((current) => states[(states.indexOf(current) + 1) % states.length]);
    }, 3600);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="chapter battleArena" id="battle-arena">
      <ParallaxBackplate src="/images/landing/arena/real-competition-battle.png" className="sectionBackplate wide" />
      <ChapterLabel number="04" title="Battle Arena" />
      <HudFrame className="arenaConsole">
        <img src="/images/landing/arena/battle-arena.png" alt="MemeWarzone battle arena" loading="lazy" />
        <div className="arenaOverlay">
          <div className={`combatant ${leader === "left" ? "isLeading" : ""}`}>
            <span>Challenger{leader === "left" ? " · Leading" : ""}</span>
            <strong>$BURN</strong>
            <em>Score {challenger.score}</em>
            <ul className="combatantStats">
              <li><b>MC</b> {challenger.mc}</li>
              <li><b>24h Vol</b> {challenger.vol}</li>
              <li><b>Traders</b> {challenger.traders}</li>
            </ul>
          </div>
          <div className="versusLock">
            <span>VS</span>
            <i />
            <strong>{timer}</strong>
            <em className="battleStatus">{status}</em>
          </div>
          <div className={`combatant right ${leader === "right" ? "isLeading" : ""}`}>
            <span>{leader === "right" ? "Leading · " : ""}Defender</span>
            <strong>$RAID</strong>
            <em>Score {defender.score}</em>
            <ul className="combatantStats">
              <li><b>MC</b> {defender.mc}</li>
              <li><b>24h Vol</b> {defender.vol}</li>
              <li><b>Traders</b> {defender.traders}</li>
            </ul>
          </div>
          <div className="scoreBars">
            <span style={{ width: `${(challenger.score / scoreTotal) * 100}%` }} />
            <span style={{ width: `${(defender.score / scoreTotal) * 100}%` }} />
          </div>
        </div>
      </HudFrame>
      <div className="battleFooter">
        <div className="modeSelector">
          {Object.keys(battleStates).map((item) => (
            <MagneticCommandButton key={item} onClick={() => setState(item)} variant={state === item ? "active" : ""}>
              {item}
            </MagneticCommandButton>
          ))}
        </div>
        <HudFrame className="eventLog">
          <span>{signal}</span>
          <span>{note}</span>
          <span>Leader: {leader === "tie" ? "Tied" : leader === "left" ? "$BURN" : "$RAID"}</span>
          <span>Battle score {challenger.score}–{defender.score}</span>
        </HudFrame>
      </div>
    </section>
  );
}

function WarRoom() {
  const [filter, setFilter] = useState("Trending");
  const [open, setOpen] = useState("$BURN");
  const rows = useMemo(() => warRows.filter((row) => filter === "Trending" || row[1] === filter || row[0] === "$BURN"), [filter]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setOpen((current) => {
        const index = warRows.findIndex(([token]) => token === current);
        return warRows[(index + 1) % warRows.length][0];
      });
    }, 4200);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="chapter warRoom" id="war-room">
      <ParallaxBackplate src="/images/landing/war-room/heatmap-ui.png" className="sectionBackplate wide heat" />
      <ChapterLabel number="05" title="War Trade Room" />
      <div className="splitConsole reverse">
        <HudFrame className="warTable">
          <div className="panelHeader">
            <span>MWZ/WAR-TRADE-ROOM</span>
            <StatusPill>{filter}</StatusPill>
          </div>
          <div className="filterRow">
            {["Trending", "Near bonding", "In Battle", "Graduated"].map((item) => (
              <MagneticCommandButton key={item} onClick={() => setFilter(item)} variant={filter === item ? "active" : ""}>
                {item}
              </MagneticCommandButton>
            ))}
          </div>
          <div className="tokenRows">
            {rows.map(([token, state, heat, move, intel], index) => (
              <button
                className={`tokenRow ${open === token ? "isOpen" : ""}`}
                key={token}
                onClick={() => setOpen(token)}
                style={{ "--row-delay": `${index * 90}ms` }}
                type="button"
              >
                <span>{token}</span>
                <span>{state}</span>
                <i><b style={{ width: `${heat}%` }} /></i>
                <strong>{move}</strong>
                {open === token ? <em>{intel}</em> : null}
              </button>
            ))}
          </div>
        </HudFrame>
        <div className="productSurface">
          <img src="/images/landing/war-room/league-war-room.png" alt="MemeWarzone live product surface" loading="lazy" />
          <div className="miniChart">
            {Array.from({ length: 18 }).map((_, index) => (
              <span key={index} style={{ height: `${28 + ((index * 17) % 62)}%` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WarEconomy() {
  const [volume, setVolume] = useState(50000);
  const [profile, setProfile] = useState("Recruiter Linked");
  const routes = routeProfiles[profile];
  const outputs = useMemo(
    () => Object.entries(routes).map(([label, percent]) => [label, percent, Math.round((volume * percent) / 100)]),
    [routes, volume],
  );

  return (
    <section className="chapter economy" id="war-economy">
      <ParallaxBackplate src="/images/landing/rewards/sponsor-prize-pool.png" className="sectionBackplate right" />
      <ChapterLabel number="06" title="War Economy" />
      <div className="splitConsole">
        <div className="chapterIntro">
          <GlitchText as="h2">Fees become battlefield logistics.</GlitchText>
          <p>MemeWarzone connects platform activity to visible reward paths: creator fee share, recruiter rewards, Squad Pool, league prizes, tournament prizes, airdrops, and sponsored prize pools.</p>
          <label className="rangeControl">
            <span>Trade Volume</span>
            <AnimatedCounter value={volume} prefix="$" />
            <input min="10000" max="2500000" step="5000" type="range" value={volume} onChange={(event) => setVolume(Number(event.target.value))} />
          </label>
          <div className="modeSelector">
            {Object.keys(routeProfiles).map((item) => (
              <MagneticCommandButton key={item} onClick={() => setProfile(item)} variant={profile === item ? "active" : ""}>
                {item}
              </MagneticCommandButton>
            ))}
          </div>
        </div>
        <HudFrame className="routerPanel">
          <img src="/images/landing/rewards/sponsor-split-ui.png" alt="MemeWarzone reward split interface" loading="lazy" />
          <div className="routeMap">
            {outputs.map(([label, percent, value]) => (
              <div key={label} className="routeLine">
                <span>{label}</span>
                <i style={{ width: `${Math.max(8, percent * 1.8)}%` }} />
                <AnimatedCounter value={value} prefix="$" />
              </div>
            ))}
          </div>
        </HudFrame>
      </div>
    </section>
  );
}

function Squads() {
  const [rank, setRank] = useState("Commander");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRank((current) => ranks[(ranks.findIndex(([name]) => name === current) + 1) % ranks.length][0]);
    }, 3900);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="chapter squads" id="squads">
      <ParallaxBackplate src="/images/landing/community/recruiter-army-poster.png" className="sectionBackplate left" />
      <ChapterLabel number="07" title="Squad Command" />
      <div className="splitConsole reverse">
        <div className="posterSurface">
          <img src="/images/landing/community/recruiter-squad.png" alt="Recruiter squad command scene" loading="lazy" />
          <BattleTicker compact />
        </div>
        <HudFrame className="squadPanel">
          <div className="panelHeader">
            <span>RECRUITER CODE</span>
            <StatusPill>WAR-{rank.toUpperCase()}-009</StatusPill>
          </div>
          <div className="squadCount">
            <span>Active Squad Count</span>
            <AnimatedCounter value={23800 + ranks.findIndex(([name]) => name === rank) * 4210} />
          </div>
          <div className="rankLadder">
            {ranks.map(([name, count, perk, progress]) => (
              <button className={rank === name ? "isActive" : ""} key={name} onClick={() => setRank(name)} type="button">
                <strong>{name}</strong>
                <span>{count}</span>
                <em>{perk}</em>
                <i><b style={{ width: `${progress}%` }} /></i>
              </button>
            ))}
          </div>
        </HudFrame>
      </div>
    </section>
  );
}

function SeasonalWar() {
  return (
    <section className="chapter seasonalWar" id="seasonal-war">
      <ParallaxBackplate src="/images/landing/endgame/final-army.png" className="sectionBackplate wide" />
      <ChapterLabel number="08" title="Major War Leagues" />
      <div className="splitConsole">
        <div className="chapterIntro">
          <GlitchText as="h2">Graduation is just the start.</GlitchText>
          <p>Projects, traders, recruiters, and squads gather points by being active on MemeWarzone. Monthly leagues create frequent winner moments. Quarterly championships create bigger seasonal battles.</p>
          <HudFrame className="seasonTimer">
            <span>Season ends in</span>
            <strong>13D : 04H : 21M</strong>
            <i />
          </HudFrame>
        </div>
        <HudFrame className="leaguePanel">
          <img src="/images/landing/endgame/battle-league-poster.png" alt="MemeWarzone battle league poster" loading="lazy" />
          <div className="divisionLadder">
            {divisions.map(([division, token, state, progress]) => (
              <div key={division}>
                <span>{division}</span>
                <strong>{token}</strong>
                <em>{state}</em>
                <i><b style={{ width: `${progress}%` }} /></i>
              </div>
            ))}
          </div>
          <div className="prizeCounter">
            <span>Prize Pool</span>
            <AnimatedCounter value={184250} prefix="$" />
          </div>
        </HudFrame>
      </div>
    </section>
  );
}

function Deploy() {
  return (
    <section className="deploy" id="deploy">
      <ParallaxBackplate src="/images/landing/cta/red-battle-warrior.png" alt="Red MemeWarzone warrior poster" />
      <div className="deployInner">
        <ChapterLabel number="09" title="Enter MemeWarzone" />
        <GlitchText as="h1">The launch is only the first battle.</GlitchText>
        <p>Build heat before bonding, launch stronger on BNB or Solana, then keep fighting for attention through battles, squads, leagues, tournaments, and sponsored prize pools.</p>
        <div className="buttonRow">
          <MagneticCommandButton href={`${appUrl}/create`} variant="primary">
            Deploy To War <Arrow />
          </MagneticCommandButton>
          <MagneticCommandButton href={appUrl}>Open the warzone</MagneticCommandButton>
        </div>
      </div>
    </section>
  );
}

// Newsletter uses the dedicated clean handler on the shared Railway API (MemeBattles dev).
// This endpoint sends a simple "thank you for the newsletter" email only.
// It does NOT trigger the heavy recruiter access / portal email from the old comingsoon flow.
const RAILWAY_API_BASE = import.meta.env.VITE_RAILWAY_API_BASE || "https://memewarzonefrontend-production.up.railway.app";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const isValid = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val || "").trim());

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmed = email.trim();

    if (!isValid(trimmed)) {
      setErrorMsg("Enter a valid email.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${RAILWAY_API_BASE}/api/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error || "Transmission failed. Try again.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    }
  }

  function resetForm() {
    setStatus("idle");
    setErrorMsg("");
    setEmail("");
  }

  return (
    <section className="newsletter" aria-labelledby="dispatch-title">
      <div className="newsletterInner">
        <div className="chapterLabel">
          <span style={{ color: "var(--orange)" }}>SIGNAL</span>
          <span>WAR ROOM DISPATCH</span>
        </div>

        <div className="chapterIntro" style={{ marginBottom: "1.25rem" }}>
          <GlitchText as="h2" id="dispatch-title">Frontline intel. Straight to your inbox.</GlitchText>
          <p>Stay updated in the Warzone. Newsletters, product updates, and exclusive content delivered directly to your inbox.</p>
        </div>

        <HudFrame className="newsletterPanel">
          {status === "success" ? (
            <div className="dispatchSuccess">
              <StatusPill style={{ borderColor: "var(--green)", color: "var(--green)" }}>
                <i style={{ background: "var(--green)" }} />
                SUBSCRIBED
              </StatusPill>
              <strong>Transmission received.</strong>
              <p>You are now tuned to the MemeWarzone frequency. Check your inbox for the confirmation dispatch.</p>
              <button type="button" className="commandButton" onClick={resetForm} style={{ marginTop: "0.75rem" }}>
                Subscribe another operator
              </button>
            </div>
          ) : (
            <form className="dispatchForm" onSubmit={handleSubmit} noValidate>
              <div className="dispatchInputWrap">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="OPERATOR@MEMEWAR.ZONE"
                  aria-label="Email address for dispatches"
                  disabled={status === "loading"}
                  required
                />
              </div>

              <MagneticCommandButton
                onClick={undefined}
                variant={status === "loading" ? "active" : ""}
                type="submit"
                disabled={status === "loading" || !email.trim()}
              >
                {status === "loading" ? "LOCKING IN..." : "SUBSCRIBE TO DISPATCH"}
              </MagneticCommandButton>

              {status === "error" && errorMsg ? (
                <div className="dispatchError">{errorMsg}</div>
              ) : null}
            </form>
          )}
        </HudFrame>

        <div className="warningStrip" style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
          WE DO NOT SPAM. UNSUBSCRIBE ANYTIME. YOUR DATA STAYS IN THE WAR ROOM.
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="siteFooter">
      <div>
        © {year} MEMEWARZONE. ALL RIGHTS RESERVED. • BUILT FOR THE BATTLEFIELD
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="siteShell">
      <BootSequence />
      <ScanlineOverlay />
      <ChapterRail />
      <header className="topNav">
        <a className="brand" href="https://memewar.zone" aria-label="MemeWarzone home">
          <img src="/assets/navbar-logo.png" alt="MemeWarzone" />
        </a>
        <nav aria-label="Primary navigation">
          {chapters.slice(1, 6).map(([number, title, id]) => (
            <a href={`#${id}`} key={id}>
              {number} {title}
            </a>
          ))}
        </nav>
        <MagneticCommandButton href={appUrl} variant="nav">
          Enter Launchpad
        </MagneticCommandButton>
      </header>
      <main>
        <Hero />
        <Lifecycle />
        <LaunchEngine />
        <BattleArena />
        <WarRoom />
        <WarEconomy />
        <Squads />
        <SeasonalWar />
        <Deploy />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
