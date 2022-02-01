import { getBusinesses } from "./database.js"

export const Supply = ( supplyObject ) => {
    return `
        <section class="business">
            <h2 class="supply__type">${supplyObject.type}</h2>
            <div class="supply__price">
                Price: ${supplyObject.price}
            </div>
        </section>
    `
}

