var app = new Vue({
    el: "#container",
    data: {
        newTask:"",
        tasks: [
            {
                text: "Fare la spesa",
                done: true
            },
            {
                text: "Fare il bucato",
                done: false
            },
            {
                text: "Comprare il latte",
                done: true
            },
            {
                text: "Fare il letto",
                done: false
            }

        ]
    },

    methods: {
        newTaskPush(){
            if(this.newTask !== "" && this.newTask !== ' '){
                this.tasks.push({
                    text: this.newTask,
                    done: false
                });
                console.log(this.newTask);
                this.newTask = "";
            }
        }
    }
});