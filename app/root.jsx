/**
 * 
 */
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

/**
 * 
 */
export function meta() {
  return [
    { charset: "utf-8" },
    { title: "New Remix App" },
    { name: "viewport", content: "width=device-width,initial-scale=1" }
  ];
}

/**
 * 
 */
export function links() {
  return [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico"
    }
  ];
}

/**
 * 
 */
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta></Meta>
        <Links></Links>
      </head>
      <body>
        <Outlet></Outlet>
        <ScrollRestoration></ScrollRestoration>
        <Scripts></Scripts>
        <LiveReload></LiveReload>
      </body>
    </html>
  );
}