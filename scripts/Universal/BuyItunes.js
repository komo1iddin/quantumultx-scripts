f('com.free.vpn.hotspot.secure.vpnify@vpnify_sub_12month@com.firecore.infuse@com.firecore.infuse.pro.365@net.shinyfrog.bear@net.shinyfrog.bear.pro_yearly_subscription@com.macpaw.CleanMyMac-mas@cmmx.subscription.1year.trial.1week@in.muditbhargava.LookUp@com.squircle.lookup.plus.annual@com.jumsoft.ToolboxforPages@com.jumsoft.ToolboxforPages.Yearly@com.aichatbotgpt4.neural@ACBM@com.skylum.luminarneomas@LNEO_ANN_PRO_SUB')
function f() {
	let body = JSON.parse($response.body)
	let a = arguments[0].split("@")
	for(i=0;i<a.length;i=i+2) {
		if(body.receipt.bundle_id == a[i]) {
			id = a[i+1]
		}
	}
	body.receipt.in_app = [
      {
        "quantity": "1",
        "purchase_date_ms": "1694865459000",
        "expires_date": "2099-09-09T20:20:20Z",
        "expires_date_pst": "2099-09-09 13:20:20 America/Los_Angeles",
        "is_in_intro_offer_period": "false",
        "transaction_id": "490001484578341",
        "is_trial_period": "false",
        "original_transaction_id": "490001484578341",
        "original_purchase_date_pst": "2023-09-16 04:57:40 America/Los_Angeles",
        "product_id": id,
        "purchase_date": "2023-09-16 11:57:39 Etc/GMT",
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "1694865460000",
        "web_order_line_item_id": "490000688524626",
        "expires_date_ms": "4092657620000",
        "purchase_date_pst": "2023-09-16 04:57:39 America/Los_Angeles",
        "original_purchase_date": "2023-09-16 11:57:40 Etc/GMT"
      }
    ]
	body.latest_receipt_info = body.receipt.in_app
	$done({body: JSON.stringify(body)})
}