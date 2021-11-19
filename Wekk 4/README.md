# Week 4, Task 1


## Case 1
```
const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.printSeriesReport();
```
### Output:

<img src="1.png">

***
## Case 2
```
const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.finishSerie();
mySeriesTracker.printSeriesReport();
```
### Output:

<img src="1.png">

***
## Case 3
```
const mySeriesTracker = new SeriesTracker(series);
const newSerie = {
  id: "9",
  name: "Lost",
  genre: "Adventure",
  directorId: "4"
};
mySeriesTracker.add(newSerie);
mySeriesTracker.printSeriesReport();
```

### Output:

<img src="3.png">

***