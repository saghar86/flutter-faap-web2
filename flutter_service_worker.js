'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "973f6a8c9b1e3518cd4b1598b54d07c7",
"assets/AssetManifest.bin.json": "f7008fdac7b6e54e78e39627584edd1f",
"assets/AssetManifest.json": "e077b5872e9d110c3cc2a4524c8a6b97",
"assets/assets/database1403.db": "90123ff4aac37050e2b761af09bd2fca",
"assets/assets/fonts/BNazanin.ttf": "fe70eb00cc03165219440c4b13b6bc66",
"assets/assets/fonts/Samim-Bold-FD-WOL.ttf": "f52e71bba82e92701b0bf41ab82782fe",
"assets/assets/fonts/Samim-Bold-FD.ttf": "aa63aaf3fa9d130eb5bf2ccbf53aaa60",
"assets/assets/fonts/Samim-Bold-WOL.ttf": "cb4b7ed602603a3029fb0bed7e3ca30c",
"assets/assets/fonts/Samim-Bold.ttf": "a6bec9aa21ea70bc5cdf0bf3d1a1167a",
"assets/assets/fonts/Samim-FD.ttf": "a4a84b0a56c364fa494c12124adcf47b",
"assets/assets/fonts/Samim.ttf": "cc531f954ce155c4f4863b68e9887b50",
"assets/assets/fonts/Vazir-Medium-FD.ttf": "5340bb6f45ae63ffea8b8be3e7da5d91",
"assets/assets/icons/analyze-active.png": "8b7db44589afe6cbca69093c0ad2d1f5",
"assets/assets/icons/analyze-dark-active.png": "63e41a190f2a684f5f2e260b5d391115",
"assets/assets/icons/analyze-dark.png": "f4e35c2cb2b6dc0c14807c860d23b799",
"assets/assets/icons/analyze-light-active.png": "a458d7d753f2863e9da203ab7a06ed83",
"assets/assets/icons/analyze-light.png": "0ac8b7bea0fedf9f16707d027fb7ebf3",
"assets/assets/icons/analyzeLogo.png": "2161a725891172dcc5dd909d41fda11e",
"assets/assets/icons/book-dark-active.png": "e6b07d2714f054c8e1ba8a91cdbdb329",
"assets/assets/icons/book-dark.png": "18155a5f835aff12eedfa72ba1000498",
"assets/assets/icons/book-light-active.png": "c49c9365b501324f293511dbe85f482c",
"assets/assets/icons/book-light.png": "ba447a4d505421651df751401d8551c3",
"assets/assets/icons/book.png": "9369726df130496d0d48229e6c111762",
"assets/assets/icons/checked-dark.png": "9ac93a705583169cd28b73105a2dc0d6",
"assets/assets/icons/checked-light.png": "83bd6c526ba5427325285824de163be4",
"assets/assets/icons/close-dark.png": "49aff85282e8ac8b24bb3af4c90238d3",
"assets/assets/icons/close-light.png": "b27c4b6099a94e477c1b9b801deecec5",
"assets/assets/icons/confirm-dark.png": "530f84644fba1940ef04c78658772dff",
"assets/assets/icons/confirm-light.png": "f3d59fdf957a2305ac570075a74db45a",
"assets/assets/icons/delfilter-dark.png": "484efa8353b4b7327dab13857c103297",
"assets/assets/icons/delfilter-light.png": "61aac0292c224cf1226ea7226210aaa6",
"assets/assets/icons/excel-dark.png": "9cdde747daeaa7ebb4aa58777c00c243",
"assets/assets/icons/excel-light.png": "69334d2af5065bb7cc187e661384e54f",
"assets/assets/icons/excel.jpg": "d8cc5225c596d23c943afe415472c4b9",
"assets/assets/icons/excel.png": "e958b6f00440060351f0a2011965d2b1",
"assets/assets/icons/exit-icon-black.png": "9417b04195e10abcb80184bfbc2aa124",
"assets/assets/icons/exit-icon-white.png": "350772d03aae09d7042986620d0e200c",
"assets/assets/icons/Faragam-black.png": "0defe093325e89b21b3f2c26f4a34b3d",
"assets/assets/icons/faragam-white.png": "9b149d66d5512fb664e3cba9dc6e5407",
"assets/assets/icons/faragam_logo.png": "5f346cdd6b53a719e2ce410c4ffa8952",
"assets/assets/icons/faragam_logo1.png": "8e640b19b9d2efc676a08f3c408b38f0",
"assets/assets/icons/faragam_logo2.png": "8545424099f1f22e484de15ca975f93d",
"assets/assets/icons/filter-dark-active.png": "fd72172d7dd5baae23a361851e9c7769",
"assets/assets/icons/filter-dark.png": "5024476d4634d3740d5c359cb7e5b7e4",
"assets/assets/icons/filter-light-active.png": "a8d6f9f092d90160349b4bebf3539f74",
"assets/assets/icons/filter-light.png": "5f97683f657fa99bbd972f499ff63680",
"assets/assets/icons/haml.png": "40dbcbddf5a11fc8469994e1e0ba00b8",
"assets/assets/icons/home-active.png": "4d53fbc330fde65c736951dbd4132850",
"assets/assets/icons/home-dark-active.png": "1deab0face15efb8d950bb45bc15589d",
"assets/assets/icons/home-dark.png": "e2ba1f430d9dd598aea8a1583dbe1a52",
"assets/assets/icons/home-light-active.png": "2b7676b03cc417be146c874706d6fcce",
"assets/assets/icons/home-light.png": "3ba18c9ba08c42eeb666b219b3935690",
"assets/assets/icons/home.png": "73773b2cf9b9be2ece3e3ccb9ddc1d92",
"assets/assets/icons/insta.png": "21c926ef78557e128be5792b29b45f86",
"assets/assets/icons/Ita.png": "836e70afe6de3fbb7342949e5d69aeb7",
"assets/assets/icons/location-dark.png": "9876add3fddb3ae149b626a0851b4529",
"assets/assets/icons/location-light.png": "bcbced57140dae8754114a4d4d84febb",
"assets/assets/icons/masaleh.png": "de47bcf8102fa04c6aa9ea979f4051e7",
"assets/assets/icons/mashinalat.png": "218e5b00e29d3b58af69086e69fe3ce0",
"assets/assets/icons/metre-dark-active.png": "ed176a1b7a58c901a0826a4cf657a432",
"assets/assets/icons/metre-dark.png": "17691143090f4c0b3d33510fc0097a9b",
"assets/assets/icons/metre-light-active.png": "b8bc11bbc9aab7d0ba085a90464a3f78",
"assets/assets/icons/metre-light.png": "9d9dde23ce687db93b27c16930ef05e6",
"assets/assets/icons/niroye_ensani.png": "1443d4848c21e16b9b902e4c47c73c8e",
"assets/assets/icons/office-dark.png": "d26977f51d9ca66d812b45feff0953e0",
"assets/assets/icons/office-light.png": "52f9a1309468119a4d28ab3de45bfd2d",
"assets/assets/icons/open-dark.png": "7eb0fc24aa08871757e83f92ae0b4313",
"assets/assets/icons/open-light.png": "b2c155b65aba9ecf38cd8a0485d66c1a",
"assets/assets/icons/pdf-dark.png": "82b4386867dc1886fc9bb4b60e8bd62d",
"assets/assets/icons/pdf-light.png": "2a55a52127e4a274f5133759535c0f52",
"assets/assets/icons/pdf.png": "febd4bff229dab6e2f03f794e0cbe9bc",
"assets/assets/icons/phone-dark.png": "c47d1f9a69a39fb4cb429d2557440047",
"assets/assets/icons/phone-light.png": "58677f7cd9f3b6de143f103699d9b911",
"assets/assets/icons/pishnahad-black.png": "142cc81de595dda9b384a6715053e1ac",
"assets/assets/icons/pishnahad-white.png": "54d1416656055d69c089568ee845d7ab",
"assets/assets/icons/rating.png": "2b273fdbcd1b783e674686bf5bda6f7d",
"assets/assets/icons/search-dark.png": "d0b6f627a9042d974edde6a5d94cf8da",
"assets/assets/icons/search-light.png": "72261fd2b021ec60131eeeea5c8b00c0",
"assets/assets/icons/setting-black.png": "cb9d3ebee8842b00d35a9be76d387f42",
"assets/assets/icons/setting-white.png": "610f45413c9272ceb0dbcc6fe58eedfe",
"assets/assets/icons/shoping-dark.png": "249a68023d1b0b5a5a3c62a91277d583",
"assets/assets/icons/shoping-light.png": "549609d0212815e86d7403c6cb1b2799",
"assets/assets/icons/shopping-dark.png": "249a68023d1b0b5a5a3c62a91277d583",
"assets/assets/icons/shopping-light.png": "549609d0212815e86d7403c6cb1b2799",
"assets/assets/icons/shopping.png": "428993ed0a868d02ceb80c3180aed102",
"assets/assets/icons/sms-dark.png": "3b67474ae77c054cf20ec6a7129a08f0",
"assets/assets/icons/sms-light.png": "683ab27f9b372e848f9a1db984b23d92",
"assets/assets/icons/star.png": "9832b692b65512d5ceba56ad0cddcb63",
"assets/assets/icons/Telegram.png": "fe134d722729de9fc0c2a7c129a04303",
"assets/assets/icons/view.png": "1266611fa8bb0626b2b942af0cf2d52b",
"assets/assets/icons/web.png": "e5e8fe687cd5689d9b5f31cd69cf35c5",
"assets/assets/icons/WhatsApp.png": "6101a9cdd75901a0447d3dfacfd21aa5",
"assets/assets/imgs/about.png": "a43ec6f3f05273f5d753c83d96d41804",
"assets/assets/imgs/aboutapp.png": "7abb6791901792a5cf0b7795de1bd9cd",
"assets/assets/imgs/aboutbiharz.png": "9b8300bd57870eca505874c84b0520ba",
"assets/assets/imgs/aboutbrv.png": "3de5421b743d2821fd98fbdd45d7e54f",
"assets/assets/imgs/aboutkarnama.png": "480544f7ec5a8bb86b3173336f4db58c",
"assets/assets/imgs/aboutmabna.png": "968b0294efa849579276f4fee8bc27f9",
"assets/assets/imgs/aboutps.png": "60a384e7772d475e2480153f9d9a34fd",
"assets/assets/imgs/aboutsv.png": "fd61043795a65a0e010002dfb3c28e19",
"assets/assets/imgs/abouttaraz.png": "1f8d4f0ca0f103234dc48c6e22908fa1",
"assets/assets/imgs/analyzeLogo.png": "2161a725891172dcc5dd909d41fda11e",
"assets/assets/imgs/biharz.png": "f79ecc73301f9f96698c24dc07d6be10",
"assets/assets/imgs/biharzLogo.png": "a5d10a720d070458b2bfd06f43ec4efb",
"assets/assets/imgs/biharz_slide1.jpg": "e24661238c7696dd9e55f0b96dce8a4f",
"assets/assets/imgs/biharz_slide2.jpg": "73147f800740b00b21d671ec545cd232",
"assets/assets/imgs/biharz_slide3.jpg": "6107d769253aac823ea61bf0f705003d",
"assets/assets/imgs/biharz_slide4.jpg": "daa83a6be64ad66dcce5babf835c42d8",
"assets/assets/imgs/biharz_slide5.jpg": "ff4fd7f4713e5771a1d57572fa8ac588",
"assets/assets/imgs/biharz_slide6.jpg": "c4f8a98e7b73f80259e0cafc30136a12",
"assets/assets/imgs/cdLogo.png": "3b9dfd7464ecd0ad209b724c64e80e9a",
"assets/assets/imgs/excel.png": "e958b6f00440060351f0a2011965d2b1",
"assets/assets/imgs/faap-gif.gif": "f996e46ab01bdd4daee50b8b68c40f21",
"assets/assets/imgs/faap-icon.png": "6925b7e323c82d28b3e4d37950f60a2e",
"assets/assets/imgs/faapgif.gif": "f620653bfde2fc144698ea68ca0d0eeb",
"assets/assets/imgs/fap-logo.png": "aba320eb0a2226feac9a9a86199e941c",
"assets/assets/imgs/fap2.png": "695bace425dd0f823a24b328ba673280",
"assets/assets/imgs/faragam-logo.png": "92cbfa7599c4f25f4d1a52a6980aa7e1",
"assets/assets/imgs/haml.png": "40dbcbddf5a11fc8469994e1e0ba00b8",
"assets/assets/imgs/ic_book_o.png": "9369726df130496d0d48229e6c111762",
"assets/assets/imgs/ic_insta_o.png": "21c926ef78557e128be5792b29b45f86",
"assets/assets/imgs/ic_logo_o.png": "8e640b19b9d2efc676a08f3c408b38f0",
"assets/assets/imgs/ic_pdf_o.png": "febd4bff229dab6e2f03f794e0cbe9bc",
"assets/assets/imgs/ic_product_o.png": "798e52346977dacf07fedf8476b41363",
"assets/assets/imgs/ic_rating_o.png": "2b273fdbcd1b783e674686bf5bda6f7d",
"assets/assets/imgs/ic_rating_o2.png": "9f1aa8cf658f7195a610d948579421f6",
"assets/assets/imgs/ic_shopping_o.png": "428993ed0a868d02ceb80c3180aed102",
"assets/assets/imgs/ic_star_o.png": "9832b692b65512d5ceba56ad0cddcb63",
"assets/assets/imgs/ic_tele_o.png": "9a01d3dcdf585c9ad16262ed6fd44efe",
"assets/assets/imgs/ic_view_o.png": "1266611fa8bb0626b2b942af0cf2d52b",
"assets/assets/imgs/ic_web_o.png": "e5e8fe687cd5689d9b5f31cd69cf35c5",
"assets/assets/imgs/karnama.png": "a6ab9cd22959861e534bf2451dfd44f5",
"assets/assets/imgs/karnamaLogo.png": "0ab66b66a2f485fdd2c6022b94b99818",
"assets/assets/imgs/karnama_slide1.jpg": "7191ac3c8d6414a5821d1658bb04955c",
"assets/assets/imgs/karnama_slide2.jpg": "7c434c9fcfa36cf70ce9449960218e65",
"assets/assets/imgs/karnama_slide3.jpg": "d0dc7222709829e88fb8a399c6545624",
"assets/assets/imgs/karnama_slide4.jpg": "a405eabaf1800d20fdd5e1aff05282e2",
"assets/assets/imgs/karnama_slide5.jpg": "c0f4b63f30a224a0cb50800f93d4080b",
"assets/assets/imgs/karnama_slide6.jpg": "5af283a44111ef1c1b2693a2a370e58a",
"assets/assets/imgs/karnama_slide7.jpg": "2ffea2031e3e6cc20e3f9da47e749bbb",
"assets/assets/imgs/LOGO-02.png": "5080e61c9e7a8fd27d6ccfc2fb18a38f",
"assets/assets/imgs/LOGO-03.png": "b2104588718adf93f32f2ce263ccb77b",
"assets/assets/imgs/LOGO-04.png": "104c3e113d4ee61b0818bd051e7f4413",
"assets/assets/imgs/LOGO-05.png": "8545424099f1f22e484de15ca975f93d",
"assets/assets/imgs/mabna.png": "a1effc6b13ffa9621aaaa7921eaafb0b",
"assets/assets/imgs/mabnaLogo.png": "97aedf9596db912433154b75f07ad3ff",
"assets/assets/imgs/mabna_slide1.jpg": "410136a09fcbfc25ed0870ddeecfcbc9",
"assets/assets/imgs/mabna_slide2.jpg": "34e95ac8cdee576a9f60c57e98c174df",
"assets/assets/imgs/mabna_slide3.jpg": "3e859d34d4c122a267c5300c61831006",
"assets/assets/imgs/mabna_slide4.jpg": "04dbb8c52b138b9468cfe81a4a8d77da",
"assets/assets/imgs/mabna_slide5.jpg": "8299581f9d4c1f11023b3c8415bd5a3a",
"assets/assets/imgs/mabna_slide6.jpg": "b41a535057441532e59f98c5e453f335",
"assets/assets/imgs/masaleh.png": "de47bcf8102fa04c6aa9ea979f4051e7",
"assets/assets/imgs/mashinalat.png": "218e5b00e29d3b58af69086e69fe3ce0",
"assets/assets/imgs/nirooensani.png": "1443d4848c21e16b9b902e4c47c73c8e",
"assets/assets/imgs/niroyeensani.png": "1443d4848c21e16b9b902e4c47c73c8e",
"assets/assets/imgs/splash.gif": "f620653bfde2fc144698ea68ca0d0eeb",
"assets/assets/imgs/taksa.png": "c122ceb4c5236c27f83c4b378cb7e98b",
"assets/assets/imgs/taksa001_slide1.jpg": "ca91e553c52e533d69aa277cec2e71e3",
"assets/assets/imgs/taksa001_slide2.jpg": "f866fb09db6a2bd228c2342e4872073c",
"assets/assets/imgs/taksa001_slide3.jpg": "458e68e5abcf891d361412d9ae74d7ac",
"assets/assets/imgs/taksa001_slide4.jpg": "a056d27fd2ccf80a7cfcb2ca4d0d1531",
"assets/assets/imgs/taksa001_slide5.jpg": "c67e6e1ce2b598f57e7848574fca524e",
"assets/assets/imgs/taksa001_slide6.jpg": "a0de0dbcae9733e34eb2f9b06a3cf84e",
"assets/assets/imgs/taksa002_slide1.jpg": "5a974d3a549dac767a5d04569996ceb8",
"assets/assets/imgs/taksa002_slide2.jpg": "7f64973a0f88a4ebaeefda77ad4bf363",
"assets/assets/imgs/taksa002_slide3.jpg": "5fcf6a3788cb74d9c8009685eccec265",
"assets/assets/imgs/taksa002_slide4.jpg": "7b8161aed6b2502a90940f2ddef39dfd",
"assets/assets/imgs/taksa002_slide5.jpg": "93bac932ffdabc682f700311670c9bd0",
"assets/assets/imgs/taksa002_slide6.jpg": "87f0f7fcd6a54426e6dc620d252da25d",
"assets/assets/imgs/taksa003_slide1.jpg": "c2ec1a093f2d947edebca6e489967e6b",
"assets/assets/imgs/taksa003_slide2.jpg": "2ab1d42936e3544241900c97633f7c8b",
"assets/assets/imgs/taksa003_slide3.jpg": "a831e6f0c1bfed4e0ae9153bbe6efa19",
"assets/assets/imgs/taksa003_slide4.jpg": "b224fc744e9f412cb23359c3aa5295f7",
"assets/assets/imgs/taksa003_slide5.jpg": "8196f924d91848554e69d489a8ed807c",
"assets/assets/imgs/taksaLogo.png": "b5d93bee49daa8755792b90584bd37fc",
"assets/assets/imgs/taraz.png": "5d27b4c9c648afb6210553a3e874a185",
"assets/assets/imgs/tarazLogo.png": "1802de2c9b7244b892140a3e7853cdd4",
"assets/assets/imgs/taraz_slide1.jpg": "91ff01c531fb3d7633e017173a0007c6",
"assets/assets/imgs/taraz_slide2.jpg": "272634e80bcd28528500ef8cea27080d",
"assets/assets/imgs/taraz_slide3.jpg": "3f0af975fd186d6b67fa06bfdc9f7295",
"assets/assets/imgs/taraz_slide4.jpg": "c84ca63c3361518b89e95cf9d0fd5751",
"assets/assets/imgs/taraz_slide5.jpg": "f6c091881a8124bfb036a7ba66ebb1c3",
"assets/assets/imgs/taraz_slide6.jpg": "07b4dc92309ab320b214a8d2283d7706",
"assets/assets/imgs/taraz_slide7.jpg": "692b69c70f5f7f4ba013618da8120901",
"assets/assets/imgs/web.png": "4411fe4a47dd0772bd959652f5b45c34",
"assets/FontManifest.json": "7623ea047f4b4ade83ee397448664729",
"assets/fonts/MaterialIcons-Regular.otf": "0a1537224a2f3f8383c5da3156dcee80",
"assets/NOTICES": "4e4d1a94cbf7dcb3fe5fff082f70551e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "14dc7d408771e5116b146f616bf12737",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "c42e0eb5262babc53422d3ad673e6de7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4e017b1cae918b66be93a7df2ec33992",
"/": "4e017b1cae918b66be93a7df2ec33992",
"main.dart.js": "21778c6985d95c5ce6979e5855908a2c",
"manifest.json": "00b2410b0a8bdb07e79f36f33fa61be4",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
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
