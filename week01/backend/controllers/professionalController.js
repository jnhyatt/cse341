import mongoClient from '../db/connect.js';

export default async function getData(_req, res, _next) {
    try {
        for await (const result of mongoClient.db("main").collection("users").find()) {
            res.json(result);
            return;
        }
        res.status(404).json({ message: "No user" });
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
