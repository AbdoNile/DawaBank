data "template_file" "fq-name" {
  template = "$${appName}-$${environment}.$${domain}"
  vars {
    appName = "${var.appName}"
    environment = "${var.environment}"
    domain = "${var.top-level-domain}"
  }
}

resource "aws_s3_bucket" "web_bucket" {
  bucket = "${data.template_file.fq-name.rendered}"
  acl    = "public-read"
  policy = "${data.template_file.policy_template.rendered}"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}


data "template_file" "policy_template" {
  template = "${file("bucket-policy.json")}"

  vars {
    fq-name = "${data.template_file.fq-name.rendered}"
  }
}

output "bucket-name" {
  value = "${aws_s3_bucket.web_bucket.id}"
}
