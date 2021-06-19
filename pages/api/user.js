// noinspection JSUnusedGlobalSymbols
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    name: 'Noah Kogler',
    description: 'App developer',
    avatarUrl: '/content/avatar.jpeg',
    pushNotifications: true,
  })
}
