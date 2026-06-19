import '../app-preview.css'

const ICON_SM = '/icons/icon32.png'

function SearchIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3-3" />
    </svg>
  )
}

/** Static mock — same DOM structure & class names as 404-AM/src/Panel.tsx */
export function AppPreview() {
  return (
    <div class="app-preview" aria-hidden="true">
      <div class="panel">
        <div class="split">
          <aside class="sidebar">
            <div class="sidebar-head">
              <div class="sidebar-title-row">
                <div class="brand">
                  <img class="brand-icon" src={ICON_SM} alt="" width={18} height={18} />
                  <span class="brand-name">404-AM</span>
                </div>
                <div class="sidebar-actions">
                  <span class="count">3/3</span>
                  <span class="ghost">HAR</span>
                  <span class="ghost">JSON</span>
                  <span class="ghost">✕</span>
                </div>
              </div>

              <div class="search-wrap">
                <SearchIcon />
                <div class="search">Filter requests</div>
              </div>

              <div class="filters-row">
                <span class="chip active">Errors</span>
                <span class="chip">★ Starred</span>
                <span class="chip">History</span>
                <span class="ctype-filter">Recent</span>
              </div>
            </div>

            <div class="sidebar-list">
              <div class="request-list">
                <div class="request-row">
                  <div class="request-row-main">
                    <div class="request-row-top">
                      <span class="star">☆</span>
                      <span class="method-pill method-get">GET</span>
                      <span class="url">/api/users/me</span>
                    </div>
                    <div class="request-row-meta">
                      <span class="status status-2xx">200</span>
                      <span>142 ms</span>
                      <span>2.1 KB</span>
                      <span>JSON</span>
                    </div>
                    <div class="waterfall">
                      <div class="waterfall-bar" style={{ left: '5%', width: '18%' }} />
                    </div>
                  </div>
                </div>

                <div class="request-row selected">
                  <div class="request-row-main">
                    <div class="request-row-top">
                      <span class="star on">★</span>
                      <span class="method-pill method-post">POST</span>
                      <span class="url">/api/checkout</span>
                    </div>
                    <div class="request-row-meta">
                      <span class="status status-4xx">422</span>
                      <span>891 ms</span>
                      <span>1.4 KB</span>
                      <span>JSON</span>
                    </div>
                    <div class="waterfall">
                      <div class="waterfall-bar slow" style={{ left: '28%', width: '42%' }} />
                    </div>
                  </div>
                </div>

                <div class="request-row">
                  <div class="request-row-main">
                    <div class="request-row-top">
                      <span class="star">☆</span>
                      <span class="method-pill method-get">GET</span>
                      <span class="url">/api/products</span>
                    </div>
                    <div class="request-row-meta">
                      <span class="status status-2xx">200</span>
                      <span>89 ms</span>
                      <span>12 KB</span>
                      <span>JSON</span>
                    </div>
                    <div class="waterfall">
                      <div class="waterfall-bar" style={{ left: '72%', width: '12%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div class="resizer" />

          <main class="workspace">
            <div class="detail">
              <div class="detail-header">
                <div class="url-bar">
                  <span class="method-pill method-post">POST</span>
                  <span class="url-bar-path">/api/checkout</span>
                  <div class="url-bar-meta">
                    <span class="status-pill status-4xx">422</span>
                    <span class="meta-chip">891 ms</span>
                    <span class="meta-chip">1.4 KB</span>
                  </div>
                </div>

                <div class="tab-bar">
                  <div class="tab-bar-tabs">
                    <span class="tab">Headers</span>
                    <span class="tab active">Body</span>
                  </div>
                  <div class="tab-bar-actions">
                    <button type="button" class="primary">Copy for AI</button>
                  </div>
                </div>
              </div>

              <div class="detail-body">
                <pre class="body">
                  <code>
                    {'{'}
                    {'\n  '}<span class="tok-key">"error"</span>: {'{'}
                    {'\n    '}<span class="tok-key">"code"</span>: <span class="tok-string">"VALIDATION_FAILED"</span>,
                    {'\n    '}<span class="tok-key">"field"</span>: <span class="tok-string">"payment.card"</span>,
                    {'\n    '}<span class="tok-key">"message"</span>: <span class="tok-string">"Card expired"</span>
                    {'\n  }'}
                    {'\n}'}
                  </code>
                </pre>
              </div>
            </div>
          </main>
        </div>

        <section class="console collapsed">
          <div class="console-head">
            <span class="caret">▸</span>
            <span class="console-title">Console</span>
            <span class="console-count">2</span>
          </div>
        </section>
      </div>
    </div>
  )
}
