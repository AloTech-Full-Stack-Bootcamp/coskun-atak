# Week 1, Day 1

## Task 1
> Write a function in REPL for calculating area of a cirlce.

``` js
$ node

> function getCircleArea (radius) {
... let area = Math.PI * (radius ** 2);
... console.log(area);
... }
undefined

> getCircleArea(5);
78.53981633974483
undefined
```

***

## Task 2

> What is deadlock and when it happens?

Deadlock is a state in which each member of a group waits for another member, including itself, to take action.

Deadlock occurs when a process or thread enters a waiting state because a requested system resource is held by another waiting process, which in turn is waiting for another resource held by another waiting process. If a process is unable to change its state indefinitely because the resources requested by it are being used by another waiting process, then the system is said to be in a deadlock.