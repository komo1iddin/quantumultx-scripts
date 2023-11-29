f('com.firecore.infuse.pro.365@app.carbonpro.vpn@carbonyearlyvip@com.ipopgame.izipfree@com.ipopgame.izipfree.promonthlyupgrade@com.fm.tubidyfm@com.fmi.ads@com.heku-it.slmb-iphone@premium_subscription_04@com.azfalt.mf@com.azfalt.mf.pro.unlim@io.soonv3.apps.seqvoia@io.soonv3.apps.seqvoia.premium.year@com.davetech.habit@HabitUpYearly@co.bazaart.app@Bazaart_Pro_Forever@ch.b-eng.tor@annually.subscription.key@com.vpnmaster.VPNOneTap@com.vpnmaster.VPNOneTap.month@com.vpn-buck.proxy@com.vpnbuck.proxy.005@com.gregacucnik.FishingPoints@yearly23@com.vpnappvpn.VPNApp@com.vpnappvpn.VPNApp.week@com.vpn-buck.proxy@com.vpnbuck.proxy.004@com.free.vpn.hotspot.secure.vpnify@vpnify_sub_12month@com.thefreevpn@com.freevpn.monthly@com.simpledesign.qrcodereader@com.simpledesign.qrcodereader.monthlypremium@com.ton.vpn@io.wizstudio.insafe.lifetime@com.lenovo.anyshare@com.lenovo.anyshare.non.consumable.lifetime@com.aeeiee.dressmeasurement@tailor_shop@net.domzilla.pdfpro@net.domzilla.pdfpro.iap.premium.annual@com.zeus.EasyCopy@com.zeus.EasyCopy.Annual@it.beatcode.clipboardpro@it.beatcode.clipboardpro.lifetime@com.alexandersergienko.TabataTimer@com.alexandersergienko.TabataTimer.OneTimePayment@net.zaycev.music.app@1month_99rub')
function f() {
	let body = JSON.parse($response.body)
	let a = arguments[0].split("@")
	for(let i = 0; i < a.length; i = i + 2) {
		if(body.receipt.bundle_id == a[i]) {
			id = a[i+1]
			break
		}
	}
	body.receipt.in_app = [{"quantity":"1","purchase_date_ms":"1694865459000","expires_date":"2099-09-09T20:20:20Z","expires_date_pst":"2099-09-09 13:20:20 America/Los_Angeles","is_in_intro_offer_period":"!1","transaction_id":"490001484578341","is_trial_period":"!1","original_transaction_id":"490001484578341","original_purchase_date_pst":"2023-09-16 04:57:40 America/Los_Angeles","product_id":id,"purchase_date":"2023-09-16 11:57:39 Etc/GMT","in_app_ownership_type":"PURCHASED","original_purchase_date_ms":"1694865460000","web_order_line_item_id":"490000688524626","expires_date_ms":"4092657620000","purchase_date_pst":"2023-09-16 04:57:39 America/Los_Angeles","original_purchase_date":"2023-09-16 11:57:40 Etc/GMT"}]
	body.latest_receipt_info = body.receipt.in_app
	$done({body: JSON.stringify(body)})
}