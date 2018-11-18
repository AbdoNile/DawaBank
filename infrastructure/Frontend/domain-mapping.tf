data "aws_route53_zone" "domain-hosted-zone" {
  name = "${var.top-level-domain}"
}

resource "aws_route53_record" "www" {
  zone_id = "${data.aws_route53_zone.domain-hosted-zone.zone_id}"
  name    = "${data.template_file.fq-name.rendered}"
  type    = "A"

  alias {
    name    = "${aws_s3_bucket.web_bucket.website_endpoint}"
    zone_id = "${aws_s3_bucket.web_bucket.hosted_zone_id}"
    evaluate_target_health = false
  }
}
