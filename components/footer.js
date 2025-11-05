class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    background: #f8f9fa;
                    border-top: 1px solid #e5e7eb;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                    text-align: center;
                }
                
                .copyright {
                    color: #6b7280;
                    font-size: 0.875rem;
                }
                
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-link {
                    color: #6b7280;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .social-link:hover {
                    color: #FF8C5A;
                }
            </style>
            
            <footer>
                <div class="footer-container">
                    <p class="copyright">© KOLOSAL Sandwich. Tous droits réservés.</p>
                    <div class="social-links">
                        <a href="#" class="social-link"><i data-feather="facebook"></i></a>
                        <a href="#" class="social-link"><i data-feather="instagram"></i></a>
                        <a href="#" class="social-link"><i data-feather="twitter"></i></a>
                    </div>
                </div>
            </footer>
        `;
        
        // Initialize feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

customElements.define('custom-footer', CustomFooter);