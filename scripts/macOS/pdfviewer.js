var objc = JSON.parse($response.body);
    objc = {
        "subscriber": {
          "entitlements": {
            "sub.pro": {
              "expires_date": "2099-09-22T17:05:31Z",
              "grace_period_expires_date": null,
              "product_identifier": "com.pspdfkit.viewer.sub.pro.yearly",
              "purchase_date": "2023-09-15T17:05:31Z"
            }
          },
          "subscriptions": {
            "com.pspdfkit.viewer.sub.pro.yearly": {
              "expires_date": "2099-09-22T17:05:31Z",
              "original_purchase_date": "2023-09-15T17:05:31Z",
              "ownership_type": "PURCHASED",
              "period_type": "normal",
              "store_transaction_id": "90001718179333",
              "unsubscribe_detected_at": null
            }
          }
        }
      }
$done({body : JSON.stringify(objc)});