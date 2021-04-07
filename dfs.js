// при условии, что мы имеем дело со смежным списком
// например, таким: adj = {A: [B,C], B:[D,F], ... }

let visited = [];

function dfs(graph, v, t) {
    // graph - смежный список
    // v - посещенный узел (вершина)
    // t - пункт назначения

    // либо достигли пункта назначения, либо уже посещали узел
    if (v === t) {
        return true;
    }
    if (v.visited) {
        return false;
    }

    // помечаем узел как посещенный
    v.visited = true;
    visited.push(v);
    // исследуем всех соседей (ближайшие соседние вершины) v
    for (let neighbor of graph[v]) {
        // если сосед не посещался
        if (!neighbor.visited) {
            // двигаемся по пути и проверяем, не достигли ли мы пункта назначения
            let reached = dfs(graph, neighbor, t)
            // если достигли
            if (reached) {
                return 'Целевая точка найдена';
            }
        }
    }
    return 'Целевая точка не найдена';
}

let graph = {
    'A': ['B', 'C', 'D'],
    'B': ['G', 'H'],
    'C': ['G'],
    'D': ['E', 'F'],
    'E': [],
    'F': [],
    'G': [],
    'H': [],
};

console.log('dfs|', dfs(graph, 'A', 'F'), ' Путь:', visited);