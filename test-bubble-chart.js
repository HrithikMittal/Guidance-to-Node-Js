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
        { text: "Strams", count: "170" },
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
            alert("Here is more details: " + item.text + "!!");
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
function calldetails(details) {
  switch (details.text) {
    case "Generators": {
      console.log("Generators");
    }
  }
  console.log(details);
}
