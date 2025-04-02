const goodbye = (jmeno, prijmeni) => {
    return `Na shledanou ${jmeno} ${prijmeni}`
};

const emailClosingElement = document.querySelector('.email__closing')
emailClosingElement.textContent = goodbye('Pavel', 'Ovesný');


const fillSubject = (subject) => {
    const subjectElement = document.querySelector('.email__subject')
    subjectElement.textContent = subject
    return subjectElement;
}
fillSubject('Hledám práci');

const fillBody = (body, name) => {
    const bodyElement = document.querySelector('.email__body')
    bodyElement.textContent = body
    const goodbye = document.querySelector('.email__closing')
    goodbye.textContent = name
    return {bodyElement, goodbye} ;
}
fillBody ('Líbí se mi váš inzerát', 'Eliška Ovesná');