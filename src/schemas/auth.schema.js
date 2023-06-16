import { z } from "zod";

export const signupSchema = z
  .object({
    fullname: z
      .string({
        required_error: "Se requiere nombre completo",
      })
      .min(3, {
        message: "El nombre completo debe tener al menos 3 caracteres",
      }),
    email: z
      .string({
        required_error: "El correo electrónico es obligatorio",
      })
      .email({
        message: "El correo no es válido",
      }),
    password1: z
      .string({
        required_error: "se requiere contraseña",
      })
      .min(6, {
        message: "La contraseña debe contener 6 caracteres como mínimo",
      }),
    password2: z.string({
      required_error: "se requiere contraseña",
    }),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Las contraseñas no coinciden",
    path: ["password2"],
  });

export const signinSchema = z.object({
  email: z
    .string({
      required_error: "correo electronico es requerido",
    })
    .email({
      message: "El correo no es válido",
    }),
  password: z
    .string({
      required_error: "se requiere contraseña",
    })
    .min(6, {
      message: "La contraseña debe contener 6 caracteres como mínimo",
    }),
});
