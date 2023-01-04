const selector = document.querySelector('.project-selector')

export const fillProjectSelector = (list) => {
  
  selector.replaceChildren()

  list.forEach(element => {
    const option = document.createElement('option')
    option.value = element.name
    option.text = element.name
    selector.add(option)
  });
}