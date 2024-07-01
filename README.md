# Fusion - Frontend

![Made-With-React](https://img.shields.io/badge/MADE%20WITH-NEXT-000000.svg?colorA=222222&style=for-the-badge&logoWidth=14&logo=nextdotjs)
![Made-With-Tailwind](https://img.shields.io/badge/MADE%20WITH-TAILWIND-06B6D4.svg?colorA=222222&style=for-the-badge&logoWidth=14&logo=tailwindcss)
![Made-With-Javascript](https://img.shields.io/badge/MADE%20WITH-Javascript-ffd000.svg?colorA=222222&style=for-the-badge&logoWidth=14&logo=javascript)
![Deployed-on-Fraxtal](https://img.shields.io/badge/DEPLOYED%20ON-FRAXTAL-fef8f4.svg?colorA=222222&style=for-the-badge&logoWidth=14)
![Made-With-Noir](https://img.shields.io/badge/MADE%20WITH-NOIR-f2c2b6.svg?colorA=222222&style=for-the-badge&logoWidth=14)

> Fusion is a multi-chain smart contract wallet that leverages zero-knowledge proofs for cross-chain deployments and authentication.

> Gas Tokens (GAS) are zk-powered ERC-20 token to streamline gas payments across all compatible networks within the Fusion ecosystem.

This is the frontend for the _[getFusion.today](https://getFusion.today/)_ hackathon project at [Fraxtal Hackathon 2024](https://dorahacks.io/hackathon/fraxtal/). The repository was scaffolded with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

> **Deployments**
>
> - Verified contracts - [Contracts](https://github.com/FusionFraxtalBuild/contracts)

> **Pre-requisites:**
>
> - Setup Node.js v18+ (recommended via [nvm](https://github.com/nvm-sh/nvm) with `nvm install 18`)
> - Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
> - Clone this repository

```bash
# Install dependencies
npm install

# fill environments
cp .env.local.example .env.local
```

## Development

```bash
# Start development server
npm run dev

# Build production frontend & start server
npm run build
npm run start
```
