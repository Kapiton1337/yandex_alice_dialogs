const matcher = (obj, str) => {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            const found = matcher(obj[key], str);
            if (found) {
                return [key, found];
            }
        } else if (typeof obj[key] === 'string' && obj[key].includes(str)) {
            return key;
        }
    }
    return null;
}

exports.matcher = matcher;