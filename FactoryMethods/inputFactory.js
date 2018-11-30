
function InputFactory(){

}
InputFactory.prototype = new AbstractFactory();
InputFactory.prototype.create = function(){
    var input = new Input();
    console.log('创建一个【输入框】！');
    return input;
}