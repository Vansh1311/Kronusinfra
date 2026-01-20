import React from 'react';

// --- SVG ICON COMPONENTS (Inlined for single-file use) ---
// Changed to function declarations to ensure they are always correctly hoisted and recognized by React.

function AwardIcon(props) {
    return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 12c0 3.037.75 5.864 2.057 8.322a12.05 12.05 0 0014.286 0C20.25 17.864 21 15.037 21 12a12.02 12.02 0 00-.382-4.016z" />
        </svg>
    );
}

function SpeakerIcon(props) {
    return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7v0a7 7 0 01-7-7v0m14 0V9a2 2 0 00-2-2H7a2 2 0 00-2 2v2m14 0h-2M5 11H3m14 0a5 5 0 00-10 0" />
        </svg>
    );
}

function NewsIcon(props) {
    return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v10m2-2l-4-4m0 0l-4 4m4-4V4" />
        </svg>
    );
}

function GroupIcon(props) {
    return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h-1.39c-1.46 0-2.61-1.15-2.61-2.61V15c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2.39c0 1.46-1.15 2.61-2.61 2.61zm-10 0H5a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v4m-5 4h.01M19 7h-.01M17 10h.01M5 7h.01" />
        </svg>
    );
}

// --- ACHIEVEMENT DATA ---
const achievements = [
    {
        title: "MSME Certified",
        description: "Most Trustable Real Estate in Sonipat.",
        Icon: AwardIcon,
        color: "text-green-600 bg-green-100",
    },
    {
        title: "TEDx Speaker",
        description: "Studio speaker at TEDx SGG SCC.",
        Icon: SpeakerIcon,
        color: "text-red-600 bg-red-100",
    },
    {
        title: "Emerging Sonipat Conclave",
        description: "Featured in the conclave by ZEE News.",
        Icon: NewsIcon,
        color: "text-blue-600 bg-blue-100",
    },
    {
        title: "BNI Leadership",
        description: "Part of Sonipat BNI and served as Vice President once.",
        Icon: GroupIcon,
        color: "text-yellow-600 bg-yellow-100",
    },
];

// --- ACHIEVEMENT CARD COMPONENT ---
// Ensure Icon prop is capitalized when destructured and used.
const AchievementCard = ({ title, description, color, Icon }) => (
    <div className="p-6 border border-gray-200 rounded-xl shadow-md bg-white hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
        <div className={`w-14 h-14 flex items-center justify-center rounded-lg mb-4 ${color} ring-4 ring-opacity-30 ring-current`}>
            {/* Using the Icon component here */}
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

// --- MAIN ACHIEVEMENTS SECTION COMPONENT ---
const AchievementsSection = () => {
    return (
        <div className="mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 border-b pb-2">Key Achievements</h2>
            <p className="text-xl text-gray-500 mb-10">Recognitions, certifications, and leadership roles.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {achievements.map((item, index) => (
                    <AchievementCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;