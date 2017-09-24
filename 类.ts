class Person {

    // constructor(public name:string){
    // 加了 public 和没加 public 是不同的。
    // 加了 public 相当于声明了 name，外部的 public name 就可以不写
    // }

    // 构造函数：只有类在实例化的时候调用，只调用一次
    // name:string 是没有声明 name 属性
    constructor(name: string) {
        this.name = name;
        console.log(name);
    }

    // 访问控制符：能不能在类的外部被访问到
    // 默认是 public、private 只有在类的内部才能访问到、protected 收到保护(在类的内部和子类中能访问到)
    public name;

    public eat() {
        console.log('I\'m eating');
    }
}

// extends 继承
class Employee extends Person {

    constructor(name: string, public code: string) {

        // 子类的构造函数必须调用父类的构造函数
        // 调用父类的构造函数用 super
        super(name);

        this.code = code;

    }

    work() {
        // 调用父类的方法
        super.eat();
        this.doWork();
    }

    private doWork() {
        console.log('I\'m working');
    }
}

var p1 = new Person('batname');
p1.eat();

var p2 = new Person('superman');
p2.eat();


var e1 = new Employee('Iceman', 'AZ6224');
e1.work();




