import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import type { APIRoute } from "astro";
import fs from "node:fs/promises";
import path from "node:path";

export const prerender = true;

export const GET: APIRoute = async () => {
    // Load fonts locally
    const fontsDir = path.join(process.cwd(), "src", "fonts");
    const aldrichFont = await fs.readFile(path.join(fontsDir, "Aldrich-Regular.ttf"));
    const robotoFont = await fs.readFile(path.join(fontsDir, "RobotoCondensed-Regular.ttf"));

    // Prepare Grid Elements (Lines)
    const step = 50;
    const vLines = [];
    for (let x = 0; x <= 1200; x += step) {
        vLines.push({
            type: "div",
            props: {
                style: {
                    position: "absolute",
                    left: `${x}px`,
                    top: 0,
                    bottom: 0,
                    width: "1px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)", // Matching bg-grid-cyber opacity
                },
            },
        });
    }
    const hLines = [];
    for (let y = 0; y <= 630; y += step) {
        hLines.push({
            type: "div",
            props: {
                style: {
                    position: "absolute",
                    top: `${y}px`,
                    left: 0,
                    right: 0,
                    height: "1px",
                    backgroundColor: "rgba(0, 255, 163, 0.05)",
                },
            },
        });
    }

    const svg = await satori(
        {
            type: "div",
            props: {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000000",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "60px",
                    border: "1px solid rgba(255, 255, 255, 0.1)", // Liquid Glass border simulation
                },
                children: [
                    // Grid Background
                    ...vLines,
                    ...hLines,
                    // Subtle central glow
                    {
                        type: "div",
                        props: {
                            style: {
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "1200px",
                                height: "800px",
                                background: "radial-gradient(circle, rgba(0, 255, 163, 0.15) 0%, transparent 60%)",
                            },
                        },
                    },
                    // Main Content
                    {
                        type: "h1",
                        props: {
                            style: {
                                fontSize: "110px",
                                color: "#ffffff",
                                margin: "0 0 10px 0",
                                fontFamily: "Aldrich",
                                letterSpacing: "-0.04em",
                                fontWeight: "bold",
                            },
                            children: "Sebastian Zhunaula",
                        },
                    },
                    {
                        type: "div",
                        props: {
                            style: {
                                fontSize: "36px",
                                color: "#00ffa3",
                                fontFamily: "Aldrich",
                                margin: "0 0 10px 0",
                                fontWeight: "bold",
                                letterSpacing: "0.02em",
                            },
                            children: "Tech Enthusiast",
                        },
                    },
                    // Skills Bar
                    {
                        type: "div",
                        props: {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "24px",
                            },
                            children: [
                                // Software Development
                                {
                                    type: "div",
                                    props: {
                                        style: { display: "flex", alignItems: "center", gap: "10px" },
                                        children: [
                                            {
                                                type: "svg",
                                                props: {
                                                    width: "32",
                                                    height: "32",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "#00ffa3",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        { type: "polyline", props: { points: "16 18 22 12 16 6" } },
                                                        { type: "polyline", props: { points: "8 6 2 12 8 18" } },
                                                    ],
                                                },
                                            },
                                            {
                                                type: "span",
                                                props: {
                                                    style: { fontSize: "30px", color: "#94a3b8", fontFamily: "Roboto Condensed" },
                                                    children: "Web Dev",
                                                },
                                            },
                                        ],
                                    },
                                },
                                { type: "span", props: { style: { color: "rgba(255,255,255,0.2)", fontSize: "28px" }, children: "·" } },
                                // Cybersecurity
                                {
                                    type: "div",
                                    props: {
                                        style: { display: "flex", alignItems: "center", gap: "10px" },
                                        children: [
                                            {
                                                type: "svg",
                                                props: {
                                                    width: "32",
                                                    height: "32",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "#00ffa3",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        { type: "path", props: { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" } },
                                                    ],
                                                },
                                            },
                                            {
                                                type: "span",
                                                props: {
                                                    style: { fontSize: "30px", color: "#94a3b8", fontFamily: "Roboto Condensed" },
                                                    children: "Cybersecurity",
                                                },
                                            },
                                        ],
                                    },
                                },
                                { type: "span", props: { style: { color: "rgba(255,255,255,0.2)", fontSize: "28px" }, children: "·" } },
                                // Data Science
                                {
                                    type: "div",
                                    props: {
                                        style: { display: "flex", alignItems: "center", gap: "10px" },
                                        children: [
                                            {
                                                type: "svg",
                                                props: {
                                                    width: "32",
                                                    height: "32",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "#00ffa3",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        { type: "line", props: { x1: "18", y1: "20", x2: "18", y2: "10" } },
                                                        { type: "line", props: { x1: "12", y1: "20", x2: "12", y2: "4" } },
                                                        { type: "line", props: { x1: "6", y1: "20", x2: "6", y2: "14" } },
                                                    ],
                                                },
                                            },
                                            {
                                                type: "span",
                                                props: {
                                                    style: { fontSize: "30px", color: "#94a3b8", fontFamily: "Roboto Condensed" },
                                                    children: "Data Science",
                                                },
                                            },
                                        ],
                                    },
                                },
                                { type: "span", props: { style: { color: "rgba(255,255,255,0.2)", fontSize: "28px" }, children: "·" } },
                                // AI
                                {
                                    type: "div",
                                    props: {
                                        style: { display: "flex", alignItems: "center", gap: "10px" },
                                        children: [
                                            {
                                                type: "svg",
                                                props: {
                                                    width: "32",
                                                    height: "32",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "#00ffa3",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        { type: "rect", props: { x: "3", y: "3", width: "18", height: "18", rx: "2" } },
                                                        { type: "path", props: { d: "M9 9h6v6H9z" } },
                                                    ],
                                                },
                                            },
                                            {
                                                type: "span",
                                                props: {
                                                    style: { fontSize: "30px", color: "#94a3b8", fontFamily: "Roboto Condensed" },
                                                    children: "AI",
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "Aldrich",
                    data: aldrichFont,
                    style: "normal",
                },
                {
                    name: "Roboto Condensed",
                    data: robotoFont,
                    style: "normal",
                },
            ],
        }
    );

    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return new Response(pngBuffer as unknown as BodyInit, {
        headers: {
            "Content-Type": "image/png",
            "Cache-Control": "no-cache",
        },
    });
};
