- to add new teacher: POST request to http://localhost:3000/teacher with the following JSON body:
{
	"name": "name",
	"age": number,
	"experience": number,
    "studentsId": ["", "", ""]
}
where studentsId - array with _id from studentmodels collection

- to get all teachers (aggregated response): GET request to http://localhost:3000/teacher