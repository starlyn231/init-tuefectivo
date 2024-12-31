import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

  interface DataTableProps {
    columns: { key: string; header: string; isAction?: boolean }[];
    data: Record<string, any>[];
  }
  
  export function DataTable({ columns, data }: DataTableProps) {
    return (
        <div className="flex flex-col  w-full bg-white my-2 ">
        <div className=" mt-2 rounded-md border p-5">
            <Table>
        <TableCaption>Una lista de ficheros.</TableCaption>
        <TableHeader>
          <TableRow>
          {columns.map((column) => (
            <TableHead className="" key={column.key}>     {column.header}</TableHead>

          ))}
     
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell key={column.key} className="px-6 py-4 whitespace-nowrap">
                  {column.render ? column.render(row) : row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
      </div>
      </div>
    
)
  }
  