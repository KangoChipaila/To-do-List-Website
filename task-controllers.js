let itemNum = 0;
        function newTask(){
            iNum = itemNum.toString();

            let taskBoxId = 'task-box-' + iNum;
            let taskCheckboxID = 'task-' + iNum + '-checkbox';
            let taskNameId = 'task-' + iNum + '-name';
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
            
            const div = document.getElementById(taskBoxId);
            div.insertBefore(taskCheckbox, div.childNodes[0]);
            
            //Send checked task to complete task field or send unchecked task back to incomplete task field
            let checked = false;
            const taskCB = document.getElementById(taskCheckboxID);
            taskCB.onclick = () => {

                if (checked === true){
                    const list = document.getElementById('incomplete-task-box');
                    list.insertBefore(taskBox, list.childNodes[0]);
                    checked = false;
                }
                else{
                    const listTwo = document.getElementById('complete-task-box');
                    listTwo.insertBefore(taskBox, listTwo.childNodes[0]);
                    checked = true;
                }
            };

            //Build task name field and add it to div
            const taskName = document.createElement('input');
            taskName.setAttribute('id', taskNameId);
            taskName.setAttribute('class', 'task-name');
            taskName.setAttribute('type', 'text');
            taskName.setAttribute('placeholder', 'NEW TASK');
            taskName.setAttribute('maxlength', '20');

            div.appendChild(taskName);

            //Build task delet option and add it to div
            const deleteTask = document.createElement('button');
            deleteTask.setAttribute('id', taskDeleteId);
            deleteTask.setAttribute('class', 'delete-task');
            deleteTask.setAttribute('type', 'button');

            div.appendChild(deleteTask);

            let delTask = document.getElementById(taskDeleteId);
            delTask.onclick = () => {
                let taskToDelete = document.getElementById(taskBoxId);
                taskToDelete.remove();
            };

            itemNum++;
        }

        