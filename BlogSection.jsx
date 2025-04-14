import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const samplePosts = [
    {
        id: 1,
        title: "5 Common Mistakes When Applying for Student Visas",
        content: "Applying for a student visa can be tricky. Here are 5 key mistakes to avoid...",
        comments: [
            { id: 1, authorId: 101, text: "This was super helpful! Thanks." },
            { id: 2, authorId: 102, text: "Can you expand on financial requirements?" },
        ],
    },
];

const AnimatedCounter = ({ end }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const step = end / (duration / 30);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 30);
        return () => clearInterval(timer);
    }, [end]);
    return <span className="text-4xl font-bold text-blue-700">+{count}</span>;
};

export default function BlogSection() {
    const [newComment, setNewComment] = useState("");
    const [posts, setPosts] = useState(samplePosts);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch users from public/data/users.json
        fetch("/data/users.json")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);

                // Once users are fetched, check if a user is logged in
                const stored = localStorage.getItem("user");
                if (stored) {
                    const parsed = JSON.parse(stored);
                    const matched = data.find((u) => u.id === parsed.id);
                    setUser(matched || null);
                }
            })
            .catch((err) => {
                console.error("Failed to load users:", err);
            });
    }, []);

    const getUsernameById = (id) => {
        const u = users.find((user) => user.id === id);
        return u ? u.username : "Anonymous";
    };

    const addComment = (postId) => {
        if (!user) {
            alert("Please log in to comment.");
            return;
        }

        if (newComment.trim()) {
            const comment = {
                id: Date.now(),
                authorId: user.id,
                text: newComment,
            };
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === postId
                        ? {
                            ...post,
                            comments: [...post.comments, comment],
                        }
                        : post
                )
            );
            setNewComment("");
        }
    };

    return (
        <section className="bg-white py-12 px-6 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                📘 Insights from Mtendere
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    {posts.map((post) => (
                        <motion.div
                            key={post.id}
                            whileHover={{ scale: 1.02 }}
                            className="bg-blue-50 p-6 rounded-xl shadow-lg mb-8"
                        >
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-700 mb-4">{post.content}</p>

                            <div className="mt-4">
                                <h4 className="font-bold mb-2">Comments</h4>
                                {post.comments.length > 0 ? (
                                    post.comments.map((c) => (
                                        <p
                                            key={c.id}
                                            className="border-l-4 border-blue-300 pl-2 mb-2"
                                        >
                                            <span className="font-semibold">
                                                {getUsernameById(c.authorId)}:
                                            </span>{" "}
                                            {c.text}
                                        </p>
                                    ))
                                ) : (
                                    <p className="text-gray-500 italic">
                                        No comments yet. Be the first!
                                    </p>
                                )}
                                <textarea
                                    placeholder="Ask a question or share a thought..."
                                    className="w-full p-2 border mt-2 rounded"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                />
                                <button
                                    onClick={() => addComment(post.id)}
                                    className="mt-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                                >
                                    Comment
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="text-center">
                        <AnimatedCounter end={200} />
                        <p className="text-gray-600">Students Helped</p>
                    </div>
                    <div className="text-center">
                        <AnimatedCounter end={35} />
                        <p className="text-gray-600">Countries Served</p>
                    </div>
                    <div className="text-center">
                        <AnimatedCounter end={10} />
                        <p className="text-gray-600">Years of Trusted Consulting</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
