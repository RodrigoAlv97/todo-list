import { ProjectList , CurrentProject , Project    } from "./project";
const content = document.querySelector("#content");


function mainPageLoader () {

    // Header--------------------------------------------------
    
        const header = document.createElement('div');
        header.setAttribute('id' , 'header');
        
        const headerTitle = document.createElement('div');
        headerTitle.setAttribute('id' , 'headerTitle');
        headerTitle.textContent = 'Todo List';
    
        header.appendChild(headerTitle);
        
        content.appendChild(header);
    
    // Header--------------------------------------------------
    
    //Sidebar--------------------------------------------------
    
        const sidebar = document.createElement('div');
        sidebar.setAttribute('id' , 'sidebar');
    
        const btnAddProject = document.createElement('button');
        btnAddProject.setAttribute('id' , 'btnAddProject');
        btnAddProject.textContent = 'Add New Project';
    
        const projectList = document.createElement('ul');
        projectList.textContent = 'Projects';
        projectList.setAttribute('id' , 'projectList');

        sidebar.appendChild(projectList);

    
        content.appendChild(sidebar);
    
    //Sidebar--------------------------------------------------
    
    //Main--------------------------------------------------
    
        const main = document.createElement('div');
        main.setAttribute('id' , 'main');
    
        content.appendChild(main);
    
    }
    //Main--------------------------------------------------

    function projectListLoader(){

        const list = ProjectList.list

        list.forEach(element => {
            const listItem =document.createElement('li');
            listItem.setAttribute('class' , 'listItem');
            listItem.setAttribute('data' , list.indexOf(element));
            listItem.textContent = element.getName();
            listItem.addEventListener('click' , function () {
                CurrentProject.setCurrent(element);
                console.log(CurrentProject.getCurrent().getName());
                taskLoader();
            } )
            projectList.appendChild(listItem);
        });
    }

    function taskLoader () {
   
        main.replaceChildren();
        CurrentProject.getCurrent().getList().forEach(element => {
            
            const card = document.createElement('div');
            card.setAttribute('class' , 'card');
            
            const cardName = document.createElement('div');
            cardName.textContent = element.name;
            cardName.setAttribute('class' , 'cardName');
            card.appendChild(cardName);

            const cardDate = document.createElement('div');
            cardDate.textContent = element.dueDate;
            cardDate.setAttribute('class' , 'cardDate');
            card.appendChild(cardDate);

            const cardDescription = document.createElement('div');
            cardDescription.textContent = element.description;
            cardDescription.setAttribute('class' , 'cardDescription');
            card.appendChild(cardDescription);

            const cardPriority = document.createElement('div');
            cardPriority.textContent = element.priority;
            cardPriority.setAttribute('class' , 'cardPriority');
            card.appendChild(cardPriority);
        
            const buttons = document.createElement('div');
            buttons.setAttribute('class' , 'buttons');
            const btnEdit = document.createElement('button')
            btnEdit.textContent ="Edit";
            btnEdit.setAttribute('class' , 'btnEdit');
            buttons.appendChild(btnEdit);
            const btnDone = document.createElement('button')
            btnDone.textContent ="Done";
            btnDone.setAttribute('class' , 'btnDone');
            buttons.appendChild(btnDone);
            card.appendChild(buttons);

           
            main.appendChild(card);
      });
        
    }


    function uiLoader () {
        mainPageLoader();
        projectListLoader();
    }


    export {mainPageLoader , projectListLoader , taskLoader , uiLoader}