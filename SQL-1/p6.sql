SELECT name, position
FROM employees
WHERE salary > 50000;

SELECT e.department, e.name, e.salary
FROM employees e
JOIN (
  SELECT department, MAX(salary) AS max_salary
  FROM employees
  GROUP BY department
) d ON e.department = d.department AND e.salary = d.max_salary;

