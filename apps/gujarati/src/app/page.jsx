'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    return (
        <>
            <div className="home-wrapper">
                {/* 3D Floating Blobs Background */}
                <div className="blob blob-1" style={{ background: 'linear-gradient(135deg, #a78bfa, #3b82f6)' }}></div>
                <div className="blob blob-2" style={{ background: 'linear-gradient(135deg, #f472b6, #fb7185)' }}></div>
                <div className="blob blob-3" style={{ background: 'linear-gradient(135deg, #60a5fa, #34d399)' }}></div>

                <div className="home-content-inner">
                    <img src="/gyan-logo.png" alt="Gyan Academy" className="home-logo" />

                    <div className="home-container">
                        <div className="home-content-row">
                            <div className="home-icon">📚</div>

                            <div className="home-text-col">
                                <h1 className="home-title">
                                    ગુજરાતી વ્યાકરણ
                                </h1>
                                <p className="home-subtitle">
                                    સરળતાથી વ્યાકરણ શીખો અને <br /> પોતાની જાતને ટેસ્ટ કરો.
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => router.push('/chapters')}
                            className="home-start-btn"
                        >
                            શરૂ કરો (Start)
                        </button>
                    </div>

                </div>
            </div>

            <div className="home-footer-links">
                <span onClick={() => router.push('/about')} className="home-footer-item">About Us</span>
                <span className="separator" style={{ color: '#94a3b8' }}>|</span>
                <span onClick={() => router.push('/contact')} className="home-footer-item">Contact Us</span>
            </div>
        </>
    );
}
