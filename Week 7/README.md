# Week 7, Task 1

## Task 1

> Write a function that generates 'n' random numbers with 'l' digits, with no duplicates.

``` python
def random_number_generator(n, l):
  """Generates 'n' random numbers with 'l' digits, with no duplicates."""

  if n < (10**l):
    numbers = []
    while len(numbers) < n:
      number = randrange((10 ** (l - 1)), (10 ** (l)))
      if number not in numbers:
        numbers.append(number)
        yield number
  else: 
    raise Exception(f"You can't generate {n} different numbers with {l} digits.")
```

## Task 2

> Write a decorator that adds 1 to all arguments and returns the opposite of result.
> Write a function that checks all arguments if they are divisible by 3 and use the decorator with it.

``` python
def my_awesome_decorator(fun):
  """Adds 1 to all arguments and returns the opposite of result"""
  def wrapped(*args):
    newArgs = [x + 1 for x in args]
    return not fun(*newArgs)
  return wrapped
```

``` python
@my_awesome_decorator
def mod_batch(*numbers):
  """Check for parameters if they all mod of 3"""

  return all(list(num % 3 == 0 for num in numbers))
```

# Tests

- Download the project
- Run main.py