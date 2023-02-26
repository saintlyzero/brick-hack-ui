// export const INSIGHTS_API = "https://api.jsonbin.io/v3/qs/63fb13b9ace6f33a22e5a8b7"
// const BASE_URL = "https://78a4-68-180-86-203.ngrok.io"
export const BASE_URL = "https://40ad-2620-8d-8000-1044-7d03-26f-ac7-a797.ngrok.io"
export const INSIGHTS_API = `${BASE_URL}/lecture?id=2`;
export const MOCK_LECTURE_RESPONSE = {"summary": ["An operating system (OS) is a software program that manages computer hardware and software resources and provides common services for computer programs.", "It acts as a communication bridge between the computer hardware and software applications.", "The primary goal of an OS is to make it easier for users to interact with the computer hardware and software by providing a user-friendly interface, multitasking capabilities, and efficient use of resources.", "In addition, OSs also provide services such as file management, memory management, and security."], "outline": ["Operating Systems", "Computer Networks", "Transmission Medium", "Network Protocol", "Network Support", "Network Management Tools", "Office Hours"], "announcements": ["I wanted to remind you that the first assignment is due this Monday", "Lastly, I want to remind that office hours are available every Tuesday and Thursday from 1pm to 2 pm"], "quiz": ["1. What is an operating system?", "2. What are the different types of operating systems?", "3. What are the advantages and disadvantages of each type of operating system?", "4. What is a computer network?", "5. What are the different types of computer networks?"], "transcript": ["Good morning everyone, today we will be discussing Operating Systems and Computer Networks. Before we begin, let's define what an Operating System (OS) is. An OS is a software program that manages computer hardware and software resources and provides common services for computer programs. It acts as a communication bridge between the computer hardware and software applications.", "The primary goal of an Operating System is to make it easier for users to interact with the computer hardware and software by providing a user-friendly interface, multitasking capabilities, and efficient use of resources. In addition, Operating Systems also provide services such as file management, memory management, and security.", "I wanted to remind you that the first assignment is due this Monday. It focuses on implementing semaphores and mutexes in a real-world scenario. This assignment will help you solidify your understanding of these synchronization tools and give you practical experience in their usage. Be sure to submit your completed assignment by the deadline posted.", "Let's now move on to computer networks. A computer network is a group of computers that are connected together and can communicate with each other. Computer networks allow computers to share resources such as printers, scanners, and files. They also enable users to access the internet and other network resources.", "One of the key components of computer networks is the transmission medium. This is the physical medium used to transmit data between computers. Common transmission mediums include copper wires, fiber optics, and wireless signals.", "Another important component of computer networks is the network protocol. Network protocols are a set of rules that govern communication between computers on a network. Examples of network protocols include TCP/IP, HTTP, and FTP.", "Now, let's talk about the relationship between Operating Systems and computer networks. Operating Systems provide network support by offering networking protocols and services. These protocols and services enable computers to communicate with each other and share resources. Operating Systems also offer network management tools such as network configuration utilities and monitoring tools.", "Lastly, I want to remind that office hours are available every Tuesday and Thursday from 1pm to 2 pm. If you're struggling with semaphores, mutexes, or any other course material, this is a great opportunity to get some one-on-one help. I'm here to support you and help you succeed in this course"]}

export const MOCK_LECTURES_RESPONSE = [{
    "id":1,
    "Name":"Computer Networks",
    "date":"2023-02-26",
    "professor": "Dr. Phunksuk Wangdu",
    "thumbnail":"os.png"
},{
    "id":2,
    "Name":"Operating Systems",
    "date":"2023-01-13",
    "professor": "Dr. Itachi Uchiha",
    "thumbnail":"os.png"
},{
    "id":1,
    "Name":"Problem Solving",
    "date":"2023-01-04",
    "professor": "Dr. Minato Namikaze",
    "thumbnail":"os.png"
}]