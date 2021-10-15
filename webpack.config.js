
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  // 抽離 CSS
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");



module.exports = {
    target: 'web', // 指定目標 打包成 web
    entry: './src/index.js',  // 入口
    output: {  // 出口
        path: path.resolve(__dirname, 'dist'),
        filename: 'index[hash].js',  // 生成檔名
    },
    mode: 'development', // 開發模式
    module: {
        rules: [
            { 
            test: /\.css$|\.scss$/i,    // 當看到 CSS 副檔名，就會使用這兩個 loader
            use: [
                MiniCssExtractPlugin.loader, 
                {
                    loader: 'css-loader', 
                    options: {
                        importLoaders: 1,   //  在 css 中可以用 import 語句 
                    }
                },

                {
                    loader: "postcss-loader",   //  依照不同瀏覽器，在前面會有不同得 前綴名
                },
                {
                    loader: "sass-loader",
                }

            ],  
          },
          
          {
              test: /\.(gif|png|jpeg|jpg)/,
              type: 'asset/resource' // webpack 5 新功能 取代 file-loader
          },
          {
              test: /\.html/,
              loader: 'html-loader',
              options: {
                  esModule: false
              }
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            }
          }
       ], 
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new MiniCssExtractPlugin({filename: 'style[hash].css'}),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            // patterns 可設定很多不同 組合
            patterns: [
              // 從 src 底下的 Images 資料夾 複製到上線資料夾
              { from: "./src/Images", to: "./Images" }, 
            ],
          }),
          //  定義全域變數; 變量 要遵循規則 全部大寫，可在 Js 裡用
          new webpack.DefinePlugin(
              {
                NUMBER: 1230,
              }
          ),
          new CompressionPlugin()
    ],

    devtool:'source-map',  // 除錯方便，看得到原始碼，而不是封裝過後的
    
}