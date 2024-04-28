- ```
  curl -i -X POST -H "Accept:application/json" -H "Content-Type:application/json" 127.0.0.1:8083/connectors/ --data "@debezium.json"
  ```
- health check connector:
  ```
  curl -H "Accept:application/json" localhost:8083/connectors/billie-connector/status
  ```
- to check the topics, ssh into the container of kafka 
  ```
  docker exec -it debezium-kafka-1 bash
  ```
  and run
  ```sh
  /usr/bin/kafka-topics --bootstrap-server localhost:9092 --list
  ```
  and in my case I get:
  ```text
  __confluent.support.metrics
  __consumer_offsets
  _schemas
  connect-status
  connect_configs
  connect_offsets
  postgres.public.LLMSummary
  postgres.public.MessagesSession
  postgres.public.SummaryFollow
  postgres.public.UserToChannel
  postgres.public.UserToProject
  ```
- ```
  yarn add kafkajs @kafkajs/confluent-schema-registry
  ```
  for doc on registry: https://kafkajs.github.io/confluent-schema-registry/docs/usage-with-kafkajs

- ```sql
  alter table "LLMSummary" REPLICA IDENTITY FULL;
  alter table "MessagesSession" REPLICA IDENTITY FULL;
  alter table "SummaryFollow" REPLICA IDENTITY FULL;
  alter table "UserToChannel" REPLICA IDENTITY FULL;
  alter table "UserToProject" REPLICA IDENTITY FULL;
  ```

