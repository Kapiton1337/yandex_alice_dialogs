const matcher = (obj, search) => {
    const stack = [[obj, []]];
    while (stack.length > 0) {
        const [current, path] = stack.pop();
        for (const key in current) {
            if (current[key] === search) {
                return path.concat(key);
            } else if (typeof current[key] === 'object') {
                stack.push([current[key], path.concat(key)]);
            }
        }
    }
    return ["base", "any"];
}

exports.matcher = matcher;