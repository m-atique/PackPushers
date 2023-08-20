/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import DashboardLayout from "../../dashboardLayout";

//-----------defining schema
const shipmentFormSchema = z.object({
  reciever: z.string().min(2, {
    message: "ReciversName must be at least 02 chractors",
  }),
  email: z.string().min(2, {
    message: "ReciversName must be at least 02 chractors",
  }),
  phone: z.string().min(2, {
    message: "ReciversName must be at least 02 chractors",
  }),
  street: z.string().min(2, {
    message: "ReciversName must be at least 02 chractors",
  }),
  city: z.string().min(2, {
    message: "ReciversName must be at least 02 chractors",
  }),
  postalCode: z.string().min(2, {
    message: "ReciversName must be at least 02 chractors",
  }),
  state: z.string().min(2, {
    message: "ReciversName must be at least 02 chractors",
  }),
  country: z.string().min(2, {
    message: "ReciversName must be at least 02 chractors",
  }),
  trackingId: z.string().min(2, {
    message: "ReciversName must be at least 02 chractors",
  }),

  shipmentMode: z.string().min(2, {
    message: "role must be at least 2 characters.",
  }),
  courierCompany: z.string().min(2, {
    message: "role must be at least 2 characters.",
  }),
  paymentMethod: z.string().min(2, {
    message: "role must be at least 2 characters.",
  }),
  status: z.string().min(2, {
    message: "role must be at least 2 characters.",
  }),
  deliveryTime: z.string().min(2, {
    message: "role must be at least 2 characters.",
  }),
  packageType: z.string().min(2, {
    message: "role must be at least 2 characters.",
  }),
  packageCount: z.string().min(2, {
    message: "role must be at least 2 characters.",
  }),

  packageWeight: z.string().min(2, {
    message: "role must be at least 2 characters.",
  }),
  charges: z.string().min(2, {
    message: "role must be at least 2 characters.",
  }),

  description: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
});

