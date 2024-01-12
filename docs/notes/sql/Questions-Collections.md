---
title: Questions Collections
titleTemplate: SQL
description: Questions Collections
head:
  - - meta
    - name: description
      content: Questions Collections
tags:
  - SQL
categories:
  - Notes
---

# Questions Collections <Badge type="tip" text="SQL" /><Badge type="warning" text="Notes" />

## What is NoSQL?

`NoSQL`, short for "Not Only SQL" or "non-relational", is a category of database
management systems that differ from traditional relational databases in their
approach to data storage and retrieval. Here's a rundown of its key characteristics:

**Data Storage:**

- _No rigid schema_: Unlike relational databases with predefined tables and columns,
  NoSQL databases offer flexible data structures like documents, key-value pairs,
  or graphs. Data can evolve organically without schema modifications.
- _Scalability_: NoSQL databases excel at horizontal scaling, where additional
  servers are added to handle increasing data volume and user requests.
- _Distributed architecture_: Data is distributed across multiple servers,
  promoting fault tolerance and improving performance.

**Data Retrieval:**

- _Non-SQL query language_: Each NoSQL type employs its own query language, distinct
  from SQL use in relational databases. Some languages are more expressive than
  others, focusing on specific data models.
- _Flexible querying_: NoSQL databases prioritize adaptability and allow querying
  based on various data attributes and structures.

**Use Cases:**

- _Big data_: NoSQL databases are ideal for storing and processing massive datasets
  efficiently, making them popular for analysis, real-time applications, and large-
  scale web services.
- _Unstructured_ data: NoSQL databases handle unstructured and semi-structured data
  efficiently, such as social media posts, senor readings, and log files.
- _High availability_: Distributed and fault-tolerant architecture ensures uninterrupted
  data access even if individual servers fail.

**Popular NoSQL Types:**

- Document databases (MongoDB, Couchbase)
- Key-value stores (Redis, Cassandra)
- Wide-column stores (Amazon DynamoDB, HBase)
- Graph databases (Neo4j, OrientDB)

**Pros and Cons:**

Pros:

- Scalability and flexibility
- Efficiently and unstructured data
- High availability and fault tolerance
- Simpler schema design and data modification

Cons:

- No standardized query language
- Potential for data consistency issues in some types
- May require additional expertise for query optimization and data management

## State the difference between WHERE and HAVING in SQL?

WHERE:

- Filters individual rows before grouping and aggregation.
- Operates on individual rows within tables.
- Typically used with SELECT, UPDATE, and DELETE statements.

HAVING:

- Filters groups of rows after aggregation.
- Operates on the results of aggregate functions (like SUM, COUNT, AVG)
- Used exclusively with the GROUP BY clause.

Key Difference:

- Timing: WHERE files before grouping, HAVING filters after grouping.
- Scope: WHERE works in individual rows, HAVING works on aggregated results.
- Usage: WHERE can be sued with various statements, HAVING only with GROUP BY.

When to Use Each:

- Use WHERE to filter rows based on specific conditions before aggregation.
- Use HAVING to filter groups of rows based on aggregate values after aggregation.
