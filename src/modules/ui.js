const content = document.querySelector("#content");

function pageLoader () {

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


    export {pageLoader}