class EmployeeClass {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

    getSalary() : number {
        return 10000;
    }
}
const employeeClass: EmployeeClass = new EmployeeClass(2,"pepe");
console.log(employeeClass.getSalary())
