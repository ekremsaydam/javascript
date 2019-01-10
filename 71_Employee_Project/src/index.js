import { Request } from './request';
import { UI } from './ui';

// Elementleri seçme
const form = document.getElementById('employee-form');
const nameInput = document.getElementById('name');
const departmentInput = document.getElementById('department');
const salaryInput = document.getElementById('salary');
const employeesList = document.getElementById('employees');
const updateEmployeeButton = document.getElementById('update');

const request = new Request('http://localhost:3000/employees');
const ui = new UI();

let updateState = null;

eventListeners();


function eventListeners() {
    document.addEventListener('DOMContentLoaded', getAllEmployees);
    form.addEventListener('submit', addEmployee);
    employeesList.addEventListener('click', updateOrDelete);
    updateEmployeeButton.addEventListener('click', updateEmployee);
}

function getAllEmployees() {
    request.get()
        .then(employees => ui.addAllEmployeesToUI(employees))
        .catch(err => console.log(err));
}

function addEmployee(e) {
    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();

    if (employeeName === '' || employeeDepartment === '' || employeeSalary === '') {
        alert('Lütfen tüm alanları doldurunuz');
    } else {
        request.post({
            name: employeeName,
            department: employeeDepartment,
            salary: Number(employeeSalary)
        }).then(employee => {
            ui.addEmployeeToUI(employee);
        }).catch(err => console.log(err));
    }

    ui.clearInputs();
    e.preventDefault();
}

function updateOrDelete(e) {
    // console.log(e.target);
    if (e.target.id === 'update-employee') {
        updateEmployeeController(e.target.parentNode.parentNode);
    }
    if (e.target.id === 'delete-employee') {
        if (confirm('Silmek istediğinizden emin misiniz?')) {
            deleteEmployee(e.target);
        }
    }
}

function deleteEmployee(element) {
    request.delete(element.parentNode.parentNode.querySelectorAll('td')[3].textContent)
        .then(message => {
            ui.deleteEmployeeToUI(element.parentNode.parentNode);
        })
        .catch(err => console.log(err));
}

function updateEmployeeController(targetEmployee) {
    ui.toggleUpdateButton(targetEmployee);

    if (updateState == null) {
        updateState = {
            updateId: targetEmployee.children[3].textContent,
            updateParent: targetEmployee
        };
    } else {
        updateState = null;
    }
}

function updateEmployee() {
    if (updateState) {
        // Güncelleme
        request.put(updateState.updateId, {
            name: nameInput.value.trim(),
            department: departmentInput.value.trim(),
            salary: Number(salaryInput.value.trim())
        }).then(updatedEmployee => {
            ui.updatedEmployeeOnUI(updatedEmployee, updateState.updateParent);
            // ui.toggleUpdateButton();
            updateEmployeeButton.style.display = 'none';
            updateState = null;
        }).catch(err => console.log(err));
    }
}

// request.get()
//     .then(employees => console.log(employees))
//     .catch(err => console.log(err));

// request.post({
//     'name': 'Mehmet',
//     'department': 'Pazarlama',
//     'salary': 6000
// })
//     .then(employee => console.log(employee))
//     .catch(err => console.log(err));


// request.put(1, {
//     'name': 'Ahmet',
//     'department': 'Pazarlama',
//     'salary': 3000
// })
//     .then(employee => console.log(employee))
//     .catch(err => console.log(err));

// request.delete(1)
//     .then(response => console.log(response))
//     .catch(err => console.log(err));