const app = new Vue ({
    
    el:'#root',

    data: {

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

        removelementodolist: function (index){
            
            this.todos.splice(index,1);
            
        },

        controlelementodolist: function (todoindex){
            
            this.todos[todoindex].done = !this.todos[todoindex].done;
            
        },

    }
})

