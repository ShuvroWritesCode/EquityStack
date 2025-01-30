// Mock user data
export const currentUser = {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    emailVerified: new Date(),
    image: null,
    hashedPassword: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    favoriteIds: []
};

// Mock property data for staking
export const mockProperties = [
    {
        id: '1',
        address: "122 Florida Park Dr",
        tvl: "45,487.44",
        usdcSupplyRatio: "2.23",
        avg7dApy: "165.54%",
        avg7dApyProperty: "0.78%",
        avg30dApy: "41.70%",
        avg30dApyProperty: "3.29%"
    },
    {
        id: '2',
        address: "1580 Andover Dr",
        tvl: "23,284.51",
        usdcSupplyRatio: "18.32",
        avg7dApy: "101.42%",
        avg7dApyProperty: "18.45%",
        avg30dApy: "28.94%",
        avg30dApyProperty: "7.20%"
    },
    {
        id: '3',
        address: "1190 Ridgetop Ave",
        tvl: "18,457.15",
        usdcSupplyRatio: "0.88",
        avg7dApy: "88.69%",
        avg7dApyProperty: "1.38%",
        avg30dApy: "68.17%",
        avg30dApyProperty: "22.69%"
    },
    {
        id: '4',
        address: "1415 Race St",
        tvl: "6,002.43",
        usdcSupplyRatio: "0.58",
        avg7dApy: "84.52%",
        avg7dApyProperty: "48.81%",
        avg30dApy: "55.09%",
        avg30dApyProperty: "25.50%"
    }
];

// Mock total value
export const mockTotalValue = "1,948,478.45"; 