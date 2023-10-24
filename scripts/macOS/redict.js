var objc = JSON.parse($response.body);
    objc = {
        "subscriber": {
          "entitlements": {
            "Pro": {
              "expires_date": "2099-09-30T10:41:13Z",
              "grace_period_expires_date": null,
              "product_identifier": "dash.redict.pro.year.full",
              "purchase_date": "2023-09-23T10:41:13Z"
            }
          },
          "original_app_user_id": "$RCAnonymousID:8bbed961873a43d6a0695fd2c6d11365",
          "subscriptions": {
            "dash.redict.pro.year.full": {
              "auto_resume_date": null,
              "billing_issues_detected_at": null,
              "expires_date": "2099-09-30T10:41:13Z",
              "grace_period_expires_date": null,
              "is_sandbox": false,
              "original_purchase_date": "2023-09-23T10:41:14Z",
              "ownership_type": "PURCHASED",
              "period_type": "normal",
              "purchase_date": "2023-09-23T10:41:13Z",
              "unsubscribe_detected_at": null
            }
          }
        }
      }
$done({body : JSON.stringify(objc)});