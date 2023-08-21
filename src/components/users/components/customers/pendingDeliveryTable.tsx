import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
   
  const pendingDeliveries = [
    {
      invoice: "INV001",
      detail: " 02 pack of product a,product b ",
      date: "31-08-2023"
      
    },
    {
      invoice: "INV002",
      detail: " 04 pack of product a,product b ",
      date: "30-08-2023"
    },
    {
      invoice: "INV003",
      detail: " 01 pack of product a,product b ",
      date: "27-08-2023"
    },
    {
      invoice: "INV004",
      detail: " 04 pack of product a,product b ",
      date: "29-08-2023"
    },
    {
      invoice: "INV005",
      detail: " 02 pack of product a,product b ",
      date: "31-08-2023"
    }
  ]
  
  export function PendingDeliveryTable() {
    return (
        <Table>
          <TableCaption>A list of your recent Pending deliveries.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Package Detail</TableHead>
              <TableHead>Delivery Date</TableHead>
             
            </TableRow>
          </TableHeader>
          <TableBody>
            {pendingDeliveries.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.detail}</TableCell>
                <TableCell>{invoice.date}</TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
  }
  