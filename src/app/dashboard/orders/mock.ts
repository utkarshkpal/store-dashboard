export type Order = {
  id: string;
  image: string;
  name: string;

  timestamp: string;
  timeSpent: string;
  orderValue: string;
  commission: {
    value: number;
    currency: string;
  };
};

const mockedOrders: Order[] = [
  {
    id: "INV001",
    image: "/images/product-earphones.png",
    name: "Product Name",

    timestamp: "2024-04-15T10:24:00Z",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: {
      value: 25,
      currency: "USD",
    },
  },
  {
    id: "INV002",
    image: "/images/product-earphones.png",
    name: "Product Name",
    timestamp: "2024-03-22T14:30:00Z",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: {
      value: 55,
      currency: "USD",
    },
  },
  {
    id: "INV003",
    image: "/images/product-earphones.png",
    name: "Product Name",
    timestamp: "2024-04-05T09:15:00Z",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: {
      value: 85,
      currency: "USD",
    },
  },
  {
    id: "INV004",
    image: "/images/product-earphones.png",
    name: "Product Name",
    timestamp: "2024-03-10T11:45:00Z",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: {
      value: 15,
      currency: "USD",
    },
  },
  {
    id: "INV005",
    image: "/images/product-earphones.png",
    name: "Product Name",
    timestamp: "2024-04-20T16:00:00Z",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: {
      value: 43,
      currency: "USD",
    },
  },
  {
    id: "INV006",
    image: "/images/product-earphones.png",
    name: "Product Name",
    timestamp: "2024-03-30T08:30:00Z",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: {
      value: 88,
      currency: "USD",
    },
  },
  {
    id: "INV007",
    image: "/images/product-sunglasses.jpeg",
    name: "Product Name",
    timestamp: "2024-04-01T12:00:00Z",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: {
      value: 55,
      currency: "USD",
    },
  },
  {
    id: "INV008",
    image: "/images/product-sunglasses.jpeg",
    name: "Smart Watch",
    timestamp: "2024-04-25T10:00:00Z",
    timeSpent: "1h 30m",
    orderValue: "$250,00",
    commission: {
      value: 30,
      currency: "USD",
    },
  },
  {
    id: "INV009",
    image: "/images/product-sunglasses.jpeg",
    name: "Laptop",
    timestamp: "2024-04-22T09:00:00Z",
    timeSpent: "3h 15m",
    orderValue: "$1,200,00",
    commission: {
      value: 100,
      currency: "USD",
    },
  },
  {
    id: "INV010",
    image: "/images/product-sunglasses.jpeg",
    name: "Tablet",
    timestamp: "2024-04-20T10:00:00Z",
    timeSpent: "2h 30m",
    orderValue: "$500,00",
    commission: {
      value: 75,
      currency: "USD",
    },
  },
];

export { mockedOrders };
