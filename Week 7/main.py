from random import randrange

# Task 1
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


# Task 2
## Decorator
def my_awesome_decorator(fun):
  """Adds 1 to all arguments and returns the opposite of result"""
  def wrapped(*args):
    newArgs = [x + 1 for x in args]
    return not fun(*newArgs)
  return wrapped

## Function
@my_awesome_decorator
def mod_batch(*numbers):
  """Check for parameters if they all mod of 3"""

  return all(list(num % 3 == 0 for num in numbers))


## Test Cases
print("--Task 1 Test--")
n = int(input("How many random numbers do you want? >>> "))
l = int(input("How many digits numbers do you want? >>> "))
randoms = list(random_number_generator(n, l))
print(randoms)

print("\n--Task 2 Test--")
a = int(input("Enter number 1 of 3 >>> "))
b = int(input("Enter number 2 of 3 >>> "))
c = int(input("Enter number 3 of 3 >>> "))
print(mod_batch(a,b,c),"\n")
