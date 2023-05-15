const client = require('../config/dbConnect')
const asyncHandler = require('express-async-handler')
const axios = require('axios')

const fetchStore = asyncHandler(async(req,res)=>{

    // const resourcedata = await axios.get("https://api.wazirx.com/api/v2/tickers")
    // function mapToArray(obj) {
    //     return Object.entries(obj).map(([key, value]) => {
    //       if (typeof value === 'object') {
    //         return { key, children: mapToArray(value) };
    //       } else {
    //         return { key, value };
    //       }
    //     });
    //   }
    //   const resource = mapToArray(resourcedata)
    //   console.log(resource)
    fetch('https://api.wazirx.com/api/v2/tickers')
  .then(response => response.json())
  .then(data => {
    // Sort the tickers based on the highest volume
    const sortedTickers = Object.values(data).sort((a, b) => b.volume - a.volume);
    
    // Fetch the top 10 tickers
    const top10Tickers = sortedTickers.slice(0, 10);
    
    // Log the top 10 tickers
    console.log(top10Tickers[2].base_unit);
  })
  .catch(error => {
    console.error('Error retrieving tickers:', error);
  });


    client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query("SELECT * FROM apidata",(err,result)=>{
            if(err){
                        return console.error('error running query',err)
                }
            res.json(result.rows)
            client.end();
        })
    })
})


module.exports = fetchStore