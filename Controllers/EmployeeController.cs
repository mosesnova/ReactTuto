using Microsoft.AspNetCore.Mvc;
using ReactTuto.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactTuto.Controllers
{
    [Produces("application/json")]
    [Route("[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        // GET: api/<EmployeeController>
        [HttpGet]
        public IEnumerable<Employee> Get()
        {

            List<Employee> employees = new List<Employee>();
            employees.Add(new Employee(1, "PALI_e1", "Parvez Ali", "FOOTBALL", "1"));
            employees.Add(new Employee(2, "AALI_e2", "Ashik Ali", "FOOTBALL", "1"));
            employees.Add(new Employee(3, "AALI_e3", "Aftab Ali", "CHESS", "2"));
            employees.Add(new Employee(4, "AALI_e4", "Arif Ali", "CRICKET", "3"));

            return employees;
        }
            // GET api/<EmployeeController>/5
            [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
