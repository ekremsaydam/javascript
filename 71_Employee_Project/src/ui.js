export class UI {
    constructor() {
        this.employeesList = document.getElementById('employees');
        this.updateButton = document.getElementById('update');
        this.nameInput = document.getElementById('name');
        this.departmentInput = document.getElementById('department');
        this.salaryInput = document.getElementById('salary');
    }

    addAllEmployeesToUI(employees) {
        employees.forEach(employee => {
            this.employeesList.innerHTML += `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
            `;
        });
    }

    clearInputs() {
        this.nameInput.value = '';
        this.departmentInput.value = '';
        this.salaryInput.value = '';
    }

    addEmployeeToUI(employee) {
        this.employeesList.innerHTML += `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
            `;
    }

    deleteEmployeeToUI(element) {
        element.remove();
    }

    toggleUpdateButton(target) {
        if (this.updateButton.style.display === 'none') {
            this.updateButton.style.display = 'block';
            this.addEmployeeInfoToInputs(target);
        } else {
            this.updateButton.style.display = 'none';
            this.clearInputs();
        }
    }

    addEmployeeInfoToInputs(target) {
        this.nameInput.value = target.children[0].textContent;
        this.departmentInput.value = target.children[1].textContent;
        this.salaryInput.value = target.children[2].textContent;
    }

    updatedEmployeeOnUI(employee, parent) {
        parent.innerHTML = `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                    <td>${employee.id}</td>
                    <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                    <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
                </tr>
                `;
        this.clearInputs();
    }
}