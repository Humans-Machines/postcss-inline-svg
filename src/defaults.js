export function encode(code) {
    return code
        .replace(/%/g, '%25')
        .replace(/</g, '%3C')
        .replace(/>/g, '%3E')
        .replace(/&/g, '%26')
        .replace(/#/g, '%23');
}

function normalize(code) {
    return code
        .replace(/'/g, '%22')
        .replace(/"/g, '\'')
        .replace(/\s+/g, ' ')
        .trim();
}

export function transform(code) {
    return `"data:image/svg+xml,${normalize(code)}"`;
}
