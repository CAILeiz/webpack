# webpack
webpack整体配置
1. 安装依赖
npm i html-webpack-plugin less sass less-loader sass-loader autoprefixer postcss-loader css-loader style-loader babel-loader @babel/core @babel/preset-env eslint eslint-loader stylelint stylelint-webpack-plugin stylelint-config-standard jest jest-webpack webpack webpack-cli webpack-dev-server -D
2. 配置目录结构
--config
    --webpack.developent.js
    --webpack.production.js
    --webpack.test.js
--src 
    --css
    --fonts
    --imgs
    --js
    --less
    --index.js
--tests
--index.html
--packjson-lock.json
--packjson.json
--webpack.config.js
--README.md
3. 初始化eslint 
node node_modules/eslint/bin/eslint --init
4. 配置stylelint
    yi :
    在webpack.config.js中 引入style-webpack-pulgin
    在pulgins数组中 new StyleLintPlugin({
        files: [**/*.css]
    })
    如果只写到这里 执行webpack会报
    ERROR in No configuration provided for C:\Users\tcsc6\Desktop\packweb配置\src\css\main.css
    er: 
    需要加一个.stylelintrc.js文件
    或者直接把stylelint配置放在packjson文件中新增一个stylelint属性
    "stylelint": {
        "extends": "stylelint-config-standard" // extends外部找 stylelint-config-standard
    }
5. 配置autoprefixer http://browserl.ist
  在packjson.js中新增
  "browserlist": [
    "> 0.5%",
    "last 1 version",
    "not dead"
  ]
  这里面的条件是一个并且的关系 只要满足一个就会加浏览器前缀
  6. jest ==> npm run test
    yi
    packjson.js中 配置测试目录  如果不设置 就会测试文件中带有"test"的文件
    "jest": {
        "roots": [
        "./tests/"
        ]
    }
    er
    packjson.js中的scripts中加入配置  不能设置--env.tets 因为jest-webpack有自己的env
    "test": "jest-webpack"
    san
    测试的话在tests文件夹下面写入测试用例即可 使用expect toBe语法
    const mod = require("../src/js/num");
    test("test sum", _ => {
        expect(mod(12, 5)).toBe(17);
        expect(mod(12, 0)).toBe(12);
        expect(mod(17, 0)).toBe(17);
        expect(mod(0, 5)).toBe(5);
    })
