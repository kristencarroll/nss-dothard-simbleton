

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