type ShipmentFormValues = z.infer<typeof shipmentFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ShipmentFormValues> = {
  urls: [
    { value: "https://shadcn.com" },
    { value: "http://twitter.com/shadcn" },
  ],
};
export default function ShipmentSettings() {
  const form = useForm<ShipmentFormValues>({
    resolver: zodResolver(shipmentFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  });
  function onSubmit(data: ShipmentFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <DashboardLayout isDashboardPage={true}>
      <div className="col-span-4 p-8 pt-6">
        <h2 className="text-3xl font-bold tracking-tight mb-5">
          Create Shipment
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* ===================Tracking Id */}
            <FormField
              control={form.control}
              name="trackingId"
              render={({ field }) => (
                <FormItem className="w-1/4">
                  <FormLabel>Tracking Id</FormLabel>
                  <FormControl>
                    <Input placeholder="#CFD12464689" {...field} />
                  </FormControl>
                  {/* <FormDescription>
              Please enter Reciever's Country
              </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* =================================== name, phone email */}
            <h3 className="text-lg font-bold tracking-tight">
              Reciver's Detail
            </h3>
            <div className="flex flex-row gap-6 px-5">
              <FormField
                control={form.control}
                name="reciever"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reciever's Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Davide Mark" {...field} />
                    </FormControl>
                    {/* <FormDescription>
               Please enter Reciever's Name
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-1/4">
                    <FormLabel>e_mail</FormLabel>
                    <FormControl>
                      <Input placeholder="david@mail.com" {...field} />
                    </FormControl>
                    {/* <FormDescription>
              Please enter Reciever's Email
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-1/4">
                    <FormLabel>Mobile No</FormLabel>
                    <FormControl>
                      <Input placeholder="000000000" {...field} />
                    </FormControl>
                    {/* <FormDescription>
               Please enter Reciever's Name
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* ==============Address */}
            <h3 className="text-lg font-bold tracking-tight">Address</h3>
            <div className="flex flex-row gap-6 px-5">
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street</FormLabel>
                    <FormControl>
                      <Input placeholder="78 Bauche Road" {...field} />
                    </FormControl>
                    {/* <FormDescription>
               Please enter Reciever's Street
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-1/4">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Yelwa" {...field} />
                    </FormControl>
                    {/* <FormDescription>
              Please enter Reciever's Email
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem className="w-1/4">
                    <FormLabel>Postal Coede</FormLabel>
                    <FormControl>
                      <Input placeholder="593800" {...field} />
                    </FormControl>
                    {/* <FormDescription>
               Please enter Reciever's Name
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-row gap-20 px-5">
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="w-2/6">
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="plateau" {...field} />
                    </FormControl>
                    {/* <FormDescription>
               Please enter Reciever's State
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="w-2/6">
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Nigeria" {...field} />
                    </FormControl>
                    {/* <FormDescription>
              Please enter Reciever's Country
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* ========================= */}
            <h3 className="text-lg font-bold tracking-tight">
              Shipment Detail
            </h3>
            <div className="flex flex-row gap-5 px-5">
              <FormField
                control={form.control}
                name="shipmentMode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shipment mode</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Shipment Mode" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="admin">By Air</SelectItem>
                        <SelectItem value="agent">By Sea</SelectItem>
                        <SelectItem value="user">By Road</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="courierCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Courier Company</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Courier Service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="DHL">DHL</SelectItem>
                        <SelectItem value="FEDEX">FEDEX</SelectItem>
                        <SelectItem value="Rapid">Rapid Air</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pyment Mode</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pyment Method" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Cash on Dilevery">
                          Cash on Dilevery
                        </SelectItem>
                        <SelectItem value="Credit Card">Credit Card</SelectItem>
                        <SelectItem value="Bank Account">
                          Bank Account
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Dilevery Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ready to dilever">
                          Ready to Deliver
                        </SelectItem>
                        <SelectItem value="On the Way">On the Way</SelectItem>
                        <SelectItem value="Dilveres">Delivered</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deliveryTime"
                render={({ field }) => (
                  <FormItem className="w-1/6">
                    <FormLabel>Delivery time</FormLabel>
                    <FormControl>
                      <Input placeholder="05:00am 09-08-23" {...field} />
                    </FormControl>
                    {/* <FormDescription>
               Expected time for delivery
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* ====================== package Detail */}
            <h3 className="text-lg font-bold tracking-tight">
              Package Detail
            </h3>
            <div className="flex flex-row gap-5 px-5">
            <FormField
                control={form.control}
                name="packageType"
                render={({ field }) => (
                  <FormItem className="w-2/5">
                    <FormLabel>Package Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Package Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ready to dilever">
                          Ready to Deliver
                        </SelectItem>
                        <SelectItem value="On the Way">Solid</SelectItem>
                        <SelectItem value="Dilveres">Farigle</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            <FormField
                control={form.control}
                name="packageCount"
                render={({ field }) => (
                    <FormItem className="w-2/6">
                    <FormLabel>Number of Packages</FormLabel>
                    <FormControl>
                      <Input placeholder="05" {...field} />
                    </FormControl>
                    {/* <FormDescription>
              Number of packages to be delivered
            </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
                />
                </div>
                <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Package Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Provide Complete Detail of Shipment "
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                Enter Package description
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
              <div className="flex flex-row gap-5 px-5">
                  <FormField
                control={form.control}
                name="packageWeight"
                render={({ field }) => (
                  <FormItem className="w-2/6">
                    <FormLabel>Weight</FormLabel>
                    <FormControl>
                      <Input placeholder="10.5 pounds" {...field} />
                    </FormControl>
                    {/* <FormDescription>
               Total weight of all packages 
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
                  <FormField
                control={form.control}
                name="charges"
                render={({ field }) => (
                  <FormItem className="w-2/6">
                    <FormLabel>Charge Amount</FormLabel>
                    <FormControl>
                      <Input placeholder="120 Nairas" {...field} />
                    </FormControl>
                    {/* <FormDescription>
              Total charges for shipment
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>
              <div className="flex justify-end pr-10">
              <Button type="submit">Create Shipment</Button>
              </div>
          </form>
        </Form>
      </div>
    </DashboardLayout>
  );
}
