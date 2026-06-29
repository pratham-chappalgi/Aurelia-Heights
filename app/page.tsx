
import ClientScripts from './ClientScripts';

export default function Page() {
  return (
    <>
      

    
    <div id="custom-cursor"></div>
    <div id="custom-cursor-follower"></div>

    
    <div id="preloader">
        <div className="loader-content">
            <h1 className="loader-title">A U R E L I A</h1>
            <div className="loader-progress-bar">
                <div className="loader-progress-fill" id="loader-fill"></div>
            </div>
            <div className="loader-percentage" id="loader-percentage">0%</div>
            <p className="loader-status">Preloading Cinematic Assets...</p>
        </div>
    </div>

    
    <header className="luxury-header">
        <div className="nav-container">
            <a href="#" className="nav-logo" data-hover-text="AURELIA">AURELIA</a>
            <nav className="nav-links">
                <a href="#story" className="nav-link"><span>01</span> Story</a>
                <a href="#transformation" className="nav-link"><span>02</span> Evolution</a>
                <a href="#estates" className="nav-link"><span>03</span> Estates</a>
                <a href="#amenities" className="nav-link"><span>04</span> Amenities</a>
                <a href="#gallery" className="nav-link"><span>05</span> Gallery</a>
                <a href="#contact" className="nav-link"><span>06</span> Inquiry</a>
            </nav>
            <a href="#contact" className="btn-luxury nav-cta magnetic-target">
                <span>INQUIRE NOW</span>
            </a>
            
            <button className="mobile-menu-toggle" aria-label="Toggle Menu">
                <span className="line"></span>
                <span className="line"></span>
            </button>
        </div>
    </header>

    
    <div className="mobile-nav-overlay">
        <div className="mobile-nav-links">
            <a href="#story" className="mobile-nav-link">Story</a>
            <a href="#transformation" className="mobile-nav-link">Evolution</a>
            <a href="#estates" className="mobile-nav-link">Estates</a>
            <a href="#amenities" className="mobile-nav-link">Amenities</a>
            <a href="#gallery" className="mobile-nav-link">Gallery</a>
            <a href="#contact" className="mobile-nav-link">Inquiry</a>
            <a href="#contact" className="btn-luxury mobile-cta"><span>INQUIRE NOW</span></a>
        </div>
    </div>

    
    <main id="smooth-wrapper">
        <div id="smooth-content">

            
            <section className="section-hero" id="hero">
                <div className="hero-video-container">
                    <video autoPlay muted loop playsInline preload="auto" className="hero-video" id="hero-cinematic-video" poster="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4">
                        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content-wrapper">
                    <div className="hero-tagline split-text">AN ARCHITECTURAL MASTERPIECE</div>
                    <h1 className="hero-title split-text">AURELIA</h1>
                    <h2 className="hero-subtitle split-text">HEIGHTS</h2>
                    <p className="hero-desc split-text">An exclusive collection of sky estates sculpted into the horizon. Crafted for the few who appreciate the extraordinary.</p>
                    <div className="hero-cta-group">
                        <a href="#transformation" className="btn-luxury btn-gold magnetic-target">
                            <span>EXPLORE EXPERIENCE</span>
                        </a>
                    </div>
                </div>
                <div className="scroll-prompt-container">
                    <div className="scroll-prompt-line"></div>
                    <div className="scroll-prompt-text">SCROLL TO DISCOVER</div>
                </div>
            </section>

            
            <section className="section-story" id="story">
                <div className="container-story">
                    <div className="story-grid">
                        <div className="story-col-left">
                            <div className="story-image-wrap reveal-on-scroll">
                                <img src="images/about.png" alt="Aurelia Heights Architecture Close-up" className="story-img parallax-img" />
                            </div>
                        </div>
                        <div className="story-col-right">
                            <h3 className="section-subtitle">THE PHILOSOPHY</h3>
                            <h2 className="section-title split-text-trigger">Sculpted for eternity, designed for luxury</h2>
                            <p className="story-text">
                                Aurelia Heights represents a paradigm shift in ultra-luxury living. Situated at the highest geographical crest, the architecture seamlessly blends organic raw concrete with high-reflectivity glass and hand-brushed gold accents. 
                            </p>
                            <p className="story-text">
                                Every line has been drawn with absolute geometric precision, capturing the optimal solar path while maintaining total visual seclusion from the outside world.
                            </p>
                            
                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-num" data-val="12">0</div>
                                    <div className="stat-label">Land Area (Acres)</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-num" data-val="48">0</div>
                                    <div className="stat-label">Private Estates</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-num" data-val="320">0</div>
                                    <div className="stat-label">Height (Meters)</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-num" data-val="2028">0</div>
                                    <div className="stat-label">Completion Year</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="section-land-intro" id="land-intro">
                <div className="bg-noise"></div>
                <div className="container">
                    <div className="land-intro-content">
                        <h3 className="section-subtitle">THE LOCATION</h3>
                        <h2 className="section-title large-title">A Pristine Canvas of Untouched Beauty</h2>
                        <p className="land-intro-desc">
                            Before the icons are built, there is the land. An ancient ridge commanding panoramic vistas of the azure ocean below and the modern skyline on the horizon. This is where the story of Aurelia Heights begins.
                        </p>
                    </div>

                    
                    <div className="land-showcase-image reveal-on-scroll">
                        <img src="images/property-3.png" alt="Aurelia Heights panoramic land view" className="showcase-img" />
                        <div className="showcase-overlay">
                            <div className="showcase-badge">
                                <span className="badge-dot"></span>
                                <span className="badge-text">RIDGE CREST PANORAMA</span>
                            </div>
                        </div>
                    </div>

                    
                    <div className="land-features-grid">
                        <div className="land-feature-card">
                            <div className="land-feature-icon">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                            <h4 className="land-feature-title">Prime Ridge Position</h4>
                            <p className="land-feature-text">Elevated at 320 meters above sea level on a natural geological ridge, providing unobstructed 360° panoramic views of the coastline and city skyline.</p>
                        </div>
                        <div className="land-feature-card">
                            <div className="land-feature-icon">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                </svg>
                            </div>
                            <h4 className="land-feature-title">Exclusive Community</h4>
                            <p className="land-feature-text">Limited to 48 residences, ensuring an intimate and private living environment. Every owner undergoes a discreet vetting process before approval.</p>
                        </div>
                        <div className="land-feature-card">
                            <div className="land-feature-icon">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                </svg>
                            </div>
                            <h4 className="land-feature-title">Fortified Security</h4>
                            <p className="land-feature-text">Multi-layered biometric perimeter access, 24/7 armed response team, encrypted CCTV surveillance, and a secure underground panic vault network.</p>
                        </div>
                        <div className="land-feature-card">
                            <div className="land-feature-icon">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M2 12h20"/>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                </svg>
                            </div>
                            <h4 className="land-feature-title">Global Connectivity</h4>
                            <p className="land-feature-text">18 km from the international airport, direct yacht marina access, private helipad, and a dedicated VIP highway lane to the downtown financial district.</p>
                        </div>
                    </div>

                    
                    <div className="land-highlights-row">
                        <div className="land-highlight">
                            <span className="highlight-number">12</span>
                            <span className="highlight-unit">ACRES</span>
                            <span className="highlight-label">Total Land Area</span>
                        </div>
                        <div className="land-highlight-divider"></div>
                        <div className="land-highlight">
                            <span className="highlight-number">320</span>
                            <span className="highlight-unit">METERS</span>
                            <span className="highlight-label">Above Sea Level</span>
                        </div>
                        <div className="land-highlight-divider"></div>
                        <div className="land-highlight">
                            <span className="highlight-number">360°</span>
                            <span className="highlight-unit">VIEWS</span>
                            <span className="highlight-label">Panoramic Vistas</span>
                        </div>
                        <div className="land-highlight-divider"></div>
                        <div className="land-highlight">
                            <span className="highlight-number">2.4</span>
                            <span className="highlight-unit">KM</span>
                            <span className="highlight-label">To Private Marina</span>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="section-transformation" id="transformation">
                <div className="transformation-sticky-pin">
                    <div className="canvas-container">
                        <canvas id="transformation-canvas"></canvas>
                        <div className="canvas-shadow-overlay"></div>
                    </div>
                    <div className="transformation-overlay-content">
                        <div className="phase-indicator" id="phase-text">PHASE 01: THE UNTOUCHED LAND</div>
                        <div className="transformation-text-wrap" id="trans-text-wrap">
                            <h2 className="trans-title">Evolution of a Legend</h2>
                            <p className="trans-desc">Scroll to witness the organic landscape seamlessly elevate into our architectural icon.</p>
                        </div>
                        <div className="transformation-completed-ui" id="trans-complete-ui">
                            <h2 className="completed-title">AURELIA HEIGHTS</h2>
                            <p className="completed-desc">A masterpiece completed, standing high above the clouds.</p>
                            <a href="#estates" className="btn-luxury btn-gold completed-cta magnetic-target">
                                <span>VIEW PRIVATE COLLECTION</span>
                            </a>
                        </div>
                    </div>
                    
                    <div className="transformation-progress-bar">
                        <div className="trans-progress-fill" id="trans-progress-fill"></div>
                    </div>
                </div>
            </section>

            
            <section className="section-estates" id="estates">
                <div className="container">
                    <div className="estates-header">
                        <div className="header-col-left">
                            <h3 className="section-subtitle">PRIVATE COLLECTION</h3>
                            <h2 className="section-title">The Three Architectural Pavements</h2>
                        </div>
                        <div className="header-col-right">
                            <p className="header-desc-text">
                                Three distinct levels of residential layouts. Each designed with bespoke structural layouts, private elevators, and multi-layered terrace infinity pools.
                            </p>
                        </div>
                    </div>

                    
                    <div className="estates-grid">
                        
                        <div className="estate-card hover-tilt">
                            <div className="estate-img-wrap">
                                <img src="images/property-1.png" alt="The Infinity Villa" className="estate-img" />
                                <div className="estate-tag">LEVEL 01 - 15</div>
                            </div>
                            <div className="estate-info">
                                <h3 className="estate-name">The Infinity Villa</h3>
                                <p className="estate-details">5 Bedrooms &#8226; 8,200 SQ FT &#8226; Panoramic Sea Views</p>
                                <div className="estate-footer">
                                    <span className="estate-price">From $12.5M</span>
                                    <a href="#contact" className="btn-estate-link magnetic-target">VIEW DETAILS <span className="arrow">&rarr;</span></a>
                                </div>
                            </div>
                        </div>

                        
                        <div className="estate-card hover-tilt">
                            <div className="estate-img-wrap">
                                <img src="images/property-2.png" alt="The Sky Penthouse" className="estate-img" />
                                <div className="estate-tag">LEVEL 16 - 35</div>
                            </div>
                            <div className="estate-info">
                                <h3 className="estate-name">The Sky Penthouse</h3>
                                <p className="estate-details">6 Bedrooms &#8226; 11,400 SQ FT &#8226; Private Helipad</p>
                                <div className="estate-footer">
                                    <span className="estate-price">From $24.8M</span>
                                    <a href="#contact" className="btn-estate-link magnetic-target">VIEW DETAILS <span className="arrow">&rarr;</span></a>
                                </div>
                            </div>
                        </div>

                        
                        <div className="estate-card hover-tilt">
                            <div className="estate-img-wrap">
                                <img src="images/property-3.png" alt="The Forest Sanctuary" className="estate-img" />
                                <div className="estate-tag">LEVEL 36 - 45</div>
                            </div>
                            <div className="estate-info">
                                <h3 className="estate-name">The Forest Sanctuary</h3>
                                <p className="estate-details">4 Bedrooms &#8226; 9,600 SQ FT &#8226; Immersive Nature Integration</p>
                                <div className="estate-footer">
                                    <span className="estate-price">From $18.2M</span>
                                    <a href="#contact" className="btn-estate-link magnetic-target">VIEW DETAILS <span className="arrow">&rarr;</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="section-amenities" id="amenities">
                <div className="container">
                    <div className="amenities-intro">
                        <h3 className="section-subtitle">THE EXPERIENCES</h3>
                        <h2 className="section-title">Uncompromising Luxury</h2>
                    </div>

                    <div className="amenities-grid">
                        
                        <div className="amenity-card">
                            <div className="amenity-icon-wrap">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="amenity-svg">
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="amenity-title">Private Helipad</h3>
                            <p className="amenity-desc">Rooftop touch-down access for direct air transport, linking you instantly with the local international airport.</p>
                        </div>
                        
                        <div className="amenity-card">
                            <div className="amenity-icon-wrap">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="amenity-svg">
                                    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" strokeWidth="1.5"/>
                                    <path d="M12 7v10M17 12H7" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3 className="amenity-title">Wellness Club & Spa</h3>
                            <p className="amenity-desc">State-of-the-art cryotherapy, thermal baths, private massage suites, and professional sports trainers.</p>
                        </div>
                        
                        <div className="amenity-card">
                            <div className="amenity-icon-wrap">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="amenity-svg">
                                    <path d="M18 10h3M21 6h-3M21 14h-3M3 10h11M3 6h11M3 14h11M12 18H3" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3 className="amenity-title">Sky Lounge</h3>
                            <p className="amenity-desc">A private dining room and whiskey lounge suspended at 250 meters, featuring Michelin-star in-house chefs.</p>
                        </div>
                        
                        <div className="amenity-card">
                            <div className="amenity-icon-wrap">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="amenity-svg">
                                    <path d="M2 12h20M2 17h20M2 7h20M12 2v20" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3 className="amenity-title">Infinity Pool</h3>
                            <p className="amenity-desc">Multi-layered pools with vanishing edge glass walls, offering a visual connection directly with the horizon.</p>
                        </div>
                        
                        <div className="amenity-card">
                            <div className="amenity-icon-wrap">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="amenity-svg">
                                    <path d="M22 3S18 4 14 4 6 2 2 2v13s4 0 8 2 8 2 12 2V3zM2 2v19M12 4v13" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3 className="amenity-title">Private Yacht Docks</h3>
                            <p className="amenity-desc">Dedicated slips at the base of the development for superyachts up to 120 feet, with full refueling service.</p>
                        </div>
                        
                        <div className="amenity-card">
                            <div className="amenity-icon-wrap">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="amenity-svg">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="1.5" strokeLinecap="round"/>
                                    <circle cx="12" cy="7" r="4" strokeWidth="1.5"/>
                                </svg>
                            </div>
                            <h3 className="amenity-title">Elite Concierge</h3>
                            <p className="amenity-desc">White-glove 24/7 service managing international travel, high-security arrangements, and custom grocery stocking.</p>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="section-video-scrub" id="video-scrub">
                <div className="video-scrub-sticky">
                    
                    <div className="scrub-image-fallback img-day" style={{"backgroundImage":"url('images/property-1.png')"}}></div>
                    
                    <div className="scrub-overlay"></div>

                    <div className="scrub-telemetry top-right">
                        <span className="telemetry-dot"></span>
                        <span className="telemetry-label">SYSTEM STATE: ACTIVE</span>
                        <span className="telemetry-val">AZIMUTH 240&#176;</span>
                    </div>
                    <div className="scrub-telemetry bottom-right">
                        <span className="telemetry-label">CONSTRUCTION LEVEL</span>
                        <span className="telemetry-val">45/45 FLOORS</span>
                    </div>
                </div>
            </section>

            
            <section className="section-interiors" id="interiors">
                <div className="container">
                    <div className="interiors-header">
                        <h3 className="section-subtitle">THE INTERIORS</h3>
                        <h2 className="section-title">Where Artistry Meets Precision</h2>
                    </div>
                    <div className="interiors-grid">
                        <div className="interiors-col-image">
                            <div className="interior-main-image hover-tilt">
                                <img src="images/user-interior-3.jpg" alt="Luxury interior living space" className="interior-img" />
                                <div className="interior-img-label">
                                    <span>01</span> PRIMARY LIVING SUITE
                                </div>
                            </div>
                            <div className="interior-secondary-images" style={{"marginTop":"1.5rem","display":"grid","gridTemplateColumns":"1fr","gap":"1.5rem"}}>
                                <div className="secondary-img-wrap" style={{"height":"300px","maxHeight":"300px"}}>
                                    <img src="images/user-interior-2.jpg" alt="Gourmet Kitchen" className="secondary-img" />
                                    <div className="secondary-img-label">GOURMET KITCHEN</div>
                                </div>
                            </div>
                        </div>
                        <div className="interiors-col-details">
                            <div className="interior-detail-block">
                                <h4 className="detail-heading">Curated Material Palette</h4>
                                <p className="detail-text">Every surface is hand-selected from quarries in Carrara, forests in Hokkaido, and artisan studios in Copenhagen. The result is an interior language that speaks of quiet, assured luxury with warm golden ambient lighting and rich dark wood accents.</p>
                            </div>
                            <div className="interior-specs-grid">
                                <div className="interior-spec">
                                    <span className="spec-number">14'</span>
                                    <span className="spec-desc">Ceiling Height</span>
                                </div>
                                <div className="interior-spec">
                                    <span className="spec-number">Italian</span>
                                    <span className="spec-desc">Marble Flooring</span>
                                </div>
                                <div className="interior-spec">
                                    <span className="spec-number">Smart</span>
                                    <span className="spec-desc">Home Automation</span>
                                </div>
                                <div className="interior-spec">
                                    <span className="spec-number">Bespoke</span>
                                    <span className="spec-desc">Joinery & Millwork</span>
                                </div>
                                <div className="interior-spec">
                                    <span className="spec-number">4K</span>
                                    <span className="spec-desc">Cinematic Lighting</span>
                                </div>
                                <div className="interior-spec">
                                    <span className="spec-number">100%</span>
                                    <span className="spec-desc">Panoramic Views</span>
                                </div>
                            </div>
                            <div className="interior-secondary-images">
                                <div className="secondary-img-wrap">
                                    <img src="images/user-interior-1.jpg" alt="Luxury bedroom interior" className="secondary-img" />
                                    <div className="secondary-img-label">MASTER BEDROOM</div>
                                </div>
                                <div className="secondary-img-wrap">
                                    <img src="images/user-interior-4.jpg" alt="Terrace with infinity pool" className="secondary-img" />
                                    <div className="secondary-img-label">PRIVATE TERRACE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="section-gallery" id="gallery">
                <div className="container">
                    <div className="gallery-header">
                        <h3 className="section-subtitle">VISUAL GALLERY</h3>
                        <h2 className="section-title">Architectural Expressions</h2>
                    </div>

                    <div className="gallery-grid">
                        <div className="gallery-item item-vertical hover-tilt">
                            <img src="images/property-2.png" alt="Luxurious living room looking out" className="gallery-img" />
                            <div className="gallery-overlay">
                                <div className="gallery-info">
                                    <h4>LIVING QUARTERS</h4>
                                    <p>Infinite horizons inside and out.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item item-horizontal hover-tilt">
                            <img src="images/about.png" alt="Raw architectural concrete and gold trim" className="gallery-img" />
                            <div className="gallery-overlay">
                                <div className="gallery-info">
                                    <h4>MATERIAL DETAILS</h4>
                                    <p>Raw basalt, hand-brushed brass, extra-white glass.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item item-square hover-tilt">
                            <img src="images/property-1.png" alt="Swimming pool reflection" className="gallery-img" />
                            <div className="gallery-overlay">
                                <div className="gallery-info">
                                    <h4>THE POOL DECK</h4>
                                    <p>Where the water meets the sky.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item item-vertical hover-tilt">
                            <img src="images/property-3.png" alt="Penthouse lobby" className="gallery-img" />
                            <div className="gallery-overlay">
                                <div className="gallery-info">
                                    <h4>ATRIUM & ENTRY</h4>
                                    <p>A grand cinematic transition into home.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="section-investment" id="investment">
                <div className="container">
                    <div className="investment-grid">
                        <div className="investment-col-left">
                            <h3 className="section-subtitle">INVESTMENT PROFILE</h3>
                            <h2 className="section-title">High-Value Growth & Security</h2>
                            <p className="investment-text">
                                Purchasing an estate in Aurelia Heights is more than a residence selection; it is a strategic asset allocation. In a world of volatile currencies, ultra-premium real estate in land-locked luxury zones represents one of the strongest stores of generational wealth.
                            </p>
                            <p className="investment-text">
                                Over 65% of the residences are already allocated to international equity managers and private collectors, assuring a highly private, highly curated registry of owners.
                            </p>
                        </div>
                        <div className="investment-col-right">
                            <div className="investment-chart-container">
                                <div className="investment-card-metric">
                                    <div className="metric-val">+24.5%</div>
                                    <div className="metric-label">Projected Annual Appreciation</div>
                                    <div className="metric-progress"><span style={{"width":"85%"}}></span></div>
                                </div>
                                <div className="investment-card-metric">
                                    <div className="metric-val">100%</div>
                                    <div className="metric-label">Freehold Property Ownership</div>
                                    <div className="metric-progress"><span style={{"width":"100%"}}></span></div>
                                </div>
                                <div className="investment-card-metric">
                                    <div className="metric-val">10-YR</div>
                                    <div className="metric-label">Golden Resident Visa Eligible</div>
                                    <div className="metric-progress"><span style={{"width":"95%"}}></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="section-testimonials" id="testimonials">
                <div className="container">
                    <h3 className="section-subtitle text-center">ELITE REVIEWS</h3>
                    <h2 className="section-title text-center">In Their Words</h2>

                    <div className="testimonials-container">
                        
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "An architectural masterwork that sets a new high-water mark for vertical properties globally. The materials chosen display a profound understanding of sensory luxury."
                            </p>
                            <div className="testimonial-author">
                                <div className="author-name">Jean-Louis Martin</div>
                                <div className="author-role">Principal Director, Elite Architecture Digest</div>
                            </div>
                        </div>

                        
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "Aurelia Heights offers total spatial isolation. The level of design detail, combined with the extreme privacy features, is absolutely unmatched."
                            </p>
                            <div className="testimonial-author">
                                <div className="author-name">Sir Edward Vance</div>
                                <div className="author-role">Residency Collector, Private Equity Partner</div>
                            </div>
                        </div>

                        
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "Witnessing the construction transformation on scroll is one thing; entering the double-height atrium in person is another. Truly a cinematic, high-end achievement."
                            </p>
                            <div className="testimonial-author">
                                <div className="author-name">Marissa Vance</div>
                                <div className="author-role">Founder, Horizon Luxe Holding</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="section-contact" id="contact">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-col-form">
                            <h3 className="section-subtitle">ACQUISITIONS</h3>
                            <h2 className="section-title">Begin Your Journey</h2>
                            <p className="contact-desc">
                                Request a private presentation, physical blueprint package, or booking schedule. Entry is strictly by invitation and registration.
                            </p>

                            <form className="inquiry-form" id="inquiry-form-el">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">FULL NAME</label>
                                        <input type="text" id="name" required placeholder="E.g., Alexander Vance" suppressHydrationWarning />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">EMAIL ADDRESS</label>
                                        <input type="email" id="email" required placeholder="E.g., alexander@vance.com" suppressHydrationWarning />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">PHONE NUMBER</label>
                                        <input type="tel" id="phone" required placeholder="+1 (555) 019-2834" suppressHydrationWarning />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="unit-type">PREFERRED ESTATE</label>
                                        <select id="unit-type" suppressHydrationWarning>
                                            <option value="infinity-villa">The Infinity Villa (Level 01-15)</option>
                                            <option value="sky-penthouse">The Sky Penthouse (Level 16-35)</option>
                                            <option value="forest-sanctuary">The Forest Sanctuary (Level 36-45)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                        <label htmlFor="message">SPECIAL REQUIREMENTS</label>
                                        <textarea id="message" rows={4} placeholder="Mention private landing, additional parking, security requests, or customized floor plans."></textarea>
                                    </div>
                                <button type="submit" className="btn-luxury btn-gold form-submit magnetic-target" id="submit-btn" suppressHydrationWarning>
                                    <span>SUBMIT INQUIRY</span>
                                </button>
                                <div className="form-success-message" id="form-success-el">
                                    <div className="success-icon">&#10003;</div>
                                    <h3>Inquiry Successfully Transmitted</h3>
                                    <p>An elite acquisition executive will contact you via encrypted channel within 2 hours.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            
            <footer className="luxury-footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-logo-area">
                            <h2 className="footer-logo">AURELIA</h2>
                            <p className="footer-tagline">Architectural Monuments of the Sky</p>
                        </div>
                        <div className="footer-links-grid">
                            <div className="footer-link-col">
                                <h4>DEVELOPMENT</h4>
                                <a href="#story">Philosophy</a>
                                <a href="#transformation">Evolution</a>
                                <a href="#estates">Private Estates</a>
                                <a href="#amenities">The Spaces</a>
                            </div>
                            <div className="footer-link-col">
                                <h4>LEGAL</h4>
                                <a href="#">Terms of Investment</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">FAA Helipad Clearance</a>
                                <a href="#">Construction License</a>
                            </div>
                            <div className="footer-link-col">
                                <h4>ACQUISITIONS</h4>
                                <a href="#contact">Contact Form</a>
                                <a href="mailto:acquisitions@aureliaheights.com">acquisitions@aureliaheights.com</a>
                                <a href="tel:+1800AURELIA">+1 (800) AURELIA</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="footer-copyright">&#169; 2026 Aurelia Heights Development Inc. Crafted by award-winning digital creators. All rights reserved.</p>

                    </div>
                </div>
            </footer>

        </div>
    </main>

    
    <div className="floating-nav-container">
        <div className="floating-nav-bar">
            <a href="#hero" className="floating-nav-item active" data-index="0" aria-label="Home">
                <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <span className="nav-label">Home</span>
            </a>
            <a href="#story" className="floating-nav-item" data-index="1" aria-label="Story">
                <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                <span className="nav-label">Story</span>
            </a>
            <a href="#transformation" className="floating-nav-item" data-index="2" aria-label="Evolution">
                <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
                </svg>
                <span className="nav-label">Evolution</span>
            </a>
            <a href="#estates" className="floating-nav-item" data-index="3" aria-label="Estates">
                <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4"/>
                </svg>
                <span className="nav-label">Estates</span>
            </a>
            <a href="#amenities" className="floating-nav-item" data-index="4" aria-label="Amenities">
                <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
                <span className="nav-label">Amenities</span>
            </a>
            <a href="#gallery" className="floating-nav-item" data-index="5" aria-label="Gallery">
                <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
                <span className="nav-label">Gallery</span>
            </a>
            <a href="#contact" className="floating-nav-item" data-index="6" aria-label="Inquiry">
                <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span className="nav-label">Inquiry</span>
            </a>

            
            <div className="floating-nav-indicator"></div>
        </div>
    </div>

    
    
    
    
    
    

      <ClientScripts />
    </>
  );
}
