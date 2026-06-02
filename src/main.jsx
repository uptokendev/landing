import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, Crosshair, RadioTower, Shield, Trophy, Users } from "lucide-react";
import "./styles.css";

const launchpadUrl = "https://apps.memewar.zone";
const logoUrl = "https://raw.githubusercontent.com/uptokendev/MemeBattles/dev/frontend/public/assets/hero/logo.png";
const heroUrl = "https://raw.githubusercontent.com/uptokendev/MemeBattles/dev/frontend/public/assets/hero/herobg.png";

const loop = [
  ["01", "Create the campaign", "Creators brief the mission, token story, objectives, and calls to action before the market has to guess."],
  ["02", "Prepare the push", "Recruiters and squads line up the audience, tasks, and incentives that make a launch readable."],
  ["03", "Fight for momentum", "Traders track activity, squads coordinate, and campaigns move through public battle loops."],
  ["04", "Graduate winners", "The strongest campaigns climb into bigger arenas with rewards, claims, and recognition attached."],
];

const roles = [
  [Users, "Creators", "Turn a meme coin launch into a command page with context, proof, and a clear next move."],
  [Crosshair, "Traders", "Compare campaign momentum and decide where to deploy without digging through scattered chats."],
  [RadioTower, "Recruiters", "Bring new fighters into a campaign and compete on visible recruiter performance."],
  [Shield, "Squads", "Coordinate as a unit, stack impact, and turn community action into measurable battlefield pressure."],
];

function App() {
  return (
    <div className="site" style={{ "--hero-image": `url(${heroUrl})` }}>
      <header className="nav">
        <a className="brand" href="https://memewar.zone" aria-label="MemeWarzone home">
          <img src={logoUrl} alt="" />
          <span>MemeWarzone</span>
        </a>
        <nav aria-label="Page sections">
          <a href="#loop">Loop</a>
          <a href="#roles">Roles</a>
          <a href="#prepare">Prepare</a>
          <a href="#rewards">Rewards</a>
        </nav>
        <a className="button buttonSmall" href={launchpadUrl}>Launchpad</a>
      </header>

      <main>
        <section className="hero">
          <div className="heroCopy">
            <p className="eyebrow">Public command brief</p>
            <h1>MemeWarzone</h1>
            <p className="lead">A launchpad and battle arena for meme coin campaigns where creators brief the mission, traders read momentum, recruiters build reach, and squads compete for graduation.</p>
            <div className="actions">
              <a className="button primary" href={launchpadUrl}>Launchpad <ArrowRight size={18} /></a>
              <a className="button" href="#loop">See the battle loop</a>
            </div>
          </div>
          <aside className="statusPanel">
            <span>Battlefield loop</span>
            <strong>Create. Prepare. Trade. Recruit. Graduate.</strong>
            <p>MemeWarzone turns campaign chaos into a readable operating field with visible roles and reward paths.</p>
          </aside>
        </section>

        <section id="loop" className="section">
          <div className="sectionHead">
            <p className="eyebrow">What it is</p>
            <h2>A public battlefield for the whole campaign cycle.</h2>
          </div>
          <div className="loopGrid">
            {loop.map(([step, title, body]) => (
              <article className="panel" key={title}>
                <span>{step}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="roles" className="section">
          <div className="sectionHead">
            <p className="eyebrow">Roles</p>
            <h2>Creators, traders, recruiters, and squads share the same map.</h2>
          </div>
          <div className="roleGrid">
            {roles.map(([Icon, title, body]) => (
              <article className="panel role" key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="prepare" className="feature">
          <div>
            <p className="eyebrow">Prepare Mode</p>
            <h2>Build the campaign before the first major push.</h2>
            <p>Prepare Mode gives a token its staging ground: narrative, objectives, recruiter paths, squad coordination, and calls to action.</p>
          </div>
          <a className="button primary" href={`${launchpadUrl}/create`}>Start in Launchpad</a>
        </section>

        <section className="section">
          <div className="sectionHead">
            <p className="eyebrow">Leagues and graduation</p>
            <h2>Momentum moves from launchpad to arena.</h2>
          </div>
          <div className="statGrid">
            <div>Battle-ready launch pages</div>
            <div>Recruiter leaderboards</div>
            <div>Squad coordination</div>
            <div>Arena progression</div>
            <div>Graduation tracks</div>
            <div>Reward operations</div>
          </div>
        </section>

        <section id="rewards" className="feature">
          <div>
            <p className="eyebrow">Rewards</p>
            <h2>Recognition and claims stay connected to the battle.</h2>
            <p>Recruiters, squads, and active contributors can compete for visible rank, claim windows, and reward operations tied to the field.</p>
          </div>
          <a className="button" href={`${launchpadUrl}/airdrops`}>View Launchpad rewards</a>
        </section>

        <section className="finalCta">
          <Trophy size={28} />
          <p className="eyebrow">Ready for deployment</p>
          <h2>Enter the warzone through the Launchpad.</h2>
          <a className="button primary" href={launchpadUrl}>Launchpad <ArrowRight size={18} /></a>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
