import React from "react";

const techStack = [
  { title: "Protocols", items: ["Ethereum", "Polygon", "Solana", "BNB Chain", "Hyperledger"] },
  { title: "Smart Contract Languages", items: ["Solidity", "Rust", "Vyper"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Web3.js", "Ethers.js"] },
  { title: "Node Tools", items: ["Hardhat", "Truffle", "Ganache"] },
  { title: "Storage", items: ["IPFS", "Filecoin", "Arweave"] },
  { title: "Wallet & Web3", items: ["MetaMask", "WalletConnect", "RainbowKit", "Moralis"] },
  { title: "Security", items: ["OpenZeppelin", "MythX", "Certora (for audit practices)"] },
];

export default function BlockchainTechStack() {
  return (
    <div className=" bg-white py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-2 text-center">Blockchain Tech Stack We Use</h2>
      <p className="text-gray-600 mb-10 text-center">
        Cutting-Edge Blockchain Technologies at Your Service
      </p>

      <div className="flex flex-col items-center space-y-6 mt-5 w-full max-w-6xl">
        {/* Top row - 4 cards */}
        <div className="flex flex-wrap justify-center items-stretch gap-6 w-full">
          {techStack.slice(0, 4).map((category, index) => (
            <div
              key={index}
              className="w-full sm:w-[50%] lg:basis-[22%] min-h-[150px] rounded-2xl shadow-lg p-6 border border-gray-200 bg-gradient-to-tr from-white to-gray-50 hover:shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold mb-3 text-center">{category.title}</h3>
              <p className="text-gray-700 text-sm text-center">{category.items.join(", ")}</p>
            </div>
          ))}
        </div>

        {/* Bottom row - 3 cards */}
        <div className="flex flex-wrap justify-center items-stretch gap-6 w-full">
          {techStack.slice(4).map((category, index) => (
            <div
              key={index}
              className="w-full sm:w-[50%] lg:basis-[22%] min-h-[150px] rounded-2xl shadow-lg p-6 border border-gray-200 bg-gradient-to-tr from-white to-gray-50 hover:shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold mb-3 text-center">{category.title}</h3>
              <p className="text-gray-700 text-sm text-center">{category.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
