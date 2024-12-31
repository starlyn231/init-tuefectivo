import { Input } from '@/components/ui/input'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import {  fileQueryColumns, mockData, UserSchema } from './file-query-constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import Pageheader from '@/layouts/components/Pageheader';
import { DataTable } from '@/components/data-table';
const FileQuery = () => {

  const form = useForm<z.infer<typeof UserSchema>>({ resolver: zodResolver(UserSchema) });

  function onSubmit(values: z.infer<typeof UserSchema>) {
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  // const onSubmit = () => {
  //   const values = getValues();
  //   console.log(values);
  // };
  return (
    <div className='flex flex-col  w-full'>
      <Pageheader title="Consulta de Ficheros" description="Sección de consultas de tus ficheros" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" grid grid-cols-2 gap-2 w-full">
          <FormField
            control={form.control}
            name="nameFile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre Del Fichero</FormLabel>
                <FormControl>
                  <Input  {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cliente</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estado</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateincome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de ingreso</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="max-w-[400px]">Buscar</Button>
        </form>
      </Form>
      <DataTable columns={fileQueryColumns} data={mockData}/>
    </div>

  )
}

export default FileQuery
