module.exports = function(api) {
    api.cache(true);

    return {
        sourceType: 'unambiguous',
        presets: ['@babel/env'],
        plugins: [
            '@babel/plugin-proposal-optional-chaining',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
            [
                '@babel/plugin-transform-runtime',
                {
                    regenerator: true,
                },
            ],
        ],
        ignore: ['src/main.js'],
    };
};
