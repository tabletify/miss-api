module.exports = (id) => {
    return require(`../api/content/${id}.json`)[Math.floor(Math.random() * require(`../api/content/${id}.json`).length)];
}