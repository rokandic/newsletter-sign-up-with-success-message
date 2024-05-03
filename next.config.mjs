import next from "next";
/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

let nextConfig = {};

if (isProduction) {
  nextConfig = {
    basePath: isProduction ? "/newsletter-sign-up-with-success-message" : "",
    output: "export",
    reactStrictMode: true,
  };
}

export default nextConfig;
