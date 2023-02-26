// export const INSIGHTS_API = "https://api.jsonbin.io/v3/qs/63fb13b9ace6f33a22e5a8b7"
// const BASE_URL = "https://78a4-68-180-86-203.ngrok.io"
export const BASE_URL = "http://127.0.0.1:8000"
export const INSIGHTS_API = `${BASE_URL}/lecture?id=2` 

export const LECTURES = [{
        "id": 1,
        "name": "Operating Systems",
        "professor": "Dr. Phunsuk Wangdu",
        "date": "March 10, 2022",
        "hidden": false,
        "thumbnail_path": "os.png"
    },
    {
        "id": 2,
        "name": "Computer Networks",
        "professor": "Dr. Phunsuk Wangdu",
        "date": "April 10, 2022",
        "hidden": true,
        "thumbnail_path": "os.png"
    },
    {
        "id": 3,
        "name": "OOP",
        "professor": "Dr. Phunsuk Wangdu",
        "date": "April 10, 2022",
        "hidden": true,
        "thumbnail_path": "os.png"
    }
]

export const ANNOUNCEMENTS = [
    "Object Oriented Programming, or OOP for short, is a programming paradigm that is centered around the concept of objects",
    "Concluding statements foo "
]

export const TIMELINE = [
    "Intro to OOP",
    "Four Pillars of OOP",
    "Abstraction",
    "Encapsulation",
    "Inheritance",
    "Polymorphism",
    "Use case of OOP",
    "Announcements",
    "Concluding statements"
]

export const TRANSCRIPT
 = ["Object Oriented Programming, or OOP for short, is a programming paradigm that is centered around the concept of objects. These objects are instances of classes, which are essentially blueprints for creating objects with certain properties and behaviors.", "One of the key features of OOP is encapsulation, which involves bundling data and methods that manipulate that data into a single entity, known as a class. This encapsulation helps to create a cleaner, more organized codebase by hiding implementation details and preventing external access to sensitive data. Additionally, it allows for the creation of reusable code, as classes can be instantiated multiple times throughout a program.", "Another important aspect of OOP is inheritance. Inheritance involves creating new classes based on existing classes, known as parent classes. The new classes, known as child classes, inherit the properties and methods of the parent class and can also add new properties and methods of their own. This allows for the creation of more specialized classes that can reuse code from their parent classes, making it easier to write and maintain code.", "Polymorphism is another important concept in OOP. Polymorphism refers to the ability of objects to take on multiple forms, depending on the context in which they are used. This can be achieved through the use of interfaces, which define a set of methods that must be implemented by any class that implements the interface. This allows for more flexible and modular code, as different objects can be used interchangeably as long as they implement the same interface.", "Abstraction is another key principle of OOP. Abstraction involves focusing on the essential features of an object while hiding unnecessary details. This allows for more flexible and adaptable code, as the implementation details of an object can be changed without affecting the overall functionality of the program.", "One of the main benefits of OOP is its ability to promote code reuse and modularity. By encapsulating data and methods into classes, and allowing for inheritance and polymorphism, code can be written in a more modular and reusable way. This can lead to faster development times, easier maintenance, and fewer bugs in the codebase.", "Despite these potential drawbacks, OOP remains a popular and widely used programming paradigm, especially in larger and more complex software projects. Its focus on modularity, encapsulation, and reuse can lead to more maintainable and scalable code, making it a valuable tool for many developers."]


 export const SUMMARY = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum']

 export const QUESTIONS = ["Why do we need do abstraction?", "How to achieve abstraction in calculatar?", "Why do we need do abstraction?", "Why do we need do abstraction?"]