
import { NewYorkBusinessList } from "./BusinessList.js"
import { BusinessList } from "./BusinessList.js"


const contentTarget = document.querySelector(".businesses")


let applicationHTML =
    `<section class="businesses">
       
            ${BusinessList()}
        
            ${NewYorkBusinessList()}
        
        
    </section>
    `

