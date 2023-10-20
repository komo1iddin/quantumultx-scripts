var py996 = JSON.parse($response.body);
py996.subscriber.entitlements = {
  "pro": {
    "expires_date": "9999-09-09T09:09:09Z",
    "product_identifier": "ape.weekly.discount",
    "purchase_date": "2023-02-23T02:33:33Z"
  }
};
py996.subscriber.original_purchase_date = "2023-02-23T03:33:33Z";
py996.subscriber.subscriptions = {
  "ape.weekly.discount": {
    "expires_date": "9999-09-09T09:09:09Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(py996) });
