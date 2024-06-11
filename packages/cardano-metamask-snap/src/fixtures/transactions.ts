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
};
