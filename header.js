/* ==============================
   HEADER COMPONENT LOADER
   ============================== */

// Function to load and inject header
async function loadHeader() {
    try {
        // Fetch the header HTML
        const response = await fetch('header.html');
        const headerHTML = await response.text();
        
        // Find the header container and inject the HTML
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            headerContainer.innerHTML = headerHTML;
        }
    } catch (error) {
        console.error('Error loading header:', error);
        
        // Fallback header if loading fails
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            headerContainer.innerHTML = `
                <header>
                    <div class="container">
                        <div class="header-content">
                            <a href="index.html" class="logo">Bobit</a>
                            <nav>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            `;
        }
    }
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeader); 