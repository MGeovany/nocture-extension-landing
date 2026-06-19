import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./router-head";
import { SITE } from "./lib/seo";
import "./global.css";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content={SITE.name} />
        <link rel="icon" href="/icons/icon32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icons/icon16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/icons/icon128.png" sizes="128x128" />
        <link rel="manifest" href="/site.webmanifest" />
        <RouterHead />
      </head>
      <body>
        <a class="skip-link" href="#main-content">
          Skip to content
        </a>
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
