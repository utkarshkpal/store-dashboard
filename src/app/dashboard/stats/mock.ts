export type StatType = {
  id: number;
  label: string;
  valueLabel: string;
  percentageChange: number;
  icon: string;
};

const mockedStats: StatType[] = [
  {
    id: 1,
    label: "Consultations",
    valueLabel: "24",
    percentageChange: 15,
    icon: "consultations",
  },

  {
    id: 2,
    label: "Order Placed",
    valueLabel: "12",
    percentageChange: -15,
    icon: "order-placed",
  },

  {
    id: 3,
    label: "Conversions",
    valueLabel: "50%",
    percentageChange: -15,
    icon: "conversions",
  },

  {
    id: 4,
    label: "Total Sales Value",
    valueLabel: "$2,400",
    percentageChange: 15,
    icon: "total-sales-value",
  },
  {
    id: 5,
    label: "Avg Order Value",
    valueLabel: "$240",
    percentageChange: 15,
    icon: "avg-order-value",
  },
  {
    id: 6,
    label: "Commision Paid",
    valueLabel: "$240",
    percentageChange: 15,
    icon: "commision-paid",
  },
];

export default mockedStats;
