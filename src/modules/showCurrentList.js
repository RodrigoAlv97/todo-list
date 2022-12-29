const createCards = (arr , target) =>{
  arr.forEach(element => {
    const card = document.createElement('div')
    card.setAttribute('class' , 'card');
    const title = document.createElement('div')
    title.textContent = element.title
    const desc = document.createElement('div')
    desc.textContent = element.desc
    const dueDate = document.createElement('div')
    dueDate.textContent = element.dueDate
    const priority = document.createElement('div')
    priority.textContent = element.priority
    card.appendChild(title)
    card.appendChild(desc)
    card.appendChild(dueDate)
    card.appendChild(priority)
    target.appendChild(card)
    
  });
}

const showCurrentList = (arr , target) =>{
  target.replaceChildren()
  createCards(arr , target)
}

export {showCurrentList}