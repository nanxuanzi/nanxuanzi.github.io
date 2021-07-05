//typescript 程序由以下几个部分组成
/*
    模块
    函数
    变量
    语句和表达式
    注释
*/
//基础类型
/**
 * 任意类型：any
 * 数字类型：number
 * 字符串类型：string
 * 布尔类型：boolean
 * 数组类型：{
 *     //元素后加上[]
 *     let arr: number[] = [1,2]
 *
 *     //使用数组泛型
 *     let arr: Arrary<number> = [1,2]
 *    }
 * ...
 *
 */
//Any类型
var x = 1;
console.log("Any类型：x=" + x);
//数字类型，
var num = 10086;
console.log('数字类型：num=' + num);
//字符串类型
var str = "This is string.";
console.log('字符串类型：str=' + str);
//布尔类型
var bool = false;
console.log("布尔类型：bool= " + bool);
//数组类型
var arr = [1, 2, 3];
console.log("数组类型：arr= ");
