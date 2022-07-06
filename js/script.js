const app = new Vue ({
    
    el:'#root',

    data: {

        i : 0,

        classelement : 'ms_line-through',

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

        controltodo: function (){
            for(let index = 0; index < this.todos.length; index++){
                
                if(this.todos[index].done){
                    this.todos[index].done = 'classelement'; 
                }
            }
        }

    }
})

