import { getBusinesses } from "./database.js";
import { Business } from "./Business.js"
import { getNewYorkBusinessArray } from "./database.js";
import { NewYorkBusiness} from "./Business.js";
import { getPurchasingAgents } from "./database.js";
import { PurchasingAgents } from "./Business.js"

const contentTarget = document.querySelector(".businesses")

export const BusinessList = () => {
    const businessArray = getBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}


const newYorkArticle = document.querySelector(".businessList--newYork")

export const NewYorkBusinessList = () => {
    const newNewYorkBusinessArray = getNewYorkBusinessArray()
    
    newYorkArticle.innerHTML = "<h1>New York Businesses</h1>"

    newNewYorkBusinessArray.forEach(
        (newYorkBusinessObject) => {
            newYorkArticle.innerHTML += NewYorkBusiness(newYorkBusinessObject)
        }
    )

}

const purchasingAgentArticle = document.querySelector(".agents")

export const PurchasingAgentList = () => {
    const newPurchasingAgentArray = getPurchasingAgents()

    purchasingAgentArticle.innerHTML += "<h1>Purchasing Agents</h1>"

    newPurchasingAgentArray.forEach(
        (newPurchasingAgentObject) => {
            purchasingAgentArticle.innerHTML += PurchasingAgents(newPurchasingAgentObject)
        }

    )

}
