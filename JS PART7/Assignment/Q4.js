let length = 4;
function callback(){
    console.log(this.length); // 0 this-->window window.length = 0
}
callback();

const object = {
    length: 5,
    method(callback){
        callback();
    },

};

object.method(callback,1,2); // 0