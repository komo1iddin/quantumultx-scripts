let body = JSON.parse($response.body);
body.data.credits = 99999999999
body.data.totalCreditGpt4 = 99999999999
body.data.creditBard = 99999999999
body.data.totalCreditBard = 99999999999
body.data.creditGpt4 =  99999999999
body.data.totalCredit =  99999999999
body.data.isPremium = true
$done({body: JSON.stringify(body)});