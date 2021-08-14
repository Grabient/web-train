var example = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: '爹爹'
    },
    methods: {
        greet: function (event){
            alert("Hello " + this.name + "!")
            if(event){
                alert(event.target.tagName)
            }
        }
    }
})

var example = new Vue({
    el: '#example-3',
    methods: {
        say: function (message){
            alert(message)
        }
    }
})

var example = new Vue({
    el: '#example-4',
    data: {
        picked: ""
    }
})

var example = new Vue({
    el: '#example-5',
    data: {
        selected: ""
    }
})

var example = new Vue({
    el: '#example-6',
    data: {
        selected: "A",
        options: [
            {text: 'One',value:"A"},
            {text: 'Two',value:"B"},
            {text: 'Three',value:"C"},
        ]
    }
})

Vue.component('button-counter',{
    data: function (){
        return {
            count: 0
        }
    },
    template: `<button v-on:click="count++">you clicked me {{count}} times</button>`
})
new Vue({
    el: "#components-demo"
})


Vue.component('Counter',{
    data: function (){
        return {
            count: 0
        }
    },
    template: `
        <div class="counter">
            <p>{{count}}</p>
            <button v-on:click="count++">count+1</button>
            <button v-on:click="count--">count-1</button>
        </div>
    `
})

new Vue({
    el: '#count'
})

Vue.component("my-component",{
    props: ['message'],
    template: `<li>{{message}}</li>`
})

new Vue({
    el: '#example-7',
    data: {
        items: ['java','vue','java script']
    }
})

var componentA={
    template: `
        <button    
    `
}














