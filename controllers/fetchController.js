const client = require('../config/dbConnect')
const asyncHandler = require('express-async-handler')
const axios = require('axios');

const fetchStore = asyncHandler(async(req,res)=>{

  axios.get('https://api.wazirx.com/api/v2/tickers')
    .then(response => {
      const data = response.data;
      const sortedTickers = Object.values(data).sort((a, b) => b.volume - a.volume);
      const top10Tickers = sortedTickers.slice(0, 10);
      // console.log(top10Tickers);
      //UPDATE apidata SET last = '90' where _id = 1 name	last	buy	sell	volume	baseunit

      res.status(200).json(top10Tickers)

      client.connect((err)=>{
        if(err){
          return(err,"unable to connect to postgres database")
        }
        client.query(`UPDATE apidata SET name = '${top10Tickers[0].name}' ,last = '${top10Tickers[0].last}',buy = '${top10Tickers[0].buy}',sell = '${top10Tickers[0].sell}',volume = '${top10Tickers[0].volume}',baseunit = '${top10Tickers[0].base_unit}' where _id = 1;UPDATE apidata SET name = '${top10Tickers[1].name}' ,last = '${top10Tickers[1].last}',buy = '${top10Tickers[1].buy}',sell = '${top10Tickers[1].sell}',volume = '${top10Tickers[1].volume}',baseunit = '${top10Tickers[1].base_unit}' where _id = 2;UPDATE apidata SET name = '${top10Tickers[2].name}' ,last = '${top10Tickers[2].last}',buy = '${top10Tickers[2].buy}',sell = '${top10Tickers[2].sell}',volume = '${top10Tickers[2].volume}',baseunit = '${top10Tickers[2].base_unit}' where _id = 3;UPDATE apidata SET name = '${top10Tickers[3].name}' ,last = '${top10Tickers[3].last}',buy = '${top10Tickers[3].buy}',sell = '${top10Tickers[3].sell}',volume = '${top10Tickers[3].volume}',baseunit = '${top10Tickers[3].base_unit}' where _id = 4;UPDATE apidata SET name = '${top10Tickers[4].name}' ,last = '${top10Tickers[4].last}',buy = '${top10Tickers[4].buy}',sell = '${top10Tickers[4].sell}',volume = '${top10Tickers[4].volume}',baseunit = '${top10Tickers[4].base_unit}' where _id = 5;UPDATE apidata SET name = '${top10Tickers[5].name}' ,last = '${top10Tickers[5].last}',buy = '${top10Tickers[5].buy}',sell = '${top10Tickers[5].sell}',volume = '${top10Tickers[5].volume}',baseunit = '${top10Tickers[5].base_unit}' where _id = 6;UPDATE apidata SET name = '${top10Tickers[6].name}' ,last = '${top10Tickers[6].last}',buy = '${top10Tickers[6].buy}',sell = '${top10Tickers[6].sell}',volume = '${top10Tickers[6].volume}',baseunit = '${top10Tickers[6].base_unit}' where _id = 7;UPDATE apidata SET name = '${top10Tickers[7].name}' ,last = '${top10Tickers[7].last}',buy = '${top10Tickers[7].buy}',sell = '${top10Tickers[7].sell}',volume = '${top10Tickers[7].volume}',baseunit = '${top10Tickers[7].base_unit}' where _id = 8;UPDATE apidata SET name = '${top10Tickers[8].name}' ,last = '${top10Tickers[8].last}',buy = '${top10Tickers[8].buy}',sell = '${top10Tickers[8].sell}',volume = '${top10Tickers[8].volume}',baseunit = '${top10Tickers[8].base_unit}' where _id = 9;UPDATE apidata SET name = '${top10Tickers[9].name}' ,last = '${top10Tickers[9].last}',buy = '${top10Tickers[9].buy}',sell = '${top10Tickers[9].sell}',volume = '${top10Tickers[9].volume}',baseunit = '${top10Tickers[9].base_unit}' where _id = 10;`,(err,rec)=>{
          if(err){
            return err,"unable to execute query"
          }
          client.end()
        })
      })
      
    })
    .catch(error => {
      console.error('Error retrieving tickers:', error);
    });
    
})


module.exports = fetchStore