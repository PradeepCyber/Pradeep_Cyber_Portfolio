* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #ffffff;
    background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 25%, #2d1b69 50%, #3730a3 75%, #4338ca 100%);
    min-height: 100vh;
    overflow-x: hidden;
}

/* Animated Background */
.animated-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 25%, #2d1b69 50%, #3730a3 75%, #4338ca 100%);
    animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
    0%, 100% {
        background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 25%, #2d1b69 50%, #3730a3 75%, #4338ca 100%);
    }
    50% {
        background: linear-gradient(135deg, #1a1a3e 0%, #2d1b69 25%, #3730a3 50%, #4338ca 75%, #6366f1 100%);
    }
}

/* Floating particles */
.particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.particle {
    position: absolute;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.4) 50%, transparent 100%);
    border-radius: 50%;
    animation: float 20s infinite linear;
}

@keyframes float {
    0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
    }
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
}

/* Header */
header {
    background: rgba(15, 15, 35, 0.95);
    backdrop-filter: blur(20px);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: 1px solid rgba(99, 102, 241, 0.3);
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.1);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
    background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: #cbd5e1;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    padding: 8px 16px;
    border-radius: 8px;
}

.nav-links a:hover {
    color: #ffffff;
    background: rgba(99, 102, 241, 0.1);
    transform: translateY(-2px);
}

.nav-links a::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.nav-links a:hover::before {
    width: 100%;
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
}

.hero-content {
    z-index: 2;
    max-width: 900px;
    position: relative;
}

.hero h1 {
    font-size: 4.5rem;
    margin-bottom: 1rem;
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff 0%, #6366f1 50%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInUp 1s ease forwards;
    text-shadow: 0 0 40px rgba(99, 102, 241, 0.3);
}

.hero .tagline {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #cbd5e1;
    font-weight: 400;
    animation: fadeInUp 1s ease 0.3s forwards;
    opacity: 0;
}

.hero .intro {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #94a3b8;
    line-height: 1.8;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    animation: fadeInUp 1s ease 0.6s forwards;
    opacity: 0;
}

.cta-buttons {
    animation: fadeInUp 1s ease 0.9s forwards;
    opacity: 0;
}

.btn {
    display: inline-block;
    padding: 16px 32px;
    margin: 0 12px;
    text-decoration: none;
    border-radius: 12px;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.btn:hover::before {
    left: 100%;
}

.btn-primary {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: #ffffff;
    border: 2px solid transparent;
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(99, 102, 241, 0.4);
}

.btn-secondary {
    background: rgba(99, 102, 241, 0.1);
    color: #6366f1;
    border: 2px solid #6366f1;
    backdrop-filter: blur(10px);
}

.btn-secondary:hover {
    background: rgba(99, 102, 241, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(99, 102, 241, 0.2);
}

/* Sections */
section {
    padding: 100px 0;
    position: relative;
}

.section-title {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff 0%, #6366f1 50%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
    margin: 1rem auto;
    border-radius: 2px;
}

/* About Section */
.about-content {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.8;
    background: rgba(15, 15, 35, 0.4);
    backdrop-filter: blur(20px);
    padding: 3rem;
    border-radius: 20px;
    border: 1px solid rgba(99, 102, 241, 0.2);
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.1);
}

/* Skills Section */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.skill-category {
    background: rgba(15, 15, 35, 0.4);
    backdrop-filter: blur(20px);
    padding: 2.5rem;
    border-radius: 20px;
    border: 1px solid rgba(99, 102, 241, 0.2);
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.skill-category::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
}

.skill-category:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
}

.skill-category h3 {
    color: #ffffff;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
}

.skill-item {
    margin-bottom: 1rem;
    padding: 1rem;
    background: rgba(99, 102, 241, 0.1);
    border-left: 3px solid #6366f1;
    border-radius: 8px;
    transition: all 0.3s ease;
    color: #cbd5e1;
}

.skill-item:hover {
    background: rgba(99, 102, 241, 0.2);
    transform: translateX(10px);
    color: #ffffff;
}

/* Certifications Section */
.certifications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.certification-card {
    background: rgba(15, 15, 35, 0.4);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(99, 102, 241, 0.2);
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.1);
    transition: all 0.3s ease;
    position: relative;
}

.certification-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
}

.certification-header {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: #ffffff;
    padding: 1.5rem;
    position: relative;
}

.certification-title {
    font-size: 1.2rem;
    margin-bottom: 0;
    font-weight: 600;
}

.certification-content {
    padding: 1.5rem;
    color: #cbd5e1;
    line-height: 1.6;
}

/* Featured Project Section */
.featured-project {
    background: rgba(15, 15, 35, 0.6);
    backdrop-filter: blur(20px);
    border-radius: 24px;
    border: 1px solid rgba(99, 102, 241, 0.3);
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.2);
    overflow: hidden;
    margin: 3rem 0;
    position: relative;
}

.featured-project::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899, #f59e0b);
}

.featured-project-content {
    padding: 3rem;
}

.featured-badge {
    display: inline-block;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.featured-project h3 {
    font-size: 2.2rem;
    color: #ffffff;
    margin-bottom: 1rem;
    font-weight: 700;
}

.featured-project p {
    font-size: 1.1rem;
    color: #cbd5e1;
    line-height: 1.8;
    margin-bottom: 2rem;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 2rem;
}

.tech-tag {
    background: rgba(99, 102, 241, 0.2);
    color: #6366f1;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(99, 102, 241, 0.3);
}

.project-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
}

.stat-item {
    text-align: center;
    padding: 1rem;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 12px;
    border: 1px solid rgba(99, 102, 241, 0.2);
}

.stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: #6366f1;
    display: block;
}

