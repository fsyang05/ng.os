'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Card, CardContent } from "@/components/ui/card"

type CallCategory = "State ID" | "Baby Items" | "Food Kitchen";

type Call = {
  time: string
  phoneNumber: string
  categories: CallCategory[]
}

const categoryStyles: Record<CallCategory, string> = {
  "State ID": "bg-blue-100 text-blue-700 border-blue-200",
  "Baby Items": "bg-pink-100 text-pink-700 border-pink-200",
  "Food Kitchen": "bg-green-100 text-green-700 border-green-200",
}

const columns: ColumnDef<Call>[] = [
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ getValue }) => {
      const value = getValue<string>()
      const date = new Date(value)
      const formatted = isNaN(date.getTime())
        ? value
        : date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
      return <span className="tabular-nums text-sm text-gray-700">{formatted}</span>
    },
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
    cell: ({ getValue }) => (
      <span className="font-mono text-sm text-gray-900">{getValue<string>()}</span>
    ),
  },
  {
    accessorKey: "categories",
    header: "Categories",
    cell: ({ getValue }) => {
      const cats = getValue<CallCategory[]>() || []
      return (
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <span
              key={c}
              className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${categoryStyles[c]}`}
            >
              {c}
            </span>
          ))}
        </div>
      )
    },
  },
];

const date1 = new Date(2025, 9, 5, 9, 30);
const date2 = new Date(2025, 9, 5, 10, 0);
const date3 = new Date(2025, 9, 5, 10, 15);
const date4 = new Date(2025, 9, 5, 10, 45);
const date5 = new Date(2025, 9, 5, 11, 5);
const date6 = new Date(2025, 9, 5, 11, 30);
const date7 = new Date(2025, 9, 5, 12, 10);
const date8 = new Date(2025, 9, 5, 12, 45);
const date9 = new Date(2025, 9, 5, 13, 15);
const date10 = new Date(2025, 9, 5, 13, 40);
const data: Call[] = [
  {
    time: date1.toString(),
    phoneNumber: "412-225-9367",
    categories: ["State ID"]
  },
  {
    time: date2.toString(),
    phoneNumber: "935-492-5123",
    categories: ["Baby Items"]
  },
  {
    time: date3.toString(),
    phoneNumber: "410-522-7395",
    categories: ["State ID", "Food Kitchen"]
  },
  {
    time: date4.toString(),
    phoneNumber: "312-555-0199",
    categories: ["Food Kitchen"]
  },
  {
    time: date5.toString(),
    phoneNumber: "773-555-1010",
    categories: ["State ID"]
  },
  {
    time: date6.toString(),
    phoneNumber: "872-555-3344",
    categories: ["Baby Items", "Food Kitchen"]
  },
  {
    time: date7.toString(),
    phoneNumber: "847-555-7777",
    categories: ["Baby Items"]
  },
  {
    time: date8.toString(),
    phoneNumber: "219-555-2468",
    categories: ["State ID", "Baby Items"]
  },
  {
    time: date9.toString(),
    phoneNumber: "224-555-1357",
    categories: ["Food Kitchen"]
  },
  {
    time: date10.toString(),
    phoneNumber: "630-555-6868",
    categories: ["State ID", "Food Kitchen"]
  }
]

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-hidden rounded-md">
      <Table>
        <colgroup>
          <col className="w-32" />
          <col className="w-40" />
          <col className="w-auto" />
        </colgroup>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="align-middle">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default function CallsSection() {
  return (
    <div className="container mx-auto px-6 py-6">
      <h2 className="text-xl font-semibold mb-3">Recent Calls</h2>
      <Card>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  )
}