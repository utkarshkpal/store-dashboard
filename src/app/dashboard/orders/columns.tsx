import { Button } from "@/components/ui/button";
import { formatCurrency, formatDate, formatTime } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Image from "next/image";
import { Order as OrderType } from "./mock";
export const columns: ColumnDef<OrderType>[] = [
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Image
            src={row.original.image}
            alt={row.original.name}
            width={40}
            height={40}
          />
          <p className="ml-4">{row.original.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <p>{formatDate(row.original.timestamp)}</p>
          <p className="text-xs ">{formatTime(row.original.timestamp)}</p>
        </div>
      );
    },
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.original.timestamp);
      const dateB = new Date(rowB.original.timestamp);
      return dateA.getTime() - dateB.getTime();
    },
  },
  {
    accessorKey: "timeSpent",
    header: "Time Spent",
  },
  {
    accessorKey: "orderValue",
    header: "Order Value",
  },
  {
    accessorKey: "commission",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Commission
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <p className="font-bold">
          {formatCurrency(
            row.original.commission.value,
            row.original.commission.currency
          )}
        </p>
      );
    },
    sortingFn: (rowA, rowB) => {
      const commissionA = rowA.original.commission.value;
      const commissionB = rowB.original.commission.value;
      return commissionA - commissionB;
    },
  },
  {
    accessorKey: "viewChat",
    header: "",
    cell: () => {
      return (
        <Button variant="link" className=" text-gray text-xs p-0">
          View Chat
          <Image
            src="/icons/view-arrow.svg"
            alt="View Chat"
            width={10.13}
            height={10.13}
          />
        </Button>
      );
    },
  },
];
