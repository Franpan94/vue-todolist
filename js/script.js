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

        addelementodolist: function (newelement){

           if(newelement === ''){

            } else {
                 
                this.todos.push(newelement);
            
                this.todo= '';
            }
        }
    }
})