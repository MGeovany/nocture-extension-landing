import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AppPreview } from "../components/AppPreview";

const LINKS = {
  github: "https://github.com/MGeovany/404-AM",
  firefox:
    "https://addons.mozilla.org/en-US/firefox/addon/d99a19ad970049ecb787/",
  edge: "https://microsoftedge.microsoft.com/addons/",
  opera: "https://addons.opera.com/extensions/",
};

const FIREFOX_LOGO = "/browsers/firefox.png";
const EDGE_LOGO = "/browsers/edge.png";
const OPERA_LOGO = "/browsers/opera.png";
const CHROME_LOGO = "/browsers/chrome.png";
const SAFARI_LOGO = "/browsers/safari.png";
const ICON_SM = "/icons/icon32.png";

const FEATURES = [
  {
    accent: "blue",
    t: "Catches everything",
    d: "Every fetch & XHR, method, status, timing, size. Filter the noise in seconds.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
        <path d="M4 12a8 8 0 0 1 16 0" stroke-linecap="round" />
        <path d="M12 4v4M12 16v4" stroke-linecap="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
        <path d="M19 5l-2 2M7 17l-2 2" stroke-linecap="round" />
      </svg>
    ),
  },
  {
    accent: "purple",
    t: "Dig into the details",
    d: "Headers, bodies, JSON trees. Secrets stay hidden until you say otherwise.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
        <circle cx="11" cy="11" r="6" />
        <path d="M16 16l4.5 4.5" stroke-linecap="round" />
        <path d="M9 11h4M11 9v4" stroke-linecap="round" />
      </svg>
    ),
  },
  {
    accent: "green",
    t: "Console + network",
    d: "Logs and requests side by side, no more jumping between DevTools tabs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 20h8" stroke-linecap="round" />
        <path d="M7 9h4M7 12h7" stroke-linecap="round" />
        <circle cx="17" cy="9" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    accent: "orange",
    t: "Sort & timeline",
    d: "Find the slow ones, group by domain, spot patterns fast.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l3 2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 3h6" stroke-linecap="round" />
      </svg>
    ),
  },
  {
    accent: "accent",
    t: "Copy anything",
    d: "cURL, fetch, HAR, JSON, whatever you need to share or save.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        <path d="M11 12h6M11 15h4" stroke-linecap="round" />
      </svg>
    ),
  },
] as const;

const SparkIcon = () => (
  <svg class="spark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z" />
    <path
      d="M19 14l.8 2.8L22.5 17l-2.7.7L19 20.5l-.8-2.8L15.5 17l2.7-.7L19 14z"
      opacity="0.7"
    />
  </svg>
);

