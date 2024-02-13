console.warn("sw file in pub");

let cacheData = "appv1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/main.chunks.js",
        "/static/js/bundle.js",
        "/index.html",
        "/users",
        "/images/store.png",
        "/images/bell.png",
        "/images/settings.png",
        "/images/pen.png",
        "/components/BottomNav",
        "/",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((res) => {
        if (res) {
          return res;
        }

        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
