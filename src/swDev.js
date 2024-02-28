function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(swUrl)
      .then((reg) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  }
}

export default swDev;
