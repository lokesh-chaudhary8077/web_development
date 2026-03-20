let jsonData = `[
    {
        "id" : 1,
        "name": "John",
        "occupation": "software developer",
        "address":[]   
    }
    {
        "id" : 2,
        "name": "Ram",
        "occupation": "developer",
        "address":[
            {
                "addressid":1,
                "city": "Delhi",
                "country": "india"
            }
        ]   
    }
]`

let obj = JSON.parse(jsonData)
console.log(obj);
console.log(obj[0].occupation);
let str = JSON.stringify(obj[0].occupation);
console.log(str);
