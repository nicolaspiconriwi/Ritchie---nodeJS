class Utilities{
    static generateId(){
        let increment = 0
        return function(){
          return  increment ++
        
        }
    }

    static renderPage(){
        const $registerForm = document.getElementById('registerForm');
        const $inputName = document.getElementById('user_name');
        const $inputEmail = document.getElementById('user_email');
        const $inputPassword = document.getElementById('user_password');
        const $buttonRegister = document.getElementById('button_register');
        const $buttonAdmin = document.getElementById('button_register_admin');

        document.addEventListener('DOMContentLoaded', () => {

        $buttonRegister.addEventListener('click', (e) => {
            e.preventDefault();
            if(!$inputName.value || !$inputEmail.value || !$inputPassword.value){
                alert('You should fill all the fields')
            }else{
                Person.createUser($inputName.value, $inputEmail.value, $inputPassword.value);
                console.log(Person.users);
            }

        });


        }); //Cierre DomContentLoaded

    };


    static newId = Utilities.generateId();
}

Utilities.renderPage();

class Person{
    static users = [];
    constructor(name, email, password){
        this.id = Utilities.newId()
        this.name = name
        this.email = email
        this.password = password
        this.role = "costumer"

    }
    
    static createUser(name, email, password){
        const newUser = new RegulaUser(name, email, password)
        this.users.push(newUser)
    }

}

class RegulaUser extends Person{
    constructor(id, name, email, password){
        super(id, name, email, password);
    }
}

class AdminUser extends Person{
    static #adminKey = 123456
    constructor(name, email, password){
        super( name, email, password, role = "admin");
        
    }


    static createAdminUser(adminKeySent, name, email, password){
        if(adminKeySent === this.#adminKey){
            return new AdminUser( name, email, password);
        }else{
            throw new Error('Invalid Admin Key');
        }
    }

}


class Book{
    static books = []
    constructor(startDate, endDate, userId, price, peopleNumber){
        this.id = Utilities.newId();
        this.startDate = startDate
        this.endDate = endDate
        this.userId = userId
        this.price = price
        this.peopleNumber = peopleNumber  
    
    }

    static createBook(startDate, endDate, userId, peopleNumber){
        const user = Person.users.find(user => user.id === userId);
        if(!user) throw new Error ('User not found');

        if(user.role === "admin"){
            const newBook = new Book(startDate, endDate, userId, 200, peopleNumber);
            this.books.push(newBook)
        }else{
            const newBook = new Book(startDate, endDate, userId, 200, 1);
            this.books.push(newBook)
        }
    }

}

