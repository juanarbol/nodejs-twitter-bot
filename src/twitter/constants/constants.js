'use strcict'

const consumerApiKey = process.env.COSTUMER_API_KEY || 'MERFF6VKY2I5rBuoWU0rt5GUw'
const consumerSecretKey = process.env.SECRET_COSTUMER_API_KEY || 'MSTRy8H87QaYOLdkBGQLNVzx1AxQcHNn7Q5yyt3kAhZHjcn2r2'

const accessToken = process.env.ACCESS_TOKEN || '1178749328564862977-qz1biSEtZYsplddyQjMIgIoGfziwPB'
const accessTokenSecret = process.env.SECRET_ACCESS_TOKEN || '4cj5TkzEX9eZrXqIfBbllug1T5z3juAGjCXUjOyuHeRcb'

module.exports = {
  accessToken,
  accessTokenSecret,
  consumerApiKey,
  consumerSecretKey

