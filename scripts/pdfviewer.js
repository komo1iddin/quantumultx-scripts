var objc = JSON.parse($response.body);
    objc = {
  "request_date_ms" : 1697562127926,
  "request_date" : "2023-10-17T17:02:07Z",
  "subscriber" : {
    "non_subscriptions" : {},
    "first_seen" : "2023-05-03T10:24:10Z",
    "original_application_version" : "5.2.0",
    "other_purchases": {},
    "management_url": null,
    "subscriptions": {
      "com.pspdfkit.viewer.sub.pro.yearly": {
        "original_purchase_date": "2023-09-15T17:05:31Z",
        "expires_date": "2099-09-22T17:05:31Z",
        "refunded_at": null,
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "purchase_date": "2023-09-15T17:05:31Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "sub.pro": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-09-15T17:05:31Z",
        "product_identifier": "com.pspdfkit.viewer.sub.pro.yearly",
        "expires_date": "2099-09-22T17:05:31Z"
      }
    },
    "original_purchase_date" : "2021-04-01T11:42:16Z",
    "original_app_user_id" : "$RCAnonymousID:c25dee8ee2054ed994a29e8c18c74dee",
    "last_seen" : "2023-10-17T16:57:13Z"
  }
}
$done({body : JSON.stringify(objc)});