$(document).ready(function() {
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 700,
    //viewBoxSize: => use @default
    innerRadius: 700 / 6.8,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: [
        { text: "Callbacks", count: "36" },
        { text: "Promises", count: "182" },
        { text: "Streams", count: "170" },
        { text: "Pipes", count: "123" },
        { text: "Events", count: "12" },
        { text: "Module Paterns", count: "170" },
        { text: "Generators", count: "382" },
        { text: "Middleware", count: "10" },
        { text: "Async/Await", count: "170" },
        { text: "Axios", count: "170" },
        { text: "Work Thread", count: "170" },
        { text: "Others", count: "10" }
      ],
      eval: function(item) {
        return item.count;
      },
      classed: function(item) {
        return item.text.split(" ").join("");
      }
    },
    plugins: [
      {
        name: "central-click",
        options: {
          text: "(See more detail)",
          style: {
            "font-size": "12px",
            "font-style": "italic",
            "font-family": "Source Sans Pro, sans-serif",
            //"font-weight": "700",
            "text-anchor": "middle",
            fill: "white"
          },
          attr: { dy: "65px" },
          centralClick: function(item) {
            /// Design it as box model for more details
            calldetails(item);
          }
        }
      },
      {
        name: "lines",
        options: {
          format: [
            {
              // Line #0
              textField: "text",
              classed: { text: true },
              style: {
                "font-size": "12px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "14px",
                x: function(d) {
                  return d.cx;
                },
                y: function(d) {
                  return d.cy;
                }
              }
            }
          ],
          centralFormat: [
            {
              // Line #0
              style: { "font-size": "30px" },
              attr: {}
            },
            {
              // Line #1
              style: { "font-size": "25px" },
              attr: { dy: "40px" }
            }
          ]
        }
      }
    ]
  });
});

// { text: "Callbacks", count: "36" },
// { text: "Promises", count: "182" },
// { text: "Strams", count: "170" },
// { text: "Pipes", count: "123" },
// { text: "Events", count: "12" },
// { text: "Module Paterns", count: "170" },
// { text: "Generators", count: "382" },
// { text: "Middleware", count: "10" },
// { text: "Async/Await", count: "170" },
// { text: "Axios", count: "170" },
// { text: "Work Thread", count: "170" },
// { text: "Others", count: "10" }

