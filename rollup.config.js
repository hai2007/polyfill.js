export default {
    input: "./index.js",
    output: {
        name: 'polyfill',
        file: "./dist/polyfill.js",
        /**
         * amd – 异步模块定义，用于像 RequireJS 这样的模块加载器
         * cjs – CommonJS，适用于 Node 和 Browserify/Webpack
         * es – 将软件包保存为 ES 模块文件
         * iife – 一个自动执行的功能，适合作为 <script> 标签
         * umd – 通用模块定义，以 amd，cjs 和 iife 为一体
         */
        format: 'iife'
    },
    plugins: [

        // 帮助 Rollup 查找外部模块，然后安装
        require('rollup-plugin-node-resolve')({
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),

        // 将CommonJS模块转换为 ES2015 供 Rollup 处理
        require('rollup-plugin-commonjs')({
            include: "node_modules/**",
            exclude: []
        })

    ]
};
