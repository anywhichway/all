# all
Collects all values for any iterable, promised iterable, or item that can be converted into an iterable as an array

# Usage

```javascript
await all(item,what="values")
```
Item could be a generator, async generator, Set, etc.

# How It Works

1. awaits `item` so that if it is a Promise, it resolves
2. calls @anywhichway/map to collect items

See https://www.npmjs.com/package/@anywhichway/map for usage of `what`.

# Release History (Reverse Chronological Order)

2023-01-04 v1.0.1 Updated documentation.

2023-01-04 v1.0.0 Updated to use @anywhichway/map v1.0.0 which has 95% test coverage.

2023-01-01 v0.0.1 Initial public release
  
