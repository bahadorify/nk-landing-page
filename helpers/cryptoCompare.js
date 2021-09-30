// helper functions for CryptoCompare API
// https://www.cryptocompare.com/

import axios from "axios";

/**
 * Convert response data from CryptoCompare API
 * to data consumable by HighCharts
 * @param {Object} rangeObj = {range, endpoint, points}
 */
export async function prepareHighChartsData(rangeObj) {
  const { data: dataHist } = await axios.get(rangeObj.endpoint);
  const { Data } = dataHist.Data;
  // get the desired number of points from the response data
  return Data.slice(Data.length - rangeObj.points).map(d => [
    d.time * 1000,
    d.high
  ]);
}
