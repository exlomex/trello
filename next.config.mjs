import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config, { dev }) => {
    //     config.module.rules.push({
    //         test: /\.s[ac]ss$/i,
    //         use: [
    //             MiniCssExtractPlugin.loader,
    //             {
    //                 loader: 'css-loader',
    //                 options: {
    //                     modules: {
    //                         localIdentName: dev
    //                             ? '[path][name]__[local]--[hash:base64:5]'
    //                             : '[hash:base64:8]',
    //                         auto: (resPath) =>
    //                             Boolean(resPath.includes('.module.')),
    //                     },
    //                     esModule: false,
    //                 },
    //             },
    //             'sass-loader',
    //         ],
    //     });
    //     config.plugins.push(
    //         new MiniCssExtractPlugin({
    //             filename: 'static/css/[contenthash].css', // Имя выходного файла CSS с хэшем содержимого
    //             chunkFilename: 'static/css/[contenthash].css', // Имя файла CSS для чанков с хэшем содержимого
    //         }),
    //     );
    //     return config;
    // },
};

export default nextConfig;
