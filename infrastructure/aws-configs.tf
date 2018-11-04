
variable  "amazon_region"  {}
 
provider "aws" {
  region = "${var.amazon_region}"
}