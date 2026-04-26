self.addEventListener("install", () => {
  console.log("🔥 Manual Service Worker Installed");
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  console.log("🔥 Manual Service Worker Activated");
  self.clients.claim();
});
