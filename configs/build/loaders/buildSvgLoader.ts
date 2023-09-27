export const buildSvgLoader = () => ({
    test: /\.svg$/,
    exclude: /node_modules/,
    use: [{
        loader: '@svgr/webpack',
        options: {
            icon: true, // удаляет ширину/высоту из svg
            // svgoConfig: { // меняет color на currentColor
            //     plugins: [
            //         {
            //             name: 'convertColors',
            //             params: {
            //                 currentColor: true,
            //             }
            //         }
            //     ]
            // }
        }
    }],
});
