
import { NewYorkBusinessList } from "./BusinessList.js"
import { BusinessList } from "./BusinessList.js"


const contentTarget = document.querySelector(".businesses")


let applicationHTML =
    `<section class="businesses">
        <h1>Active Businesses</h1>
            ${BusinessList()}
        <h1>New York Businesses</h1>
            ${NewYorkBusinessList()}
        
        
    </section>
    `

