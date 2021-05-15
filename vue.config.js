module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/kings-castle/" : "/",
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
            @import "@/scss/_variables.scss";
          `,
            },
        },
    },
};
