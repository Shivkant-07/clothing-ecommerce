import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import AuthCard from './components/auth/AuthCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Determine initial view from URL hash or default to 'auth'
  const getInitialView = () => {
    const hash = window.location.hash
    if (hash === '#/starter' || hash === '#/home') return 'starter'
    if (hash === '#/register') return 'register'
    return 'login'
  }

  const [currentView, setCurrentView] = useState(getInitialView)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#/starter' || hash === '#/home') {
        setCurrentView('starter')
      } else if (hash === '#/register') {
        setCurrentView('register')
      } else if (hash === '#/login' || hash === '#/auth') {
        setCurrentView('login')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <>
      {/* Minimal view navigator to test Auth without breaking existing team code */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          padding: '12px 16px',
          borderBottom: '1px solid var(--border)',
          background: 'var(--code-bg)',
          fontSize: '13px',
        }}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentView('login')
            window.location.hash = '#/login'
          }}
          style={{
            padding: '6px 14px',
            borderRadius: '6px',
            border: '1px solid',
            borderColor: currentView !== 'starter' ? 'var(--accent)' : 'var(--border)',
            background: currentView !== 'starter' ? 'var(--accent-bg)' : 'var(--bg)',
            color: currentView !== 'starter' ? 'var(--accent)' : 'var(--text)',
            cursor: 'pointer',
            fontWeight: 600,
            fontFamily: 'var(--sans)',
            transition: 'all 0.2s',
          }}
        >
          Authentication UI (Login & Sign Up)
        </button>

        <button
          type="button"
          onClick={() => {
            setCurrentView('starter')
            window.location.hash = '#/starter'
          }}
          style={{
            padding: '6px 14px',
            borderRadius: '6px',
            border: '1px solid',
            borderColor: currentView === 'starter' ? 'var(--accent)' : 'var(--border)',
            background: currentView === 'starter' ? 'var(--accent-bg)' : 'var(--bg)',
            color: currentView === 'starter' ? 'var(--accent)' : 'var(--text)',
            cursor: 'pointer',
            fontWeight: 600,
            fontFamily: 'var(--sans)',
            transition: 'all 0.2s',
          }}
        >
          Team Starter / Home
        </button>
      </div>

      {/* Render Authentication UI */}
      {currentView !== 'starter' ? (
        <AuthCard initialTab={currentView === 'register' ? 'register' : 'login'} />
      ) : (
        /* Preserved Existing Team Template Code */
        <>
          <section id="center">
            <div className="hero">
              <img src={heroImg} className="base" width="170" height="179" alt="" />
              <img src={reactLogo} className="framework" alt="React logo" />
              <img src={viteLogo} className="vite" alt="Vite logo" />
            </div>
            <div>
              <h1>Get started</h1>
              <p>
                Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
              </p>
            </div>
            <button
              type="button"
              className="counter"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>
          </section>

          <div className="ticks"></div>

          <section id="next-steps">
            <div id="docs">
              <svg className="icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#documentation-icon"></use>
              </svg>
              <h2>Documentation</h2>
              <p>Your questions, answered</p>
              <ul>
                <li>
                  <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                    <img className="logo" src={viteLogo} alt="" />
                    Explore Vite
                  </a>
                </li>
                <li>
                  <a href="https://react.dev/" target="_blank" rel="noreferrer">
                    <img className="button-icon" src={reactLogo} alt="" />
                    Learn more
                  </a>
                </li>
              </ul>
            </div>
            <div id="social">
              <svg className="icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#social-icon"></use>
              </svg>
              <h2>Connect with us</h2>
              <p>Join the Vite community</p>
              <ul>
                <li>
                  <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#github-icon"></use>
                    </svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#discord-icon"></use>
                    </svg>
                    Discord
                  </a>
                </li>
                <li>
                  <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#x-icon"></use>
                    </svg>
                    X.com
                  </a>
                </li>
                <li>
                  <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#bluesky-icon"></use>
                    </svg>
                    Bluesky
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <div className="ticks"></div>
          <section id="spacer"></section>
        </>
      )}
    </>
  )
}

export default App
