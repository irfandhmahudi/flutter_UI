'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b982e61408c63c28c09b224d256269c2",
"assets/AssetManifest.bin.json": "b814a75da74519cc416b52b249716d72",
"assets/AssetManifest.json": "78c6bc4dcdd3f7b00e69b464dd1ff19a",
"assets/assets/images/0.png": "43fda0543734db675b61879133646d33",
"assets/assets/images/apple_icon.png": "0df359eee7e7e79e5b23785b23430ca7",
"assets/assets/images/banner.png": "9ccc57c66dce422bfddef3cef359d527",
"assets/assets/images/bean.png": "26b4e64f63cd9672d57749ce717dab8f",
"assets/assets/images/bg-splash.png": "06bccad77a7a03cf9a4cd48d866d1971",
"assets/assets/images/bg.png": "dfeee82bf13255b57e1b59b6ddf01501",
"assets/assets/images/bike.png": "e63fb456071bd4b923dbe6b25e84943a",
"assets/assets/images/cenil.png": "39cfa84352c882d653f7cd34428745ab",
"assets/assets/images/coffee1.png": "09357f42ef2ca28787ae3c752de75f52",
"assets/assets/images/coffee2.png": "42d2628e7ce0faad9900c412ad110e84",
"assets/assets/images/coffee3.png": "c51fee126103578a37896d40c11756ff",
"assets/assets/images/coffee4.png": "364efcb9e37228499d4b1749440a5b72",
"assets/assets/images/default_pct.png": "434de483f91017579f1beb3090084293",
"assets/assets/images/Ellipse%25201.png": "f7e6f4d0c2e74e6a9671d2b508b5e284",
"assets/assets/images/Ellipse%25202.png": "2debc5877bf380865bb09d9df6ed7289",
"assets/assets/images/Ellipse%25203.png": "e7c114b3d811dfcf4010d7d01efe77fe",
"assets/assets/images/Ellipse%25204.png": "6d9359e43c7a15bc8d31ba833b4898a6",
"assets/assets/images/Ellipse%25205.png": "5d7d983d93143e15b93b8dfe8a97aa5e",
"assets/assets/images/esteh.jpg": "7a3fb101f4036758e723d305316b63da",
"assets/assets/images/facebook_icon.png": "2c38e55047a1cfdeb0414c98bfd26b83",
"assets/assets/images/google_icon.png": "6cbeb006a51f683329b95485e5d4a59b",
"assets/assets/images/ic_arrow_down.png": "6b6c95784d403860d8903e8f920c41a4",
"assets/assets/images/ic_arrow_left.png": "e3acc1589254a96dd7335ee8d00e4b53",
"assets/assets/images/ic_arrow_right.png": "ba2d0128eb4e86d0eed2162c1fa7be65",
"assets/assets/images/ic_bag_border.png": "26f8b7e5fa52f2b3238647ff8f051810",
"assets/assets/images/ic_bg.png": "22594b0769269d9ebe893f410ac509fc",
"assets/assets/images/ic_checkout.png": "f2c31ca0dd6de1898985aa36d96ee1b8",
"assets/assets/images/ic_doc.png": "f3efe58b2d8477afd5e0dfd466addd07",
"assets/assets/images/ic_filter.png": "1e5dac1261ef000c443a867d9f514fb0",
"assets/assets/images/ic_heart_border.png": "9c8d8557b4f2beea8aa8ac026b6ae8d9",
"assets/assets/images/ic_home_border.png": "0903bc0b77499c3391947f06adad61d0",
"assets/assets/images/ic_home_filled.png": "bdf093928fac33d53129ca2b0dfc6e88",
"assets/assets/images/ic_info.png": "6fe3e8f8de2172b645e3021ed5a67de1",
"assets/assets/images/ic_launcher.png": "a067a549f8567315a47f80099a8ba571",
"assets/assets/images/ic_logout.png": "d0fea6c504f5073c9afd852f5aabb4fc",
"assets/assets/images/ic_notification_border.png": "a3c6da12bbebb263beecbd215b0ef3cd",
"assets/assets/images/ic_notify.png": "98d632864c7eb1fe2fe868da3860a8ed",
"assets/assets/images/ic_password.png": "03e43a78dcb44169c78cb1e0d179aeb8",
"assets/assets/images/ic_profile.png": "b9646a89e6774179d70e6cb3f6a387a3",
"assets/assets/images/ic_search.png": "d6d0115e88f59a4a29b4116d205be948",
"assets/assets/images/ic_star_filled.png": "add3d09b2c0f316386010824663a87ef",
"assets/assets/images/milk.png": "69804989cb10bc0a294e5d8bc13adf4f",
"assets/assets/images/nasgor.jpeg": "573436d7d49c5068abe0bbab91433662",
"assets/assets/images/s0.png": "113683ed703dc03a13f1209a468d2ea4",
"assets/assets/images/u0.png": "45b788294c10e2dfad04ac69331ef962",
"assets/assets/images/vl0.png": "7d76030b48b4137e52c389c94d7e727e",
"assets/assets/images/wingko.jpg": "653081a6c2e191a63e3498a5679c7e36",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "03ad13543631d0a11bbf80beeba00d21",
"assets/NOTICES": "8b7291d79cfcec2945677a3d47c26477",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d1cbbc21719cc2b3ed13f9fa585126dc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "910d5e124a17080d480e62ccd4760432",
"/": "910d5e124a17080d480e62ccd4760432",
"main.dart.js": "b35265af7c5eefb758453e7cab507129",
"manifest.json": "90d9b0ffc81b8323778b390ceab5febd",
"version.json": "ef75f754b3b3163d63765ce3c4d8eb70"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
