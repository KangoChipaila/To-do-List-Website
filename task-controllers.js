let itemNum = 0;
        function newTask(){
            let iNum = itemNum.toString();

            let taskBoxId = 'task-box-' + iNum;
            let taskCheckboxID = 'task-' + iNum + '-checkbox';
            let taskNameId = 'task-' + iNum + '-name';
            let moreOptionsId = 'task-' + iNum + '-options';
            let taskEditId = 'task-' + iNum + '-edit';
            let taskDeleteId = 'task-' + iNum + '-delete';

            //Build div to hold task checkbox, task name and task ellipse
            const taskBox = document.createElement('div');
            taskBox.setAttribute('id', taskBoxId);
            taskBox.setAttribute('class', 'task-box');

            const list = document.getElementById('incomplete-task-box');
            list.insertBefore(taskBox, list.childNodes[0]);

            //Build task checkbox and add it to div
            const taskCheckbox = document.createElement('input');
            taskCheckbox.setAttribute('type', 'checkbox');
            taskCheckbox.setAttribute('id', taskCheckboxID);
            taskCheckbox.setAttribute('class', 'task-checkbox');
            
            //Custom checkbox
            const div = document.getElementById(taskBoxId);
            div.insertBefore(taskCheckbox, div.childNodes[0]);

            const checkBoxCover = document.createElement('div');
            checkBoxCover.setAttribute('class', 'custom-checkbox');

            div.appendChild(checkBoxCover);
            
            //Send checked task to complete task field or send unchecked task back to incomplete task field
            let checked = false;
            const taskCB = document.getElementById(taskCheckboxID);
            taskCB.onclick = () => {

                if (checked === true){
                    const list = document.getElementById('incomplete-task-box');
                    list.insertBefore(taskBox, list.childNodes[0]);

                    //Hide edit and delete options if they are open during checkbox marking
                    edTask.style.display = "none";
                    delTask.style.display = "none";

                    checked = false;
                }
                else{
                    const listTwo = document.getElementById('complete-task-box');
                    listTwo.insertBefore(taskBox, listTwo.childNodes[0]);

                    //Hide edit and delete options if they are open during checkbox marking
                    edTask.style.display = "none";
                    delTask.style.display = "none";

                    checked = true;
                }
            }

            //Build task name field and add it to div
            const taskName = document.createElement('input');
            taskName.setAttribute('id', taskNameId);
            taskName.setAttribute('class', 'task-name');
            taskName.setAttribute('type', 'text');
            taskName.setAttribute('placeholder', 'NEW TASK');
            taskName.setAttribute('maxlength', '20');
            taskName.setAttribute('readonly', 'true');
            taskName.setAttribute('title', 'Double click to edit task name. Press "Enter" key to save.');

            div.appendChild(taskName);

            //Allows user to name task on double click
            const tskName = document.getElementById(taskNameId);
            tskName.ondblclick = () => {
                tskName.removeAttribute('readonly');
            }

            //Prevents user from editing name upon pressing the "Enter" key
            tskName.onkeydown = (e) => {
                if(e.key == 'Enter'){
                    tskName.setAttribute('readonly', 'true');
                }
            }

            //Build more options button
            const moreOptions = document.createElement('button');
            moreOptions.setAttribute('id', moreOptionsId);
            moreOptions.setAttribute('type', 'button');
            moreOptions.setAttribute('class', 'options');

            div.appendChild(moreOptions);

            //Display more options
            const mrOptions = document.getElementById(moreOptionsId);
            let optionsClicked = false;

            mrOptions.onclick = () => {
                if(optionsClicked === false)
                {
                    delTask.style.display = "block";
                    edTask.style.display = "block";
                    optionsClicked = true;
                }
                else{
                    delTask.style.display = "none";
                    edTask.style.display = "none";
                    optionsClicked = false;
                }
            }
            //Build task edit option and add it to div
            const editTask = document.createElement('button');
            editTask.setAttribute('id', taskEditId);
            editTask.setAttribute('class', 'edit-task');
            editTask.setAttribute('type', 'button');

            div.appendChild(editTask);

            //Functionality to allow editing of task name
            const edTask = document.getElementById(taskEditId);
            edTask.onclick = () => {
                //Allow task name to be edited
                let taskToEdit = document.getElementById(taskNameId);
                taskToEdit.removeAttribute('readonly');
                taskToEdit.focus();
              
                
                //Hide edit and delete options
                edTask.style.display = "none";
                delTask.style.display = "none";

            }

            //Build task delete option and add it to div
            const deleteTask = document.createElement('button');
            deleteTask.setAttribute('id', taskDeleteId);
            deleteTask.setAttribute('class', 'delete-task');
            deleteTask.setAttribute('type', 'button');

            div.appendChild(deleteTask);

            //Functionality to delete tasks
            let delTask = document.getElementById(taskDeleteId);
            delTask.onclick = () => {
                let taskToDelete = document.getElementById(taskBoxId);
                taskToDelete.remove();
            };

            itemNum++;
        }

        