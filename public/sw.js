console.warn("sw file in pub");

let cacheData = "appv1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "https://j-opal.vercel.app/static/js/main.chunks.js",
        "https://j-opal.vercel.app/static/js/bundle.js",
        "https://j-opal.vercel.app/index.html",
        "https://j-opal.vercel.app/users",
        "https://j-opal.vercel.app/images/store.png",
        "https://j-opal.vercel.app/images/pen.png",
        "https://j-opal.vercel.app/pages/Users",
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
