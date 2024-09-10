import React from 'react';
import './Announcements.scss'; // Import the SCSS file

const Announcements: React.FC = () => {
    const announcements = [
        "Time to submit Income Tax proofs - Jun 28, 2024, 01:04 PM",
        "Join Us for the New Year Celebration at our Auditorium! - Jun 28, 2024, 01:04 PM",
        "WiFi Outage on 4th & 5th Floors, B-Block - Jun 28, 2024, 01:04 PM"
    ];

    return (
        <div className="announcements">
            <h3>Announcements</h3>
            <ul>
                {announcements.map((announcement, index) => (
                    <li key={index}>
                        {announcement}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Announcements;
