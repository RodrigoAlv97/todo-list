import { ProjectList , CurrentProject , Project , taskDone   } from "./project";
import {Task , addTask } from "./task";

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
            
            card.setAttribute('data' , CurrentProject.getCurrent().getList().indexOf(element) );



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
            btnDone.addEventListener('click' , taskDone);

        

            buttons.appendChild(btnDone);
            card.appendChild(buttons);

           
            main.appendChild(card);
      });
        
    }

    function newTaskLoader () {

        const formContainer = document.createElement('div');
        formContainer.setAttribute('id' , 'formContainer');

    //Form Name--------------------------------------------------
        
        const formName = document.createElement('div');
        formName.setAttribute('class' , 'formItem')
        const labelName = document.createElement('label');
        labelName.setAttribute('class' , 'formLabel');
        labelName.textContent = 'Name: ';
        formName.appendChild(labelName)
        const inputName = document.createElement('INPUT');
        inputName.setAttribute("type", "text");
        inputName.setAttribute('id' , 'inputName');
        formName.appendChild(inputName);

        formContainer.appendChild(formName);

    //Form Name--------------------------------------------------
        
    
    //Form Date--------------------------------------------------

        const formDate = document.createElement('div');
        formDate.setAttribute('class' , 'formItem');
        const labelDate = document.createElement('label');
        labelDate.setAttribute('class' , 'formLabel');
        labelDate.textContent = 'Due Date: ';
        formDate.appendChild(labelDate);
        const inputDate = document.createElement('INPUT');
        inputDate.setAttribute('type' , 'date');
        inputDate.setAttribute('id' , 'inputDate');
        formDate.appendChild(inputDate);

        formContainer.appendChild(formDate);

    //Form Date--------------------------------------------------

    //Form Description--------------------------------------------------

        const formDesc = document.createElement('div');
        formDesc.setAttribute('class' , 'formItem');
        const labelDesc = document.createElement('label');
        labelDesc.setAttribute('class' , 'formLabel');
        labelDesc.textContent = 'Description: ';
        formDesc.appendChild(labelDesc);
        const inputDesc = document.createElement('TEXTAREA');
        inputDesc.setAttribute('id' , 'inputDesc');
        formDesc.appendChild(inputDesc);

        formContainer.appendChild(formDesc);


    //Form Description--------------------------------------------------
 
    //Form Priority--------------------------------------------------

        const formPrio = document.createElement('div');
        formPrio.setAttribute('class' , 'formItem');
        const labelPrio = document.createElement('label');
        labelPrio.setAttribute('class' , 'formLabel');
        labelPrio.textContent = 'Priority: ';
        formPrio.appendChild(labelPrio);
        const inputPrio = document.createElement('SELECT');
        inputPrio.setAttribute('id' , 'inputPrio');
        const optionLow = document.createElement("option");
        optionLow.text = "Low";
        inputPrio.add(optionLow);
        const optionMedium = document.createElement("option");
        optionMedium.text = "Medium";
        inputPrio.add(optionMedium);
        const optionHigh = document.createElement("option");
        optionHigh.text = "High";
        inputPrio.add(optionHigh);
        formPrio.appendChild(inputPrio);

        formContainer.appendChild(formPrio);


    //Form Priority--------------------------------------------------

        const formProjects = document.createElement('div');
        formProjects.setAttribute('class' , 'formItem');
        const labelProjects = document.createElement('label');
        labelProjects.setAttribute('class' , 'formLabel');
        labelProjects.textContent = 'Project: ';
        formProjects.appendChild(labelProjects);
        const inputProjects = document.createElement('SELECT');
        inputProjects.setAttribute('id' , 'inputProjects');
        
        
        const list = ProjectList.list

        list.forEach(element => {
        const option = document.createElement("option");
        option.text = element.getName();
        inputProjects.add(option);
        });

        formProjects.appendChild(inputProjects)
        formContainer.appendChild(formProjects)

     
    //Form project--------------------------------------------------

    

    //Form project--------------------------------------------------


    //Form Button--------------------------------------------------

        const formButtons = document.createElement('div');
        formButtons.setAttribute('class' , 'formItem' )
        
        const addBtn = document.createElement('button');
        addBtn.setAttribute('class' , 'addBtn');
        addBtn.textContent = 'Add';
        addBtn.addEventListener('click' , addTask);
        formButtons.appendChild(addBtn)

        const cancelBtn = document.createElement('button');
        cancelBtn.setAttribute('class' , 'cancelBtn');
        cancelBtn.textContent = 'Cancel';
        formButtons.appendChild(cancelBtn);
        formContainer.appendChild(formButtons);

    //Form Button--------------------------------------------------
    
    
    main.appendChild(formContainer);

    }


    function uiLoader () {
        mainPageLoader();
        projectListLoader();
    }


    export {mainPageLoader , projectListLoader , taskLoader , newTaskLoader , uiLoader}