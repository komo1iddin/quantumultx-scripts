var ojbk = {
  "receipt": {
    "receipt_type": "Production",
    "bundle_id": "https://t.me/py996",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1688386973000",
        "transaction_id": "300006666666666",
        "original_transaction_id": "300006666666666",
        "product_id": "https://t.me/py996",
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "1688386973000"
      }
    ],
    "application_version": "3206",
    "original_purchase_date_ms": "1688386973000",
    "original_application_version": "3206",
  },
  "environment": "Production",
  "pending_renewal_info": [
    {
      "product_id": "https://t.me/py996",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1688386973000",
      "expires_date": "9999-09-09T09:09:09Z Etc\/GMT",
      "expires_date_pst": "9999-09-09T09:09:09Z America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "540001260447637",
      "is_trial_period": "false",
      "original_transaction_id": "540001260447637",
      "product_id": "https://t.me/py996",
      "original_purchase_date_ms": "1688386974000",
      "expires_date_ms": "148204937166000"
    }
  ]
};
$done({ body: JSON.stringify(ojbk) });
