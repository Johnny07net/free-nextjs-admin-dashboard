"use client";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/css/jsvectormap.css";
import React, { useEffect } from "react";
import "../../js/us-aea-en";

const MapOne: React.FC = () => {
  useEffect(() => {
    const mapOne = new jsVectorMap({
      selector: "#mapOne",
      map: "us_aea_en",
      zoomButtons: true,

      regionStyle: {
        initial: {
          fill: "#C8D0D8",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: "Satoshi",
          fontWeight: "semibold",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },

      labels: {
        regions: {
          render(code: string) {
            return code.split("-")[1];
          },
        },
      },
    });

    return () => {
      mapOne.destroy();
    };
  }, []);

  return (
    /**
     * This component is a styled `div` container that displays a title and a map in the application interface.
     *
     * The outermost `div` has a CSS class `col-span-12` which defines the width it occupies, `rounded-sm` that applies a small radius on its corners, `border` and `border-stroke` which styles its border, `bg-white` that sets its background color to white, and `px-7.5`, `py-6` that sets the padding on the x and y-axis.
     *
     * When the dark theme is enabled, the class `dark:border-strokedark` and `dark:bg-boxdark` are applied to change the border and background color respectively.
     *
     * Inside this `div`, it contains a `h4` element which displays the title "Region labels" and a secondary `div` that has a height specified by the class `h-90`.
     *
     * Within the secondary `div`, there's another `div` with id `mapOne` and classes `mapOne` and `map-btn`, where the map is displayed.
     */
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Region labels
      </h4>
      <div className="h-90">
        <div id="mapOne" className="mapOne map-btn"></div>
      </div>
    </div>
  );
};

export default MapOne;
