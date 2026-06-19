import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE, canonicalUrl } from "../../lib/seo";

const ICON_SM = "/icons/icon32.png";
const UPDATED = "2026-06-19";

export default component$(() => {
  return (
    <main class="page" id="main-content">
      <nav class="nav" aria-label="Primary">
        <div class="wrap nav-inner">
          <a class="brand" href="/" aria-label="404-AM home">
            <img src={ICON_SM} alt="404-AM logo" width={28} height={28} />
            404-AM
          </a>
          <div class="nav-links">
            <a href="/">Home</a>
            <a href="/support/">Support</a>
          </div>
        </div>
      </nav>

      <article class="legal-page">
        <div class="wrap legal-inner">
          <span class="pill">Legal</span>
          <h1>Privacy Policy</h1>
          <p class="legal-updated">Last updated: {UPDATED}</p>

          <p class="legal-lead">
            404-AM is a developer tool (browser extension) that helps you inspect
            and debug network requests and console output on web pages you are
            working on. This policy applies to all distribution channels:
            Chrome/Firefox/Edge DevTools builds and the Safari Web Extension.
          </p>

          <section class="legal-section">
            <h2>Data we collect</h2>
            <p>
              <strong>None.</strong> 404-AM does not collect, transmit, sell, or
              share any data. There are no analytics, no accounts, no tracking,
              and no remote servers. Everything runs locally on your device.
            </p>
          </section>

          <section class="legal-section">
            <h2>What the extension accesses, and why</h2>
            <h3>Network requests</h3>
            <p>
              404-AM reads fetch and XHR traffic from the page you are debugging
              so it can show method, URL, status, timing, headers, payloads, and
              response bodies in the panel. This data is displayed on your device
              only and is never sent to us or any third party.
            </p>
            <ul>
              <li>
                <strong>Chrome / Firefox / Edge</strong> — captured via the
                DevTools network API while DevTools is open on that tab.
              </li>
              <li>
                <strong>Safari</strong> — captured by a small script injected
                into the active page while the extension is enabled, relayed to
                the overlay panel via local messaging.
              </li>
            </ul>

            <h3>Console output</h3>
            <p>
              Console logs from the page are shown in the integrated Console
              panel. They are not stored on servers or transmitted off-device.
            </p>

            <h3>Local preferences</h3>
            <p>
              UI settings (filters, sort order, sidebar width, and similar
              options) are saved locally using browser extension storage on your
              own device.
            </p>
          </section>

          <section class="legal-section">
            <h2>Actions you initiate</h2>
            <ul>
              <li>
                <strong>Export (HAR/JSON)</strong> and <strong>Copy</strong>{" "}
                actions write to a file or your clipboard on your device. What
                you do with that output is your choice.
              </li>
              <li>
                <strong>Copy for AI</strong> masks sensitive header values (e.g.{" "}
                <code>Authorization</code>, <code>Cookie</code>) by default
                before copying.
              </li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>Permissions</h2>
            <ul>
              <li>
                <code>storage</code> — remember UI preferences locally.
              </li>
              <li>
                <code>devtools_page</code> — Chrome/Firefox/Edge builds deliver
                the panel inside DevTools.
              </li>
              <li>
                <code>http://*/*</code> and <code>https://*/*</code> (Safari
                only) — required so the extension can run on web pages you
                choose to debug and show the overlay panel.
              </li>
            </ul>
            <p>
              404-AM runs <strong>no remote code</strong> and sends no captured
              data to external services.
            </p>
          </section>

          <section class="legal-section">
            <h2>Children</h2>
            <p>
              404-AM is a developer tool and is not directed at children under 13.
            </p>
          </section>

          <section class="legal-section">
            <h2>Changes</h2>
            <p>
              We may update this policy from time to time. The “Last updated”
              date at the top will reflect the latest revision.
            </p>
          </section>

          <section class="legal-section">
            <h2>Contact</h2>
            <p>
              Questions about this policy? Open an issue on{" "}
              <a href={SITE.githubIssues} target="_blank" rel="noreferrer">
                GitHub
              </a>{" "}
              or visit our{" "}
              <a href="/support/">support page</a>.
            </p>
          </section>
        </div>
      </article>

      <footer>
        <div class="wrap footer-inner">
          <span class="footer-brand">
            <img src={ICON_SM} alt="404-AM logo" width={20} height={20} />
            404-AM · Privacy
          </span>
          <a href="/">Back to home</a>
        </div>
      </footer>
    </main>
  );
});

export const head: DocumentHead = {
  title: `Privacy Policy — ${SITE.name}`,
  meta: [
    {
      name: "description",
      content:
        "404-AM privacy policy. No data collection, no tracking. Local-only network and console debugging for developers.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE.privacyPolicy },
    { property: "og:title", content: `Privacy Policy — ${SITE.name}` },
    {
      property: "og:description",
      content:
        "404-AM does not collect or transmit user data. Read how permissions and local storage work.",
    },
    { property: "og:image", content: SITE.ogImage.url },
  ],
  links: [{ rel: "canonical", href: canonicalUrl("/privacy/") }],
};
