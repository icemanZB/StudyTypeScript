// 自动拆分字符串：用一个字符串模板去调用一个方法，同时把模板里面的表达式当做参数传给方法
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myName = "Iceman";
var getAge = function () {
    return 18;
};
(_a = ["hello my name is ", ",I'm ", ""], _a.raw = ["hello my name is ", ",I'm ", ""], test(_a, myName, getAge()));
var _a;
//# sourceMappingURL=字符串模板.js.map