function calldetails(details) {
  switch (details.text) {
    case "Generators": {
      document.getElementById("modal1").click();
      document.getElementById("exampleModalLongTitle").innerHTML = "Generators";
      document.getElementById("content1").innerHTML =
        "<div>Generators have become quite famous in Node.js in recent times and that probably because of what they are capable of doing.<br/> Generators are function executions that can be suspended and resumed at a later point. Generators are useful when carrying out concepts such as 'lazy execution'.This basically means that by suspending execution and resuming at will, we are able to pull values only when we need to. <br />Generators have the below 2 key methods <ol>    <li> Yield method – The yield method is called in a function to halt the execution of the function at the specific line where the yield method is called.</li><li>Next method – This method is called from the main application to resume the execution of a function which has a yield method.The execution of the function will continue till the next yield method or till the end of the method.</li></ol><img src='./img/img1.png' width='100%'/></div>";
      break;
    }
    case "Callbacks": {
      document.getElementById("modal1").click();
      document.getElementById("exampleModalLongTitle").innerHTML = "Callbacks";
      document.getElementById("content1").innerHTML =
        "<div>Callbacks are the foundation of Node.js. Callbacks give you an interface with which to say,'and when you're done doing that, do all this.' This allows you to have as many IO operations as your OS can handle happening at the same time. For example, in a web server with hundreds or thousands of pending requests with multiple blocking queries, performing the blocking queries asynchronously gives you the ability to be able to continue working and not just sit still and wait until the blocking operations come back. This is a major improvement.<br />The typical convention with asynchronous functions(which almost all of your functions should be):<img src='./img/img2.png' width=100%'></div>";
      break;
    }
    case "Promises": {
      document.getElementById("modal1").click();
      document.getElementById("exampleModalLongTitle").innerHTML = "Promises";
      document.getElementById("content1").innerHTML =
        "<div>A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers to an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of the final value, the asynchronous method returns a promise for the value at some point in the future.<br/><br/>In simple words “A promise is a word taken for some action, the other party who gave the promise might fulfill it or deny it”.In the case of fulfilling, the promise gets resolved, and in another case, it gets rejected.<br /><br/>We can create a promise in JavaScript and use it as an upcoming fact to describe few actions.Promises are kind of design patterns to remove the usage of unintuitive callbacks.<img src='./img/img3.png' width=100%'></div>";
      break;
    }
    case "Streams": {
      document.getElementById("modal1").click();
      document.getElementById("exampleModalLongTitle").innerHTML = "Streams";
      document.getElementById("content1").innerHTML =
        "<div>Streams are collections of data — just like arrays or strings. The difference is that streams might not be available all at once, and they don’t have to fit in memory. This makes streams really powerful when working with large amounts of data, or data that’s coming from an external source one chunk at a time.<br /><br />However, streams are not only about working with big data.They also give us the power of composability in our code. Just like we can compose powerful linux commands by piping other smaller Linux commands, we can do exactly the same in Node with streams.<img src='./img/img4.png' width=100%'></div>";
      break;
    }
    case "Pipes": {
      document.getElementById("modal1").click();
      document.getElementById("exampleModalLongTitle").innerHTML = "Pipes";
      document.getElementById("content1").innerHTML =
        "<div>Within Node applications, streams can be piped together using the pipe() method, which takes two arguments:<ol><li>A Required writable stream that acts as the destination for the data and An optional object used to pass in options.</li><li>A typical example of using pipes, if you want to transfer data from one file to the other.</li></ol><img src='./img/img5.png' width=100%'></div>";
      break;
    }
    case "Events": {
      document.getElementById("modal1").click();
      document.getElementById("exampleModalLongTitle").innerHTML = "Events";
      document.getElementById("content1").innerHTML =
        "<div>Events are one of the key concepts in Node.js and sometimes Node.js is referred to as an Event-driven framework.<br/><br/>Basically, an event is something that happens.For example, if a connection is established to a database, then the database connection event is triggered.Event driven programming is to create functions that will be triggered when specific events are triggered.<img src='./img/img6.png' width=100%'></div>";
      break;
    }
    case "Module Patterns": {
      document.getElementById("modal1").click();
      document.getElementById("exampleModalLongTitle").innerHTML =
        "Module Patterns";
      document.getElementById("content1").innerHTML =
        "<div>In the module pattern as in all things, JavaScript offers few prescriptions. On the client-side “modules” are creatures of the build system and our imagination; Node.js implements a filesystem-based module pattern but leaves its use and abuse largely up to userland. Considerable freedom, minimal structure.<br/><br/>The good news ? These wide - open spaces include several well - worn patterns for authoring modules that are clear, flexible, and easily scaled inside a growing application.All we have to do is put them to use.<img src='./img/img7.png' width=100%'></div>";
      break;
    }
    case "Middleware": {
      document.getElementById("modal1").click();
      document.getElementById("exampleModalLongTitle").innerHTML = "Middleware";
      document.getElementById("content1").innerHTML =
        "<div>Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.<br /><br />Middleware functions can perform the following tasks:<ol><li>Execute any code.</li><li>Make changes to the request and the response objects.</li><li>End the request - response cycle.</li><li>Call the next middleware in the stack.</li><img src='./img/img8.png' width=100%'></div>";
      break;
    }
    case "Async/Await": {
      document.getElementById("modal1").click();
      document.getElementById("exampleModalLongTitle").innerHTML =
        "Async/Await";
      document.getElementById("content1").innerHTML =
        "<div>Streams are collections of data — just like arrays or strings. The difference is that streams might not be available all at once, and they don’t have to fit in memory. This makes streams really powerful when working with large amounts of data, or data that’s coming from an external source one chunk at a time.<br /><br />However, streams are not only about working with big data.They also give us the power of composability in our code. Just like we can compose powerful linux commands by piping other smaller Linux commands, we can do exactly the same in Node with streams.<img src='./img/img4.png' width=100%'></div>";
      break;
    }
    case "Axios": {
      document.getElementById("modal1").click();
      document.getElementById("exampleModalLongTitle").innerHTML = "Axios";
      document.getElementById("content1").innerHTML =
        "<div>Streams are collections of data — just like arrays or strings. The difference is that streams might not be available all at once, and they don’t have to fit in memory. This makes streams really powerful when working with large amounts of data, or data that’s coming from an external source one chunk at a time.<br /><br />However, streams are not only about working with big data.They also give us the power of composability in our code. Just like we can compose powerful linux commands by piping other smaller Linux commands, we can do exactly the same in Node with streams.<img src='./img/img4.png' width=100%'></div>";
      break;
    }
    case "Work Thread": {
      document.getElementById("modal1").click();
      document.getElementById("exampleModalLongTitle").innerHTML =
        "Work Thread";
      document.getElementById("content1").innerHTML =
        "<div>Streams are collections of data — just like arrays or strings. The difference is that streams might not be available all at once, and they don’t have to fit in memory. This makes streams really powerful when working with large amounts of data, or data that’s coming from an external source one chunk at a time.<br /><br />However, streams are not only about working with big data.They also give us the power of composability in our code. Just like we can compose powerful linux commands by piping other smaller Linux commands, we can do exactly the same in Node with streams.<img src='./img/img4.png' width=100%'></div>";
      break;
    }
    case "Others": {
      document.getElementById("modal1").click();
      document.getElementById("exampleModalLongTitle").innerHTML = "Others";
      document.getElementById("content1").innerHTML =
        "<div>Streams are collections of data — just like arrays or strings. The difference is that streams might not be available all at once, and they don’t have to fit in memory. This makes streams really powerful when working with large amounts of data, or data that’s coming from an external source one chunk at a time.<br /><br />However, streams are not only about working with big data.They also give us the power of composability in our code. Just like we can compose powerful linux commands by piping other smaller Linux commands, we can do exactly the same in Node with streams.<img src='./img/img4.png' width=100%'></div>";
      break;
    }
  }
  console.log(details);
}
