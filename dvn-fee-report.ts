import dotenv from 'dotenv';
import axios from 'axios';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

// Load environment variables
dotenv.config();

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const ETH_RPC_URL = process.env.ETH_RPC_URL || 'https://ethereum.zpoken.dev:85/';

const LZ_ENDPOINT = '0x1a44076050125825900e736c501f859c50fE728c';
const DVN_FEE_PAID_TOPIC = '0x1ba77332b3512348570390822184a2119e84a2119e85e5138092144d283c748c0b535d44';

const DVN_FEE_PAID_ABI: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address[]', name: 'requiredDVNs', type: 'address[]' },
      { indexed: false, internalType: 'address[]', name: 'optionalDVNs', type: 'address[]' },
      { indexed: false, internalType: 'uint256[]', name: 'fees', type: 'uint256[]' },
    ],
    name: 'DVNFeePaid',
    type: 'event',
  },
];

async function main() {
  if (!ETHERSCAN_API_KEY) {
    console.error('Missing ETHERSCAN_API_KEY in environment.');
    process.exit(1);
  }

  // 1. Calculate previous day's UTC start/end timestamps
  const now = new Date();
  const utcYear = now.getUTCFullYear();
  const utcMonth = now.getUTCMonth();
  const utcDate = now.getUTCDate();
  const end = Date.UTC(utcYear, utcMonth, utcDate, 0, 0, 0) - 1; // 23:59:59 of previous day
  const start = end - 24 * 60 * 60 * 1000 + 1; // 00:00:00 of previous day
  const startTimestamp = Math.floor(start / 1000);
  const endTimestamp = Math.floor(end / 1000);

  // 2. Get block numbers for timestamps
  // (to be implemented)

  // 3. Fetch logs from Etherscan
  // (to be implemented)

  // 4. Decode and aggregate fees
  // (to be implemented)

  // 5. Output as JSON
  // (to be implemented)
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
}); 