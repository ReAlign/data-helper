# data-helper

> 复杂业务下，复杂接口对应的大量数据，取值、维护存在较大困难。
> 抽象，封装库来简化工作复杂度

* [x] 别名（批量获取中使用）
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
    * [ ] 目前是扁平化的，后续考虑 `key/key` 层级分割
* [ ] 重复 key 处理
    * 如果取值采用 key 匹配模式，需要考虑重复 key 情况
* [x] deep copy
    * 防止修改引用类型的数据报错、引发不可知问题
* [x] 容错处理

### 在处理复杂数据的时候，有什么痛点？

1. 路径是否存在判断
    * 获取 a.b.c，但是没有 a.b，导致报错
2. 默认值
    * 获取 a.b.c，c 不存在时，赋默认值
3. 引用数据类型 莫名其妙被改变（deepClone）问题
    * 在需要改变数据的场景，直接全部采用 deepClone
4. 别名
    * 调用公共接口，所需数据从多个接口获取，key 不统一，需要重命名

***

#### deepGet

[DEMO](https://github.com/ReAlign/data-helper/blob/master/example/demo/deep-get.js)

#### batchDeepGet

[DEMO](https://github.com/ReAlign/data-helper/blob/master/example/demo/batch-deep-get.js)
