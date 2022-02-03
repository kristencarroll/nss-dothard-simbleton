

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