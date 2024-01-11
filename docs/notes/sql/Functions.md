---
title: Functions
titleTemplate: SQL
description: SQL Functions
head:
  - - meta
    - name: description
      content: SQL Functions
tags:
  - SQL
categories:
  - Notes
---

# SQL Functions <Badge type="tip" text="SQL" /><Badge type="warning" text="Notes" />

Collect the frequently used functions in SQL.

## Aggregate Functions

`COUNT`: Counts the number of rows in a table or a specific column

```sql
SELECT COUNT(*) FROM customers; // Counts all customers
SELECT COUNT(city) FROM customers; // Counts unique cities
```

`SUM`: Calculates the total sum of values in a specific column.

```sql
SELECT SUM(price) FROM orders; // Calculates total order value

```

`AVG`: Computes the average of a column.

```sql
SELECT AVG(rating) FROM products; // Calculates average product rating

```

::: details Click to view more examples

```sql
SELECT MAX(price) FROM car;
SELECT MIN(price) FROM car;
SELECT AVG(price) FROM car;
SELECT ROUND(AVG(price)) FROM car;

SELECT make, model, MAX(price) as Max_Price
FROM car
GROUP BY make, model
ORDER BY Max_Price DESC;

SELECT make, model, ROUND(AVG(price)) as avg_price
FROM car
GROUP BY make, model
ORDER BY avg_price;

SELECT c.make, c.model, SUM(c.price) as sum_price
FROM car c
GROUP BY c.make, c.model
ORDER BY sum_price;

SELECT COALESCE(e.email, 'Email Not Provided')
FROM employee e;
```

:::

## String Functions

`CONCAT`: Concatenates (joins) multiple string into one.

```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;

```

`SBUSTRING`: Extracts specific part of a string based on staring and ending positions.

```sql
SELECT SUBSTRING(address, 1, 5) AS zip_code FROM customers;

```

`UPPER`/`LOWER`: Converts text to uppercase or lowercase.

```sql
SELECT UPPER(city) FROM customers;

```

::: details Click to view more examples

```sql
-- Strings functions
SELECT UPPER('Simon') as upper_case; -- SIMON
SELECT LOWER('Simon') as lower_case; -- simon

SELECT UCASE('Simon') as upper_case; -- SIMON :mysql✅ :postgresql🚫
SELECT LCASE('Simon') as lower_case; -- simon :mysql✅ :postgresql🚫

SELECT LENGTH('  I am Simon  '); -- 14

SELECT CHARACTER_LENGTH('Simon'); -- 5

SELECT CONCAT('Simon', ' is', ' hero'); -- Simon is hero

SELECT REVERSE('Simon'); -- nomiS

SELECT REPLACE('Greed is good', 'Greed', 'Knowledge'); -- Knowledge is good

SELECT LTRIM('  I am Simon  '); -- I am Simon

SELECT RTRIM('  I am Simon  '); --   I am Simon

SELECT TRIM('  I am Simon  '); -- I am Simon

SELECT POSITION('Simon' in '  I am Simon  '); -- 8

SELECT ASCII('a'); -- 97
SELECT ASCII('A'); -- 65
SELECT ASCII('0'); -- 48
```

:::

## Date and Time Functions

`EXTRACT`: Extracts specific components (year, month, day) from a date/time value.

```sql
SELECT EXTRACT(YEAR FROM order_date) AS order_year FROM orders;

```

`DATE_ADD`/`DATE_SUB`: Adds or subtracts a specific number of days/months/years
from a date/time value.

```sql
SELECT DATE_ADD(due_date, INTERVAL 7 DAY) AS new_due_date FROM tasks;

```

`DATEDIFF`: Calculates the difference between tow date/time values in days, months,
or years.

```sql
SELECT DATEDIFF(YEAR, hire_date, CURRENT_DATE) AS years_employed FROM employees;

```

::: details Click to view more examples

```sql
-- Date Functions
select NOW(); -- 2024-01-08 15:30:15.997836+08
select NOW()::DATE; -- 2024-01-08
select NOW()::TIME; -- 15:30:44.496325
SELECT NOW() - INTERVAL '1 YEAR'; -- 2023-01-08 15:33:32.946236+08
SELECT NOW()::DATE - INTERVAL '6 MONTHS'; -- 2023-07-08 00:00:00
SELECT NOW() + INTERVAL '15 DAYS'; -- 2024-01-23 15:35:44.280966+08
SELECT (NOW() + INTERVAL '15 DAYS')::DATE; -- 2024-01-23
SELECT EXTRACT(YEAR FROM NOW()); -- 2024
SELECT EXTRACT(MONTH FROM NOW()); -- 1
SELECT EXTRACT(DAY FROM NOW()); -- 8
SELECT EXTRACT(DOW FROM NOW()); -- 1 (Monday, sunday is 0)
SELECT EXTRACT(CENTURY FROM NOW()); -- 21

-- AGE function
SELECT first_name, last_name, AGE(NOW(), date_of_birth) AS age
FROM employee;
```

:::

## Mathematical Functions

`ROUND`: Rounds a number to a specified number of decimal places.

```sql
SELECT ROUND(average_rating, 2) FROM products;

```

`ABS`: Calculates the absolute value (distance from zero) of a number.

```sql
SELECT ABS(profit - loss) AS total_difference FROM transactions;

```

`POWER`: Raises a number to a specified power.

```sql
SELECT POWER(revenue, 2) AS revenue_squared FROM sales;

```
