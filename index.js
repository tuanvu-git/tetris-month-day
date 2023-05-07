const fs = require("fs");
const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
const mappingMonth = (month) => {
    month = month - 1;
    const first = Math.floor(month / 6);
    const last = month - first * 6;
    return '' + first + last;
}

const mappingDay = (day) => {
    day = day - 1;
    const first = Math.floor(day / 7);
    const last = day - first * 7;
    return '' + (first + 2) + last;
}


app.get('/find', async (req, res) => {
    const month = mappingMonth(req.query.month);
    const day = mappingDay(req.query.day);
    const result = await execute(month, day);
    res.send({ data: result });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

async function execute(month, day) {
    return new Promise(resolve => {
        const fileName = 'all_solution.json';
        fs.readFile("./" + fileName, "utf8", (err, jsonString) => {
            if (err) {
                console.log("Error reading file from disk:", err);
                return;
            }
            try {
                let allArr = [];
                allArr = JSON.parse(jsonString);
                const finalArr = allArr.filter(data => {
                    return data.completedBoard[month[0]][month[1]] === 0 && data.completedBoard[day[0]][day[1]] === 0;
                });
                resolve(finalArr)
                console.log(finalArr);
            } catch (err) {
                resolve([]);
                console.log("Error parsing JSON string:", err);
            }
        });
    })

}


// 61172 results