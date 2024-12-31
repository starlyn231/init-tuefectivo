import { z } from "zod";

type UploadFileSchema = z.infer<typeof UploadFileSchema>;

const fileSizeLimit = 10 * 1024 * 1024; // 5MB
export const UploadFileSchema = z.object({
  customerName: z
    .string({ required_error: "El Nombre es requerdo" })
    .min(5)
    .trim(),
  // file: z
  //   .any()
  //   .refine(
  //     (file) =>
  //       file !== null && file !== undefined,
  //     { message: "El archivo es requerido" }
  //   )
  //   .refine(
  //     (file) =>
  //       [
  //         "application/vnd.ms-excel",
  //         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  //         "text/plain", // Agregado para aceptar archivos .txt
  //       ].includes(file.type),
  //     { message: "Invalid document file type" }
  //   )
  //   .refine(
  //     (file) => file.size <= fileSizeLimit,
  //     { message: "File size should not exceed 5MB" }
  //   )

  file: z
  .any()
  .refine((file) => file !== null && file !== undefined, "El archivo es requerido")
  //.refine((file) => file?.size <= fileSizeLimit, "El tamaño máximo permitido es 5MB.")
  .refine(
    (file) =>
      ["text/csv", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", 
        "application/vnd.ms-excel"].includes(file?.type),
    "Solo se soportan archivos en formato CSV ."
  ),


});
