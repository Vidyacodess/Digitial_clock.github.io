let is24HourFormat = true;
    
    function updateClock() {
    
        const clockElement = document.getElementById("clock");
        const dateElement = document.getElementById("date");
        const greetingElement = document.getElementById("greeting");
        const now = new Date();
        
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
    
        let greeting = "Hello!";
    
        if (hours < 12) {
            greeting = "Good Morning!";
    
        } else if (hours < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }
    
        greetingElement.textContent = greeting;
    
        const isPM = hours >= 12;
        if (!is24HourFormat) {
            hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
        }
        clockElement.textContent = `${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${
            !is24HourFormat ? (isPM ? "PM" : "AM") : ""
        }`;
        const dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        dateElement.textContent = now.toLocaleDateString("en-US", dateOptions);
    }
    
    function toggleTheme() {
      document.body.classList.toggle("light-theme");
      document.body.classList.toggle("dark-theme");
    }
    
    function toggleFormat() {
        is24HourFormat = !is24HourFormat;
        const formatToggleBtn = document.getElementById("formatToggle");
        formatToggleBtn.textContent = is24HourFormat ? "Switch to 12-Hour" : "Switch to 24-Hour";
       updateClock();
    
    }
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
    document.getElementById("formatToggle").addEventListener("click", toggleFormat);
    setInterval(updateClock, 1000);
    
    updateClock();
    
    document.body.classList.add("dark-theme");
    
    
































