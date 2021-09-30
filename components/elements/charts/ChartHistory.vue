<template>
  <div class="wrapper">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import axios from "axios";
import moment from "moment-timezone";

export default {
  props: {
    chartData: Array
  },
  computed: {
    chartOptions: function() {
      return {
        time: {
          // TODO: Highcharts.setOptions() generates errors atm
          // make it work
          /**
           * Use moment-timezone.js to return the timezone offset for individual
           * timestamps, used in the X axis labels and the tooltip header.
           */
          getTimezoneOffset: function(timestamp) {
            var zone = "Europe/Oslo",
              timezoneOffset = -moment.tz(timestamp, zone).utcOffset();

            return timezoneOffset;
          }
        },
        chart: {
          zoomType: "x",
          style: {
            fontFamily: "NeutrifStudio"
          }
        },
        title: {
          text: ""
        },

        legend: {
          enabled: false
        },

        subtitle: {
          // text: options.subtitle
        },

        yAxis: {
          title: {
            text: ""
          },
          labels: {
            formatter: function() {
              return `€ ${this.value}`;
            }
          },
          gridLineDashStyle: "ShortDot"
        },

        xAxis: {
          type: "datetime"
          // tickInterval: 86400000,
          // labels: {
          //   formatter: function() {
          //     return Highcharts.dateFormat("%Y %e %b", this.value);
          //   }
          // },
        },

        credits: {
          enabled: false
        },

        plotOptions: {
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, "rgba(68, 190, 204, 0.2)"],
                [1, "rgba(255, 255, 255, 0.1)"]
              ]
            },
            marker: {
              enabled: false,
              radius: 10,
              fillColor: "#56E0EF"
            },
            lineWidth: 2,
            lineColor: "#44BECC",
            states: {
              hover: {
                lineWidth: 2
              }
            },
            threshold: null
          }
        },
        series: [
          {
            type: "area",
            data: this.$props.chartData
          }
        ],

        tooltip: {
          useHTML: true,
          borderColor: "none",
          backgroundColor: "white",
          formatter: function() {
            Highcharts.setOptions({
              time: {
                getTimezoneOffset: function(timestamp) {
                  var zone = "Europe/Oslo",
                    timezoneOffset = -moment.tz(timestamp, zone).utcOffset();

                  return timezoneOffset;
                }
              }
            });
            const yVal =
              '<span style="font-size:25px; font-weight:700">' +
              "&#8364;&nbsp;" +
              this.y +
              "</span>";
            const xVal =
              '<span style="font-size:10px; font-weight:100; color: #999">' +
              Highcharts.dateFormat("%d/%m/%Y<br>%H:%M", this.x) +
              // this.x +  '{value:}' +
              "</span>";
            return (
              '<span style="display: flex; align-items: center;">' +
              yVal +
              "&nbsp;" +
              xVal +
              "</span>"
            );
          }
        }
      };
    }
  },
  mounted() {},
  methods: {
    updateChart() {
      // this.chart.series[0].setData(this.chartData);
      console.log(this.chart);
    }
  }
};
</script>

<style>
.wrapper {
  width: 100%;
}
</style>
