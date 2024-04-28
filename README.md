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

- Example Message:
  ```
  [Topic]  postgres.public.MessagesSession
  [Changes]
  {
    before: null,
    after: {
      id: '018f23d6-f5a4-9312-946a-df3c82e29ef0',
      type: 'PERSONAL_CHATROOM',
      isRoomClosed: false,
      isLiveEnded: false,
      isDeleted: false,
      timeZone: 'Asia/Hong_Kong',
      name: 'PERSONAL_CHATROOM-35a485b2-4058-4cd9-b344-a64e1b75c2de',
      hostUserId: '018def77-4dad-aa93-80fd-3319ceb44c68',
      channelId: '018e3975-20be-40d6-2318-6db03ca7a23d',
      replyTargetSessionId: null,
      isSessionConfirmed: false,
      createdAt: 1714293240123,
      sortingTimestamp: 1714293240123,
      prioritizedOrSnoozedAt: null,
      replyAt: 0,
      updatedAt: 1714293240123,
      isDraftInstantIssue: true,
      endTime: 0,
      sessionSortType: 'DRAFT',
      createdAtHK: '2024-04-28 16:34:01',
      isDraftReply: false,
      showOriginalScriptInReply: null,
      draftSourceSessionId: null
    },
    source: {
      version: '1.4.2.Final',
      connector: 'postgresql',
      name: 'postgres',
      ts_ms: 1714293241255,
      snapshot: 'false',
      db: 'billie',
      schema: 'public',
      table: 'MessagesSession',
      txId: 151593,
      lsn: 1276008003312,
      xmin: null
    },
    op: 'c',
    ts_ms: 1714293240361,
    transaction: null
  }
  ```