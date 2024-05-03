import next from "next";
/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

let nextConfig = {};

if (isProduction) {
  const nextConfig = {
    basePath: process.env.BASEPATH,
    output: "export",
    reactStrictMode: true,
  };
}

export default nextConfig;
