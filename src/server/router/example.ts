import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  }).query("branko", {
    input: z.string().nullable().optional(),
    resolve({ input }) {
      return {
        result: `Branko TRPC query called with input ${input ?? "EMPTY"}`
      }
    }
  });
