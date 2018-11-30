function ButtonFactory(){
    AbstractFactory.call(this);
}
ButtonFactory.prototype = new AbstractFactory();
ButtonFactory.prototype.create = function(){
    var button = new Button();
    console.log('创建一个【按钮】！');
    return button;
}