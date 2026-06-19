import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE, canonicalUrl } from "../../lib/seo";

const ICON_SM = "/icons/icon32.png";

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
            <a
              href={SITE.githubIssues}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Issues
            </a>
          </div>
        </div>
      </nav>

      <section class="support-page">
        <div class="wrap support-inner">
          <span class="pill">Support</span>
          <h1>How can we help?</h1>
          <p class="support-lead">
            404-AM is open source. The fastest way to report bugs, request
            features, or ask questions is on GitHub.
          </p>

          <div class="support-cards">
            <a
              class="support-card"
              href={SITE.githubIssues}
              target="_blank"
              rel="noreferrer"
            >
              <h2>Report a bug or ask a question</h2>
              <p>
                Open an issue on GitHub with steps to reproduce, your browser
                version, and a screenshot if possible.
              </p>
              <span class="support-link">GitHub Issues →</span>
            </a>

            <a
              class="support-card"
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
            >
              <h2>Source code &amp; docs</h2>
              <p>
                Build instructions, changelogs, and store listing notes live in
                the main repository.
              </p>
              <span class="support-link">View on GitHub →</span>
            </a>

            <a class="support-card" href="/privacy/">
              <h2>Privacy policy</h2>
              <p>
                404-AM does not collect or transmit user data. Read the full
                privacy policy for details on permissions and local storage.
              </p>
              <span class="support-link">Read privacy policy →</span>
            </a>
          </div>

          <div class="support-faq">
            <h2>Safari extension</h2>
            <dl>
              <div class="support-faq-item">
                <dt>How do I enable 404-AM in Safari?</dt>
                <dd>
                  Install the app from the Mac App Store, then open Safari →
                  Settings → Extensions and turn on 404-AM.
                </dd>
              </div>
              <div class="support-faq-item">
                <dt>Where is the panel?</dt>
                <dd>
                  On Safari, tap the floating 404-AM button on the page (usually
                  bottom-right) to open the overlay panel.
                </dd>
              </div>
              <div class="support-faq-item">
                <dt>Chrome / Firefox / Edge</dt>
                <dd>
                  See the{" "}
                  <a href="/#features">home page</a> for install links. Chrome
                  DevTools users open the 404-AM tab inside DevTools.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <footer>
        <div class="wrap footer-inner">
          <span class="footer-brand">
            <img src={ICON_SM} alt="404-AM logo" width={20} height={20} />
            404-AM · {SITE.supportUrl.replace(/\/$/, "")}
          </span>
          <a href="/">Back to home</a>
        </div>
      </footer>
    </main>
  );
});

export const head: DocumentHead = {
  title: `Support — ${SITE.name}`,
  meta: [
    {
      name: "description",
      content:
        "Get help with 404-AM. Report bugs, read the privacy policy, and find Safari extension setup instructions.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE.supportUrl },
    { property: "og:title", content: `Support — ${SITE.name}` },
    {
      property: "og:description",
      content:
        "Report bugs, request features, and find setup help for the 404-AM browser extension.",
    },
    { property: "og:image", content: SITE.ogImage.url },
  ],
  links: [{ rel: "canonical", href: canonicalUrl("/support/") }],
};
