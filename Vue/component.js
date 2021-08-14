Vue.component("child",{
    props: "sd",
    template : `
        <div>
        <button @click = "add">+1</button>
        <button @click = "minus" :disabled = "number <= 0">-1</button>
        <button v-on:click="add10">+10</button>
        <button v-on:click="decrease10" :disabled = 'number <=0'>-10</button>
    </div>
    `,
    data(){
        return {
            number: 0
        }
    },
    methods: {
        add(){
            this.number++;
            this.$emit('fa-add',this.number)
        },
        minus(){
            this.number--;
            this.$emit('fa-minus',this.number)
        },
        add10(){
            this.number=this.number+10;
            this.$emit('fa-add10',this.number)
        },
        decrease10(){
            this.number=this.number-10;
            this.$emit('fa-decrease10',this.number)
        }
    }
})

new Vue({
    el: '#app',
    data: {
        num: 0
    },
    methods: {
        change(number){
            this.num = number
        }
    }
})