import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import Pageheader from "@/layouts/components/Pageheader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UploadFileSchema } from "./file-query-constants";
import { useState } from "react";

const FileUpload = () => {
  //const [file, setFile] = useState<File | null>(null);
  const form = useForm<z.infer<typeof UploadFileSchema>>({
    resolver: zodResolver(UploadFileSchema),
    defaultValues: {
      file: null,
    },
  });

  function onSubmit(values: z.infer<typeof UploadFileSchema>) {
    // ✅ This will be type-safe and validated.
    console.log(values);

    /*
Cuando el usuario presiona el botón “Cargar Fichero” el sistema lleva 
al usuario a la pantalla de consulta de ficheros en la que se puede ver de primero
 el fichero recién cargado porque los ficheros se ponen en orden de llegada, 
del más reciente arriba a los más viejos al final. El fichero entra a la base de datos 
en estado cargado.
    */
  }
  console.log(form.getValues())
  return (
    <div className="flex flex-col  w-full">
      <Pageheader
        title="Carga de Ficheros"
        description="Sección de carga de ficheros"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" grid grid-cols-2 gap-2 w-full"
        >
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
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fichero</FormLabel>
                <FormControl>
                <Input
          id="fileUpload"
          type="file"
          onChange={(e) => {
            const uploadedFile = e.target.files?.[0]; // Obtiene el archivo cargado
            field.onChange(uploadedFile); // Actualiza el valor en react-hook-form
          }}
        />
                </FormControl>
                {/* <FormDescription>
              This is your public display name.
            </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="my-4">
            <Button type="submit" className="w-full max-w-[400px] ">
              Cargar Fichero
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FileUpload;
