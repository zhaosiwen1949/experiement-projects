function pubsub() {
  const subscribers = [];
  return {
    subscribe: function (subscriber) {
      subscribers.push(subscriber);
    },
    publish: function (publication) {
      const length = subscribers.length;
      for (let i = 0; i < length; i += 1) {
        // subscribers[i](publication);
        const tmp = subscribers[i];
        tmp(publication);
      }
    },
  };
}

var my_pubsub = pubsub();

my_pubsub.subscribe(function (publication) {
  // this.length = 0;
  console.log(this);
});

my_pubsub.subscribe(function (publication) {
  console.log(`1st ${publication}`)
});

my_pubsub.subscribe(function (publication) {
  console.log(`2nd ${publication}`)
});

my_pubsub.subscribe(function (publication) {
  console.log(`3rd ${publication}`)
});

my_pubsub.publish("hello");