http://www.cnblogs.com/handsomer/p/6815852.html

https://code.visualstudio.com/Docs/languages/typescript

ctrl+shift+B 运行构建任务

tsconfig.json文件各项说明如下：

"compilerOptions"——编译器选项；
"target"——编译目标，如这里编译为es5代码；
"module"——处理独立文件时的模块加载方式；
"sourceMap"——是否创建map文件以帮助调试；
"exclude"——编译器会编译TypeScript文件（.ts或.tsx），通过排除设置里的TypeScript文件不会被编译。


TypeScript 现在已经可以通过 npm install @types/库名 来安装类型定义文件了，这样可以把ts项目所需要的定义文件描述到npm包里，维护起来更加方便。

github.com/DefinitelyTyped/DefinitelyTyped/tree/master/jquery
github.com/typings/typings