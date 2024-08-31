'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fcafe22d08307167c532a33938d09dab",
"assets/AssetManifest.json": "7108847bcf66fc27e893215f9e5eb939",
"assets/assets/brazil.json": "80faca3a1fd52496e2e1f6dd54497965",
"assets/assets/brazil_counties.json": "27639f8ddd2a0bdb310887f3d6b00289",
"assets/assets/brazil_lines.json": "24f3b8cd492e08bb488d2c1f91c8eac7",
"assets/assets/brazil_states.json": "fd81e4bfbecf3e073794ecb7bdd29b99",
"assets/assets/fonts/IBMPlexSans-Bold.ttf": "999fb50e1c3537c3e5039f3cf8579347",
"assets/assets/fonts/IBMPlexSans-ExtraLight.ttf": "89293b5a931434322648d5ccb769202f",
"assets/assets/fonts/IBMPlexSans-Light.ttf": "341cd5ba84b31a9a949eac15e96e2bf5",
"assets/assets/fonts/IBMPlexSans-Medium.ttf": "424d6e28fe50c7fb5d665d4b0fdf0cb1",
"assets/assets/fonts/IBMPlexSans-Regular.ttf": "2470b0f5dce95a820b228c5bdfc95eca",
"assets/assets/fonts/IBMPlexSans-SemiBold.ttf": "f1f29edcd875f315e596c24b9fbb8c19",
"assets/assets/fonts/IBMPlexSans-Thin.ttf": "a825187b19b83404f4be06879a9895eb",
"assets/assets/images/14.jpg": "652006828ae767d825aed0dcfe74cacb",
"assets/assets/images/23.jpeg": "e811da759120216e0e76fb5b5a2084c0",
"assets/assets/images/avatar.png": "5aad78214cf890564ddc640ba02c561f",
"assets/assets/points.json": "50764aaca348dd6a3d9b36ef72e9414b",
"assets/assets/polygons.json": "71f8038444f2970d5d9334c721df4346",
"assets/assets/r2.svg": "1e806e897961e8c87b9bcdfd70ddf889",
"assets/assets/sana.json": "c73380afba1758fb869e47325f4913e6",
"assets/assets/soca.json": "c73380afba1758fb869e47325f4913e6",
"assets/assets/svg/14.jpg": "652006828ae767d825aed0dcfe74cacb",
"assets/assets/svg/9.png": "dcc9827ad6bd7b29481a10c9a4649c2f",
"assets/assets/svg/bug-svgrepo-com.svg": "ea4eefb8a695fbea5295b8eddd11d9b5",
"assets/assets/svg/burn.svg": "17878d64166afc53d13e59310ef0715c",
"assets/assets/svg/distance.svg": "04ebe03355fa88675711ef92640eff04",
"assets/assets/svg/exercise.svg": "742d6c5a839fbdd352ba279d7a41a86c",
"assets/assets/svg/farm-svgrepo-com.svg": "1fd973dd6d8dd667784f0766f8ffd815",
"assets/assets/svg/fertilize-svgrepo-com.svg": "2c1a8187bb06dfd1b34a7009b597abbc",
"assets/assets/svg/help-circle-svgrepo-com.svg": "66cc03038ecda405119537725f83c0c0",
"assets/assets/svg/history.svg": "86fcbe39b9bce9664e88283b1a260b98",
"assets/assets/svg/home.svg": "cf6b258752d57b52ec605c3eb56d4936",
"assets/assets/svg/info-circle-svgrepo-com.svg": "24254162ce6b2672698ad4a61d2afc7f",
"assets/assets/svg/loan-interest-time-value-of-money-effective-svgrepo-com.svg": "2b8a8770bfb04bcc9ba53f49c0599af6",
"assets/assets/svg/more.svg": "beac4b50442fde8b2e171116f03f0b4e",
"assets/assets/svg/process-svgrepo-com.svg": "8fdb26aa32972c92e366f4386e8ecaf2",
"assets/assets/svg/profile.svg": "4c8bbe7a24e05b79fd5228d16f8346d8",
"assets/assets/svg/search.svg": "93908ae1d286be70b16bbb2e4f44ef52",
"assets/assets/svg/setting.svg": "45d4d8a6a8dbdc4c57b46de74ae672bd",
"assets/assets/svg/shop-svgrepo-com.svg": "4b87ea83de00c81679397b5fefae291e",
"assets/assets/svg/signout.svg": "f00d50221b54596fcc1f85ac83590583",
"assets/assets/svg/sleep.svg": "6430bf754369547fb87ecb09b7adf9c4",
"assets/assets/svg/steps.svg": "99d568f08403d1fc3301694015861139",
"assets/assets/svg/users-svgrepo-com.svg": "505f607983a64a16fea71b815316c576",
"assets/assets/svg/watering-can-svgrepo-com.svg": "ac2b6921cef6ac952b15874b5c035f58",
"assets/assets/world.json": "781ebbc3cdb0b0ed768dc100015003ba",
"assets/assets/world_markers.json": "d4267115070ddaad3542df02fb9e5e19",
"assets/assets/ye.json": "18a53f3391e26923e95bc71506911281",
"assets/assets/yemenfull.json": "45b38a05cb329cce2dca8d6271d8edc2",
"assets/FontManifest.json": "b58031e51561a32cd5e4308f3b929e09",
"assets/fonts/MaterialIcons-Regular.otf": "1afa845b22a3bf698d45c4b5ec17d578",
"assets/NOTICES": "b4000eddef829af776b6cc65fd5a1254",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "58778c7bdceb7ef86eb4681e2a2c6940",
"/": "58778c7bdceb7ef86eb4681e2a2c6940",
"main.dart.js": "16dbced1122caa87344a08edacc3a4f7",
"manifest.json": "0ade2cbfcaf92419854b8e455f70f518",
"version.json": "ab4313ea6d5306101b8d34420cfc7ac3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
