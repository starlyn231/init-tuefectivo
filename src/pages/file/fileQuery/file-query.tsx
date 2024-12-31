import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Pageheader from "@/layouts/components/Pageheader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { fileQueryColumns, mockData, UserSchema } from "./file-query-constants";
const FileQuery = () => {
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    
  });

  function onSubmit(values: z.infer<typeof UserSchema>) {
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  // const onSubmit = () => {
  //   const values = getValues();
  //   console.log(values);
  // };
  /*

En esta pantalla se puede ver que los ficheros están en orden descendente 
por su fecha pero en realidad se pueden ordenar por estado o por nombre también.
  */
  return (
    <div className="flex flex-col  w-full">
      <Pageheader
        title="Consulta de Ficheros"
        description="Sección de consultas de tus ficheros"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" grid grid-cols-2 gap-2 w-full"
        >
          <FormField
            control={form.control}
            name="nameFile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre Del Fichero</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    //   setUserType(value);
                  }}
                  //defaultValue={field.value}
                  value={
                    typeof field.value === "string" ? field.value : "Asegurado"
                  }
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="ninguno">Ninguno</SelectItem>
                    <SelectItem value="Procesado">Procesado</SelectItem>
                    <SelectItem value="Leido">Leido</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateincome"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Fecha de ingreso</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Fecha de ingreso"
                    {...field}
                    type="date"
                    max={new Date().toISOString().split("T")[0]}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="my-4">
            <Button type="submit" className="w-full max-w-[400px] ">
              Buscar
            </Button>
          </div>


        </form>
      </Form>
      <DataTable columns={fileQueryColumns} data={mockData} />
    </div>
  );
};

export default FileQuery;
