
import { Business } from "./Business.js"
import { BusinessList } from "./BusinessList.js"

const contentTarget = document.querySelector(".businesses")


let applicationHTML =
    `<section class="businesses">
        <h1>Active Businesses</h1>
            ${BusinessList()}
    </section>`

