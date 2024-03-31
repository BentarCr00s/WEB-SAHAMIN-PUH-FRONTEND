const symbol = "%5EIXIC"; // Contoh simbol saham Telkom Indonesia di Bursa Efek Indonesia (BEI)

fetch(
  `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?region=ID&lang=id-ID`
)
  .then((response) => response.json())
  .then((data) => {
    const stockData = data.chart.result[0];
    const meta = stockData.meta;
    const prices = stockData.indicators.quote[0].close;

    let html = `
            <h2>${meta.symbol} - ${meta.currency}</h2>
            <p>Open: ${meta.chartPreviousClose}</p>
            <p>High: ${Math.max(...prices)}</p>
            <p>Low: ${Math.min(...prices)}</p>
            <p>Close: ${prices[prices.length - 1]}</p>
        `;

    stockInfo.innerHTML = html;
  })
  .catch((error) => {
    stockInfo.innerHTML = `<p>Error fetching data for ${symbol}</p>`;
  });
