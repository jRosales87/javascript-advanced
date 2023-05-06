

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const environmentsComponent = (element) => {


    const html = `
        DEV: ${ import.meta.env.DEV } <br/>
        PROD: ${ import.meta.env.PROD } <br/>
        API_KEY: ${ import.meta.env.VITE_API_KEY } <br/>
        BASE_URL: ${ import.meta.env.VITE_BASE_URL } <br/>
    `;

    element.innerHTML = html

}