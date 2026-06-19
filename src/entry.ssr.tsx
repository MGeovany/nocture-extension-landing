/**
 * Server-side / static-generation entry point.
 * Used by the static adapter to prerender the site to HTML.
 */
import { renderToStream, type RenderToStreamOptions } from '@builder.io/qwik/server'
import { manifest } from '@qwik-client-manifest'
import Root from './root'

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    containerAttributes: {
      lang: 'en',
      ...opts.containerAttributes,
    },
  })
}
