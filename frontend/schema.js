import { coordinates } from "@maptiler/sdk";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const crimeSchema = z.object({
  typeOfCrime: z
    .string()
    .trim()
    .min(1, { message: "Title must be at least 1 characters long" }),
  description: z.string(),
  location: z.string(),
  coordinates: z.object({
    latitude: z.preprocess(
      (value) => (isNaN(value) ? 0 : value),
      z.coerce.number()
    ),
    longitude: z.preprocess(
      (value) => (isNaN(value) ? 0 : value),
      z.coerce.number().optional()
    ),
  }),
  image: z
    .any(
      z
        .instanceof(File)
        .refine((file) => !file || file.size <= 5 * 1024 * 1024, {
          message: `Image size must be less than ${
            (5 * 1024 * 1024) / 1000000
          }MB`,
        })
        .refine((file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type), {
          message: "Only JPEG, JPG, PNG, and WEBP formats are allowed",
        })
    )
    .optional(),
  time: new Date(),
});
