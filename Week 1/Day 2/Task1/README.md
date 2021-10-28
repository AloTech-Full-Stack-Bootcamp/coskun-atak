# Week 1, Day 2, Task 1

### Question:

> I have run the readFile function to read a file, 
> but in some case the read operation is not needed so I want to cancel the operation. 
> How can I cancel the file reading operation in the continuation of the program?

### Answer:

`signal` of option in `fs.readFile()` allows aborting an in-progress reading.
It takes argument `<Abort Signal>` class which observers when the `abortController.abort()` method is called. 
This method triggers the abort signal, causing the `abortController.signal` to emit the `'abort'` event.

---

### Question:

> The readFile function reads the file as a whole and takes it to memory. 
> What alternatives can be used to make the program use less memory?

### Answer:

For reading larger files with using less memory than `readFile()`, `createReadStream()` method of FS Module can be used.

``` js
const CHUNK_SIZE = 10000000; // 10MB
const data = fs.readFileSync('./file');
for(let bytesRead = 0; bytesRead < data.length; bytesRead = bytesRead + CHUNK_SIZE) {
 // do something with data 
}
```

When using `readFile()` or `readFileSync()`, whole content of file is kept in `data` variable and it takes
at least 1 GB of RAM in this example.


``` js
const CHUNK_SIZE = 10000000; // 10MB
async function start() {
    const stream = fs.createReadStream('./file', { highWaterMark: CHUNK_SIZE });
    for await(const data of stream) {
       // do something with data 
    }
}
start();
```

The `highWaterMark` option tells Node to read only the provided number of bytes at once. 
That makes it more memory-efficient since there is a limited amount of data kept in memory in a single iteration.
`data` variable uses 90 MB of RAM in this example.