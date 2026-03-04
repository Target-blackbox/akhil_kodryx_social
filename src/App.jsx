import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PlatformSections from './components/PlatformSections'
import FeaturesTimeline from './components/FeaturesTimeline'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
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
            </main>
            <Footer isLoaded={isLoaded} />
        </div>
    )
}

export default App
