import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        )

        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            },
        )
        return config
    }
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
