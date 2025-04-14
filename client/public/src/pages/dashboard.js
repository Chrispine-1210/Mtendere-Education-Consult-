import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/dashboard/stats", { withCredentials: true })
            .then(res => setStats(res.data));
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            {stats && (
                <ul>
                    <li>Users: {stats.users}</li>
                    <li>Blog Posts: {stats.blogPosts}</li>
                    <li>Courses: {stats.courses}</li>
                </ul>
            )}
        </div>
    );
}
