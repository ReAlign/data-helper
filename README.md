# data-helper

data helper

> 复杂业务下，复杂接口对应的大量数据，取值、维护存在较大困难。
> 抽象，封装库来简化工作复杂度

* [ ] 别名
    * 适用于多个不同数据源 / 多个入口进入时，数据统一处理
* [ ] 遍历复杂对象
    * 数据处理
* [ ] 扁平化
* [ ] 序列化
* [ ] key匹配 / 数组匹配 / 结构匹配
    * 批量 取值/赋值
* [x] deepGet
    * [x] 防止对象不存在时取子元素报错
    * [x] 设置默认值，获取不到采用默认值
* [x] 批量取值
    * [x] 生成对象 或者 数组
* [ ] 重复 key 处理
    * 如果取值采用 key 匹配模式，需要考虑重复 key 情况
* [ ] deep copy
    * 防止修改引用类型的数据报错、引发不可知问题
* [ ] 容错处理


***

#### deepGet

[DEMO](https://github.com/ReAlign/data-helper/blob/master/example/demo/deep-get.js)
#### batchDeepGet

[DEMO](https://github.com/ReAlign/data-helper/blob/master/example/demo/batch-deep-get.js)
