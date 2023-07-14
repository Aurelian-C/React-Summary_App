# Set an element attribute/prop that depends on it’s children element props via `children.props`

You can set an element attribute or prop that depends on it's children element props via `children.props`.

![props_children1](../../img/props_children1.jpg)

Remember that `children` is a object that contain some properties that you can use in your app. The most used property is `children.props`.

![props_children2](../../img/props_children2.jpg)

![props_children3](../../img/props_children3.jpg)

> **IMPORTANT**: You need to be careful with this pattern if you pass to a parent component more than one children. If you pass more than one children, the `children` prop will hold an array will all the children's props objects.

## References

1. [The Ultimate React Course: React, Redux & More - Jonas Schmedtmann](https://www.udemy.com/course/the-ultimate-react-course/)
