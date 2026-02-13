import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const PreloadContext = createContext({
  activeSlot: null,
  setActiveSlot: () => {},
})

const registry = {}

/**
 * Creates a preloadable page: the component is always mounted (for preloading) and
 * shown when the Page wrapper is rendered. No router coupling.
 *
 * @param {string} id - Unique slot id
 * @param {React.Component} Component - The page component to preload
 * @param {object} options
 * @param {object} options.spacer - Style for the layout spacer when page is "visible"
 * @param {'center'|'full'} options.position - 'center' = centered overlay, 'full' = full viewport
 */
export function createPreloadable(id, Component, options = {}) {
  const { spacer = {}, position = 'center' } = options

  registry[id] = { Component, spacer, position }

  function Page() {
    const { setActiveSlot } = useContext(PreloadContext)

    useEffect(() => {
      setActiveSlot(id)
      return () => setActiveSlot(null)
    }, [])

    return <div style={{ ...defaultSpacer, ...spacer }} aria-hidden="true" />
  }

  return { Page }
}

const defaultSpacer = { minHeight: '100px' }

export const PreloadProvider = ({ children }) => {
  const [activeSlot, setActiveSlot] = useState(null)
  return (
    <PreloadContext.Provider value={{ activeSlot, setActiveSlot }}>
      {children}
    </PreloadContext.Provider>
  )
}

/**
 * Renders all registered preloadable components in a portal. Always mounted for
 * preloading; visibility controlled by activeSlot.
 */
export const PreloadPortal = () => {
  const { activeSlot } = useContext(PreloadContext)
  const containerRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const el = document.createElement('div')
    el.id = 'preload-portal-root'
    document.body.appendChild(el)
    containerRef.current = el
    setMounted(true)
    return () => {
      document.body.removeChild(el)
    }
  }, [])

  if (!mounted || !containerRef.current) return null

  const entries = Object.entries(registry)

  return createPortal(
    <>
      {entries.map(([slotId, { Component, position }]) => {
        const isVisible = activeSlot === slotId
        const containerStyle = {
          position: 'fixed',
          pointerEvents: isVisible ? 'auto' : 'none',
          zIndex: isVisible ? 1 : -1,
          ...(position === 'center'
            ? {
                left: isVisible ? '50%' : '-9999px',
                top: isVisible ? '50%' : 0,
                transform: isVisible ? 'translate(-50%, -50%)' : 'none',
              }
            : {
                inset: 0,
                left: isVisible ? 0 : '-9999px',
              }),
        }
        return (
          <div key={slotId} style={containerStyle}>
            <Component />
          </div>
        )
      })}
    </>,
    containerRef.current
  )
}
