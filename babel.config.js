const presets = [
    [
        "@babel/typescript",
        {
            "targets": {
                "browsers": ["last 2 versions", "safari >= 7"],
                "node": "6.10"
            },
        },
    ],
];

const plugins = [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
]

module.exports = { presets, plugins };

