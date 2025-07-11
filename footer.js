// Reusable Footer Component
async function loadFooter() {
    try {
        // Fetch the footer HTML
        const response = await fetch('footer.html');
        const footerHTML = await response.text();
        
        // Load footer into the container
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = footerHTML;
            
            // Set current year after footer is loaded
            const currentYearElement = document.getElementById('currentYear');
            if (currentYearElement) {
                currentYearElement.textContent = new Date().getFullYear();
            }
        }
    } catch (error) {
        console.error('Error loading footer:', error);
        
        // Fallback: create simple footer if loading fails
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = `
                <footer style="background: rgba(0,0,0,0.8); color: white; text-align: center; padding: 2rem 0;">
                    <div class="container">
                        <p>&copy; ${new Date().getFullYear()} Bobit. All rights reserved.</p>
                    </div>
                </footer>
            `;
        }
    }
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter); 