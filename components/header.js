class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid #e5e7eb;
                }
                
                .header-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                
                .logo {
                   width: 10%;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                
                .nav-link {
                    color: #4b5563;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                
                .nav-link:hover {
                    color: #FF8C5A;
                }
                
                .seller-btn {
                    background: #FF8C5A;
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 9999px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .seller-btn:hover {
                    background: #e67a4a;
                    transform: translateY(-1px);
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: black;
                    border: none;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: white;
                        padding: 1rem;
                        flex-direction: column;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }
                    
                    .nav-links.open {
                        display: flex;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                     .logo {
                   width: 30%;
                }
                }
            </style>
            
            <header>
                <div class="header-container">
                    <img src="logo.jpeg" class="logo">
                    
                    <nav class="nav-links">
                        <a href="#" class="nav-link">Accueil</a>
                        <a href="#about" class="nav-link">Communauté</a>
                        <a href="#inscription" class="nav-link">Contact</a>
                        <a href="#inscription" class="seller-btn">👉 Devenir vendeur</a>
                    </nav>
                    
                    <button class="mobile-menu-btn">
                        <i data-feather="menu">☰</i>
                    </button>
                </div>
            </header>
        `;
        
        // Initialize mobile menu
        const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.contains(e.target) && navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
            }
        });
        
        // Initialize feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

customElements.define('custom-header', CustomHeader);
