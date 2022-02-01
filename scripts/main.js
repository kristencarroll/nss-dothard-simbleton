import { getBusinesses } from "./database.js"


const contentTarget = document.querySelector(".businesses")

const BusinessList = () => {
    const businessArray = getBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Supply(businessObject)
        }
    );
}
