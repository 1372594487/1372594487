Js事件循环基础

宏任务：script（整体代码）、setTimeout、setInterval、setImmediate、I/O、UI rendering

微任务：promise、Object.observe、MutationObserver

任务的优先级：process.nextTick > pomise.then > setTimeout > setImmediate

```
例1：
<script>
        setTimeout(()=>{
            console.log(2);
        },0)

        new Promise(function (resolve){
            console.log(3);
            resolve();
            console.log(6);
        }).then(()=>{
            console.log(5);
        })
        console.log(8);
    </script>
```

![]()

![image-20210528182000800](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210528182000800.png)



```
例2：
<script>
        console.log('script start');
        //宏任务
        setTimeout(()=>{
            console.log("setTimeout");
        },0)
        //微任务，跟在当前宏任务屁股后面
        Promise.resolve()
        .then(()=>{
        console.log('promise1');
        })
        .then(()=>{
            console.log("promise2");
        })
        console.log("script end");
    </script>
    
```



![image-20210606000000162](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210606000000162.png)

![image-20210606000350857](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210606000350857.png)