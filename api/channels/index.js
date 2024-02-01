const channelsRoute = require("express").Router()
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

channelsRoute.get("/", async (req, res) => {
    const data = await prisma.channel.findMany();
    res.status(200).send(data)
});
channelsRoute.get("/:id", async (req, res) => {
   const channel = await prisma.channel.findUnique({where:{id:parseInt(req.params.id)},include:{videos:true}});
   res.status(200).send(channel);
})

module.exports = channelsRoute;