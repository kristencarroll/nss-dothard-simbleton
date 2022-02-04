

export const Business = ( businessObject ) => {
    return `
        <section class="businesses">
            <h2 class="business__name">${businessObject.companyName}</h2>
            <div class="business__address">
                 ${businessObject.addressFullStreet} 
                 ${businessObject.addressCity}
                 ${businessObject.addressStateCode}
                 ${businessObject.addressZipCode}
            </div>
            
            
        </section>
    `
}


export const NewYorkBusiness = ( newYorkBusinessObject ) => {
    return `
    <article class="businessList--newYork">
        <h2 class="business__name">${newYorkBusinessObject.companyName}</h2>
        <div class="business__address">
            ${newYorkBusinessObject.addressFullStreet} 
            ${newYorkBusinessObject.addressCity}
            ${newYorkBusinessObject.addressStateCode}
            ${newYorkBusinessObject.addressZipCode}
        </div>
    </article>    
    `
}

export const PurchasingAgents = ( purchasingAgentObject ) => {
    return `
    <article class="agents">
        <h2 class="agent__name">${purchasingAgentObject.fullName}</h2>
        <div class="agent__details">
            ${purchasingAgentObject.company} 
            ${purchasingAgentObject.phoneNumber}
        </div>
    </article>    
    `
}