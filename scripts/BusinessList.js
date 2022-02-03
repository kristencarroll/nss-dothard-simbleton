import { getBusinesses } from "./database.js";
import { Business } from "./Business.js"
import { getNewYorkBusinessArray } from "./database.js";
import { NewYorkBusiness} from "./Business.js";

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