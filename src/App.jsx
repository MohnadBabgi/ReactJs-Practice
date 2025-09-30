import React from "react"
import Header from "./Component/Header.jsx"
import Entry from "./Component/Entry.jsx"
import Footer from "./Component/Footer.jsx"
import DarkModeToggle from "./Component/DarkModeToggle.jsx"
import data from "./data"
export default function App() {
    const [darkmode, setDarkmode] = React.useState(false)
    
    function toggleDarkMode() {
        setDarkmode((prevMode) => !prevMode)
    }
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.title}
                img={entry.img}
                title={entry.title}
                country={entry.country}
                googleMapsLink={entry.googleMapsLink}
                dates={entry.dates}
                text={entry.text}
            />
        )
    })
    
    return (
        <div className={darkmode ? "app-wrapper dark" : "app-wrapper"}>
            <Header />
            <DarkModeToggle darkmode={darkmode} toggleDarkMode={toggleDarkMode} />
            <main className="container">
                {entryElements}
            </main>
            <Footer />
        </div>
    )
}