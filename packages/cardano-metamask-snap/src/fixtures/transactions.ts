export const transactionsFixture = {
  simple: {
    txCborHex:
      '83a30081825820ba638246bd9be05aa46e865320c354efea75cf5796e88b763faaa30c9fbb78de000181825839000743d16cfe3c4fcc0c11c2403bbc10dbc7ecdd4477e053481a368e7a06e2ae44dff6770dc0f4ada3cf4cf2605008e27aecdb332ad349fda700021a0001e240a10081825820abd0f26723a5de57c10eb483b14c0aec1c365d911d46ab38684c2b9b2fa4a4915840f2b04185587ed5af88cac6778b0a8392f1cd4d51e6c3722d96db62cae9d716f2d71a22aac6bde7ec097e1357b9e2ffa70eb9ab5d757d24180c843593fb302f09f6',
    txBodyHashHex:
      'b720f2acdf0fdea02504880987e9e25c84590660ff390a75d701b616b3792992',
    networkId: 0,
  },
  simpleWithChangeOutput: {
    txCborHex:
      '84a40082825820601ec4c20245d85d74dc84cdfcb7bda675619da896ba371abf8c3cce62edd72001825820131f0354a9bfa9b72a819e91b79e0d224f700e606fdc4c3a8af18da1970448bd01018382583901918e5a92781f6535f02f4ccedea5ef175c2e9da646b7075e0c051e7332deb239da91292bb73843dcc9e6f318ab68fda7524819cf151719211a001e84808258390177ea7df4bdf5044d700b72191880941ed1134beecbfe65a29524e3dd1fd7449b67f53eed74ca1cf06da24dcf7483af0204b282e9d3de23a01a0011f4368258390177ea7df4bdf5044d700b72191880941ed1134beecbfe65a29524e3dd1fd7449b67f53eed74ca1cf06da24dcf7483af0204b282e9d3de23a01a00166290021a0002ab19031a0744ff91a10080f5f6',
    txBodyHashHex:
      '0f3dfd06e3faac818449bb6f8a465147195628dfb238922424000bd139030441',
    networkId: 1,
  },
  multiAsset: {
    txCborHex:
      '84a40082825820141d22542ad9b43073c1cf7e829089e5d7f9f27392b7868d42ac66e62eadd9790182582085d84fcf975ee7ae4c5cef2c67ff7228573688dc92e3b21258efbfd6a9bac59201018282583901a39fbd8da0d8eed2cefb7b12d6730b3221ebfb120442050445fec8cd16bdd5c45f332ec53f7cdbced0359d78fd0c0146c0a2f964badf2f9f821a00117e5ca1581ca0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235a145484f534b5918ea82583901a39fbd8da0d8eed2cefb7b12d6730b3221ebfb120442050445fec8cd16bdd5c45f332ec53f7cdbced0359d78fd0c0146c0a2f964badf2f9f821a00cd7378a1581c0029cb7c88c7567b63d1a512c0ed626aa169688ec980730c0473b913a1456c702063021a0009564a021a00049c29031a07538c9ca10080f5f6',
    txBodyHashHex:
      'bfbc0ce891deec4698bdf442ecbcce26b9c0de18cec6f7f5cf65b872e0d60cbe',
    networkId: 1,
  },
  registerStakeAndDelegate: {
    txCborHex:
      '84a500818258208fe6fb18567f18bb7a3486dd9aa5695cd1f2b8a5c471b36d470d21a042ec23180001818258390140ad326f4014e459230919f9483d9efd379205d07d2ed3efe8f9a0c12e9a8078855e2eec73f65c5cc82ec23c690448f1767acbd9bfc384961a001bdba3021a0002a8dd031a0760a5c6048282008200581c2e9a8078855e2eec73f65c5cc82ec23c690448f1767acbd9bfc3849683028200581c2e9a8078855e2eec73f65c5cc82ec23c690448f1767acbd9bfc38496581cce19882fd62e79faa113fcaef93950a4f0a5913b20a0689911b6f62da10080f5f6',
    txBodyHashHex:
      '01b03499ac2f3f44d5d1da70bd3dcd801c00045d4dcd979408aac733d4cf05af',
    networkId: 1,
  },
  newRegisterStakeAndUnregister: {
    txCborHex:
      '84a500818258208fe6fb18567f18bb7a3486dd9aa5695cd1f2b8a5c471b36d470d21a042ec23180001818258390140ad326f4014e459230919f9483d9efd379205d07d2ed3efe8f9a0c12e9a8078855e2eec73f65c5cc82ec23c690448f1767acbd9bfc384961a001bdba3021a0002a8dd031a0760a5c6048283078200581c2e9a8078855e2eec73f65c5cc82ec23c690448f1767acbd9bfc384961a005b8d8083088200581c2e9a8078855e2eec73f65c5cc82ec23c690448f1767acbd9bfc384961a005b8d80a10080f5f6',
    txBodyHashHex:
      '45fa5140fe83e6d192afd94f1c7a5f96733836599b36ee8609fd5074d2d750dd',
    networkId: 1,
  },
  voteDelegation: {
    txCborHex:
      '84a500818258208fe6fb18567f18bb7a3486dd9aa5695cd1f2b8a5c471b36d470d21a042ec23180001818258390140ad326f4014e459230919f9483d9efd379205d07d2ed3efe8f9a0c12e9a8078855e2eec73f65c5cc82ec23c690448f1767acbd9bfc384961a001bdba3021a0002a8dd031a0760a5c6048483098200581c2e9a8078855e2eec73f65c5cc82ec23c690448f1767acbd9bfc384968200581c7293814591e7543561361bafe399d9b5012d537c46cf70fa5e4faa9f83098200581c2e9a8078855e2eec73f65c5cc82ec23c690448f1767acbd9bfc384968201581c7293814591e7543561361bafe399d9b5012d537c46cf70fa5e4faa9f83098200581c2e9a8078855e2eec73f65c5cc82ec23c690448f1767acbd9bfc38496810283098200581c2e9a8078855e2eec73f65c5cc82ec23c690448f1767acbd9bfc384968103a10080f5f6',
    txBodyHashHex:
      'f1c7793a7ec5e43696f68a60a7ac8273c8bc8871c1ca4ace8d291a463e45fc47',
    networkId: 1,
  },
  unsupportedPoolRetirement: {
    txCborHex:
      '83a500818258201af8fa0b754ff99253d983894e63a2b09cbb56c833ba18c3384210163f63dcfc0001818258390140ad326f4014e459230919f9483d9efd379205d07d2ed3efe8f9a0c12e9a8078855e2eec73f65c5cc82ec23c690448f1767acbd9bfc384961a002dd2e802182a030a04818304581cdbfee4665e58c8f8e9b9ff02b17f32e08a42c855476a5d867c2737b7186da0f6',
    txBodyHashHex:
      '2f8457052618d8f7b4e8656113f0df49adac1404d029d91de2b1b9250afc890d',
    networkId: 1,
  },
  plutus: {
    txCborHex:
      '83a8008182582094461e17271b4a108f679eb7b6947aea29573296a5edca635d583fb40785e05d000181a400583900f3db2225703e4cfbe2227772bdf057f9829449f18ac81e250ceb01ca0a84430507e150f0a06109dc3a7b1956b7a0586ae9078a55ef0e0b03011a000f4240028201d81841a003d8185846820158425840010000332233322222253353004333573466ebc00c00801801440204c98d4c01ccd5ce2481094e6f7420457175616c000084984880084880048004480048004102000b5820853cbe68f7fccdeeeb0fd7b711ea147912190c35ac52d9d94080ae82809b2f840d8182582094461e17271b4a108f679eb7b6947aea29573296a5edca635d583fb40785e05d0110a200583900f3db2225703e4cfbe2227772bdf057f9829449f18ac81e250ceb01ca0a84430507e150f0a06109dc3a7b1956b7a0586ae9078a55ef0e0b030100110a128182582094461e17271b4a108f679eb7b6947aea29573296a5edca635d583fb40785e05d02a0f6',
    txBodyHashHex:
      '5abe8c827f2fa7b7c0720051f3716239e5aad29e45f437620b8b3b147cd93411',
    networkId: 0,
  },
  withdrawals: {
    txCborHex:
      '84a500818258205406048cad21386377874c741c453ee09cd3fac7077ed3f6a42528afbeae149500018182583900f3db2225703e4cfbe2227772bdf057f9829449f18ac81e250ceb01ca0a84430507e150f0a06109dc3a7b1956b7a0586ae9078a55ef0e0b031a0077e8b4021a00029e35031a03c1f86205a2581de00a84430507e150f0a06109dc3a7b1956b7a0586ae9078a55ef0e0b031a006b44a9581df0760fb6955d1217b1f1f208df6d45ab23c9e17b0c984a2d3a22bbbfb81a00bd979ca100828258209c253c89bbe32d0b11c2abfa464e75627af25beb90c15adbd9f6b62160dfa8385840c0c521cd4eabbc239202b3bd44fc08ef22b641f956bfd4918c0001669647742e7d86198677db5ff08ee62649793afa5d3940631fec6ee00e391a7884ba9f5d018258202ef8d7c9e19bb688860a900123e5bbe2eff7187336590b3928d43a830110cd625840583bdc20311974ed5ace1252d8dd4beae4e2f82f8bd4279d2e80f5ea1dfd5d5bfb3ca6b26060ebe08a171634b0527e7f2f3ef87a81dfa954a8723d8e552deb07f5f6',
    txBodyHashHex:
      '610e543908f5325a15b5ff670111b343633c52233d41020e7c34268bc7799e49',
    networkId: 0,
  },
  mint: {
    txCborHex:
      '83a400818258208fe6fb18567f18bb7a3486dd9aa5695cd1f2b8a5c471b36d470d21a042ec231801018182583930167f6dbf610ae030f043adb1f3af78754ed9595ad4ac1f7ed9ff6466760fb6955d1217b1f1f208df6d45ab23c9e17b0c984a2d3a22bbbfb81a0001e91f021a0003050309a1581cd7a7c6999786354b6dbee181a2f562a628a75fce126f4da40ce5d9b2a246546f6b656e313a0098967f46546f6b656e321b7fffffffffffffffa0f6',
    txBodyHashHex:
      'd2cb8c564b73d4b6a7fc0708244aa413c4dd68c5d206b7bce8d9de4601395135',
    networkId: 0,
  },
  auxiliaryData: {
    // auxiliaryData from https://github.com/input-output-hk/cardano-js-sdk/blob/cbbede75349c359688c91c963deab0a8a9c8cd24/packages/core/test/Serialization/AuxiliaryData.test.ts
    txCborHex:
      '83A3008282582014461E17271B4A108F679EB7B6947AEA29573296A5EDCA635D583FB40785E05D0082582094461E17271B4A108F679EB7B6947AEA29573296A5EDCA635D583FB40785E05D00018182583931550D0F8B591480FE57E832AB99D6C2FC387C8F417AB09399CB74B5E1F8ECFA2654CFE1DD931439DB45E43F5D1A73129DCB7E4ACC736C766A000200A20081825820ABD0F26723A5DE57C10EB483B14C0AEC1C365D911D46AB38684C2B9B2FA4A4915840F2B04185587ED5AF88CAC6778B0A8392F1CD4D51E6C3722D96DB62CAE9D716F2D71A22AAC6BDE7EC097E1357B9E2FFA70EB9AB5D757D24180C843593FB302F0901828201828200581CC4B9265645FDE9536C0795ADBCC5291767A0C61FD62448341D7E03868200581CE01B7ECE78D656AD5848362DED335254167378C1723CD94DF336A6308200581C7ED7FE51D02AEDE226DF3912F4F347BF9598138091801119A3DC7A1FD90103A400A11902D5A4187B1904D2636B65796576616C7565646B65793246000102030405A1190237656569676874A119029A6463616B6501848204038205098202818200581C3542ACB3A64D80C29302260D62C3B87A742AD14ABF855EBC6733081E830300818200581CB5AE663AAEA8E500157BDF4BAAFD6F5BA0CE5759F7CD4101FC132F540284474601000022001047460100002200114746010000220012474601000022001303844746010000220010474601000022001147460100002200124746010000220013',
    txBodyHashHex:
      'f3caa64d97092841adc94a8b2c1a3d66a60c5358db08efb0c3f186efb9612f6a',
    networkId: 1,
  },
};
