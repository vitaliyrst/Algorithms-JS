// graph = {A:[B,C,D], B:[E,F], ... }

let visitedBfs = [];

function bfs(graph, s, t) {
    // graph - смежный список
    // s - начальная вершина
    // t - пункт назначения

    // инициализируем очередь и посещенные вершины
    let queue = [];
    let visited = [];
    // добавляем s в очередь
    queue.push(s);
    // помечаем s как посещенную вершину во избежание повторного добавления в очередь
    visited.push(s);

    while (queue.length > 0) {
        // удаляем первый (верхний) элемент из очереди
        let v = queue.shift();

        // graph[v] - соседи v
        for (let neighbor of graph[v]) {
            // если сосед не посещался
            if (!visited.includes(neighbor)) {
                // добавляем его в очередь
                queue.push(neighbor);
                // помечаем вершину как посещенную
                visited.push(neighbor);

                visitedBfs.push(neighbor);

                // если сосед является пунктом назначения, мы победили
                if (neighbor === t) {
                    return 'Целевая точка найдена';
                }
            }
        }
    }
    // если t не обнаружено, значит пункта назначения достичь невозможно
    return false;
}

let graphBfs = {
    'A': ['B', 'C', 'D'],
    'B': ['G', 'H'],
    'C': ['G'],
    'D': ['E', 'F'],
    'E': [],
    'F': [],
    'G': [],
    'H': [],
};

console.log('bfs|', bfs(graphBfs, 'A', 'F'), ' Путь:', visitedBfs);