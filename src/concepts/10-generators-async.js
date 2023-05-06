import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorsAsyncComponent = async(element) => {

    const heroGenerator = getHeroGenerator();
    let isFinished = true;

    do {
        const {value, done} = await heroGenerator.next();
        isFinished = done;

        if (isFinished) break;

        element.innerHTML = value;

    } while ( !isFinished );

}


async function* getHeroGenerator() {
    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }
    return 'no hay más';
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve();
        }, 300);
    })
}