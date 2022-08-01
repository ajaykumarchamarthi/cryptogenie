import Up from "../assets/Up.svg";
import Correct from "../assets/Correct.svg";

import Down from "../assets/Down.svg";
import Missed from "../assets/Missed.svg";

import Ranging from "../assets/Ranging.svg";
import Uncertain from "../assets/Uncertain.svg";

import Noaction from "../assets/Noaction.svg";

const predictedStats = [
  {
    title: "Correct Prediction",
    val: 302,
    max: 616,
  },
  {
    title: "Accuracy",
    val: 176,
  },
  {
    title: "F1 Score",
    val: 183,
  },
  {
    title: "Recall",
    val: 196,
  },
  {
    title: "Precision",
    val: 145,
  },
  {
    title: "Prediction Capacity",
    val: 160,
  },
  {
    title: "True Positives",
    val: 302,
  },
  {
    title: "False Positives",
    val: 302,
  },
  {
    title: "True Negative",
    val: 302,
  },
  {
    title: "False Negative",
    val: 302,
  },
  {
    title: "Tradable Capacity",
    val: 162,
  },
  {
    title: "Highest High 14",
    val: 23425.0,
  },
  {
    title: "Lowest Low 14",
    val: 22939.57,
  },
];

const predictionData = [
  {
    time: "06.00 AM - 06.30 AM",
    predictedImg: Up,
    predictedText: "Up",
    rate: 36591.63,
    predictedResultImg: Correct,
    predictedResultText: "Correct",
  },
  {
    time: "06.30 AM - 07.00 AM",
    predictedImg: Up,
    predictedText: "Up",
    rate: 36591.63,
    predictedResultImg: Correct,
    predictedResultText: "Correct",
  },
  {
    time: "07.00 AM - 07.30 AM",
    predictedImg: Down,
    predictedText: "Down",
    rate: 36591.63,
    predictedResultImg: Correct,
    predictedResultText: "Correct",
  },
  {
    time: "07.30 AM - 08.00 AM",
    predictedImg: Up,
    predictedText: "Up",
    rate: 36591.63,
    predictedResultImg: Missed,
    predictedResultText: "Missed",
  },
  {
    time: "08.30 Am - 09.00 AM",
    predictedImg: Uncertain,
    predictedText: "Uncertain",
    rate: 36591.63,
    predictedResultImg: Noaction,
    predictedResultText: "No Action",
  },
  {
    time: "09.00 AM - 09.30 AM",
    predictedImg: Down,
    predictedText: "Down",
    rate: 36591.63,
    predictedResultImg: Correct,
    predictedResultText: "Correct",
  },
  {
    time: "09.30 AM - 10.00 AM",
    predictedImg: Ranging,
    predictedText: "Ranging",
    rate: 36591.63,
    predictedResultImg: Noaction,
    predictedResultText: "No Action",
  },
];

export default predictionData;
