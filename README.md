# 2024-04-28-debezium-pgsql-monitoring-template
- Template project for monitoring changes in a PostgreSQL database (CDC) with a node instance doing whatever we want for the changes.

# How to use it?

- Create your own `debezium.json` according to the template `debezium.sample.json` (fill in the blank).

- Run `yarn register`
- Run `yarn health-check`
- Run `yarn topics`, you may need to wait for 10s for `yarn register` to take effects. 

  After registration is done, you should have seen a list of topics that you can listen to, for example in my case:
  
  ```
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
- Update the `topics` variable in `main.js` and run `yarn start`.