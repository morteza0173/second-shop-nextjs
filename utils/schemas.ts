import { z, ZodSchema } from "zod";

export const productSchema = z.object({
  name: z.string().min(4, {
    message: "نام محصول باید بیشتر از 3 حرف باشد",
  }),
  company: z.string().min(2, {
    message: "نام برند باید بیشتر از 1 حرف باشد",
  }),
  price: z.coerce.number().int().min(1000, {
    message: "قیمت محصول باید بیشتر از هزار تومان باشد",
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "توضیحات محصول باید بین 10 تا 1000 حرف باشد",
    }
  ),
  featured: z.coerce.boolean(),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(" و "));
  }
  return result.data;
}

export const imageSchema = z.object({
  image: validateImageFile(),
});

function validateImageFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, "حجم تصویر باید زیر 1 مگابایت باشد")
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "فایل باید یک تصویر باشد");
}
