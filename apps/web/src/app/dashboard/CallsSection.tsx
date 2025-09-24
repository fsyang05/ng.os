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

type CallCategory = "State ID" | "Baby Items" | "Food Kitchen";

type Call = {
  time: string
  phoneNumber: string
  categories: CallCategory[]
}

const columns: ColumnDef<Call>[] = [
  {
    accessorKey: "time",
    header: "Time"
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number"
  },
  {
    accessorKey: "categories",
    header: "Categories"
  },
];

const date1 = new Date(2025, 9, 5, 9, 30);
const date2 = new Date(2025, 9, 5, 10, 0);
const date3 = new Date(2025, 9, 5, 10, 15);
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
    <div className="overflow-hidden rounded-md border">
      <Table>
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
                  <TableCell key={cell.id}>
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
    <div className="container mx-auto py-40">
      <DataTable columns={columns} data={data} />
    </div>
  )
}