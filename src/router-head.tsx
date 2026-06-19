import { component$ } from '@builder.io/qwik'
import { useDocumentHead, useLocation } from '@builder.io/qwik-city'

/** Renders <title> and <meta> from each route's exported `head`. */
export const RouterHead = component$(() => {
  const head = useDocumentHead()
  const loc = useLocation()

  return (
    <>
      <title>{head.title}</title>
      <link rel="canonical" href={loc.url.href} />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}
      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}
    </>
  )
})
