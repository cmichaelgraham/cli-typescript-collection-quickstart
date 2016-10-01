import * as Collections from 'typescript-collections';

export class App {
  message = 'Hello World!';

  activate() {
    var mySet = new Collections.Set<number>();
    mySet.add(123);
    mySet.add(123); // Duplicates not allowed in a set
    // The following will give error due to wrong type:
    // mySet.add("asdf"); // Can only add numbers since that is the type argument.

    var myQueue = new Collections.Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);

    console.log(myQueue.dequeue()); // prints 1
    console.log(myQueue.dequeue()); // prints 2
  }
}
