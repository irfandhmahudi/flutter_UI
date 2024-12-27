'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b59829627cf2542213fc6c2213bfcb3b",
".git/config": "f14fcc388f1a7c03bc17d93c0fd96aa9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "59d766d9249fa7a239cfff191718113b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a31e7473bb8252c32288604700e4b052",
".git/logs/refs/heads/main": "3211f771b222caa76e0218be9204d226",
".git/logs/refs/remotes/origin/main": "fe6d74806dc47fff55cfcda2db7f6fbb",
".git/objects/01/4fc9d9b06a277c7835a74292a37af329cf5b22": "6999fd58465b41e9ffaeff6f3a99f248",
".git/objects/02/d8c8d940c34ff8f18d98cf64f5e2c2a628c473": "11c9b1433bed726180ef8270bad5a1a2",
".git/objects/03/2080470f0d116c0c04d85f2ddc5968d1b2bdc8": "a31f731363d6e3c4559a7ce6ea0fea08",
".git/objects/04/20898f78dc4b6f39a8e6d86f3a47c8456e0ea5": "2b52149884a3c4945249161b5add8b7c",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/9f7a1a74f7071be74736dc212be3a168a44018": "066516b4ebb5cf47d7de07c56ff186b5",
".git/objects/0d/96e661e1f7b075a157e367440f783ce850bf09": "d39ecc8e91fa5ce1b4b2e433cb0c4dda",
".git/objects/0e/c9059b27c2168eef7414dc226e66f4fbf0861e": "e82af0eb30ad516d853f35a968f51fe5",
".git/objects/0f/3ce789451573fba34016a5be367a0cfeaabfa8": "10e5db5f516bebd03fb276b60c026c84",
".git/objects/11/21a2531e92945c74456723ab0a121c2ef99cdc": "06fc0abcbc7e706c98a21f32e739d8a9",
".git/objects/12/d5cb66083f5a20d10565adb47b6c4138931b64": "94de11217efafd421ea2e4e258083344",
".git/objects/13/59dc8c729d37747c81e7531e3c59f1f0785444": "670a1a448c8ed59ea51c9dcab30748d8",
".git/objects/15/877c54cb28a8ea394ef3e3859277a54fb99052": "4d23d75f2b63671d543cc27b2bc4c180",
".git/objects/19/7e68caa04cd0b009cd44bc8333768d7bea07cd": "1ceeed2a30bc821dd9fffbdf6a10382b",
".git/objects/19/fb4796856b7baedcc44e334b37a9c0320c815a": "e10b64b6fddc7bd639a75b3626b8e2d7",
".git/objects/1d/1d1494719b03ee8110d6db3d0e827197de8359": "1fe0c766fd4ce57dabf689a5a7d899f9",
".git/objects/1e/08f15ede9236ddb1de77c5773915318dc248fb": "8029ad3f8486f8b597a7cc2a21667925",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/7a08d1a1659c756807f65d618942e288404a2f": "7ff30bc0e0c17feeb79a199d5189f347",
".git/objects/23/fe3fa837587bfde7e4b38a997283bb12b59fa2": "fe531751c98341dc87fa11db90fa61af",
".git/objects/25/7b2dcb50e58bd3ed9b185c33703b34f64f6f6f": "f4fc56afabf520e225af8051e00456e5",
".git/objects/26/3e6c30bebdcab9a8c202ceb6c0f4f1f1bc94f4": "3cb09c22ba3e76495648306f8d45f9af",
".git/objects/26/ed336b97944d6d62ae055ad370a0f207b9acc3": "ddc7bcdd1ad960fbc5781f294dae7fdd",
".git/objects/29/42f5238774a510ce16d0b6c627339666019641": "aa2f5cb3eb7fb377c7628b193b4457e7",
".git/objects/29/a5ed104c081da36963869970878a5afa6d06d2": "e3f84f82f43fdf6a3e8767c27b1b7aa9",
".git/objects/2c/e7f0348d75464fbccfe9987579480a6873b989": "f408461433278e5d63231be7b68e3ed9",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/dfa41411d810c542f469ab2ea08789f6c61e0a": "71c8902e91d1a01eb227d88c1c9c7291",
".git/objects/31/166c95d2e146b02857e83ccf62d33662bd53d0": "6930b7388e2244d6ce36ca2a30b893de",
".git/objects/31/45e8d868ab2fbc409806894374639814336e3e": "a71d4ae76e009454adc43605c3918e3b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/4441f085a51dbb6084606bf92f683d072d3cbb": "872cbdc6d14449328f0f39a9be2ec6c4",
".git/objects/34/ceaf0ec45dd5f165d0e38d05a85246cbec81ca": "2c996a9693e5711df8ea13f28d43721d",
".git/objects/35/24940dfa0847ef0434c17fac0c3687a2bec740": "cc33b944e8fea5b94a1ebfec412046ca",
".git/objects/37/274710c4a62edd1c77023099d14df1f9ffdd93": "37737b9f64af0a563ddf8936df253c97",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/0d76aeeb31afae60dbf7e1b1e0b4f7112b9f7b": "b896fd36f40875fd4e38673d658448bd",
".git/objects/3e/5a6d48063d71dca18c1ca661614d8ba32300f9": "038b3c2b4461b3f540a7db8d9ac7f55f",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/1704a5a068dbd8ca88e697a48268e613051277": "7e80cef816a8738c411fd939029a8b78",
".git/objects/41/258a2a9aeda02c6eaa3db8480eeb4bff1c6087": "27bcf8a70356e60596b1a229f94b0857",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/72d0aee3f4b6fa89008b8e70d9253ca7c12a6f": "2d6d887598a5054c5d29e0a5168aec55",
".git/objects/46/eea5ee04485b07cca5e28f7f407d7fc3cf6787": "1418af9cbcd72b32463f866be9aff0ef",
".git/objects/47/527dfbf1071ea571b02f1787756b448279f2cf": "d9804d69147f4946cc489b642a101425",
".git/objects/48/4537e3c0358e84f341b75059e0ca5fc9a01d0b": "5a2d46d4524c89c324e3acd72adc14ef",
".git/objects/49/10be9de22a926379dcb2dbc1872ceacd127587": "a5957417b31d444b74e20bd87c14e79d",
".git/objects/49/5b57ab6db3a192edaffbb39c82b54efeb27a4d": "13d184bf6f4adbbadf8fddb688999c47",
".git/objects/4e/5f8acdfca7cd772950cb5e2c4564176bb6a1f7": "7b7652e915902e80ee17c39fa1050eeb",
".git/objects/4f/ced2c71ab14adaf8190887b111072279779002": "ec454918673447346bf4f4cfeaf92fff",
".git/objects/56/667ffc49aab2059816689edbab6296b52c5e3c": "4d6c95d3e4565e14924319dc373ca786",
".git/objects/5b/d5eb0575e6acc67fd9b22215988db0e7de9e89": "60509e8899d16951b62e5c409eea9a5a",
".git/objects/5d/9781306f97df6d423d9ce608576f0a2cbdf203": "a67a945e015c976ed618dce72b64de7d",
".git/objects/60/601d7ec680d861b249d249cfb7223c98d9702e": "954996d9045ba0cdc15779e8eccaeea5",
".git/objects/64/8feb985e1a8c862ccf674262defb0e43aca59e": "eecc3861df4407d257ed629d7c11633a",
".git/objects/66/eae0ccca0942a49488027cf153ffdff54da80d": "479884d7d38c7cbfb8e8bca55ea51007",
".git/objects/67/2161d24c68c265a733c14d7b3b89add0c1785e": "4a5ebafedacb2774e3bcff8fd6ce890f",
".git/objects/68/997cb8fa1780722597711b99d7dc73aed364e9": "175f1317336adaedca2e2d9dd8ef912f",
".git/objects/69/0673a55557215d09de4335e877aa682fe278e2": "b6c2e73fef47354ba2b6e2f09de474f3",
".git/objects/69/af4c6571670665a9581fd47f249a4f5e691553": "37d7bbd11d130f789a9927053f4ae8d0",
".git/objects/6b/a02e0bc4b58fec26039ebd19cf61af22d60b7b": "e649132cc20fb7ea01416ae43004759d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/6a0c678fb0a52cd9baf0384fba507b51aeb55b": "397df7bfba8b6fc1cf5202fdb0403c4d",
".git/objects/6d/70a8f31eb0d13d08c9e491ffe66f9d8a8e22aa": "2158d168226d284462b285e239eb90ba",
".git/objects/6f/a017e6dfd6a78644f55e10cc4eb72cf44401a3": "b14cfb7e3828ab10d182526a7255fe54",
".git/objects/7f/6a76d615229e7460dbb8b959aa7c5d9d9225d6": "c10ff34e20d61558652af15e4d9cd004",
".git/objects/7f/ca6305710a2467e762c3b474f0c2ebee8082c1": "ab5615cbe866e169a302a5a1470939b1",
".git/objects/81/c9097f666450b3f5dc83c253ac921789758559": "bb26e9c5df7e7a34358b898615a68e61",
".git/objects/82/21430e36814f4c2802a8a2b7cda48726fa7389": "f381e5ddbaccccb2887117cb46d5c056",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/b349512a1903ce5dd56f186333374b4c9adb61": "2765a34d058ec1b6ba15d525bb6ff9ce",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/83400ccbacb54320038b58c5c970123c1f636e": "6a42c54edde5a280889aeaf20545075a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/d06bd75f1d04f3304fa178d1ffe632ae441305": "cd3b46cba9de16a646ef8176234816d4",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/0989346cba0d0df106ea576de22b5399217af9": "db265db5e9042dc0ae5bfd917c4b1047",
".git/objects/93/fd6beb3faea8614a8db0883fdad00bdbb63c86": "1a0098c2fa309393dbd093fdbd9668be",
".git/objects/96/42413bc20c548776929d55267d330d1a21aa1a": "3cddf5b90dfeaeb384cf5d31ba7fff0a",
".git/objects/96/7c5d8e4555a09afb475f9742692c621b0b2ac5": "44506a77d34f0008f204b8c5933d6e14",
".git/objects/97/8ea101d4f7716056f1a08aafb4220594d81fe4": "c186e900dc0df5cead36ae5a0db26dcc",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/7928f46dd9b56f853555ba63d33a5e7c268918": "a87f2f9ac35ceba3c5284efb6f327cc0",
".git/objects/9a/c69d565350711bda6e7d4ab5ea54f07c27f9b4": "615a0dc26085553fa195ccc6c266e739",
".git/objects/9b/81aa8121c3e50c557ed050752ad2ff2979560e": "1a7fa7b7357ebb594cca57168d53addc",
".git/objects/9d/af42319ff9102d7f55c5b2dcb266181b2b9662": "99dd9f7ba74b7cc7ac92f9287a1de297",
".git/objects/9e/45fc5bed573553e6c6f53777dd7afe5b936a7c": "22e4f20c64ee1f00f63b4cbc0309510c",
".git/objects/a2/635cae9336ec303c49dbe1ae19e20911401d95": "90676f90a1f515f50130c0c0819f4a73",
".git/objects/a2/6d36671d22904c66d2c3850e1901270efb6f18": "12157e3e870479bbc9a006c375cf9e16",
".git/objects/a2/9ba25a933ec958201be675a04f4b2c28000268": "b5f161a6bf6e9fa0a9ebad172a17656b",
".git/objects/a4/97d398a3e15325e64097f19320279b566bf332": "061758f9c58b1e3e339d31413c920948",
".git/objects/a6/90616ad10ed8f5f634d57721245ff5070f0f07": "4de488406a9e80cce783eaadc951640b",
".git/objects/a6/a4dc8539ae6530264a98c6d7614cdbe5206183": "2d3c5dbc4c8403a285ab29a0ec9073ff",
".git/objects/a8/a4d9b99121490ade1d188cf0236ef96c9abc61": "f78734f2fef36afd639f7d5ba1fbed74",
".git/objects/aa/9af64d2e569fabd5b6921b0f648c7786e6f125": "908a13cb33c06fce073b57fcd5a90423",
".git/objects/ac/921138b2b28b8b6a98d2d35efb81f8f6eedb44": "518689fbb75287d4d1ebb31802e30f29",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/dcd077a729fe0d1d06cd8482dc4ad88a15382e": "e33d92b4cd9136566d90a62bc968c213",
".git/objects/b2/886414c32dc43ddf1b6673cd44f9a876377b93": "b515c0da0d2303d764a376c7a49cbf25",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2d0ea483f0b43a7d728e54a38c7b1e4a5de836": "d0805bf8fc877b9f1f2030e22a212892",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/49146df020488be3c9c9ee379eaabab1d358cb": "435ca7cb60955a289568a3b2057c4db3",
".git/objects/bc/538b443a26263a74b9351244cb40f3596deb85": "78c6a02a5281438e660a9380f0da7222",
".git/objects/bd/7ff1513188e6d9118bac0dec5b6eec9d5d833f": "9d85b3955df52c0b7cfd1bbbcee5d345",
".git/objects/bd/b53971994e40dba4b46a3ffd8cdc258fd35e3c": "4f13a527131a6bf03055c5cf3e024c2a",
".git/objects/c3/68ddb4f73d16aa838fca062b2df2af600e3c3d": "2b0af1b527595dc196d96b851923ee42",
".git/objects/c4/c054cbe1757928fddb12a63d87e37450932d80": "84aeb987f4e81922f2b287df80f0c9a7",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/878f803458b9256cc12b0f579cd2cd72008936": "31de90e795eb47dd6ed3569e018187da",
".git/objects/ca/027a9ad4e8994caf301c05eb00f6ea92e2647a": "b569bad2cb509f332ab10ff43b73553d",
".git/objects/cb/c5d1255c0eced0e2cd293252d828ca1584655f": "000b5e3c8dc1e478bfa6b8e4078270ea",
".git/objects/cb/eef0c072ccb12fd7ad9cb3cff454306e78dce7": "958429f251828ea541877c511490aeb5",
".git/objects/cc/be5db0941be996c796ea931648ccc8476540ac": "4643810fce202242819e9e77340d143b",
".git/objects/cd/d9fa6107826f0b9a4324ba5f2c052de11f3718": "7c418a736a36674ca71a7ca30e5a4fee",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/ece8ac3fee2c5aec162c724fde2a3b9edf199a": "827a45a0720b8ee51d4f3f0f478815f2",
".git/objects/d2/bad288aaa642fee28bbe17860cca169039affc": "220871d0294d7b94c697cebbdcd7b94e",
".git/objects/d2/eef893eb115315ac17eaa7cb371660dec62061": "1963fcaec7e3fc9a64cd74e593d844ae",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/75b212da3e942d38a8656311f262c633ce944e": "37e4424b74c84da5f2d7d5a8f6831974",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/1ce847f10f81487a5b944e430092df5c2ee789": "f9e1b004a1d285998ee8d8f91dc2a42c",
".git/objects/da/5a82e593242e48680c5a95b221847bbbeb03cb": "2ee00131af6aab55a0dbf9a84862538c",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/1db60f1ab96011983ddffb9d0a2bc1320d2a5f": "a2cc6e92d4a63639a9853068f74265b1",
".git/objects/dd/575eda78235f96bb2e8c574a2511bde8dedd34": "c2da727d57bd5a652f0b477aadcb0adc",
".git/objects/df/19b0eed74126dfe3cd0044a782267fb380ff32": "f0c9cb3217aa855e83889f2a52d4d63c",
".git/objects/e2/5a4d1cc3ef30ca6cb414e30885ffd67526d899": "45d3c119840d32754e0301780083b000",
".git/objects/e4/b65269dbfa2d3610c0f2586bcaf2acd9dc9db4": "60178b6c37060b301caecec81fef4b35",
".git/objects/e4/c356b0bb0e712ecf35fbfa4aa6205bf7d90ce8": "9b1dc3bfdd411a67c436710075c3698c",
".git/objects/e6/89cc8bd6663cf2553756617d5c87dc5373448f": "b4a4f4548457382bc74f7feef29d16ed",
".git/objects/e9/14b34fb3c58ec2d8ffde0fe4e052ba482e9a91": "d7b02c611e2a881c3b40dd2395922d3e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/a8159febd1b420b72cf3ef0c93fd6c7f233e1b": "774d0c22fd2601b590441b8cab9561c7",
".git/objects/ee/b9637c27a916f48d536c88e37217199ac97e61": "638121af6417fb4aa175edb306415aac",
".git/objects/ef/49da3d998cfc3a141d9441aed494a9ed7ee794": "e9fca8309f0f5e838ce9d821622f6b5f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/7c2b1c64603ab50b84123354591ec0a74d038e": "a3526cb8ee10b257d08a352be3ce68fa",
".git/objects/f3/f458397a15ba26f5a6ad747a041bb120f353ce": "ff9d5c2eb058c5c26c3f0c968df7a21a",
".git/objects/f6/578182f631029c6745d1bf3ed8065465096153": "8f0e9e3181144810ce51532991008a04",
".git/refs/heads/main": "eb4e7ef6d98059220125fb0df849122f",
".git/refs/remotes/origin/main": "eb4e7ef6d98059220125fb0df849122f",
"assets/AssetManifest.bin": "b982e61408c63c28c09b224d256269c2",
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
"assets/NOTICES": "0f8913622395ed8c7679c60cb43193f1",
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
"flutter_bootstrap.js": "a941c0e8f0d06207f2cfb4669f9e3f9e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "910d5e124a17080d480e62ccd4760432",
"/": "910d5e124a17080d480e62ccd4760432",
"main.dart.js": "8effe8786240cda22e0a308941ca6b6c",
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
