import { createConfig } from "@ponder/core";
import { http } from "viem";
import { CrosschainForwarderArbitrum } from "./abis/CrosschainForwarderArbritrum";
import { DlnDestinationBase } from "./abis/DlnDestinationBase";
import { DlnSourceArbitrum } from "./abis/DlnSourceArbitrum";
export default createConfig({
  networks: {
    arbitrum: {
      chainId: 42161,
      transport: http("https://arb1.arbitrum.io/rpc")
    },
    base: {
      chainId: 8453,
      transport: http("https://mainnet.base.org")
    }
  },
  contracts: {
    DlnSourceArbitrum: {
      network: "arbitrum",
      address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
      abi: DlnSourceArbitrum,
      startBlock: 17444924
    },
    DlnDestinationBase: {
      network: "base",
      address: "0xe7351fd770a37282b91d153ee690b63579d6dd7f",
      abi: DlnDestinationBase,
      startBlock: 1371680
    },
    CrosschainForwarderArbitrum: {
      network: "arbitrum",
      address: "0x663dc15d3c1ac63ff12e45ab68fea3f0a883c251",
      abi: CrosschainForwarderArbitrum,
      startBlock: 17444924
    }
  }
});
