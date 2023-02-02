import React from "react";

export const AboutPageAsync = React.lazy(() => {
    return new Promise(resolve => {
        //@ts-ignore
        setTimeout(() => resolve(import('./AboutPage')), 1500)
    })
});