.stat-label {
    font-size: 0.9rem;
    color: #94a3b8;
    margin-top: 0.5rem;
}

/* Projects Section Enhanced */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 2.5rem;
    margin-top: 2rem;
}

.project-card {
    background: rgba(15, 15, 35, 0.4);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(99, 102, 241, 0.2);
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.1);
    transition: all 0.3s ease;
    position: relative;
}

.project-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 50px rgba(99, 102, 241, 0.2);
}

/* Different project type styles */
.ai-project {
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.ai-project:hover {
    box-shadow: 0 25px 50px rgba(16, 185, 129, 0.2);
}

.ctf-project {
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.ctf-project:hover {
    box-shadow: 0 25px 50px rgba(245, 158, 11, 0.2);
}

.vapt-project {
    border: 1px solid rgba(239, 68, 68, 0.3);
}

.vapt-project:hover {
    box-shadow: 0 25px 50px rgba(239, 68, 68, 0.2);
}

.network-project {
    border: 1px solid rgba(139, 92, 246, 0.3);
}

.network-project:hover {
    box-shadow: 0 25px 50px rgba(139, 92, 246, 0.2);
}

.project-header {
    padding: 2rem;
    position: relative;
    color: #ffffff;
}

.ai-header {
    background: linear-gradient(135deg, #10b981, #059669);
}

.ctf-header {
    background: linear-gradient(135deg, #f59e0b, #d97706);
}

.vapt-header {
    background: linear-gradient(135deg, #ef4444, #dc2626);
}

.network-header {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}

.project-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    backdrop-filter: blur(10px);
}

.project-content {
    padding: 2rem;
}

.project-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.3;
}

.project-description {
    line-height: 1.6;
    color: #cbd5e1;
    margin-bottom: 1.5rem;
}

.tools-used h4 {
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.tool-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tool-tag {
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: default;
}

.tool-tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Tool category colors */
.tool-tag.ml {
    background: rgba(16, 185, 129, 0.15);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.tool-tag.web {
    background: rgba(59, 130, 246, 0.15);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.3);
}

.tool-tag.pentest {
    background: rgba(245, 158, 11, 0.15);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.tool-tag.network {
    background: rgba(139, 92, 246, 0.15);
    color: #8b5cf6;
    border: 1px solid rgba(139, 92, 246, 0.3);
}

.tool-tag.scanner {
    background: rgba(239, 68, 68, 0.15);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

.tool-tag.analysis {
    background: rgba(168, 85, 247, 0.15);
    color: #a855f7;
    border: 1px solid rgba(168, 85, 247, 0.3);
}

.tool-tag.os {
    background: rgba(34, 197, 94, 0.15);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

.tool-tag.report {
    background: rgba(99, 102, 241, 0.15);
    color: #6366f1;
    border: 1px solid rgba(99, 102, 241, 0.3);
}

/* Achievements Section */
.achievements-content {
    max-width: 900px;
    margin: 0 auto;
}

.achievement-card {
    background: rgba(15, 15, 35, 0.4);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(99, 102, 241, 0.2);
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.1);
    transition: all 0.3s ease;
    position: relative;
    margin-bottom: 2rem;
}

.achievement-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
}

.achievement-header {
    background: linear-gradient(135deg, #f59e0b, #f97316);
    color: #ffffff;
    padding: 2rem;
    position: relative;
}

.achievement-title {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.achievement-content {
    padding: 2rem;
}

.achievement-list {
    list-style: none;
    padding: 0;
}

.achievement-list li {
    margin-bottom: 1rem;
    padding: 1rem;
    background: rgba(99, 102, 241, 0.1);
    border-left: 3px solid #f59e0b;
    border-radius: 8px;
    transition: all 0.3s ease;
    color: #cbd5e1;
    line-height: 1.6;
}

.achievement-list li:hover {
    background: rgba(99, 102, 241, 0.2);
    transform: translateX(10px);
}

.achievement-list li strong {
    color: #f59e0b;
}

/* Timeline */
.timeline {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #6366f1, #8b5cf6, #ec4899);
    transform: translateX(-50%);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
}

.timeline-item {
    margin-bottom: 3rem;
    position: relative;
}

.timeline-content {
    background: rgba(15, 15, 35, 0.4);
    backdrop-filter: blur(20px);
    padding: 2.5rem;
    border-radius: 20px;
    border: 1px solid rgba(99, 102, 241, 0.2);
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.1);
    width: 45%;
    position: relative;
}

.timeline-item:nth-child(odd) .timeline-content {
    margin-left: auto;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 3rem;
    width: 20px;
    height: 20px;
    background: #6366f1;
    border-radius: 50%;
    transform: translateX(-50%);
    border: 4px solid #ffffff;
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
    animation: pulse 2s infinite;
}

/* Contact Section */
.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.contact-item {
    text-align: center;
    padding: 2.5rem;
    background: rgba(15, 15, 35, 0.4);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(99, 102, 241, 0.2);
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.contact-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
}

.contact-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.5));
}

.contact-item h3 {
    color: #ffffff;
    margin-bottom: 1rem;
    font-weight: 600;
}

.contact-item p {
    color: #cbd5e1;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% {
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
    }
    50% {
        box-shadow: 0 0 30px rgba(99, 102, 241, 0.8);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .hero .tagline {
        font-size: 1.2rem;
    }

    .timeline::before {
        left: 20px;
    }

    .timeline-content {
        width: calc(100% - 60px);
        margin-left: 60px !important;
    }

    .timeline-item::before {
        left: 20px;
        transform: none;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .tech-stack {
        justify-content: center;
    }
}

/* Scrollbar Styling */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(15, 15, 35, 0.8);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #6366f1, #8b5cf6);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #8b5cf6, #ec4899);
}
