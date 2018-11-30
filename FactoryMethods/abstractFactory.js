function AbstractFactory(){

}
AbstractFactory.prototype.createButton = function(){                              
    var button = new AbstractButton();
    console.log('创建一个【抽象按钮】！');
    return button;
}
