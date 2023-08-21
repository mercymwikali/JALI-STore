import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skc0MZsSvv27l80DzrXJBEj7f4L38FPqIJhq2EqGIhfwapsMHupLFe2jnI4tNYQ3mm6t5tPPAQZiPh77arcEC6Ot2D5XbvxEjpEHo9fQHM8vl83AwnIlKtgXvZxKPf0PJoeFYm21EVAjKXWx6dBTrXPfwjB1oDsBW47x31awiI2vg4Bm050W"
})
