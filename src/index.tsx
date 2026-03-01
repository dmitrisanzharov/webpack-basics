import React from "react";
import ReactDOM from "react-dom/client";
import Paper from "@mui/material/Paper";

const root = document.getElementById("root");
if (!root) {
    throw new Error("Root element not found");
}
ReactDOM.createRoot(root).render(
    <Paper elevation={3} style={{ padding: 16 }}>
        This is a Paper component {process.env.DM}
    </Paper>
);
