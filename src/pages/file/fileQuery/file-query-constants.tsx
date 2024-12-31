import { z } from 'zod';
import { ReactNode } from "react";
import { Link } from "react-router-dom";
type UserSchema = z.infer<typeof UserSchema>;


export interface Column {
  key: string;
  header: string;
  render?: (row: any) => ReactNode;
}

export const fileQueryColumns: Column[] = [
  {
    key: "name",
    header: "Nombre",
    render: (row) => <span>{row.name}</span>,
  },
  {
    key: "client",
    header: "Cliente",
    render: (row) => <span>{row.client}</span>,
  },
  {
    key: "status",
    header: "Estado",
    render: (row) => (
      <span
        className={`${
          row.status === "Activo" ? "text-green-600" : "text-red-600"
        }`}
      >
        {row.status}
      </span>
    ),
  },
  {
    key: "date",
    header: "Fecha de Ingreso",
    render: (row) => <span>{row.date}</span>,
  },
  {
    key: "action",
    header: "Acción",
    render: (row) => (
      <Link
        to={`/detalle/${row.id}`}
        className="text-[#00aef0] underline"
      >
        Ver Detalle
      </Link>
    ),
  },
];
export const mockData = [
  { id: 1, name: "Archivo A", client: "Cliente 1", status: "Activo", date: "2024-12-01" },
  { id: 2, name: "Archivo B", client: "Cliente 2", status: "Inactivo", date: "2024-12-02" },
  { id: 3, name: "Archivo C", client: "Cliente 3", status: "Activo", date: "2024-12-03" },
];

export const UserSchema = z.object({
  nameFile: z.string({ required_error: 'El fichero es requerido' }).min(5).trim(),
  customerName: z.string({ required_error: 'El Nombre es requerdo' }).min(5).trim(),
  status: z.string({ required_error: 'Estado es requerdo' }).trim(),
  dateincome: z.string({ required_error: 'La fecha es requerdo' }).min(5).trim(),

});
