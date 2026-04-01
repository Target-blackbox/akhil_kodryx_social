import React, { useState, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
const PlatformSections = React.lazy(() => import('./components/PlatformSections'))
const FeaturesTimeline = React.lazy(() => import('./components/FeaturesTimeline'))
const Pricing = React.lazy(() => import('./components/Pricing'))
const Footer = React.lazy(() => import('./components/Footer'))
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {
    const [scrolled, setScrolled] = useState(false)
    const [activePlatform, setActivePlatform] = useState('WhatsApp')
    const [isLoaded, setIsLoaded] = useState(false)
    // Persist view state across reloads
    const [view, setView] = useState(() => {
        return localStorage.getItem('kodryx_view') || 'main'
    })

    const handleSetView = (newView) => {
        setView(newView)
        localStorage.setItem('kodryx_view', newView)
    }

    if (view === 'login') {
        return <LoginPage isLoaded={isLoaded} setIsLoaded={setIsLoaded} onBack={() => handleSetView('main')} onSignup={() => handleSetView('signup')} />
    }

    if (view === 'signup') {
        return (
            <SignupPage
                isLoaded={isLoaded}
                setIsLoaded={setIsLoaded}
                onBack={() => handleSetView('main')}
                onLogin={() => handleSetView('login')}
            />
        )
    }

    return (
        <div className="min-h-screen bg-white">
            <Header isLoaded={isLoaded} onLogin={() => handleSetView('login')} onSignup={() => handleSetView('login')} />
            <main className="relative">
                <Hero isLoaded={isLoaded} setIsLoaded={setIsLoaded} onSignup={() => handleSetView('login')} setActivePlatform={setActivePlatform} />
                <Suspense fallback={<div className="min-h-screen bg-white" />}>
                    <PlatformSections
                        isLoaded={isLoaded}
                        activePlatform={activePlatform}
                        setActivePlatform={setActivePlatform}
                    />
                    <FeaturesTimeline
                        isLoaded={isLoaded}
                        activePlatform={activePlatform}
                        setActivePlatform={setActivePlatform}
                        onSignup={() => handleSetView('login')}
                    />
                    {/* <Pricing
                        isLoaded={isLoaded}
                        onSignup={() => handleSetView('login')}
                    /> */}
                </Suspense>
            </main>
            <Suspense fallback={null}>
                <Footer isLoaded={isLoaded} />
            </Suspense>
        </div>
    )
}

export default App
