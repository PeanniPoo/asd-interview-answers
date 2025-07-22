SELECT *
FROM employees
WHERE department = 'Sales' AND salary > 50000;

CREATE INDEX idx_department_salary
ON employees (department, salary);
