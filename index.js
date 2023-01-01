import argWaiter from "arg-waiter";
import map from "@anywhichway/map";

const all = argWaiter( (generator,what="values") => {
    return map(generator,(item) => item,what)
});

export {all, all as default};