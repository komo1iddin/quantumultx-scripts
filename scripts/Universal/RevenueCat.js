if(!$response.body) {
	$done()
}
else{
	let params = {
		url: "https://api.revenuecat.com/v1/product_entitlement_mapping",
		timeout: 5000,
		headers: $request.headers
	}
	delete params["headers"]["x-revenuecat-etag"]
	$httpClient.get(params, function(errormsg, response, data) {
		if(errormsg) {
			err(errormsg)
		}
		else{
			mapping(data)
		}
	})
	function mapping(data) {
		let body = JSON.parse($response.body)
		let res = JSON.parse(data)
		let e = [], done = false
		let p = Object.keys(res.product_entitlement_mapping)[0]
		for(let key in res.product_entitlement_mapping) { 
			e = e.concat(res["product_entitlement_mapping"][key]["entitlements"])
			if(key.search(/(life\.?|one\.?)time/) != -1) {
				p = key
				body.subscriber.non_subscriptions = {[p]:[{"id":"d85264d6ed","is_sandbox":!1,"purchase_date":"2023-11-16T09:46:12Z","original_purchase_date":"2023-11-16T09:46:12Z","store":"app_store","store_transaction_id":"2000000459759422"}]}
				body.subscriber.other_purchases = {[p]:{"purchase_date":"2023-11-16T09:46:12Z"}}
				done = true
			}
		}
		if(!done) {
			body.subscriber.subscriptions = {[p]:{"expires_date":"2099-09-09T20:20:20Z","period_type":"normal",}}
		}
		for(let i = 0; i < e.length; i++) {
			body["subscriber"]["entitlements"][e[i]] = {"grace_period_expires_date":null,"purchase_date":"2023-09-06T12:07:59Z","product_identifier":p,"expires_date":"2099-09-09T20:20:20Z"}
		}
		$done({body: JSON.stringify(body)})
		if(typeof $notification.post != "undefined") {
			$notification.post("Success","",p + " activated")
		}
	}
	function err(errormsg) {
		if(typeof $notification.post != "undefined") {
			$notification.post("Error","",errormsg)
		}
		$done()
	} 
}
