import { z } from "zod";

export const createLinkSchema = z.object({
  title: z
    .string({
      message: "El título debe ser una cadena",
    })
    .min(3, {
      message: "El título debe tener al menos 3 caracteres",
    })
    .max(100),
  url: z
    .string({
      message: "La URL debe ser una cadena",
    })
    .url({
      message: "La URL debe ser una URL válida",
    }),
  description: z
    .string({
      message: "La descripción debe ser una cadena",
    })
    .max(1000)
    .optional(),
});
