var app=new Vue({
    el: '#app',
    data: {
        message:'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: '学习javascript'},
            {text: '学习vue'},
            {text: '学习整个牛项目'},
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
        reverseMessage: function(){
            this.message=this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: "Hello Vue"
    }
})

Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList:[
            {id:0, text:'蔬菜'},
            {id:1, text:'奶酪'},
            {id:2, text:'随便其它什么人吃的东西'},
        ]
    }
})

var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        }
    }
})

var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Fuck',
        lastName: 'you',
    },
    computed: {
        fullName: {
            get: function(){
                return this.firstName + " " + this.lastName
            },
            set: function(newValue){
                var names = newValue.split('')
                this.firstName=names[0]
                this.lastName=names[names.length-1]
            }
        }
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items:[
            {message: 'Foo'},
            {message: 'bar'}
        ]
    }
})

var demo = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            title: 'How to do lists in vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }
    }
})

Vue.component('todo-item', {
    template: `
    <li>
      {{ title }}
      <button v-on:click="$emit(\'remove\')">Remove</button>
    </li>
  `,
    props: ['title']
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})