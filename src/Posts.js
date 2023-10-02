import { createDurable } from 'itty-durable'

export class Posts extends createDurable({ autoReturn: true }) {
  constructor(state, env) {
    super(state, env)

    console.log("We got this")

    // anything defined here is only used for initialization (if not loaded from storage)
    this.counter = 0
  }

  // Because this function does not return anything, it will return the entire contents
  // Example: { counter: 1 }
  increment() {
    console.log("increment")
    this.counter++
  }

  cool() {
    console.log("cool")
    return this.counter++
  }

  // Any explicit return will honored, despite the autoReturn flag.
  // Note that any serializable params can passed through from the Worker without issue.
  add(a, b) {
    return a + b
  }
}