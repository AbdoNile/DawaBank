resource "aws_cognito_user_pool" "pool" {
  name = "${var.appName}-${var.environment}"
  username_attributes = ["email"]
  
}


resource "aws_cognito_user_pool_client" "client" {
  name = "${var.appName}-${var.environment}"
  callback_urls = ["https://${aws_s3_bucket.web_bucket.website_endpoint}/login-call-back"]
  user_pool_id = "${aws_cognito_user_pool.pool.id}"
  allowed_oauth_flows = ["implicit"]
  allowed_oauth_scopes = ["openid"]
}

resource "aws_cognito_identity_provider" "google" {
  user_pool_id  = "${aws_cognito_user_pool.pool.id}"
  provider_name = "Google"
  provider_type = "Google"

  provider_details {
    authorize_scopes = "profile email openid"
    client_id        = "${var.google-client-id}"
    client_secret    = "${var.google-client-secret}"
  }

  attribute_mapping {
    email    = "email"
    username = "sub"
  }
}