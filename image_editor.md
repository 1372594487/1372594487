![image-20210521090049649](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210521090049649.png)

前置学习


学习通过nvm配置node版本，此处要求v10.18.1;
学习git commit message规范，规范每次提交；



流程说明


进入系统时，从接口获取数据，获取失败则提供初始数据，进入编辑页
在离开时（关闭界面前）提交数据



功能要求：


使用接口进行数据存储和获取，自定义数据结构来存储配置数据，可以通过删除根目录的mock.json来清空数据；
支持旋转、翻转；
支持缩放查看原图，支持手动重设宽高；
裁剪区域支持拖动拉伸，支持键盘微调位置；
保存图片到本地时，支持设定文件格式和压缩率；
历史操作支持redo、undo；
离开前保存当前操作状态，支持二次编辑；
支持常见的滤镜（参考css filter，自由发挥）；



注意：


旋转/翻转/缩放时，裁剪框也需要对应旋转/翻转/缩放；
裁剪区域需要做边缘检测，不能超出图片；
缩放条件下的拉伸、拖动，鼠标要跟拖拽点同步；
移动、拖拽只能产生一个历史操作；



请合理拆分代码，体现模块化的思考