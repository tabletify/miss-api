module.exports = function() {
    let token = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 18; i++){
        token = token + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    return token;
};