const ChevronIcon = () => (
  <svg
    class="browser-btn-arrow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    aria-hidden="true"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

type BrowserInstallProps = {
  href?: string;
  logo: string;
  label: string;
  sub: string;
  variant: "firefox" | "edge" | "opera" | "chrome" | "safari";
  disabled?: boolean;
};

const BrowserInstall = ({
  href,
  logo,
  label,
  sub,
  variant,
  disabled,
}: BrowserInstallProps) => {
  const cls = `browser-install browser-install-${variant}${disabled ? " disabled" : ""}`;
  const inner = (
    <>
      <img src={logo} alt="" width={28} height={28} />
      <span class="browser-install-text">
        <span class="browser-install-label">{label}</span>
        <span class="browser-install-sub">{sub}</span>
      </span>
      {!disabled && <ChevronIcon />}
    </>
  );

  if (disabled) {
    return (
      <span class={cls} aria-disabled="true">
        {inner}
      </span>
    );
  }

  return (
    <a class={cls} href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  );
};

export default component$(() => {
  return (
    <main class="page">
      <nav class="nav">
        <div class="wrap nav-inner">
          <a class="brand" href="/">
            <img src={ICON_SM} alt="" width={28} height={28} />
            404-AM
          </a>
          <div class="nav-links">
            <a href="#why">Why</a>
            <a href="#copy-ai">Copy for AI</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              class="nav-cta"
              href={LINKS.firefox}
              target="_blank"
              rel="noreferrer"
            >
              <img src={FIREFOX_LOGO} alt="" width={18} height={18} />
              Add to Firefox
            </a>
          </div>
        </div>
      </nav>

      <section class="hero">
        <div class="wrap hero-grid">
          <div class="hero-copy">
            <p class="hero-wave">Hey developers 👋 </p>
            <h1>Debug requests without the headache</h1>
            <p class="hero-lead">
              Keeps network, console, and context in one panel, organized,
              without the noise you don't need to see. When you're stuck,{" "}
              <strong>one click sends everything to your AI</strong>, ready to
              paste.
            </p>

            <div class="browser-installs">
              <BrowserInstall
                href={LINKS.firefox}
                logo={FIREFOX_LOGO}
                variant="firefox"
                label="Add to Firefox"
                sub="Available on Mozilla Add-ons"
              />
              <BrowserInstall
                href={LINKS.edge}
                logo={EDGE_LOGO}
                variant="edge"
                label="Add to Edge"
                sub="Available on Microsoft Edge Add-ons"
              />
              <BrowserInstall
                href={LINKS.opera}
                logo={OPERA_LOGO}
                variant="opera"
                label="Add to Opera"
                sub="Available on Opera Add-ons"
              />
              <BrowserInstall
                logo={CHROME_LOGO}
                variant="chrome"
                label="Chrome"
                sub="Coming soon, blocked in Honduras"
                disabled
              />
              <BrowserInstall
                logo={SAFARI_LOGO}
                variant="safari"
                label="Safari"
                sub="Coming soon"
                disabled
              />
            </div>
          </div>
          <AppPreview />
        </div>
      </section>

      <section class="why" id="why">
        <div class="wrap why-grid">
          <div class="why-story">
            <span class="pill">Why</span>
            <h2>I was tired of piecing bugs together across DevTools tabs</h2>
            <p>
              I'd see an error and bounce between Console, Network, and Cookies
              just to figure out what actually happened, then try to explain all
              of that to Claude from memory.
            </p>
            <p>
              So I built 404-AM: <em>everything in one place</em>, laid out so
              you can see it clearly, and structured so your AI gets the full
              context of what failed, not half a story.
            </p>
          </div>
          <div class="why-visual" aria-hidden="true">
            <div class="pain-card bad">
              <div class="pain-head">
                <span class="pain-badge pain-badge-bad">Before</span>
                <span class="pain-emoji">😩</span>
              </div>
              <div class="pain-flow">
                <span class="pain-chip">Console</span>
                <span class="pain-flow-arrow">→</span>
                <span class="pain-chip">Network</span>
                <span class="pain-flow-arrow">→</span>
                <span class="pain-chip">Cookies</span>
                <span class="pain-flow-arrow">→</span>
                <span class="pain-chip pain-chip-muted">paste</span>
                <span class="pain-flow-arrow">→</span>
                <span class="pain-chip pain-chip-muted">repeat</span>
              </div>
              <p class="pain-note">
                Half the story by the time you reach Claude.
              </p>
            </div>

            <div class="pain-bridge">
              <span class="pain-bridge-line" />
              <span class="pain-bridge-icon">↓</span>
              <span class="pain-bridge-line" />
            </div>

            <div class="pain-card good">
              <div class="pain-head">
                <span class="pain-badge pain-badge-good">After</span>
                <span class="pain-emoji">✨</span>
              </div>
              <ul class="pain-wins">
                <li>One panel — network, bodies, console</li>
                <li>Filter the noise, keep what matters</li>
                <li>
                  <strong>Copy for AI</strong> — full context, one click
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="copy-ai-section" id="copy-ai">
        <div class="wrap">
          <div class="copy-ai-header">
            <span class="pill pill-glow">
              <SparkIcon />
              Star feature
            </span>
            <h2>Copy for AI</h2>
            <p class="copy-ai-lead">
              Something broke? Hit <strong>Copy for AI</strong> — headers, body,
              console, secrets masked. One click, ready for your AI.
            </p>
          </div>

          <div class="copy-ai-compare" aria-hidden="true">
            <div class="compare-panel compare-panel-bad">
              <span class="compare-label compare-label-bad">Your error</span>
              <pre class="compare-code compare-code-bare">{`422  POST  /api/checkout
891 ms · 1.4 KB`}</pre>
            </div>

            <div class="compare-vs">→</div>

            <div class="compare-panel compare-panel-good">
              <span class="compare-label compare-label-good">
                <SparkIcon />
                Copy for AI
              </span>
              <div class="compare-rich">
                <p class="compare-h2">## What failed</p>
                <p class="compare-line">
                  POST https://app.example.com/api/checkout
                </p>
                <p class="compare-line">
                  422 Unprocessable Entity · 891 ms
                </p>
                <p class="compare-h2">## Where to look</p>
                <p class="compare-line">/api/checkout</p>
                <p class="compare-line">
                  Search fetch/axios calls for this path in checkout flow…
                </p>
                <p class="compare-h2">## Request</p>
                <p class="compare-line">content-type: application/json</p>
                <p class="compare-line">
                  authorization: Bearer sk_live_••••••••
                </p>
                <p class="compare-line">{`{ "payment": { "card": "4242…" } }`}</p>
                <p class="compare-h2">## Response</p>
                <p class="compare-line">{`{ "error": { "code": "VALIDATION_FAILED",`}</p>
                <p class="compare-line">{`"field": "payment.card",`}</p>
                <p class="compare-line">{`"message": "Card expired" } }`}</p>
                <p class="compare-h2">## Recent console errors/warnings</p>
                <p class="compare-line">[error] Payment validation failed</p>
                <p class="compare-line">[warn] Retrying checkout in 2s…</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section features-section" id="features">
        <div class="wrap">
          <div class="section-head features-head">
            <span class="pill">Built-in</span>
            <h2>Also packed in</h2>
            <p>The usual DevTools stuff, but actually nice to use.</p>
          </div>
          <div class="features-grid">
            {FEATURES.map((f) => (
              <article class={`feature-card feature-${f.accent}`} key={f.t}>
                <div class="feature-icon">{f.icon}</div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div class="wrap footer-inner">
          <span class="footer-brand">
            <img src={ICON_SM} alt="" width={20} height={20} />
            Built because tab-hopping through DevTools is no fun
          </span>
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
});

export const head: DocumentHead = {
  title: "404-AM, Network & Console DevTools",
  meta: [
    {
      name: "description",
      content:
        "A friendly DevTools panel to debug fetch/XHR and console logs, with one-click Copy for AI. Free for Firefox, Edge and Opera.",
    },
    { property: "og:title", content: "404-AM, Network & Console DevTools" },
    {
      property: "og:description",
      content:
        "Debug network requests and paste context to your AI in one click.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://404am.thefndrs.com" },
    {
      property: "og:image",
      content: "https://404am.thefndrs.com/icons/icon128.png",
    },
  ],
  links: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
    },
  ],
};
