namespace ReactTuto.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string Department { get; set; }
        public string DateOfJoining { get; set; }
        public string PhotoFileName { get; set; }

        public Employee(int EmployeeId, string EmployeeName, string Department, string DateOfJoining, string PhotoFileName)
        {
            this.EmployeeId = EmployeeId;
            this.EmployeeName = EmployeeName;
            this.Department = Department;
            this.DateOfJoining = DateOfJoining;
            this.PhotoFileName = PhotoFileName;
        }

    }
}
