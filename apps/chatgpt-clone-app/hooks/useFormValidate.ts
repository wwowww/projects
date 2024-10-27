import { useState } from "react"
import { ZodObject, ZodRawShape } from "zod";

export const useFormValidate = <T>(schema: ZodObject<ZodRawShape>) => {
  const [errors, setErrors] = useState<Partial<T>>();

  const validateField = (name: string, value: string) => {
    setErrors({
      ...errors,
      [name]: undefined,
    })

    const parseValue = schema.pick({ [name]: true }).safeParse({
      [name]: value
    });

    if (!parseValue.success) {
      setErrors({
        ...errors,
        ...parseValue.error.flatten().fieldErrors
      })
    }

    console.log(parseValue, "parseValue")
  }

  return { errors, validateField }
}