//原理：dom.getBoundingClientRect().top;当scrollTop（滚动条距顶部的高度）与_h(可见区域的高度)之和大于或等于scrollTop与_oh（相对于视口的高度）高时，将img的路径写上。需要在数据中设置img的:tSrc属性来保存图片路径
export default () => {
    window.onload = function () {
        let lazyBox = document.getElementsByClassName('lazy');
        let lazyArr = [];
        //
        for (let i = 0; i < lazyBox.length; i++) {
            let tempArr = lazyBox[i].getElementsByTagName('img');
            for (let j = 0; j < tempArr.length; j++) {
                lazyArr.push(tempArr[j])
            }

        }
        let len = lazyArr.length;
        //
        window.addEventListener('scroll', onbound(load, true, 50), false);

        function load() {
            //滚动条距离顶部的高度
            let scrollTop = window.scrollY;
            //可见区域的高度
            let _h = window.innerHeight;
            //页面实际高度
            let totalH = document.body.scrollHeight;
        }

        if (len > 0) {
            for (let index = 0; index < lazyArr.length; index++) {
                const img = lazyArr[index];
                //相对视口的高度
                let _oh = img.getBoundingClientRect().top;
                let tSrc = img.getAttribute('tSrc');
                if (scrollTop + _h >= scrollTop + _oh && tSrc) {
                    img.setAttribute('src', tSrc);
                    img.setAttribute('tSrc', '');
                    len--;
                }

            }
        }

        //方式2 使用 IntersectionObserver构造函数
        // function query(selector) {
        //     let lazyBox = document.getElementsByClassName(selector);
        //     let lazyArr = [];
        //     for (let i = 0; i < lazyBox.length; i++) {
        //         let tempArr = lazyBox[i].getElementsByTagName('img');
        //         for (let j = 0; j < tempArr.length; j++) {
        //             lazyArr.push(tempArr[j])
        //         }

        //     }
        // }

        // let observer = newIntersectionObserver(
        //     (entries) => {
        //         entries.forEach(entry => {
        //             if (entry.intersectionRatio > 0) {
        //                 entry.target.src = entry.target.attributes[0].value;
        //             }
        //         });
        //     }
        // );
        // query('lazy').forEach(function (item) {
        //     observer.observe(item)
        // })





        //防抖
        function onbound(fn, trigger, timer) {
            console.log('onbound');
            let t = null;
            return () => {
                if (t) clearTimeout(t);
                if (trigger) {
                    let loadImdia = !t;
                    if (loadImdia) {
                        fn.apply(this, arguments);
                    }
                    t = setTimeout(() => {
                        clearTimeout(t);
                        t = null;
                    }, timer)
                } else {
                    t = setTimeout(() => {
                        fn.apply(this, arguments);
                    }, timer)
                }
            }
        }
        // 节流
        function throttle(fn, delay) {
            fn.apply(this, arguments)
            let begin = 0;
            return () => {
                let cur = new Date().getTime();
                if (cur - begin >= delay) {
                    fn.apply(this, arguments)
                    begin = cur;
                }
            }
        }

    }
}