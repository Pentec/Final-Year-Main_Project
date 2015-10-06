/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
*/

/**
 * This file create a theme file for the dashboard. The cosmetics for the
 * different charts are defined here.
 *
 * More information on theming can be found at
 * http://docs.fusioncharts.com/tutorial-configuring-your-chart-theme-manager.html
 */
FusionCharts.register("theme", {
    name: "management-3d",
    theme: {
        base: {
            chart: {
                formatNumberScale: "1",
                sFormatNumberScale: "1",
                captionFontSize: "14",
                subcaptionFontSize: "12",
                baseFontColor: "#656565",
                subcaptionFontBold: "0",
                captionPadding: "10",
                showBorder: "0",
                showShadow: "0",
                canvasBgColor: "#DDDDDD",
                canvasBaseColor: "#DDDDDD",
                legendBgColor: "#f9f9f9",
                plotBackgroundColor: "#111111",
                legendShadow: "1",
                legendBorderAlpha: "0",
                canvasBgAlpha: "0"
            }
        },
        bar3d: {
            chart: {
                paletteColors: "#A6CDEB",
                showPercentValues: "0",
                showPercentInTooltip: "0",
                showValues: "0"
            }
        },
        column3d: {
            chart: {
                paletteColors: "#A6CDEB",
                showValues: "0"
            }
        },
        mscolumn3dlinedy: {
            chart: {
              showPercentInTooltip: "0",
              showPercentValues: "0",
              showValues: "0",
              showHoverEffect: "1",
              anchorHoverRadius: "5"
          }
        },
        line: {
            chart: {
                showValues: "0"
            }
        },
        pie3d: {
            chart: {
                showPercentValues: "1"
            }
        },
        stackedcolumn3d: {
            chart: {
                stack100Percent: "1",
                showPercentValues: "0",
                showValues: "0"
            }
        }
    }
});
