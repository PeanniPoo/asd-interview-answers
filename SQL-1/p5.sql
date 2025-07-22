SELECT department, AVG(salary) AS average_salary
FROM employees
GROUP BY department;

SELECT department, name, salary
FROM employees
WHERE (department, salary) IN (
  SELECT department, MAX(salary)
  FROM employees
  GROUP BY department
);
