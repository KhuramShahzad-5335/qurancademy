'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

const LOADER_DURATION = 3200;
const EXIT_DURATION = 700;

export default function BookLoader() {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const exitTimer = window.setTimeout(() => setIsExiting(true), LOADER_DURATION);
        const removeTimer = window.setTimeout(() => setIsVisible(false), LOADER_DURATION + EXIT_DURATION);

        return () => {
            window.clearTimeout(exitTimer);
            window.clearTimeout(removeTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`quran-loader ${isExiting ? "quran-loader--exit" : ""}`}
            role="status"
            aria-label="Opening the Quran Academy"
        >
            <div className="quran-loader__visual" aria-hidden="true">
                <div className="quran-loader__glow" />
                <Image
                    className="quran-loader__image"
                    src="/quran-logo.png"
                    alt=""
                    width={260}
                    height={260}
                    priority
                />
            </div>

            <div className="quran-loader__caption">
                <span className="quran-loader__arabic">بِسْمِ اللَّهِ</span>
                <span className="quran-loader__label">Preparing The Site</span>
            </div>
        </div>
    );
}