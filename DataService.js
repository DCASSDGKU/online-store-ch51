

const catalog = [
    {
        "title":"Tomatoes",
        "image":"Tomato.jpg",
        "price":"3.99",
        "category":"vegetables",
        "_id":"12345"
    },
    {
        "title":"Atlantic Starr",
        "image":"Atlantic Starr Collection.jpg",
        "price":"3.99",
        "category":"Music",
        "_id":"12346"
    },
    {
        "title":"Spinach",
        "image":"Spinach.jpg",
        "price":"3.99",
        "category":"vegetables",
        "_id":"12347"
    },
    {
        "title":"LEVI'S",
        "image":"Denim.jpg",
        "price":"3.99",
        "category":"Clothing",
        "_id":"12348"
    },
    {
        "title":"MEGAVOX",
        "image":"VCR.jpg",
        "price":"3.99",
        "category":"Electronics",
        "_id":"12344"
    },
    {
        "title":"Kool Aid",
        "image":"KoolAid.jpg",
        "price":"3.99",
        "category":"Beverage",
        "_id":"12425"
    },
];

class DataService{
    getProducts(){
        return catalog;
    }

    getCategories(){
        return ["fruit", "vegetable"];
    }
}

export default DataService;

