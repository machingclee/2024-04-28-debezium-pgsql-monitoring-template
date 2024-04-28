const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:29092']
})

const topics = [
    "postgres.public.LLMSummary",
    "postgres.public.MessagesSession",
    "postgres.public.SummaryFollow",
    "postgres.public.UserToChannel",
    "postgres.public.UserToProject"
];
const run = async () => {
    const consumer = kafka.consumer({ groupId: "kafka" });
    consumer.subscribe({ topics, fromBeginning: false })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const payload = JSON.parse(message.value.toString()).payload;
            console.log("------------------------")
            console.log(topic)
            console.log(payload)
        },
    })
}

run().catch(console.error);

process.on('uncaughtException', function (err) {
    logger.error(err.stack);
    logger.info("Node NOT Exiting...");
});