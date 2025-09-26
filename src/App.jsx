import Header from "./Component/Header.jsx"
import Entry from "./Component/Entry.jsx"
import Footer from "./Component/Footer.jsx"
import data from "./data"

export default function App() {
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
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
            <Footer />
        </>
    )
}
