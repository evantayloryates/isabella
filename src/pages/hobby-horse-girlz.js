import React, { useEffect, useRef, useState } from 'react'

const HobbyHorseGirlz = () => {
  const blockquoteRef = useRef(null)
  const docReady = useDocReady(blockquoteRef)


  return (
    <div
      className='center'
      style={{
        height: '424px',
        width: '770px',
        overflow: 'hidden',
        borderRadius: '3px',
      }}
    >
      <blockquote
        ref={blockquoteRef}
        className='tiktok-embed'
        cite='https://www.tiktok.com/@thehobbyhorsegirlz'
        data-unique-id='thehobbyhorsegirlz'
        data-embed-type='creator'
        style={{
          height: '478px',
          left: '50%',
          margin: 0,
          opacity: docReady ? 1 : 0,
          position: 'absolute',
          top: 'calc(50% + 24px)',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 150ms ease-out 300ms',
          width: '780px',
        }}
      >
        <section>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.tiktok.com/@thehobbyhorsegirlz?refer=creator_embed'
          >
            @thehobbyhorsegirlz
          </a>
        </section>
      </blockquote>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: docReady ? 0 : 1,
          transition: 'opacity 150ms ease-out 500ms',
        }}
      >
        <div style={{
          width: '48px',
          height: '48px',
          border: '5px solid var(--spinner-border-color)',
          borderTop: '5px solid var(--spinner-border-top-color)',
          borderRadius: '50%',
          animation: 'hhg-spinner 1.1s linear infinite'
        }} />
        <style>
          {`
              @keyframes hhg-spinner {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
        </style>
      </div>
    </div>
  )
}

export default HobbyHorseGirlz

const useDocReady = (blockquoteRef) => {
  const [docReady, setDocReady] = useState(false)

  useEffect(() => {
    const blockquote = blockquoteRef.current
    if (!blockquote) return

    let cleanupReadyWatch = null

    const markReadyWhenIframeStable = (iframe) => {
      if (cleanupReadyWatch) cleanupReadyWatch()

      const threshold = 200
      const stableMs = 250
      let last = { w: 0, h: 0 }
      let timer = null
      let fired = false

      const maybeReady = () => {
        const rect = iframe.getBoundingClientRect()
        const w = Math.round(rect.width)
        const h = Math.round(rect.height)

        if (w < 1 || h < threshold) {
          last = { w, h }
          return
        }

        if (w !== last.w || h !== last.h) {
          last = { w, h }
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            if (fired) return
            fired = true
            setDocReady(true)
          }, stableMs)
        }
      }

      const ro = new ResizeObserver(() => maybeReady())
      ro.observe(iframe)

      maybeReady()
      const raf1 = requestAnimationFrame(() => maybeReady())
      const raf2 = requestAnimationFrame(() => maybeReady())

      cleanupReadyWatch = () => {
        ro.disconnect()
        if (timer) clearTimeout(timer)
        cancelAnimationFrame(raf1)
        cancelAnimationFrame(raf2)
      }
    }

    const attachToIframe = (iframe) => {
      if (!iframe || iframe.nodeType !== Node.ELEMENT_NODE) return
      if (iframe.tagName !== 'IFRAME') return

      if (iframe.dataset.docReadyAttached === '1') return
      iframe.dataset.docReadyAttached = '1'

      iframe.addEventListener(
        'load',
        () => {
          markReadyWhenIframeStable(iframe)
        },
        { once: true, capture: true }
      )

      // Best-effort: if it’s already loaded, begin stability watch immediately.
      // (Cross-origin means we can’t reliably check content readiness, so size is the signal.)
      markReadyWhenIframeStable(iframe)
    }

    // Handle already-present iframe(s)
    blockquote.querySelectorAll('iframe').forEach((iframe) => attachToIframe(iframe))

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type !== 'childList') continue

        for (const node of m.addedNodes) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue
          const el = node

          if (el.tagName === 'IFRAME') {
            attachToIframe(el)
            continue
          }

          const nested = el.querySelectorAll?.('iframe') ?? []
          Array.from(nested).forEach((iframe) => attachToIframe(iframe))
        }
      }
    })

    mo.observe(blockquote, { childList: true, subtree: true })

    return () => {
      mo.disconnect()
      if (cleanupReadyWatch) cleanupReadyWatch()
    }
  }, [blockquoteRef])

  return docReady
}
