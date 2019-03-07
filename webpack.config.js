const path = require('path')                            // webpack ищет точку выхода с корня (если винда то диск C:/...) // А модуль path решает эту проблему
                            
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    
    context: path.join(__dirname, 'src'),

    entry: {
        app: './index.js'                       // app.js   //точка входа, сюда пишем все скрипты  // пишет все зависимости в этот файл
                                                    //ser: './scr/index.js' //файл будет называться ser.js
    },
    output: {
        filename: '[name].js',                      // имя берется из ярлыка точки входа, на случай если ТВ не одна
        path: path.join(__dirname, 'dist'),      // католог dist создается сам      (filename: 'my-first-webpack.bundle.js'  ---- можно так написать, у нас файл называвется app.js)
        publicPath: ''                          //нужно для девсервера
    },
    module: { //конфигурация модулей
        rules : [
            //--------------------------------JS
            {    //правила
            test: /\.js$/,      //регулярное выражение для проверки (экранировали точку)
            loader: 'babel-loader',  //обработка всех js файлов   
            exclude: '/node_modules/'   //исключаем js файлы ноды
            },
            //--------------------------------SCSS
            {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options:{ sourceMap: true }
                }, {
                    loader: "postcss-loader",
                    options:{ sourceMap: true, config: {path: 'src/js/postcss.config.js'} }
                }, {
                    loader: "sass-loader",
                    options:{ sourceMap: true }
                }
            ]
            },
            //--------------------------------CSS 
            {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options:{ sourceMap: true }
                }, {
                    loader: "postcss-loader",
                    options:{ sourceMap: true, config: {path: 'src/js/postcss.config.js'} }
                },
            ]
            },
            //--------------------------------FILES
            {
                test: /\.(gif|png|jpe?g|svg)$/i,     //test: /\.(png|svg|jpg|gif)$/,
                use: [
                        {
                            loader:'file-loader',
                            options: {
                                name: '[path][name].[ext]',  //для хеша дописать ?[hash]  -----копируем обработ.файлы в такую же дир-ю, с тем же назв-ем и расшир-ем
                            },
                        },
                        {   
                            loader: 'image-webpack-loader',
                            options: {
                              mozjpeg: {
                                progressive: true,
                                quality: 65
                              },
                              // optipng.enabled: false will disable optipng
                              optipng: {
                                enabled: false,
                              },
                              pngquant: {
                                quality: '65-90',
                                speed: 4
                              },
                              gifsicle: {
                                interlaced: false,
                              },
                              // the webp option will enable WEBP
                              webp: {
                                quality: 75
                              }
                            }
                        },
                ]
            },
            //--------------------------------PUG
            { 
                test: /\.pug$/,
                use:[
                    {loader: 'html-loader',},
                    {loader: 'pug-html-loader', options: { data: {} }}
                ]
    
            },
            //--------------------------------FONTS
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    {
                        loader:'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        },
                    }
                ]
            }
        ] //-----------rules
    },  //-----------modules

    devServer: { //настройки девсервера
        overlay: true // показ ошибки в браузере
    },

    plugins: [
        new CleanWebpackPlugin( 'dist', {}),    //чистка dist перед сборкой

        new MiniCssExtractPlugin({
          filename: '[name].css',
          //chunkFilename: "[id].css"
        }),

        new HtmlWebpackPlugin({
            template: "pug/index.pug",
            filename:  'index.html',                 //"[name].html"
            //title: 'Тайтл страницы',
            //hash: true,
            //minify: { html5: true }
          })
      ],

      devtool: 'eval', //исходная карта soursemap
};