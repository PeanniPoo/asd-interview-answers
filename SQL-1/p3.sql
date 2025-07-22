SELECT 
    order_id,
    SUM(quantity) AS total_quantity,
    AVG(quantity) AS avg_quantity_per_order
FROM 
    sales
GROUP BY 
    order_id;

SELECT 
    s.order_id,
    SUM(s.quantity) AS total_quantity,
    AVG(s.quantity) AS avg_quantity_per_order,
    SUM(s.quantity * i.price) AS total_sales_amount,
    AVG(s.quantity * i.price) AS avg_sales_amount_per_order
FROM 
    sales s
JOIN 
    inventories i ON s.product_id = i.product_id
GROUP BY 
    s.order_id;
