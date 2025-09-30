export default function DarkModeToggle({ darkmode, toggleDarkMode }) {
  return (
    <div className="darkmode-toggle">
      <h1 className={darkmode ? "dark" : "light"}>
        {darkmode ? "Night Mode 🌙" : "Day Mode ☀️"}
      </h1>
      <button 
        className={`toggle-btn ${darkmode ? "dark" : "light"}`} 
        onClick={toggleDarkMode}
      >
        Switch to {darkmode ? "Day Mode" : "Night Mode"}
      </button>
    </div>
  );
}