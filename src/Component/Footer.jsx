export default function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} My first react app. All rights reserved.</p>
            <nav>
                <a href="https://github.com/MohnadBabgi" target="_blank">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                        alt="GitHub" 
                        className="icon" 
                    />
                </a>
                <a href="https://www.linkedin.com/in/mohanadbabgi/" target="_blank">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                        alt="LinkedIn" 
                        className="icon" 
                    />
                </a>
            </nav>
        </footer>
    )
}
