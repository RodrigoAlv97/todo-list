import { getPrioColor } from "./getPrioColor";

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
    const del = document.createElement('button')
    del.textContent = 'x';
    del.setAttribute('class', 'delete-card')
    del.style.backgroundColor = `${getPrioColor(element.priority)}`
    card.style.backgroundColor = `${getPrioColor(element.priority)}`
    card.appendChild(del)
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