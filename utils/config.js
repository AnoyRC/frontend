const config = [
  {
    chainId: 84532,
    chainName: "Base",
    isBase: true,
    rpcUrl: "https://base-sepolia.blockpi.network/v1/rpc/public",
    wsUrl: "wss://base-sepolia-rpc.publicnode.com",
    explorerUrl: "https://sepolia.basescan.org",
    faucetUrl: "https://faucets.chain.link/base-sepolia",
    convert_id: "2781",
    id: "1027",
    symbol: "ETH",
    logo: "/tokens/base-logo.svg",
    addresses: {
      Fusion: "0x64a0D490499B3EBC8d321C946D850e9B2b490283",
      FusionForwarder: "0xA625F2fA1a257b98ED756aD5a634B82AE457e417",
      FactoryForwarder: "0x879069C52E60f49dF8D51Db4BeDcBdb841d11966",
      FusionProxyFactory: "0x47A4620870e1217F0ff3564D99343917b74BCE4a",
      FusionVault: "0x22Fba0A6397a0803c6318feE1E3662711105e564",
      FusionGasTank: "0x51781cc1439BD05a85185C8c8CEc979b263236e3",
      PasswordVerifier: "0x44e8D61d983AaC3571d3c5f69Af056492a83C11f",
      SignatureVerifier: "0xc98e8e1939d1a36d3744bb5009F559Ee6A351C5b",
    },
    tokens: [
      {
        name: "ETH",
        symbol: "ETH",
        address: null,
        convert_id: "1027",
        usd_id: "2781",
        decimals: 18,
        logo: "/tokens/eth-logo.svg",
      },
      {
        name: "USDC",
        symbol: "USDC",
        address: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
        convert_id: "3408",
        usd_id: "2781",
        decimals: 6,
        logo: "/tokens/usdc-logo.svg",
      },
    ],
  },
];

export default config;
