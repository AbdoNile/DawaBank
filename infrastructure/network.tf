variable  "first_az"  {}
variable  "vpc_cidr"  {}
variable  "web_subnet_cidr"  {}
variable  "backend_subnet_cidr"  {}

resource "aws_vpc" "dawa" {
  cidr_block = "${var.vpc_cidr}"
  tags {
    Name = "Dawa VPC"
  }
}

resource "aws_internet_gateway" "InternetGateway" {
  vpc_id = "${aws_vpc.dawa.id}"

  tags {
    Name = "Dawa IG"
  }
}

resource "aws_subnet" "web" {
  availability_zone = "${var.first_az}"
  vpc_id            = "${aws_vpc.dawa.id}"
  cidr_block        = "${var.web_subnet_cidr}"
  tags {
    Name = "Dawa Web Servers Subnet"
  }
}

resource "aws_route_table_association" "route-association" {
  route_table_id = "${aws_route_table.web.id}"
  subnet_id      = "${aws_subnet.web.id}"
}

resource "aws_route_table" "web" {
  vpc_id = "${aws_vpc.dawa.id}"

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = "${aws_internet_gateway.InternetGateway.id}"
  }
}

resource "aws_subnet" "backend" {
  vpc_id            = "${aws_vpc.dawa.id}"
  cidr_block        = "${var.backend_subnet_cidr}"
  availability_zone = "${var.first_az}"
  tags {
    Name = "Dawa backend Subnet"
  }
}
