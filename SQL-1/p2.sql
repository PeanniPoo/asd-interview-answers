SELECT 
    customers.customer_name,
    orders.order_date,
    orders.total_amount
FROM 
    customers
JOIN 
    orders ON customers.customer_id = orders.customer_id
WHERE 
    customers.city = 'New York';

SELECT 
    customers.customer_name,
    orders.order_date,
    orders.total_amount,
    (
        SELECT AVG(o.total_amount)
        FROM orders o
        WHERE o.customer_id = customers.customer_id
    ) AS avg_amount_per_customer
FROM 
    customers
JOIN 
    orders ON customers.customer_id = orders.customer_id
WHERE 
    customers.city = 'New York';
