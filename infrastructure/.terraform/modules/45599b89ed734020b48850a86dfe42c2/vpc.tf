
resource "aws_vpc" "vpc" {
  cidr_block = "${var.vpc_cidr}"
  enable_dns_hostnames = "true"
  
  tags {
    Name = "${var.appName} VPC"
  }
}

resource "aws_internet_gateway" "InternetGateway" {
  vpc_id = "${aws_vpc.vpc.id}"

  tags {
    Name = "${var.appName} IG"
  }
}

