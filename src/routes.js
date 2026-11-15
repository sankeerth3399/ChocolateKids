import { lazy } from "react";

/*
 * Route table. Home is bundled with the app shell so the first paint is immediate; every other
 * page is its own chunk, downloaded on demand and prefetched when a link is hovered, focused
 * or touched (see prefetchRoute and MainLayout).
 */
export const routeLoaders = {
  about: () => import("./Pages/AboutPage.jsx"),
  academics: () => import("./Pages/AcademicsPage.jsx"),
  activities: () => import("./Pages/ActivitiesPage.jsx"),
  gallery: () => import("./Pages/GalleryPage.jsx"),
  events: () => import("./Pages/EventsPage.jsx"),
  facilities: () => import("./Pages/FacilitiesPage.jsx"),
  branches: () => import("./Pages/BranchesPage.jsx"),
  branchDetails: () => import("./Pages/BranchDetails.jsx"),
  admissions: () => import("./Pages/AdmissionsPage.jsx"),
  franchise: () => import("./Pages/FranchisePage.jsx"),
  contact: () => import("./Pages/ContactPage.jsx"),
};

export const lazyPages = Object.fromEntries(Object.entries(routeLoaders).map(([key, load]) => [key, lazy(load)]));

const keyForPath = (pathname) => {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/") return null; // Home is already in the main bundle
  if (/^\/branch(es)?\/[^/]+$/.test(clean)) return "branchDetails";
  const key = clean.slice(1);
  return routeLoaders[key] ? key : null;
};

const requested = new Set();

/** Start downloading the chunk for an internal link target. Safe to call repeatedly. */
export function prefetchRoute(href) {
  if (!href || !href.startsWith("/") || href.startsWith("//")) return;
  const key = keyForPath(href.split("#")[0].split("?")[0]);
  if (!key || requested.has(key)) return;
  requested.add(key);
  routeLoaders[key]().catch(() => requested.delete(key));
}
