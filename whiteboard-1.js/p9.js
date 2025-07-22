// p9.js
// Problem: Check if a path exists from start to end in a directed graph and return the shortest path (if any)
// Approach: Breadth-First Search (BFS) for shortest path discovery in unweighted graphs

function findPath(graph, start, end) {
    if (!graph[start] || !graph[end]) return { exists: false, path: [] };

    const queue = [[start]];
    const visited = new Set();

    while (queue.length > 0) {
        const path = queue.shift();
        const node = path[path.length - 1];

        if (node === end) {
            return { exists: true, path };
        }

        if (!visited.has(node)) {
            visited.add(node);
            const neighbors = graph[node] || [];
            for (let neighbor of neighbors) {
                queue.push([...path, neighbor]);
            }
        }
    }

    return { exists: false, path: [] };
}

/*
Time Complexity: O(V + E)
Space Complexity: O(V)
*/

const graph = {
    A: ['B'],
    B: ['A', 'C', 'D', 'E'],
    C: ['F'],
    D: ['G', 'E'],
    E: ['F'],
    F: ['B', 'G'],
    G: [],
    H: []
};

// Example 1: D to B
console.log("D → B:", findPath(graph, 'D', 'B'));
// Expected: { exists: false, path: [] }

// Example 2: F to A
console.log("F → A:", findPath(graph, 'F', 'A'));
// Expected: { exists: true, path: ['F', 'B', 'A'] }

// Example 3: G to C
console.log("G → C:", findPath(graph, 'G', 'C'));
// Expected: { exists: false, path: [] }

// Example 4: E to D
console.log("E → D:", findPath(graph, 'E', 'D'));
// Expected: { exists: true, path: ['E', 'F', 'B', 'D'] }
