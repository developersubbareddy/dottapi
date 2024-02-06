const { object, string } = require('yup');
const {prisama} =require('../../db');
const channelSchema = object({
  title: string().required(),
  description: string().required(),
  logo: string().required(),
  ownerAddress: string().required(),
});
async function createChannel(obj) {
  try {
    const validate = await channelSchema.validate(obj);
    await prisama.channel.create({ data: obj });
    return obj;
  } catch (error) {
    throw error;
  }

}
async function getChannels(){
  return await prisama.channel.findMany();
}
async function getChannel(id){
  return await prisama.channel.findUnique({where:{id:parseInt(id)},include:{videos:true}});
}
module.exports = { createChannel,getChannels,getChannel };