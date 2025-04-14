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

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [stats, setStats] = useState(null);
    const [users, setUsers] = useState([]);
    const [content, setContent] = useState([]);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Fetch Stats
        axios.get("http://localhost:5000/api/dashboard/stats", { withCredentials: true })
            .then(res => setStats(res.data));

        // Fetch Users
        axios.get("http://localhost:5000/api/admin/users", { withCredentials: true })
            .then(res => setUsers(res.data));

        // Fetch Content
        axios.get("http://localhost:5000/api/admin/content", { withCredentials: true })
            .then(res => setContent(res.data));

        // Fetch Behavior Logs
        axios.get("http://localhost:5000/api/admin/behavior-logs", { withCredentials: true })
            .then(res => setLogs(res.data));
    }, []);

    const handleContentApproval = async (id, status) => {
        await axios.put(`http://localhost:5000/api/admin/content/${id}`, { status }, { withCredentials: true });
        setContent(content.map(item => item._id === id ? { ...item, status } : item));
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <div>
                <h3>Users</h3>
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            {user.name} ({user.role})
                            <button onClick={() => handleUserRoleChange(user._id)}>Change Role</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Content Moderation</h3>
                <ul>
                    {content.map(item => (
                        <li key={item._id}>
                            {item.title} - {item.status}
                            {item.status === "pending" && (
                                <button onClick={() => handleContentApproval(item._id, "approved")}>Approve</button>
                            )}
                            {item.status === "pending" && (
                                <button onClick={() => handleContentApproval(item._id, "rejected")}>Reject</button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>User Activity Logs</h3>
                <ul>
                    {logs.map(log => (
                        <li key={log._id}>
                            {log.pageUrl} - {log.actionType} at {log.timestamp}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Statistics</h3>
                {stats && (
                    <ul>
                        <li>Users: {stats.users}</li>
                        <li>Blog Posts: {stats.blogPosts}</li>
                        <li>Courses: {stats.courses}</li>
                    </ul>
                )}
            </div>
        </div>
    );
}

