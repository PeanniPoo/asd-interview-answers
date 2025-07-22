DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS inventories;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS employees;


CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT,
  position TEXT,
  department TEXT,
  salary NUMERIC
);

CREATE TABLE customers (
  customer_id INTEGER PRIMARY KEY,
  customer_name TEXT,
  city TEXT
);

CREATE TABLE inventories (
  product_id INTEGER PRIMARY KEY,
  product_name TEXT,
  quantity INTEGER,
  price NUMERIC
);

CREATE TABLE orders (
  order_id INTEGER PRIMARY KEY,
  order_date DATE,
  customer_id INTEGER,
  total_amount NUMERIC,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE sales (
  order_id INTEGER,
  customer_id INTEGER,
  product_id INTEGER,
  quantity INTEGER,
  sale_date DATE,
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (product_id) REFERENCES inventories(product_id)
);

-- Employees
INSERT INTO employees VALUES (1, 'Alice', 'Manager', 'Sales', 7500);
INSERT INTO employees VALUES (2, 'Bob', 'Developer', 'IT', 6000);
INSERT INTO employees VALUES (3, 'Clara', 'Analyst', 'Finance', 5800);

-- Customers
INSERT INTO customers VALUES (101, 'John Doe', 'New York');
INSERT INTO customers VALUES (102, 'Jane Smith', 'Los Angeles');

-- Inventories
INSERT INTO inventories VALUES (201, 'Laptop', 10, 1000);
INSERT INTO inventories VALUES (202, 'Phone', 25, 500);

-- Orders
INSERT INTO orders VALUES (301, '2025-07-01', 101, 1500);
INSERT INTO orders VALUES (302, '2025-07-02', 102, 500);

-- Sales
INSERT INTO sales VALUES (301, 101, 201, 1, '2025-07-01');
INSERT INTO sales VALUES (302, 102, 202, 1, '2025-07-02');

SELECT * FROM employees;
SELECT * FROM customers;
SELECT * FROM inventories;
SELECT * FROM orders;
SELECT * FROM sales;
