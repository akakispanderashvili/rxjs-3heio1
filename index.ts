import {
  from,
  Observable,
  of,
  timer,
  takeUntil,
  mergeMap,
  filter,
  tap,
  scan,
  reduce,
  map,
} from 'rxjs';

// 1))
//
//
//
const people1 = [
  { name: 'John', age: 30 },
  { name: 'Tom', age: 25 },
  { name: 'Jim', age: 35 },
];
const people2 = [
  { name: 'Jill', age: 28 },
  { name: 'Jack', age: 32 },
  { name: 'Kate', age: 40 },
];

const obs$ = from([people1, people2]).pipe(
  mergeMap((people) =>
    from(people).pipe(
      filter((person) => person.name[0] === 'J'),
      reduce((totalAge, person) => totalAge + person.age, 0)
    )
  )
);

obs$.subscribe((x) => console.log(x));

// 2)))
//
//

const numbers = [1, 2, 3, 4, 5];
const stopSignal = timer(3000);

// of(...numbers)
//   .pipe(takeUntil(stopSignal))
//   .subscribe(
//     (x) => console.log(`emitted number: ${x}`),
//     (error) => console.error(error),
//     () => console.log('completed')
//   );

// 3)))
//
//

const newNumbers = [1, 2, 3, 4, 5];

const secondObs$ = from(newNumbers).pipe(
  tap((x) => console.log(`Emitting number: ${x}`)),
  scan((acc, x) => acc + x)
);

// secondObs$.subscribe((sum) => console.log(`The sum is: ${sum}`));
