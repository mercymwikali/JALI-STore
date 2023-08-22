export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-08-14'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'production'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'ewza4gnf'
)

export const token = assertValue(
  process.env.SANITY_API_WRITE_TOKEN,
  "skc0MZsSvv27l80DzrXJBEj7f4L38FPqIJhq2EqGIhfwapsMHupLFe2jnI4tNYQ3mm6t5tPPAQZiPh77arcEC6Ot2D5XbvxEjpEHo9fQHM8vl83AwnIlKtgXvZxKPf0PJoeFYm21EVAjKXWx6dBTrXPfwjB1oDsBW47x31awiI2vg4Bm050W"
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
