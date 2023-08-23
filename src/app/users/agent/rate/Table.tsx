"use client"

import * as React from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Modal from 'react-modal';
import { settings } from "@/config/settings";
import { useTheme } from 'next-themes'

import axios from 'axios';
import Cookies from 'universal-cookie';



const data = [
  {
    id: "m5gr84i9",
    weight: "AWB0009690986",
    rate: "2023-07-26	",
    
  },
 
]

// export type Payment = {
//   id: string
//   tracking: string
//   date: string
//   destination: string
//   amount: number
//   status: "pending" | "processing" | "delivered" | "failed"
//   email: string
// }





 const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '500px',
    backgroundColor: 'black',
    color: 'white',
  },
};



// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement(el);




export function DashboardTable({data}) {


const { theme, setTheme } = useTheme()

 const columns: ColumnDef<Payment>[] = [
  
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("no")}</div>
    ),
  },
  

  {
    accessorKey: "weight",
    header: "Weight",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("weight")}</div>
    ),
  },

  {
    accessorKey: "rate",
    header: "Rate",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("rate")}</div>
    ),
  },

  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            
            
            <DropdownMenuItem onClick={()=>{ openModal(row) }} >Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>{ del(row.original._id) }} >Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]



let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({});

   const openModal = (data)=> {
     setFormData(data.original)
    
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const cookies = new Cookies();

// const [rateData, setRateData] = React.useState({})



  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.id;
    const value = event.target.value;
 
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    

    try {
       const token = (cookies.get('usertoken') == undefined) ? 'no' : cookies.get('usertoken');
    
     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/agent/updaterate`, {
       token: token,
       _id: formData._id,
       weight: formData.weight,
        rate: formData.rate,
     });
     window.location.reload()
      
    } catch (error) {
      
      console.error(error);
    }

    
  }


  const del = (id) => {
      try {
       
     axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/agent/deleterate`, {
       _id: id
     });
     window.location.reload()
      
    } catch (error) {
      
      console.error(error);
    }
  }

  return ( <>
     <div>
      <Modal

        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Data"
       
      >
        <h2 >Edit Data</h2>
        <button style={{position: 'absolute',right: '12px', top: '20px'}} onClick={closeModal}>close</button>
        
        <form onSubmit={onSubmit} >
         
          <div >
            <label >Weight (in Kg)</label>
            <br/>
            <input style={{colo: 'black'}} id="weight" value={formData.weight} onChange={handleInputChange} cols="100" style={{ width: '70%', border: '1px solid black', borderRadius: '5px',padding: '10px', marginBottom: '10px' }} />
           </div>

           <div >
            <label >Price</label>
            <br/>
            <input style={{colo: 'black'}} id="rate" value={formData.rate} onChange={handleInputChange} cols="100" style={{ width: '70%', border: '1px solid black', borderRadius: '5px',padding: '10px', marginBottom: '10px' }} />
           </div>
           <br/>
                 <Button >
                  Update
                </Button>
        </form>
      </Modal>
    </div>
    
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter data..."
          value={(table.getColumn("weight")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("weight")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>

</>
  )
}