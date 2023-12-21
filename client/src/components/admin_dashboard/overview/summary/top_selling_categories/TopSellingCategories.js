import React from 'react'
import {Bar} from "react-chartjs-2"
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import "./top_selling_categories.css"


Chart.register(CategoryScale)

const TopSellingCategories = () => {
  return (
    <div className='top-selling-categories'>
        <h6>TOP SELLING CATEGORIES</h6>
        <div className="chart-container">
      <Bar
        data={
            {
                labels: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug"],
                datasets: [
                    {
                        label: "clothing",
                        data: [500, 300, 501, 459, 500, 520, 502, 550],
                        backgroundColor: "orange",
                        borderRadius: 5,
                        barThickness: 5,
                    },
                    {
                        label: "watches",
                        data: [510, 320, 511, 460, 502, 520, 507, 540],
                        backgroundColor: "black",
                        borderRadius: 5,
                        barThickness: 5,
                    },
                    {
                        label: "shoes",
                        data: [510, 400, 515, 445, 509, 527, 533, 576],
                        backgroundColor: "blue",
                        borderRadius: 5,
                        barThickness: 5,
                    }
                ],
            }
        }
      />
    </div>
    </div>
  )
}

export default TopSellingCategories