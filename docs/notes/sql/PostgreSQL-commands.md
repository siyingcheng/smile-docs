---
title: PostgreSQL Commands
titleTemplate: SQL
description: PostgreSQL Commands
head:
  - - meta
    - name: description
      content: PostgreSQL Commands
tags:
  - SQL
categories:
  - Notes
---

# PostgreSQL Commands <Badge type="tip" text="SQL" /><Badge type="warning" text="Notes" />

## Database Interaction Commands

- `\q`: Exit the PostgreSQL client.
- `\h command_name`: Get help on a specific command.
- `?`: List all available commands.
- `\password`: Change your password.
- `\c db_name`: Connect to a specific database.
- `\l`: List available databases.
- `\dt`: List tables in the current database.
- `\d table_name`: Describe table, shows the structure of a table, including column
  names, data types, and constraints.
- `\du`: List users and their roles.
- `\df`: List all available functions in the current database.
- `\sf function_name`: Show the definition of a specific function.
- `\x`: Toggles between expanded and no-expanded output for query results, making
  it easier to read.
- `\i sql_file_path`: Executes batch SQL commands from file. Example: `\i /Volumes/Data/download/person.sql`
