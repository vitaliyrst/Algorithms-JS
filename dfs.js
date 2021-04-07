//graph = {A: [B,C], B:[D,F], ... }

let visitedDfs = [];

function dfs(graph, v, t, visited = []) {
    // graph - смежный список
    // v - посещенный узел (вершина)
    // t - пункт назначения

    // либо достигли пункта назначения, либо уже посещали узел
    if (v === t) {
        return true;
    }
    if (visited.includes(v)) {
        return false;
    }

    // помечаем узел как посещенный
    visited.push(v);

    // исследуем всех соседей (ближайшие соседние вершины) v
    for (let neighbor of graph[v]) {
        // если сосед не посещался

        if (!visited.includes(neighbor)) {
            visitedDfs.push(neighbor);
            // двигаемся по пути и проверяем, не достигли ли мы пункта назначения
            let reached = dfs(graph, neighbor, t, visited);
            // если достигли
            if (reached) {
                return 'Целевая точка найдена';
            }
        }
    }
    return false;
}

let graphDfs = {
    'A': ['B', 'C', 'D'],
    'B': ['G', 'H'],
    'C': ['G'],
    'D': ['E', 'F'],
    'E': [],
    'F': [],
    'G': [],
    'H': [],
};

console.log('dfs|', dfs(graphDfs, 'A', 'F'), ' Путь:', visitedDfs);