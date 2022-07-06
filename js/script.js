const app = new Vue ({
    
    el:'#root',

    data: {

        i : 0,

        todo : '',

        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
        ]
    },

    methods : {

        addelementodolist: function (){

           if(this.todo === ''){

            } else {

                const obj = {
                    text: this.todo,
                    done: false,
                }
                 
                this.todos.push(obj);
            
                this.todo= '';
            }
        },

        removelementodolist: function (){
            
            this.todos.slice(this.todos[this.i]);
        }

    }
})

