
import { NewYorkBusinessList } from "./BusinessList.js"
import { BusinessList } from "./BusinessList.js"
import { PurchasingAgentList } from "./BusinessList.js"

const contentTarget = document.querySelector(".businesses")


/*let applicationHTML =
    `<section class="businesses">
       
            ${BusinessList()}
        
            ${NewYorkBusinessList()}
        
        
    </section>
    `*/

let applicationHTML =
    
        `<section class="businesses">
             ${BusinessList()}
        </section>
        
        <article class="businessList--newYork">
            ${NewYorkBusinessList()}
         </article>

         <article class="agents">
            ${PurchasingAgentList()}
        </article>


    `
