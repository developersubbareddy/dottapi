const channelsRoute = require("express").Router()
const { createChannel, getChannels, getChannel } = require('./context');
channelsRoute.get("/", async (req, res) => {
    try {
        const data = await getChannels();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error)
    }
});
channelsRoute.get("/:id", async (req, res) => {
    try {
        const channel = await getChannel(req.params.id);
        res.status(200).send(channel);
    } catch (error) {
        res.status(500).send(error)
    }
});
channelsRoute.post("/create", async (req, res) => {
    try {
        const result = await createChannel(req.body);
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = channelsRoute;